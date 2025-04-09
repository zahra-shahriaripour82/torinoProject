"use client"

import { useGetUserData } from "@/core/services/queries";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


function AuthProvider({children}) {
    const {data,isPending}=useGetUserData();
    const router=useRouter()
    useEffect(()=>{
        if(!isPending && !data?.data) router.push("/")
    },[isPending])

    if(isPending) return <p>loading</p>

  return children;
 
  
}

export default AuthProvider