import React, { useEffect, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt"; // DataTables styling
import Responsive from "datatables.net-responsive-dt"; // Responsive extension

DataTable.use(DT);
DataTable.use(Responsive);

function TestDataTable() {
    const [tableData, setTableData] = useState<string[][]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const users = await response.json();
                // Map the fetched data to a 2D array
                const formattedData = users.map((user: any) => [user.id, user.name, user.email, user.phone, user.website,]);
                setTableData(formattedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-5 border ">
            <DataTable data={tableData}
                className="display text-sm overflow-y-auto"
                options={{
                    responsive: true, // Enable responsive behavior
                }}>
                <thead className="bg-blue-800 text-white ">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
            </DataTable>
        </div>
    );
}

export default TestDataTable;
