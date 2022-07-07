import { User } from "../entities/user.entity"
import AppDataSource from "../data-source"

const getUsersService = async (): Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    return users

}

export default getUsersService