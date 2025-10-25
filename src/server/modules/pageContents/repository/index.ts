import {
    Entity,
    Injectable,
    ISqlRepository,
    LoaderSqlRepository,
    PaginationQueryParams,
    PaginationValues,
    WhereSql,
} from 'os-core-ts'
import { PageContentEntity } from '@modules/pageContents/repository/entity'
import { dbConnectionStaticSql } from '@db/dbConnection'
import { CreatePageContentDto, PageContentDto, UpdatePageContentDto } from '@common/dto/pageContentDto'


@Injectable()
export class PageContentsRepository {
    private readonly repository: ISqlRepository<PageContentEntity>
    
    constructor(loaderSqlRepository: LoaderSqlRepository) {
        this.repository = loaderSqlRepository.staticByDbConnection({
            entity: new PageContentEntity(),
            dbConnection: dbConnectionStaticSql,
            tableName: 'gis_landing_page_contents',
        })
    }
    
    public async create(createDto: CreatePageContentDto): Promise<PageContentDto> {
        return this.repository.create(createDto)
    }
    
    public async update(
        updateDto: UpdatePageContentDto,
        where: WhereSql<Entity<PageContentEntity>>,
    ): Promise<PageContentDto> {
        return this.repository.update(updateDto, { where }, true)
    }
    
    public async destroy(where: WhereSql<Entity<PageContentEntity>>): Promise<number> {
        return this.repository.destroy({ where })
    }
    
    public async findOne(where: WhereSql<Entity<PageContentEntity>>): Promise<PageContentDto | null> {
        return this.repository.findOne({ where })
    }
    
    public async findByPk(id: number): Promise<PageContentDto | null> {
        return this.repository.findByPk(id)
    }
    
    public async findAll(where: WhereSql<Entity<PageContentEntity>>): Promise<PageContentDto[]> {
        return this.repository.findAll({ where })
    }
    
    public async findAllSimple(where: WhereSql<Entity<PageContentEntity>>): Promise<{
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
        params: PaginationQueryParams<Entity<PageContentEntity>>,
    ): Promise<PaginationValues<PageContentDto>> {
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
