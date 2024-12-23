import { Avatar, Menu } from 'antd';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

function Navbar() {
    const [current, setCurrent] = useState('enhancement');

    const onClick = (e: { key: string }) => {
        setCurrent(e.key);
    };

    const items = [
        {
            label: 'Enhancement',
            key: 'enhancement',
        },
        {
            label: 'Report',
            key: 'report',
            children: [
                {
                    label: 'Daily Report',
                    key: 'daily-report',
                },
                {
                    label: 'Monthly Report',
                    key: 'monthly-report',
                },
            ],
        },
        {
            label: 'Jobs Order',
            key: 'jobs-order',
            children: [
                {
                    label: 'Create Job',
                    key: 'create-job',
                },
                {
                    label: 'Job History',
                    key: 'job-history',
                },
            ],
        },
        {
            label: 'Admin',
            key: 'admin',
            children: [
                {
                    label: 'User Management',
                    key: 'user-management',
                },
                {
                    label: 'Role Management',
                    key: 'role-management',
                },
            ],
        },
        {
            label: 'ระบบขนส่ง',
            key: 'transport-system',
        },
        {
            label: 'ระบบงานเครื่องซ่อม',
            key: 'repair-system',
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
                    items={items}
                    className="flex w-full justify-evenly"
                />
                <div className="flex items-center gap-x-2">
                    {/* <h1 className="whitespace-nowrap">samat thanawatmakmee</h1> */}
                    <Avatar size={'large'} icon={<UserOutlined />} />
                </div>
            </div >
        </div >
    );
}

export default Navbar;
