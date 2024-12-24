import DataTable from "./datatable"

function Inventory() {
    return (
        <div>
            <h1 className="p-2 bg-blue-700 text-white">Inventory</h1>
            <div className="boder -border-red-500">
                <DataTable />
            </div>
        </div>
    )
}

export default Inventory
