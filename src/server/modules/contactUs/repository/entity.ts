import {
    DateAdd,
    DateUpdate,
    EntityDateAdd,
    EntityDateUpdate,
    EntityDb,
    EntityPrimaryNumberKey,
    EntityString,
    PrimaryNumberKey,
} from 'os-core-ts'
import { ContactUsStatus } from '@common/dto/contactUsDto'

@EntityDb()
export class ContactUsEntity {
    @EntityPrimaryNumberKey()
    public id!: PrimaryNumberKey
    
    @EntityDateAdd()
    public date_add!: DateAdd
    
    @EntityDateUpdate()
    public date_update!: DateUpdate
    
    @EntityString()
    public email!: string
    
    @EntityString()
    public text!: string
    
    @EntityString()
    public form_name!: string
    
    @EntityString()
    public status!: ContactUsStatus
}