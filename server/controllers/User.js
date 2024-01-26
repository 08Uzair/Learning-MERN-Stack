import { User } from "../models/User.js";



export const createUser = async (req, res) => {
    const { userName, password, email } = req.body;
    try {
        const newUser = new User({
            userName, password, email
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}