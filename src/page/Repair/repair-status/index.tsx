import DataTable from "./datatable"

function RepairStatus() {
    return (
        <div>
            <h1 className="p-2 bg-blue-700 text-white">Repair Status</h1>
            <div className="boder -border-red-500">
                <DataTable />
            </div>
        </div>
    )
}

export default RepairStatus
