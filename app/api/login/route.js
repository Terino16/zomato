import { User } from "../../models/User"
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function POST(req)
{
    const body= await req.json();
    await mongoose.connect(process.env.MONGO_URL);
    console.log(body);
    const user = await User.findOne({ email: body.email });
    if(!user)
    {
        return NextResponse.json("User Not present");
    }
   
else
{
    console.log("User Exist");
    if(user.password==body.password)
    return NextResponse.json(user);
}
}