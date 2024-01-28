import { User } from "../../models/User"
import { getServerSession } from "next-auth";
import mongoose from "mongoose";
import { authoptions } from "../auth/[...nextauth]/route";


  export async function PUT(req)
  {
    mongoose.connect(process.env.MONGO_URL);
    const data=await req.json();
    const session=await getServerSession(authoptions);
    const {email} = session?.user;
    console.log(email);
    console.log(data);
    console.log('name' in data);
    try {
      if ('name' in data) {
        const user = await User.findOne({ email });
  
        if (user) {
          // Update the name property if the user document exists
          user.name = data.name;
          await user.save();
          return Response.json({ message: "Name changed" });
        } else {
          return Response.json({ error: "User not found" });
        }
      }
      return Response.json({ message: "Name changed" });
    } catch (error) {
      console.error('Error updating name:', error);
      return Response.json({ error: 'Failed to update name' });
    }

  }