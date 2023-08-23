import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";




export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        await connect();

        const {username, email, password} = reqBody


        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        // check if username is  unique

        const uniqueUser=await User.findOne({username})

        if(uniqueUser){
            return NextResponse.json({error:  "username is already take"},{status: 400});
        }
        

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save();

        // send verification email

        await sendEmail({email, emailType:"VERIFY",userId: savedUser._id});
        //end verification email code

        const headers = request.headers;
        const newResponse =  NextResponse.json(savedUser, {headers});

        return newResponse;

        // return NextResponse.json(
        //     {
        //         message: "User Created Successfully",
        //         success: true,
        //         savedUser,     
        //     }
        // )


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}