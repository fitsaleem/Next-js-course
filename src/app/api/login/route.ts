import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";





export async function POST(request:NextRequest) {
  
    const reqBody=await request.json();
    await connect();

    const {email , password} = reqBody;

     //check if user not already exists
     const user = await User.findOne({email})

     if(!user){
         return NextResponse.json({error: "User not exists"}, {status: 400})
     }

      //check if password is not correct

      const validPassword = await bcryptjs.compare(password, user.password)
      if(!validPassword){
          return NextResponse.json({error: "Invalid password"}, {status: 400})
      }


      // now create the tokenData

      const tokenData={
        id: user._id,
        username: user.username,
        email: user.email,
      }

    //   create token 

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});

    // response

    const response = NextResponse.json({
        message: "Login successful",
        success: true,
    })
    response.cookies.set("token", token, {
        httpOnly: true, 
        
    })
    return response;






    try {
        
    } catch (error: any) {
         return NextResponse.json({error: error.message}, {status: 500})
    }
    
}