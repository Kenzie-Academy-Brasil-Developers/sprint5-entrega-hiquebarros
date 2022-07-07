import getUsersService from "../services/getUsers.service"
import { Request, Response } from "express"

const getUsersController = async (req: Request, res: Response) => {
        const users = await getUsersService()
        return res.json(users)
}

export default getUsersController