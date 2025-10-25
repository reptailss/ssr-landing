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
export class MediaFileEntity {
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
    
    @EntityString({
        length: 255,
        allowNull: false,
    })
    public file!: string
    
    @EntityInteger({
        defaultValue: 0,
        allowNull: false,
    })
    public folder_id!: number
    
    @EntityInteger({
        defaultValue: 0,
        allowNull: false,
    })
    public open_user_id!: number
    
    @EntityString({
        length: 255,
        allowNull: true,
    })
    public mimetype!: string | null
}