import { Button, Input } from "antd";

function LogIn() {
    return (
        < div className="w-full flex justify-center translate-y-1/2 " >
            <div className="flex flex-col items-center justify-center bg-white w-1/4 p-5 rounded-lg">
                <img src="/LogoTG.png" alt="logo" className="object-cover w-1/2 my-5" />
                <div className='w-full justify-center'>
                    <div className="w-full py-2">
                        <div className="flex flex-col py-2">
                            <label htmlFor="username">Username</label>
                            <Input type='text' placeholder="Enter Username" />
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="password">Password</label>
                            <Input type='password' placeholder="Enter Password" />
                        </div>
                    </div>
                </div>
                <Button className='w-1/2' type="primary" href='/'>Login</Button>
            </div>
        </div>
    )
}

export default LogIn
