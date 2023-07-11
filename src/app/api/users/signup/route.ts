import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest , NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect();

export async function POST (request: NextRequest){
try {
    // for grabing data from the body:

    const reqBody= await request.json()
    const {username,email,password} = reqBody;

    console.log(reqBody);  // remove later

    // validations

    // check if user is already exist

    const user = await User.findOne({email})

    if(user){
        return (
            NextResponse.json({error: "user already exists"},{status: 400})
        )
    }

    // hash password

    const salt= await bcryptjs.getSalt("10");
    const hashedPassword= await bcryptjs.hash(password,salt)


    // creating a new user for saving in database

   const newUser= new User({
        username,
        email,
        password: hashedPassword
    })

    
    // saving in db

    const savedUser= await newUser.save();
    console.log(savedUser);


    return NextResponse.json({
        message: "user created successfully",
        success: true,
        savedUser
    },
    );






} catch (error: any) {

    // for handling errors we preffer in json 
    return NextResponse.json({error: error.message},{status:500})
}
}