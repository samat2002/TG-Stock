import DataTable from "./datatable"

function Product() {
    return (
        <div>
            <h1 className="p-2 bg-blue-700 text-white">Product</h1>
            <div className="boder -border-red-500">
                <DataTable />
            </div>
        </div>
    )
}

export default Product