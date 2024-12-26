import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home/index';
import LogIn from './page/Login/index';

{/* Enhancement */ }
import Employee from './page/Enhancement/employee/index.tsx';
import JobTable from './page/Enhancement/getJob.tsx/index.tsx';
import Borrow from './page/Enhancement/borrow/index.tsx';
import BorrowRepair from './page/Enhancement/borrow-repair/index.tsx';
import CancelHistory from './page/Enhancement/cancellation-history/index.tsx';
import Claim from './page/Enhancement/claim/index.tsx';
import ClaimAccept from './page/Enhancement/claim-accept/index.tsx';
import Customer from './page/Enhancement/customer/index.tsx';
import Department from './page/Enhancement/department/index.tsx';
import Inventory from './page/Enhancement/inventory/index.tsx';
import Other from './page/Enhancement/other/index.tsx';
import POStructure from './page/Enhancement/po-structure/index.tsx';
import Product from './page/Enhancement/product/index.tsx';
import Receipt from './page/Enhancement/receipt/index.tsx';
import ReceiveProduct from './page/Enhancement/receive-product/index.tsx';
import Reserve from './page/Enhancement/reserve/index.tsx';
import Return from './page/Enhancement/return/index.tsx';
import SaleHistory from './page/Enhancement/sale-history/index.tsx';
import SaleStatus from './page/Enhancement/sale-status/index.tsx';
import MainLayout from './layout/MainLayout.tsx';
{/* JobOrder */ }
import Document from './page/JobOrder/document/index.tsx';
import JobDescription from './page/JobOrder/job-description/index.tsx';
import JobSearch from './page/JobOrder/job-search/index.tsx';
import Padding from './page/JobOrder/padding/index.tsx';
import ReceiveJob from './page/JobOrder/receive-job/index.tsx';
import RemainItem from './page/JobOrder/remain-item/index.tsx';
import Summary from './page/JobOrder/summary/index.tsx';
import Supplier from './page/JobOrder/supplier/index.tsx';
import SupplierNojob from './page/JobOrder/supplier-nojob/index.tsx';
import Vender from './page/JobOrder/vender/index.tsx';
import InventorySummary from './page/Report/inventory-summary/index.tsx';
import ReportBorrow from './page/Report/report-borrow/index.tsx';
import HistoryReport from './page/Report/history-report/index.tsx';
import ReportReserve from './page/Report/report-reserve/index.tsx';
import InventoryHistory from './page/Report/inventory-history/index.tsx';
import ReceiveProductRep from './page/Report/receive-product/index.tsx';

function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route path="/login" element={<LogIn />} />
                {/* Enhancement */}
                <Route path="/borrow" element={<MainLayout><Borrow /></MainLayout>} />
                <Route path="/borrow-repair" element={<MainLayout><BorrowRepair /></MainLayout>} />
                <Route path="/cancellation-history" element={<MainLayout><CancelHistory /></MainLayout>} />
                <Route path="/claim" element={<MainLayout>< Claim /></MainLayout>} />
                <Route path="/claim-accept" element={<MainLayout><ClaimAccept /></MainLayout>} />
                <Route path="/customer" element={<MainLayout><Customer /></MainLayout>} />
                <Route path="/department" element={<MainLayout><Department /></MainLayout>} />
                <Route path="/employee" element={<MainLayout><Employee /></MainLayout>} />
                <Route path="/getjob" element={<MainLayout>< JobTable /></MainLayout>} />
                <Route path="/inventory" element={<MainLayout>< Inventory /></MainLayout>} />
                <Route path="/other" element={<MainLayout><Other /></MainLayout>} />
                <Route path="/po-structure" element={<MainLayout><POStructure /></MainLayout>} />
                <Route path="/product" element={<MainLayout><Product /></MainLayout>} />
                <Route path="/recript" element={<MainLayout>< Receipt /></MainLayout>} />
                <Route path="/receive-Enhance" element={<MainLayout><ReceiveProduct /></MainLayout>} />
                <Route path="/reserve" element={<MainLayout><Reserve /></MainLayout>} />
                <Route path="/return" element={<MainLayout><Return /></MainLayout>} />
                <Route path="/sale-history" element={<MainLayout><SaleHistory /></MainLayout>} />
                <Route path="/sale-status" element={<MainLayout><SaleStatus /></MainLayout>} />
                {/* Report */}
                <Route path="/inventory-summary" element={<MainLayout><InventorySummary /></MainLayout>} />
                <Route path="/job-report-borrow" element={<MainLayout><ReportBorrow /></MainLayout>} />
                <Route path="/history-report" element={<MainLayout><HistoryReport /></MainLayout>} />
                <Route path="/receive-product" element={<MainLayout>< ReceiveProductRep /></MainLayout>} />
                <Route path="/report-reserve" element={<MainLayout><ReportReserve /></MainLayout>} />
                <Route path="/inventory-history" element={<MainLayout><InventoryHistory /></MainLayout>} />
                {/* Job Order */}
                <Route path="/document" element={<MainLayout><Document /></MainLayout>} />
                <Route path="/job-description" element={<MainLayout><JobDescription /></MainLayout>} />
                <Route path="/job-search" element={<MainLayout><JobSearch /></MainLayout>} />
                <Route path="/padding" element={<MainLayout>< Padding /></MainLayout>} />
                <Route path="/receive-job" element={<MainLayout><ReceiveJob /></MainLayout>} />
                <Route path="/remain-item" element={<MainLayout><RemainItem /></MainLayout>} />
                <Route path="/summary" element={<MainLayout><Summary /></MainLayout>} />
                <Route path="/supplier" element={<MainLayout><Supplier /></MainLayout>} />
                <Route path="/supplier-nojob" element={<MainLayout>< SupplierNojob /></MainLayout>} />
                <Route path="/vender" element={<MainLayout>< Vender /></MainLayout>} />
                {/* Admin */}

                {/* Transpot */}

                {/* Repair Systems */}

                {/* Settings*/}

                {/* Comment*/}

            </Routes>
        </Router>
    );
}

export default AppRoute;
