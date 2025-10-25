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
import { MediaFolderEntity } from '@modules/mediaLibrary/mediaFolders/repository/entity'
import { CreateMediaFolderDto, MediaFolderDto, UpdateMediaFolderDto } from '@common/dto/mediaFolderDto'
import { MediaFolderEntityMapper } from '@modules/mediaLibrary/mediaFolders/repository/mapper'

@Injectable()
export class MediaFoldersRepository {
    private readonly repository: ISqlRepository<MediaFolderEntity>
    
    constructor(loaderSqlRepository: LoaderSqlRepository) {
        this.repository = loaderSqlRepository.staticByDbConnection({
            entity: new MediaFolderEntity(),
            dbConnection: dbConnectionStaticSql,
            tableName: 'gis_landing_media_folders',
        })
    }
    
    public async create(
        createDto: CreateMediaFolderDto,
        openUserId: number,
    ): Promise<MediaFolderDto> {
        return this.repository.create(MediaFolderEntityMapper.createDtoToEntity(
            createDto,
            openUserId,
        ))
    }
    
    public async update(
        updateDto: UpdateMediaFolderDto,
        where: WhereSql<Entity<MediaFolderEntity>>,
    ): Promise<MediaFolderDto> {
        return this.repository.update(updateDto, { where }, true)
    }
    
    public async destroy(where: WhereSql<Entity<MediaFolderEntity>>): Promise<number> {
        return this.repository.destroy({ where })
    }
    
    public async findOne(where: WhereSql<Entity<MediaFolderEntity>>): Promise<MediaFolderDto | null> {
        return this.repository.findOne({ where })
    }
    
    public async findByPk(id: number): Promise<MediaFolderDto | null> {
        return this.repository.findByPk(id)
    }
    
    public async findAll(where: WhereSql<Entity<MediaFolderEntity>>): Promise<MediaFolderDto[]> {
        return this.repository.findAll({ where })
    }
    
    public async pagination(
        params: PaginationQueryParams<Entity<MediaFolderEntity>>,
    ): Promise<PaginationValues<MediaFolderDto>> {
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
