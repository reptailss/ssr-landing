import {AccessManager, StringField} from 'admin-panel-builder'
import {AppUserDto} from '@common/dto/userDto'
import {AccessProvider} from '@admin-providers/AdminAccessManagerProvider'
import {USER_ROLES} from '@common/userRoles'

export const adminAccessManager = new AccessManager<AppUserDto>(
	'access',
	new AccessProvider(),
)
	.setGlobalActionRoles([
		USER_ROLES.superAdmin,
	])
	.addUserPreviewField((userDto) => {
		return `${userDto.family_name} ${userDto.given_name}`
	}, new StringField())
	.addUserPreviewField('email', new StringField())
