"use client";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation'
import { useState, Fragment } from "react";
import Image from "next/image";
import React from "react";
const Page = () => {
  const session = useSession();
  const { status } = session;
  const [name, Setname] = useState(session?.data?.user?.name||'');
  if (status == "loading") return <div>Loading</div>;
  if (status === "unauthenticated") 
  {
   return redirect('/Login')
  }
  const userImage = session.data.user.image;

   async function handleFormUpdate(e){
    e.preventDefault();
    const response= await fetch('api/profile',
    {
      method:'PUT',
      headers:{'Content-Type':'Applications/json'},
      body:JSON.stringify({name:name})
    })

  }

  

  return (
    <section className="mt-8">
      <h1 className="text-center text-xl">Profile</h1>
      <div className="p-2 rounded-lg flex items-center justify-around">
        <div className="items-center flex flex-col gap-5">
        <Image src={userImage} className="rounded-lg contain  w-full h-full"  alt="User Image" width={150} height={150} />
       
        </div>
        <form onSubmit={handleFormUpdate} className="flex flex-col gap-5 max-w-xl grow">
          <input
            className="p-4 bg-transparent  border-[1px] rounded-lg"
            onChange={(e)=>{Setname(e.target.value)}}
            value={name}
          ></input>
           <input
            className="p-4 bg-transparent  border-[1px] rounded-lg"
            disabled={false}
            value={session.data.user.email}
          ></input>
          <button className="p-4 bg-orange-600 rounded-lg">Update</button>
        </form>
      </div>
 
    </section>
  );
};

export default Page;
