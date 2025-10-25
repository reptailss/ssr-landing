import {
    DateAdd,
    DateUpdate,
    EntityDateAdd,
    EntityDateUpdate,
    EntityDb,
    EntityInteger,
    EntityPrimaryNumberKey,
    EntityString,
    PrimaryNumberKey,
} from 'os-core-ts'

@EntityDb()
export class MediaFolderEntity {
    @EntityPrimaryNumberKey()
    public id!: PrimaryNumberKey
    
    @EntityDateAdd()
    public date_add!: DateAdd
    
    @EntityDateUpdate()
    public date_update!: DateUpdate
    
    @EntityString({
        length: 255,
        allowNull: false,
    })
    public name!: string
    
    @EntityInteger({
        defaultValue: 0,
        allowNull: false,
    })
    public open_user_id!: number
    
    @EntityInteger({
        defaultValue: 0,
        allowNull: false,
    })
    public parent_id!: number
}