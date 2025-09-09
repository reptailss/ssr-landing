import { AppModule } from 'os-core-ts'
import { AdminClientController } from '@modules/adminClient/controllers/AdminClientController'

export const adminClientAppModule = new AppModule({
    controllers: [AdminClientController],
})