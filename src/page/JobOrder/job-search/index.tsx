import DataTable from "./datatable"

function JobSearch() {
    return (
        <div>
            <h1 className="p-2 bg-blue-700 text-white">JobSearch</h1>
            <div className="boder -border-red-500">
                <DataTable />
            </div>
        </div>
    )
}

export default JobSearch
