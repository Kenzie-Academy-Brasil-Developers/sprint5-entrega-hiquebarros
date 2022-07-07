import getUserService from "../services/getUser.service"
import { Request, Response } from "express"

const getUserController = async (req: Request, res: Response) => {
        const { id } = req.params
        const user = await getUserService(id)
        return res.status(200).json(user)
}

export default getUserController