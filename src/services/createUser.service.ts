import { IUser, IUserRequest } from "../interfaces/index";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs"
import { AppError } from "../errors/AppError";
 
const createUserService = async ({ name, email, password, age }: IUserRequest) => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where: {
            email: email
        }
    })

    if(findUser){
        throw new AppError("User already exists", 400)
    }

    if(!name || !email || !password ||!age){
        throw new AppError("No data", 404)
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        age
    })

    await userRepository.save(user)

    const userToBeReturned = {
        id: user.id,
        name,
        email,
        age,
        created_at: user.created_at,
        updated_at: user.updated_at
    }

    return userToBeReturned

}
 
export default createUserService;