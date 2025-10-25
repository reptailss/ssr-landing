import {
    Entity,
    Injectable,
    ISqlRepository,
    LoaderSqlRepository,
    OrderParams,
    PaginationQueryParams,
    PaginationValues,
    WhereSql,
} from 'os-core-ts'
import { dbConnectionStaticSql } from '@db/dbConnection'
import { NewsEntityMapper } from '@modules/news/repository/mapper'
import { CreateNewsDto, NewsDto, UpdateNewsDto } from '@common/dto/newsDto'
import { NewsEntity } from '@modules/news/repository/entity'

@Injectable()
export class NewsRepository {
    private readonly repository: ISqlRepository<NewsEntity>
    
    constructor(loaderSqlRepository: LoaderSqlRepository) {
        this.repository = loaderSqlRepository.staticByDbConnection({
            entity: new NewsEntity(),
            dbConnection: dbConnectionStaticSql,
            tableName: 'gis_landing_news',
        })
    }
    
    public async create(props: {
        createDto: CreateNewsDto
        slug: string
        dateAdd?: Date
    }): Promise<NewsDto> {
        return this.repository.create(NewsEntityMapper.createDtoToEntity(
            props,
        ))
    }
    
    public async update({
                            updateDto,
                            slug,
                            where,
                        }: {
                            updateDto: UpdateNewsDto,
                            slug: string
                            where: WhereSql<Entity<NewsEntity>>,
                        },
    ): Promise<NewsDto> {
        return this.repository.update(
            NewsEntityMapper.updateDtoToEntity(
                updateDto,
                slug,
            ),
            { where },
            true,
        )
    }
    
    public async destroy(where: WhereSql<Entity<NewsEntity>>): Promise<number> {
        return this.repository.destroy({ where })
    }
    
    public async findOne(where: WhereSql<Entity<NewsEntity>>): Promise<NewsDto | null> {
        return this.repository.findOne({ where })
    }
    
    public async findByPk(id: number): Promise<NewsDto | null> {
        return this.repository.findByPk(id)
    }
    
    public async findAll(
        props: {
            where?: WhereSql<Entity<NewsEntity>>
            limit?: number,
            order?: OrderParams<Entity<NewsEntity>>
        },
    ): Promise<NewsDto[]> {
        return this.repository.findAll(props)
    }
    
    public async pagination(
        params: PaginationQueryParams<Entity<NewsEntity>>,
        where?: WhereSql<Entity<NewsEntity>>,
    ): Promise<PaginationValues<NewsDto>> {
        return this.repository.pagination(params, { where })
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
