import { User } from "../entities/user.entity"
import AppDataSource from "../data-source"
import { IUpdateRequest } from "../interfaces/index"
import { AppError } from "../errors/AppError"

const updateUserService = async (userId: string, reqBody: IUpdateRequest): Promise<void> => {
    
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    await AppDataSource
        .createQueryBuilder()
        .update(User)
        .set(reqBody)
        .where("id = :id", { id: userId })
        .execute()
}

export default updateUserService