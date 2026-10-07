import { useState } from "react"

type AuthUser={
    name: string,
    email: string
}
export const User=()=>{
    const [user, setUser]= useState<AuthUser>({} as AuthUser)
    const handleLoggin=()=>{
        setUser({
            name: 'Praveenraj',
            email:'praveen@gmail.com'
        })
    }
   
    return(<>
        <button onClick={handleLoggin}>login</button>
        <div> User name is {user.name}</div>
        <div>User email is {user.email}</div>
    </>)
}