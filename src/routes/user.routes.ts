import Router from "express"
import createUserController from "../controllers/createUser.controller"
import getUsersController from "../controllers/getUsers.controller"
import getUserController from "../controllers/getUser.controller"
import deleteUserController from "../controllers/deleteUser.controller"
import updateUserController from "../controllers/updateUser.controller"

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', getUsersController)
userRoutes.get('/:id', getUserController)
userRoutes.delete('/:id', deleteUserController)
userRoutes.patch('/:id', updateUserController)


export default userRoutes