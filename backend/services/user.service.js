import userModel from '../models/user.model.js'


export const createUser = async ({
    email, password
}) => {

    if(!email || !password){
        throw new Error('email and password are required')
    }

    const hashedPassword = await userModel.hashPassword(password)

    const user = await userModel.create({//this will create user in database
        email,
        password: hashedPassword
    })

    return user
}