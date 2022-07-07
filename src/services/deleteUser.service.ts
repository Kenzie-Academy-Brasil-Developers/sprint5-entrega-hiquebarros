import { User } from "../entities/user.entity"
import AppDataSource from "../data-source"
import { AppError } from "../errors/AppError"

const deleteUserService = async (userId: string): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: userId})

    if (!user){
        throw new AppError("User not found", 404)
    }

    await userRepository.delete({id: userId})
}

export default deleteUserService