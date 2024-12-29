import React, { useState } from 'react';
import { Table, Input, Card, Row, Col, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';

interface ReceiptData {
    key: string;
    sel?: boolean;
    poId: string;
    poLine: string;
    company: string;
    quantity: number;
    serialNumber?: string;
    spare?: boolean;
    status?: string;
    receiptDate: string;
    deliveryDate: string;
}

const DataTable: React.FC = () => {
    // Search input states
    const [poId, setPoId] = useState('');
    const [itemName, setItemName] = useState('');
    const [company, setCompany] = useState('');
    const [serialNumber, setSerialNumber] = useState('');

    // Applied filter states
    const [appliedFilters, setAppliedFilters] = useState({
        poId: '',
        itemName: '',
        company: '',
        serialNumber: ''
    });

    const handleSearch = () => {
        setAppliedFilters({
            poId,
            itemName,
            company,
            serialNumber
        });
    };

    const columns: ColumnsType<ReceiptData> = [
        {
            title: 'Sel',
            dataIndex: 'sel',
            key: 'sel',
            width: 60,
            render: (_, record) => <input type="checkbox" checked={record.sel} />,
        },
        {
            title: 'PO ID',
            dataIndex: 'poId',
            key: 'poId',
            sorter: (a, b) => a.poId.localeCompare(b.poId),
        },
        {
            title: 'PO Line',
            dataIndex: 'poLine',
            key: 'poLine',
            sorter: (a, b) => a.poLine.localeCompare(b.poLine),
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            sorter: (a, b) => a.company.localeCompare(b.company),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            width: 100,
            sorter: (a, b) => a.quantity - b.quantity,
        },
        {
            title: 'Serial Number',
            dataIndex: 'serialNumber',
            key: 'serialNumber',
        },
        {
            title: 'Spare',
            dataIndex: 'spare',
            key: 'spare',
            width: 80,
            render: spare => spare ? '✓' : '',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Receipt Date',
            dataIndex: 'receiptDate',
            key: 'receiptDate',
            sorter: (a, b) => a.receiptDate.localeCompare(b.receiptDate),
        },
        {
            title: 'Delivery Date',
            dataIndex: 'deliveryDate',
            key: 'deliveryDate',
            sorter: (a, b) => a.deliveryDate.localeCompare(b.deliveryDate),
        },
    ];

    const data: ReceiptData[] = [
        {
            key: '1',
            poId: '6711-076',
            poLine: '5.00000009',
            company: 'SOFT STAR : PSR9...SOFT',
            quantity: 1,
            serialNumber: '',
            spare: false,
            status: '',
            receiptDate: '29/11/2567',
            deliveryDate: '10/12/2567',
        },
    ];

    const filteredData = data.filter(item =>
        item.poId.toLowerCase().includes(appliedFilters.poId.toLowerCase()) &&
        item.poLine.toLowerCase().includes(appliedFilters.itemName.toLowerCase()) &&
        item.company.toLowerCase().includes(appliedFilters.company.toLowerCase()) &&
        (item.serialNumber || '').toLowerCase().includes(appliedFilters.serialNumber.toLowerCase())
    );

    return (
        <Card>
            <Row gutter={[16, 16]} className="mb-4">
                <Col span={5}>
                    <Input
                        placeholder="OP ID"
                        value={poId}
                        onChange={e => setPoId(e.target.value)}
                        onPressEnter={handleSearch}
                    />
                </Col>
                <Col span={5}>
                    <Input
                        placeholder="Item Name"
                        value={itemName}
                        onChange={e => setItemName(e.target.value)}
                        onPressEnter={handleSearch}
                    />
                </Col>
                <Col span={5}>
                    <Input
                        placeholder="Company"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        onPressEnter={handleSearch}
                    />
                </Col>
                <Col span={5}>
                    <Input
                        placeholder="Serial Number"
                        value={serialNumber}
                        onChange={e => setSerialNumber(e.target.value)}
                        onPressEnter={handleSearch}
                    />
                </Col>
                <Col span={4}>
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        onClick={handleSearch}
                        block
                    >
                        Search
                    </Button>
                </Col>
            </Row>
            <Table
                className='text-sm'
                columns={columns}
                dataSource={filteredData}
                pagination={{
                    total: filteredData.length,
                    pageSize: 10,
                    showTotal: (total, range) =>
                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    showQuickJumper: true,
                }}
                scroll={{ x: true }}
                size="middle"
            />
        </Card>
    );
};

export default DataTable;