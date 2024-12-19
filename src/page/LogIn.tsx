import { Link } from "react-router-dom"
import logo from '../assets/LogoTG.png';  // Import image


function LogIn() {
    return (
        // border border-red-500
        < div className="w-full flex justify-center translate-y-1/2 bg-blue-300" >
            <div className="flex flex-col items-center justify-center bg-white w-1/4 p-5 rounded-lg">
                <div className="flex flex-col justify-center items-center">
                    <img src={logo} alt="" className="object-cover w-1/2" />
                    {/* <h1 className="text-2xl font-bold">TG Stock</h1> */}
                </div>
                <div className='w-full'>
                    <div className="w-full py-2">
                        <div className="flex flex-col">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="border rounded-md p-1.5" placeholder="Enter Username" />
                            {/* <Input type='email' placeholder='E@example.com' /> */}
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="border rounded-md p-1.5" placeholder="Enter Password" />
                        </div>
                    </div>
                    <button className="bg-blue-500 p-2 rounded-lg text-white w-full" >Login</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn
