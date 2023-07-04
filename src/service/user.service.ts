import { UserEntity } from "../entities/user.entity";
import dataSource from "../config/database.config";
import { RegisterInput } from "../validators/user.validator";



export class UserService {
    constructor(public UserRepository = dataSource.getRepository(UserEntity)) { }
    async create(data: RegisterInput) {
        console.log('here service', data)
        const newUser = new UserEntity()
        newUser.firstName = data.firstName
        newUser.middleName = data.middleName
        newUser.lastName = data.lastName
        newUser.gender = data.gender
        newUser.password = data.password
        newUser.email = data.email

        return await this.UserRepository.save(newUser)
    }
}