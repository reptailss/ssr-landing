import {MediaValueField} from 'admin-panel-builder'
import {AdminMediaProvider} from '@admin-providers/AdminMediaProvider'
import {ADMINS_USER_ROLES} from '@common/userRoles'


export class AdminMediaField extends MediaValueField {
	constructor() {
		super(new AdminMediaProvider().setGlobalActionRoles(ADMINS_USER_ROLES))
	}
}