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
import { AppUserDto, CreateAppUserDto, UpdateAppUserDto } from '@common/dto/userDto'
import { UserEntity } from '@modules/users/repository/entity'
import { UserEntityMapper } from '@modules/users/repository/mapper'


@Injectable()
export class UserEntityRepository {
    private readonly repository: ISqlRepository<UserEntity>
    
    constructor(loaderSqlRepository: LoaderSqlRepository) {
        this.repository = loaderSqlRepository.staticByDbConnection({
            entity: new UserEntity(),
            dbConnection: dbConnectionStaticSql,
            tableName: 'gis_landing_users',
        })
    }
    
    public async create(createDto: CreateAppUserDto, openUserId: number): Promise<AppUserDto> {
        return this.repository.create(UserEntityMapper.createDtoToEntity(createDto, openUserId))
    }
    
    public async update(
        updateDto: UpdateAppUserDto,
        where: WhereSql<Entity<UserEntity>>,
    ): Promise<AppUserDto> {
        return this.repository.update(updateDto, { where }, true)
    }
    
    public async destroy(where: WhereSql<Entity<UserEntity>>): Promise<number> {
        return this.repository.destroy({ where })
    }
    
    public async findOne(where: WhereSql<Entity<UserEntity>>): Promise<AppUserDto | null> {
        return this.repository.findOne({ where })
    }
    
    public async findByPk(id: number): Promise<AppUserDto | null> {
        return this.repository.findByPk(id)
    }
    
    public async findAll(where: WhereSql<Entity<UserEntity>>): Promise<AppUserDto[]> {
        return this.repository.findAll({ where })
    }
    
    
    public async pagination(
        params: PaginationQueryParams<Entity<AppUserDto>>,
    ): Promise<PaginationValues<AppUserDto>> {
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
