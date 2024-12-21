import DataTable from "./datatable"

function Home() {
    return (
        <div>
            <h1 className="p-2 bg-blue-700 text-white">Department Maintenancce</h1>
            <div className="boder -border-red-500">
                <DataTable />
            </div>
        </div>
    )
}

export default Home
