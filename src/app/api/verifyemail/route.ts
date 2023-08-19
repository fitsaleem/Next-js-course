import {connect} from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";


connect();

export async function POST(request:NextRequest) {

    try {
        
        const reqBody= await request.json();
        const {token}=reqBody;
        console.log(token);

        const user=await User.findOne({verifyToken:token, verifyTokenExpiry:{$gt: Date.now()}});

        if(!user){

            return NextResponse.json({error: "Invalid Token"},{status:400})
        }

        user.isVerfied=true;
        user.isVerifyToken=undefined;
        user.verifyTokenExpiry=undefined;
        await user.save();

        return NextResponse.json(

            {
                message: "email verified successfully",
                success: true,
            }
        )






    } catch (error:any) {

        return NextResponse.json({error: error.message},{status:500})
    }
    
}

