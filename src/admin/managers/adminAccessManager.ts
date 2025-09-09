import {AccessManager, StringField} from 'admin-panel-builder'
import {UserDto} from '@common/dto/userDto'
import {AccessProvider} from '@admin-providers/AdminAccessManagerProvider'
import {USER_ROLES} from '@common/userRoles'

export const adminAccessManager = new AccessManager<UserDto>(
	'access',
	new AccessProvider(),
)
	.setGlobalActionRoles([
		USER_ROLES.superAdmin,
	])
	.addUserPreviewField((userInfo) => {
		return `${userInfo.family_name} ${userInfo.given_name}`
	}, new StringField())
	.addUserPreviewField('email', new StringField())
