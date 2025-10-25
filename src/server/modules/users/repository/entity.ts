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
export class UserEntity {
    @EntityPrimaryNumberKey()
    id!: PrimaryNumberKey
    
    @EntityDateAdd()
    date_add!: DateAdd
    
    @EntityDateUpdate()
    date_update!: DateUpdate
    
    @EntityInteger()
    open_user_id!: number
    
    @EntityString()
    family_name!: string
    
    @EntityString()
    given_name!: string
    
    @EntityString()
    email!: string
}