
function Navbar() {
    return (
        <div className='flex justify-between bg-white p-3'>
            <img src="/LogoTG.png" alt="" className='w-20' />
            <div className='flex items-end w-full'>
                <ul className='flex w-full justify-evenly items-end '>
                    <li >Enhancement</li>
                    <li>Report</li>
                    <li>Jobs Order</li>
                    <li>Report Jobs Order</li>
                    <li>Admin</li>
                    <li>ระบบขนส่ง</li>
                    <li>ระบบงานเครื่องซ่อม</li>
                    <li>การกำหนดค่าของระบบ</li>
                    <li>กระดานความคิดเห็น</li>
                </ul>
            </div>
            <div className='flex items-end'>
                <h1 className='whitespace-nowrap'>samat thanawatmakmee</h1>
            </div>
        </div>
    )
}

export default Navbar
