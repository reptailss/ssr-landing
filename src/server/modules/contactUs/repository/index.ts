import {
    Entity,
    Injectable,
    ISqlRepository,
    LoaderSqlRepository,
    PaginationQueryParams,
    PaginationValues,
    WhereSql,
} from 'os-core-ts'
import { dbConnectionStaticSql } from '@db/dbConnection'
import { ContactUsEntity } from '@modules/contactUs/repository/entity'
import { ContactUsDto, ContactUsStatus, CreateContactUsDto, UpdateContactUsDto } from '@common/dto/contactUsDto'
import { ContactUsEntityMapper } from '@modules/contactUs/repository/mapper'

@Injectable()
export class ContactUsRepository {
    private readonly repository: ISqlRepository<ContactUsEntity>
    
    constructor(loaderSqlRepository: LoaderSqlRepository) {
        this.repository = loaderSqlRepository.staticByDbConnection({
            entity: new ContactUsEntity(),
            dbConnection: dbConnectionStaticSql,
            tableName: 'contact_us',
        })
    }
    
    public async create(createDto: CreateContactUsDto, status: ContactUsStatus): Promise<ContactUsDto> {
        return this.repository.create(ContactUsEntityMapper.createDtoToEntity(
            createDto, status,
        ))
    }
    
    public async update(
        updateDto: UpdateContactUsDto,
        where: WhereSql<Entity<ContactUsEntity>>,
    ): Promise<ContactUsDto> {
        return this.repository.update(updateDto, { where }, true)
    }
    
    public async destroy(where: WhereSql<Entity<ContactUsEntity>>): Promise<number> {
        return this.repository.destroy({ where })
    }
    
    public async findOne(where: WhereSql<Entity<ContactUsEntity>>): Promise<ContactUsDto | null> {
        return this.repository.findOne({ where })
    }
    
    public async findByPk(id: number): Promise<ContactUsDto | null> {
        return this.repository.findByPk(id)
    }
    
    public async findAll(where: WhereSql<Entity<ContactUsEntity>>): Promise<ContactUsDto[]> {
        return this.repository.findAll({ where })
    }
    
    public async pagination(
        params: PaginationQueryParams<Entity<ContactUsEntity>>,
    ): Promise<PaginationValues<ContactUsDto>> {
        return this.repository.pagination(params)
    }
    
    public getConfig(): {
        database: string
        host: string
        port: string
        dbType: 'mysql'
        tableName: string
    } {
        return this.repository.getConfig()
    }
}
