import {
    DateAdd,
    DateUpdate,
    EntityDateAdd,
    EntityDateUpdate,
    EntityDb,
    EntityPrimaryNumberKey,
    EntityString,
    EntityText,
    PrimaryNumberKey,
} from 'os-core-ts'
import { AppLocaleValue } from '@common/locales'

@EntityDb()
export class NewsEntity {
    @EntityPrimaryNumberKey()
    public id!: PrimaryNumberKey
    
    @EntityDateAdd()
    public date_add!: DateAdd
    
    @EntityDateUpdate()
    public date_update!: DateUpdate
    
    @EntityString()
    public title!: string
    
    @EntityText({
        length: 'long',
    })
    public content!: string
    
    @EntityString()
    public locale!: AppLocaleValue
    
    @EntityString()
    public image!: string
    
    @EntityString()
    public slug!: string
}