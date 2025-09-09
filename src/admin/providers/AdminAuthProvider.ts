import {AdminAuthRequest, AdminRequest, IAuth2FaField, IAuth2FaProvider} from 'admin-panel-builder'
import {USERS_ROUTE_PATHS} from '@common/apiRoutePaths/usersRoutePaths'
import {AdminServerApiUrlBuilder} from '@admin-helpers/AdminServerApiUrlBuilder'


const AUTH_API_URL = 'https://auth.sm.vin'

type LoginResponse = {
    need_2fa_auth: boolean
    need_code_from_email: boolean
    need_code_from_sms: boolean
    token_for_2fa_auth: string
    access_token: string
    expires_in: number
    refresh_token: string
}

class SmsAuthField implements IAuth2FaField<LoginResponse> {
    
    public readonly name = 'Код з смс'
    public readonly key = 'code_from_sms'
    private readonly AUTH_API_URL = AUTH_API_URL
    
    public checkRequired(response: LoginResponse): boolean {
        return !!response.need_code_from_sms
    }
    
    public async refresh(response: LoginResponse): Promise<void> {
        await AdminRequest.post({
            url: `${this.AUTH_API_URL}/v1/token/2fa/send-sms`,
            body: JSON.stringify({
                token_for_2fa_auth: response.token_for_2fa_auth
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
    }
}

class EmailAuthField implements IAuth2FaField<LoginResponse> {
    
    public readonly name = 'Код з пошти'
    public readonly key = 'code_from_email'
    private readonly AUTH_API_URL = AUTH_API_URL
    
    public checkRequired(response: LoginResponse): boolean {
        return !!response.need_code_from_sms
    }
    
    public async refresh(response: LoginResponse): Promise<void> {
        await AdminRequest.post({
            url: `${this.AUTH_API_URL}/v1/token/2fa/send-email`,
            body: JSON.stringify({
                token_for_2fa_auth: response.token_for_2fa_auth
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
    }
}

export class AdminAuthProvider implements IAuth2FaProvider<LoginResponse> {
    private readonly AUTH_API_URL = AUTH_API_URL
    private readonly CLIENT_ID = 'd89f0813-6107-41c9-9e49-47bcc25c8499'
    private readonly CLIENT_SECRET = 'e7406dd0956850285598f1f603568accaac5b02338821055dda1a3f8c21cfeff'
    
    public async login({
                           username,
                           password,
                       }: {
        username: string,
        password: string,
    }): Promise<LoginResponse> {
        return AdminRequest.get({
            url: `${this.AUTH_API_URL}/v1/token`,
            searchParams: {
                grant_type: 'password',
                client_id: this.CLIENT_ID,
                client_secret: this.CLIENT_SECRET,
                username: username,
                password: password,
            },
        })
    }
    
    public async checkNeed2FaByLoginResponse(response: LoginResponse): Promise<boolean> {
        return !!response.need_2fa_auth
    }
    
    public async getTokensFromLoginResponse(response: LoginResponse): Promise<{
        access_token: string
        refresh_token: string
        expires_in: number
    }> {
        return {
            access_token: response.access_token,
            refresh_token: response.refresh_token,
            expires_in: response.expires_in,
        }
    }
    
    public get2FaFields(): IAuth2FaField<LoginResponse>[] {
        return [
            new SmsAuthField(),
            new EmailAuthField()
        ]
    }
    
    public async on2Fa({
                           loginResponse,
                           codes
                       }: {
        loginResponse: LoginResponse,
        codes: Record<string, string>
    }): Promise<{
        access_token: string
        refresh_token: string
        expires_in: number
    }> {
        return AdminRequest.post({
            url: `${this.AUTH_API_URL}/v1/token/2fa`,
            body: JSON.stringify({
                token_for_2fa_auth: loginResponse.token_for_2fa_auth,
                code_from_email: codes.code_from_email,
                code_from_sms: codes.code_from_sms,
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
    }
    
    public async refreshToken(refreshToken: string): Promise<{
        access_token: string
        token_type: string
        refresh_token: string
        expires_in: number
    }> {
        return AdminRequest.get({
            url: `${this.AUTH_API_URL}/v1/token`,
            searchParams: {
                grant_type: 'refresh_token',
                client_id: this.CLIENT_ID,
                client_secret: this.CLIENT_SECRET,
                refresh_token: refreshToken,
            },
        })
        
    }
    
    public async getUserInfoByToken(token: string): Promise<{
        userName: string
        picture: string | null
    }> {
        const userInfo = await this.getAuthUserInfo(token)
        
        return {
            userName: `${userInfo.family_name} ${userInfo.given_name}`,
            picture: userInfo.picture || null,
        }
    }
    
    
    public async onInitAuth(token: string): Promise<void> {
        const userInfo = await this.getAuthUserInfo(token)
        
        await AdminAuthRequest.post({
            url: AdminServerApiUrlBuilder.build(USERS_ROUTE_PATHS.save),
            token,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                family_name: userInfo.family_name,
                given_name: userInfo.given_name,
                email: userInfo.email,
            }),
        })
    }
    
    public isInvalidTokenErrorInResponse(response: any): boolean {
        return typeof response === 'object' &&
            (
                ('error_code' in response && response.error_code === 'invalid_bearer_token') ||
                ('status' in response && response.status === 'UNAUTHORIZED')
            )
    }
    
    private async getAuthUserInfo(token: string): Promise<{
        email: string
        family_name: string
        given_name: string
        middle_name: string | null
        picture: string | null
        id: number
    }> {
        
        return AdminRequest.get({
            url: `${this.AUTH_API_URL}/v1/userinfo`,
            searchParams: {
                access_token: token,
            },
        })
    }
}