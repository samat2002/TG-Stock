import React from 'react';
import { Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
}

const data: DataType[] = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const DataTable: React.FC = () => (
    <div className='flex flex-col justify-center items-center'>
        <Table<DataType> dataSource={data} className='bg-white border p-5 w-1/2 rounded-lg p-5' >
            <Column title={<span className="text-white">Age</span>}
                dataIndex="age" key="age"
                onHeaderCell={() => ({
                    style: { backgroundColor: '#1E3A8A' } // Tailwind gray-100 color
                })}
            />
            <Column title={<span className="text-white">Address</span>} dataIndex="address" key="address"
                onHeaderCell={() => ({
                    style: { backgroundColor: '#1E3A8A' } // Tailwind gray-100 color
                })}
            />
            {/* <ColumnGroup title="Name" className='border'>
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup> */}
            {/* <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags: string[]) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            )}
        />
        <Column
            title="Action"
            key="action"
            render={(_: any, record: DataType) => (
                <Space size="middle">
                    <a>Invite {record.lastName}</a>
                    <a>Delete</a>
                </Space>
            )}
        /> */}
        </Table>
    </div>

);

export default DataTable;