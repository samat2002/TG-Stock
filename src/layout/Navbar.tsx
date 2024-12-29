import { Avatar, Button, Menu } from 'antd';
import { useRef, useState } from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate, useRoutes } from 'react-router-dom';
import type { MenuProps } from 'antd';

function Navbar() {
    const [current, setCurrent] = useState('');
    const navigate = useNavigate();

    const Home = () => {
        navigate("/");

    }

    const [isOpen, setIsOpen] = useState(false);
    const logoutRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    const Logout = () => {
        navigate("/login");

    }

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(`/${e.key}`);
    };

    const menuItems: MenuProps['items'] = [
        {
            label: 'Enhancement',
            key: 'enhancement',
            children: [
                { label: 'แผนก', key: 'department' },
                { label: 'พนักงาน', key: 'employee' },
                { label: 'สินค้า', key: 'product' },
                { label: 'ลูกค้า', key: 'customer' },
                { label: 'รับสินค้า', key: 'receive-enhance' },
                { label: 'Inventory Adjustment', key: 'inventory' },
                { label: 'จอง,มี PO', key: 'reserve' },
                { label: 'ยืม', key: 'borrow' },
                { label: 'คืน', key: 'return' },
                { label: 'ยืมซ่อม', key: 'borrow-repair' },
                { label: 'ตัดขาย,เสีย,อื่นๆ', key: 'other' },
                { label: 'เคลม', key: 'claim' },
                { label: 'เคลมรับ', key: 'claim-accept' },
                { label: 'ประวัติการขาย', key: 'sale-history' },
                { label: 'ลักษณะ PO', key: 'po-structure' },
                { label: 'ใบส่งของ/ใบเสร็จ', key: 'receipt' },
                // { label: 'ตัดขาย,เสีย,อื่นๆ', key: 'other' }, มันคือเเบบไหม่ ไม่รู้ว่าต้องมีไหม่ 
                { label: 'สถานะการขาย', key: 'sale-status' },
                { label: 'ประวัติยกเลิกการจอง', key: 'cancellation-history' }
            ],
        },
        {
            label: 'Report',
            key: 'report',
            children: [
                { label: 'สรุปสินค้าคงเหลือ', key: 'inventory-summary' },
                // { label: 'สรุปสินค้าคงเหลือ', key: 'inventory-summary' },tele ไม่เเน่ใจว่าคือไรเเต่มันซั้ากัน
                { label: 'รายงานยืม', key: 'report-borrow' },
                { label: 'History Report', key: 'history-report' },
                { label: 'รายงานรับสินค้า', key: 'receive-report' },
                { label: 'รายงานจองมี PO', key: 'report-reserve' },
                // { label: 'สรุปสินค้าคงเหลือ', key: 'inventory-summary' },เเยกตามรายเดือน ปี 
                { label: 'สินค้าคงเหลือ', key: 'inventory-history' },
            ],
        },
        {
            label: 'Jobs Order',
            key: 'jobs-order',
            children: [
                { label: 'ลักษณะงาน', key: 'job-descriptsion' },
                { label: 'ผู้ขาย', key: 'vender' },
                { label: 'ค้นหา Job', key: 'search-job' },
                { label: 'หน้ารับงาน', key: 'receive-job' },
                { label: 'รายการ Pedding', key: 'pedding' },
                { label: 'Supplier ส่งของ', key: 'supplier' },
                { label: 'รายการคงเหลือ', key: 'remaining' },
                { label: 'Supplier ส่งของ (ไม่มี Job)', key: 'Supplier-nojob' },
                { label: 'เอกสารอยู่ที่', key: 'document' },
                { label: 'Shipping', key: 'shipping' },
                { label: 'Joborder Summary', key: 'joborder-summary' },
            ],
        },
        {
            label: 'Report Jobs Order',
            key: 'report-order',
            children: [
                { label: 'รายงานรับงาน', key: 'receivejob-report' },
                { label: 'รายงานรายการ Pendding', key: 'pendding-report' },
                { label: 'รายงานสั่ง Supplier', key: 'supplier-report' },
                { label: 'รายงานสินค้าคงเหลือ', key: 'report-stock' },
            ],
        },
        {
            label: 'Admin',
            key: 'admin',
        },
        {
            label: 'ระบบขนส่ง',
            key: 'transport-system',
            children: [
                { label: 'รายละเอียดขนส่ง', key: 'transport-descriptsion' },
                { label: 'บันทึกข้อมูลขนส่ง', key: 'transport-history' },
                { label: 'งานขนส่งประจำวัน', key: 'transport-daily' },
            ],
        },
        {
            label: 'ระบบงานเครื่องซ่อม',
            key: 'repair-system',
            children: [
                { label: 'ลักษณะงานเครื่องซ่อม', key: 'repair-desc' },
                { label: 'ประเภทงาน', key: 'repair-type' },
                { label: 'สถานะงานเครื่องซ่อม', key: 'repair-status' },
                { label: 'รับเครื่อง', key: 'receive-device' },
                { label: 'หน้าศูนย์บริการ', key: 'service-center' },
                { label: 'คืนเครื่อง', key: 'return-device' },
                { label: 'สถานะงาน', key: 'status-job' },
                { label: 'รายละเอียดงาน', key: 'status-desc' },
                { label: 'เเสดงข้อมูลที่ยังไม่ได้รับเครื่อง', key: 'not-received' },
            ],
        },
        {
            label: 'การกำหนดค่าของระบบ',
            key: 'system-settings',
        },
        {
            label: 'กระดานความคิดเห็น',
            key: 'comment-board',
        },
    ];

    return (
        <div className="bg-white shadow-md p-3">
            <div className="flex justify-start !items-center">
                <img src="/LogoTG.png" alt="Logo" className="w-20 cursor-pointer" onClick={Home} />
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={menuItems}
                    className="flex w-full text-sm justify-start items-end"
                />
                <div className="flex items-center gap-x-2">
                    <div
                        className="flex items-center cursor-pointer"
                        // onClick={isOpen ? () => { setIsOpen(false) } : toggleMenu}
                        onClick={toggleMenu}
                    >
                        {/* <p className="pr-2 text-sm text-black">Samat Thanawatmakmee</p> */}
                        <Avatar size="large" icon={<UserOutlined />} />

                    </div>
                    {isOpen && (
                        <div ref={logoutRef}
                            className={`fixed right-0 top-[4.5rem] z-[999] transition-transform duration-1000 
                            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                        >
                            <Button className="w-full" color="default" size='large' onClick={Logout}>
                                <LogoutOutlined className="mr-2" />
                                Log out
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;