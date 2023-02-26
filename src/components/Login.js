import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{

    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/")
        }
    })

    const onLoginHandler=async()=>{
        console.log(email,password)

        let result = await fetch("http://localhost:5000/login",{
            method:"Post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        })

        result = await result.json()
        if (result.name) {
            localStorage.setItem("user",JSON.stringify(result))
            navigate("/")
        } else {
            console.warn("Please enter correct details")
        }

        console.warn(result)
    }

    return (
        <div className="login">
            <input className="inputBox" type="text" placeholder="Enter Email"
                onChange={(e)=>{setEmail(e.target.value)}} value={email} 
            />
            <input className="inputBox" type="password" placeholder="Enter Password"
                onChange={(e)=>{setPassword(e.target.value)}} value={password}
            />
            <button onClick={onLoginHandler} className="appButton">Login</button>
        </div>
    )
}

export default Login