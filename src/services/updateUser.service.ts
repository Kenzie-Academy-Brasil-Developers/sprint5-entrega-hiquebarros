import { User } from "../entities/user.entity"
import AppDataSource from "../data-source"
import { IUpdateRequest } from "../interfaces/index"
import { AppError } from "../errors/AppError"
import { hash } from "bcryptjs"

const updateUserService = async (userId: string, reqBody: IUpdateRequest): Promise<void> => {

    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    if (reqBody.password) {
        const hashedPassword = await hash(reqBody.password, 10)
        reqBody.password = hashedPassword
    }
    
    await AppDataSource
        .createQueryBuilder()
        .update(User)
        .set(reqBody)
        .where("id = :id", { id: userId })
        .execute()
    
}

export default updateUserService