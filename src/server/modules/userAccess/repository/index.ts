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
import { UserAccessEntity } from '@modules/userAccess/repository/entity'
import { CreateUserAccessDto, UpdateUserAccessDto, UserAccessDto } from '@common/dto/userAccessDto'
import { UserAccessEntityMapper } from '@modules/userAccess/repository/mapper'


@Injectable()
export class UserAccessRepository {
    private readonly repository: ISqlRepository<UserAccessEntity>
    
    constructor(loaderSqlRepository: LoaderSqlRepository) {
        this.repository = loaderSqlRepository.staticByDbConnection({
            entity: new UserAccessEntity(),
            dbConnection: dbConnectionStaticSql,
            tableName: 'gis_landing_user_access',
        })
    }
    
    public async create(createDto: CreateUserAccessDto, openUserId: number): Promise<UserAccessDto> {
        return this.repository.create(UserAccessEntityMapper.createDtoToEntity(createDto, openUserId))
    }
    
    public async update(
        updateDto: UpdateUserAccessDto,
        authorOpenUserId: number,
        where: WhereSql<Entity<UserAccessEntity>>,
    ): Promise<UserAccessDto> {
        return this.repository.update(UserAccessEntityMapper.updateDtoToEntity(updateDto,authorOpenUserId), { where }, true)
    }
    
    public async destroy(where: WhereSql<Entity<UserAccessEntity>>): Promise<number> {
        return this.repository.destroy({ where })
    }
    
    public async findOne(where: WhereSql<Entity<UserAccessEntity>>): Promise<UserAccessDto | null> {
        return this.repository.findOne({ where })
    }
    
    public async findByPk(id: number): Promise<UserAccessDto | null> {
        return this.repository.findByPk(id)
    }
    
    public async findAll(where: WhereSql<Entity<UserAccessEntity>>): Promise<UserAccessDto[]> {
        return this.repository.findAll({ where })
    }
    
    
    public async pagination(
        params: PaginationQueryParams<Entity<UserAccessEntity>>,
    ): Promise<PaginationValues<UserAccessDto>> {
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
