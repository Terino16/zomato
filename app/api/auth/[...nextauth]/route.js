import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import mongoose from "mongoose";
import { User } from "../../../models/User";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../lib/mongoConnect";
import bcrypt from "bcrypt";

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const email = credentials?.email;
          const password = credentials?.password;

          if (!email || !password) {
            throw new Error("Email and password are required");
          }

          await mongoose.connect(process.env.MONGO_URL);

          const user = await User.findOne({ email });


          if (!user) {
            throw new Error("User not found");
          }

          const passwordOk = bcrypt.compareSync(password, user.password);

          if (passwordOk) {
            console.log("Password matched");
            console.log(user);
            return user;
          } else {
            throw new Error("Incorrect password");
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return Promise.resolve(null); // Return null on error
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


  
  

//           // Ensure a global MongoDB connection pool
//           const client = await MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//           const db = client.db();

         
//           const user = await db.collection('users').findOne({ email });

        

//           const passwordOk = bcrypt.compareSync(password, user.password);

//           if (passwordOk) {
//             console.log("Password matched");
//             console.log(user);
//             return Promise.resolve(user);
//           } else {
//             throw new Error("Incorrect password");
//           }
//         } catch (error) {
//           console.error("Authorization error:", error);
//           return Promise.resolve(null); // Return null on error
//         } finally {
//           // Disconnect from the client
//           if (client) {
//             await client.close();
//           }
//         }
//       },
//     }),
//   ],
// };

