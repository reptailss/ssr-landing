import {
    DateAdd,
    DateUpdate,
    PrimaryNumberKey,
    EntityDb,
    EntityPrimaryNumberKey,
    EntityDateAdd,
    EntityDateUpdate, EntityString, EntityJson,
} from 'os-core-ts'
import { AppLocaleValue } from '@common/locales'

@EntityDb()
export class SharedContentEntity<Value = object>{
    @EntityPrimaryNumberKey()
    id!:PrimaryNumberKey
    
    @EntityDateAdd()
    date_add!:DateAdd
    
    @EntityDateUpdate()
    date_update!:DateUpdate
    
    @EntityString()
    key!:string
    
    @EntityJson()
    value!:Value
    
    @EntityString()
    locale!:AppLocaleValue
}