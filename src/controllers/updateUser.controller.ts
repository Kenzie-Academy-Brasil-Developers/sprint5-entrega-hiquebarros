import updateUserService from "../services/updateUser.service"
import { Request, Response } from "express"

const updateUserController = async (req: Request, res: Response) => {
        const { id } = req.params
        await updateUserService(id, req.body)
        return res.status(200).json({ message: "User updated" })
}

export default updateUserController