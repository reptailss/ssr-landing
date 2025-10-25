import {
    DateAdd,
    DateUpdate,
    EntityDateAdd,
    EntityDateUpdate,
    EntityDb,
    EntityInteger,
    EntityJson,
    EntityPrimaryNumberKey,
    PrimaryNumberKey,
} from 'os-core-ts'

@EntityDb()
export class UserAccessEntity {
    @EntityPrimaryNumberKey()
    id!: PrimaryNumberKey
    
    @EntityDateAdd()
    date_add!: DateAdd
    
    @EntityDateUpdate()
    date_update!: DateUpdate
    
    @EntityInteger()
    open_user_id!: number
    
    @EntityInteger()
    author_open_user_id!: number
    
    @EntityJson()
    roles!: string[]
}