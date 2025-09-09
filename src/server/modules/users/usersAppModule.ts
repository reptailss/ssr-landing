import { AppModule } from 'os-core-ts'
import { SaveUserController } from '@modules/users/controllers/SaveUserController'
import { DeleteUserController } from '@modules/users/controllers/DeleteUserController'
import { GetAllUserController } from '@modules/users/controllers/GetAllUserController'

export const usersAppModule = new AppModule({
    controllers: [
        SaveUserController,
        DeleteUserController,
        GetAllUserController,
    ],
    swaggerInfo: {
        tag: 'Users',
    },
})
