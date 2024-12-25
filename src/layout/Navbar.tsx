import { Avatar, Menu } from 'antd';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';

function Navbar() {
    const [current, setCurrent] = useState('');
    const navigate = useNavigate();

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
                { label: 'รับสินค้า', key: 'receive-product' },
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
                { label: 'สถานะการขาย', key: 'sale-status' },
                { label: 'ประวัติยกเลิกการจอง', key: 'cancellation-history' }
            ],
        },
        {
            label: 'Report',
            key: 'report',
            children: [
                { label: 'สรุปสินค้าคงเหลือ', key: 'inventory-summary' },
                { label: 'รายงานยืม', key: 'report-borrow' },
                { label: 'History Report', key: 'history-report' },
                { label: 'รายงานรับสินค้า', key: 'receive-product' },
                { label: 'รายงานจองมี PO', key: 'report-reserve' },
                { label: 'สรุปสินค้าคงเหลือ', key: 'inventory-history' },
            ],
        },
        {
            label: 'Jobs Order',
            key: 'jobs-order',
            children: [
                { label: 'สรุปสินค้าคงเหลือ', key: 'inventory-summary' },
                { label: 'รายงานยืม', key: 'report-borrow' },
                { label: 'History Report', key: 'history-report' },
                { label: 'รายงานรับสินค้า', key: 'receive-product' },
                { label: 'รายงานจองมี PO', key: 'report-reserve' },
                { label: 'สรุปสินค้าคงเหลือ', key: 'inventory-history' },
                { label: 'สรุปสินค้าคงเหลือ', key: 'inventory-summary' },
                { label: 'รายงานยืม', key: 'report-borrow' },
                // { label: 'History Report', key: 'history-report' },
                { label: 'รายงานรับสินค้า', key: 'receive-product' },
                { label: 'รายงานจองมี PO', key: 'report-reserve' },
                { label: 'สรุปสินค้าคงเหลือ', key: 'inventory-history' },
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
                { label: 'ลักษณะงานเครื่องซ่อม', key: 'repair-descriptsion' },
                { label: 'ประเภทงาน', key: 'repair-type' },
                { label: 'สถานะงานเครื่องซ่อม', key: 'repair-status' },
                { label: 'รับเครื่อง', key: 'receive-device' },
                { label: 'หน้าศูนย์บริการ', key: 'service-center' },
                { label: 'คืนเครื่อง', key: 'return-device' },
                { label: 'สถานะงาน', key: 'status-job' },
                { label: 'รายละเอียดงาน', key: 'status-descriptsion' },
                { label: 'เเสดงข้อมูลที่ยังไม่ได้รับเครื่อง', key: 'not-received' },
            ],
        },
        {
            label: 'การกำหนดค่าของระบบ',
            key: 'system-settings',
        },
        {
            label: 'กระดานความคิดเห็น',
            key: 'feedback-board',
        },
    ];

    return (
        <div className="bg-white shadow-md p-3">
            <div className="flex justify-between items-center">
                <img src="/LogoTG.png" alt="Logo" className="w-20" />
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={menuItems}
                    className="flex w-full text-sm justify-evenly"
                />
                <div className="flex items-center gap-x-2">
                    <Avatar size="large" icon={<UserOutlined />} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;