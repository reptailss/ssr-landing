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
import { SharedContentEntity } from '@modules/sharedContents/repository/entity'
import { CreateSharedContentDto, SharedContentDto, UpdateSharedContentDto } from '@common/dto/sharedContentDto'


@Injectable()
export class SharedContentsRepository {
    private readonly repository: ISqlRepository<SharedContentEntity>
    
    constructor(loaderSqlRepository: LoaderSqlRepository) {
        this.repository = loaderSqlRepository.staticByDbConnection({
            entity: new SharedContentEntity(),
            dbConnection: dbConnectionStaticSql,
            tableName: 'gis_landing_shared_contents',
        })
    }
    
    public async create(createDto: CreateSharedContentDto): Promise<SharedContentDto> {
        return this.repository.create(createDto)
    }
    
    public async update(
        updateDto: UpdateSharedContentDto,
        where: WhereSql<Entity<SharedContentEntity>>,
    ): Promise<SharedContentDto> {
        return this.repository.update(updateDto, { where }, true)
    }
    
    public async destroy(where: WhereSql<Entity<SharedContentEntity>>): Promise<number> {
        return this.repository.destroy({ where })
    }
    
    public async findOne(where: WhereSql<Entity<SharedContentEntity>>): Promise<SharedContentDto | null> {
        return this.repository.findOne({ where })
    }
    
    public async findByPk(id: number): Promise<SharedContentDto | null> {
        return this.repository.findByPk(id)
    }
    
    public async findAll(where: WhereSql<Entity<SharedContentEntity>>): Promise<SharedContentDto[]> {
        return this.repository.findAll({ where })
    }
    
    public async findAllSimple(where: WhereSql<Entity<SharedContentEntity>>): Promise<{
        key: string
        value: object
    }[]> {
        return this.repository.findAll({
            where,
            attributes: [
                'key',
                'value',
            ],
        })
    }
    
    public async pagination(
        params: PaginationQueryParams<Entity<SharedContentEntity>>,
    ): Promise<PaginationValues<SharedContentDto>> {
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
