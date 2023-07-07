import { UserEntity } from "../entities/allEntities/user/user.entity";
import dataSource from "../config/database.config";
import { RegisterInput } from "../validators/uservalidor/user.validator";
import { BcryptService } from "../utilities/bcrypt.service";



export class UserService {
    constructor(
        private readonly UserRepository = dataSource.getRepository(UserEntity),
        private readonly becryptService = new BcryptService()


    ) { }

    async getAll() {
        const allUsers = this.UserRepository.find()

        return allUsers

    }


    async create(data: RegisterInput) {
        console.log('here service', data)
        const newUser = new UserEntity()
        newUser.firstName = data.firstName
        newUser.middleName = data.middleName
        newUser.lastName = data.lastName
        newUser.gender = data.gender
        newUser.password = await this.becryptService.hash(data.password)
        newUser.email = data.email

        return await this.UserRepository.save(newUser)
    }


}