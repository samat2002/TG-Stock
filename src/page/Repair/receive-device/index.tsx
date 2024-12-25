import DataTable from "./datatable"

function ReceiveDevice() {
    return (
        <div>
            <h1 className="p-2 bg-blue-700 text-white">Sale Status</h1>
            <div className="boder -border-red-500">
                <DataTable />
            </div>
        </div>
    )
}

export default ReceiveDevice
