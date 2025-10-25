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
import { MediaFileEntity } from '@modules/mediaLibrary/mediaFiles/repository/entity'
import { CreateMediaFileDto, MediaFileDto, UpdateMediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MediaFilesEntityMapper } from '@modules/mediaLibrary/mediaFiles/repository/mapper'

@Injectable()
export class MediaFilesRepository {
    private readonly repository: ISqlRepository<MediaFileEntity>
    
    constructor(loaderSqlRepository: LoaderSqlRepository) {
        this.repository = loaderSqlRepository.staticByDbConnection({
            entity: new MediaFileEntity(),
            dbConnection: dbConnectionStaticSql,
            tableName: 'gis_landing_media_files',
        })
    }
    
    public async create(props: {
        createDto: CreateMediaFileDto
        openUserId: number
        file: string
        mimetype: string | null
    }): Promise<MediaFileDto> {
        return this.repository.create(MediaFilesEntityMapper.dtoToEntity(
            props,
        ))
    }
    
    public async update({
                            updateDto,
                            file,
                            mimetype,
                            where,
                        }: {
                            updateDto: UpdateMediaFileDto
                            file?: string
                            mimetype?: string | null
                            where: WhereSql<Entity<MediaFileEntity>>,
                        },
    ): Promise<MediaFileDto> {
        return this.repository.update(MediaFilesEntityMapper.updateDtoToEntity({
            file,
            mimetype,
            updateDto,
        }), { where }, true)
    }
    
    public async destroy(where: WhereSql<Entity<MediaFileEntity>>): Promise<number> {
        return this.repository.destroy({ where })
    }
    
    public async findOne(where: WhereSql<Entity<MediaFileEntity>>): Promise<MediaFileDto | null> {
        return this.repository.findOne({ where })
    }
    
    public async findByPk(id: number): Promise<MediaFileDto | null> {
        return this.repository.findByPk(id)
    }
    
    public async findAll(where: WhereSql<Entity<MediaFileEntity>>): Promise<MediaFileDto[]> {
        return this.repository.findAll({ where })
    }
    
    public async pagination(
        params: PaginationQueryParams<Entity<MediaFileEntity>>,
    ): Promise<PaginationValues<MediaFileDto>> {
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
