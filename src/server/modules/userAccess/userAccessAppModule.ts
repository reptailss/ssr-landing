import { AppModule } from 'os-core-ts'
import { SaveUserAccessController } from '@modules/userAccess/controllers/SaveUserAccessController'
import { DeleteUserAccessController } from '@modules/userAccess/controllers/DeleteUserAccessController'
import { GetUserAccessController } from '@modules/userAccess/controllers/GetUserAccessController'

export const userAccessAppModule = new AppModule({
    controllers: [
        SaveUserAccessController,
        DeleteUserAccessController,
        GetUserAccessController,
    ],
    swaggerInfo: {
        tag: 'User-access',
    },
})
