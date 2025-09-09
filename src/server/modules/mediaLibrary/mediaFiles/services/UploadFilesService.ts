import { AppFile, FileHelper, FileService } from 'os-core-ts'

export class UploadFilesService {
    
    public async saveFile(appFile: AppFile): Promise<{
        filePath: string
    }> {
        return FileService.save({
            fileNameS3: FileHelper.getUniqName({
                originalName: appFile.originalname,
                subPathStart: 'ptp-client/media-library',
            }),
            fileNameLocal: FileHelper.getUniqName({
                originalName: appFile.originalname,
                subPathStart: 'file',
            }),
            dirPathLocal: 'public/files',
            fileNameDirPathLocal: '/files',
            mimetype: appFile.mimetype,
            buffer: appFile.buffer,
        })
    }
}