import { NextRequest, NextResponse } from "next/server";
import Jwt  from "jsonwebtoken";


export const getDataFromToken=(request:NextRequest)=>{

    try {

       const encodedToken= request.cookies.get("token")?.value || "";

      const decodedToken:any= Jwt.verify(encodedToken, process.env.TOKEN_SECRET!);

        return decodedToken.id;


    } catch (error:any) {

        throw new Error(error.message);
        
    }
}