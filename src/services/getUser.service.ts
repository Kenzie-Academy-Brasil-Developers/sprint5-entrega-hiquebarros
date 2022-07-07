import { User } from "../entities/user.entity"
import AppDataSource from "../data-source"
import { AppError } from "../errors/AppError"

const getUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    
    const user = await userRepository.findOneBy({id: id})

    if(!user){
        throw new AppError("User not found", 404)
    }

    return user
}

export default getUserService