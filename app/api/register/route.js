import { User } from "../../models/User"
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
export async function POST(req)
{
    const body= await req.json();
    await mongoose.connect(process.env.MONGO_URL);
    const pass=body.password;
    if(!pass?.length || pass.length<5)
    return new Error("Password length must be greater than 5");

    const nothashedpass=pass;
    const saltRounds = bcrypt.genSaltSync(10);
    body .password=bcrypt.hashSync(nothashedpass,saltRounds);

    await User.create(body);

   
    return NextResponse.json({message:"User Created.."})
}