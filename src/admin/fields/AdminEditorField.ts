import { EditorField } from 'admin-panel-builder'
import { AdminMediaProvider } from '@admin-providers/AdminMediaProvider'

export class AdminEditorField extends EditorField {
    constructor() {
        super()
        this.setMediaProvider(new AdminMediaProvider())
    }
}