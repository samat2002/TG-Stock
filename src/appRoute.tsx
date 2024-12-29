import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home/index';
import LogIn from './page/Login/index';
import MainLayout from './layout/MainLayout.tsx';

{/* Enhancement */ }
import Department from './page/Enhancement/department/index.tsx';
import Employee from './page/Enhancement/employee/index.tsx';
import Product from './page/Enhancement/product/index.tsx';
import Customer from './page/Enhancement/customer/index.tsx';
import ReceiveProduct from './page/Enhancement/receive-product/index.tsx';
import Inventory from './page/Enhancement/inventory/index.tsx';
import Reserve from './page/Enhancement/reserve/index.tsx';
import Borrow from './page/Enhancement/borrow/index.tsx';
import Return from './page/Enhancement/return/index.tsx';
import BorrowRepair from './page/Enhancement/borrow-repair/index.tsx';
import Other from './page/Enhancement/other/index.tsx';
import Claim from './page/Enhancement/claim/index.tsx';
import ClaimAccept from './page/Enhancement/claim-accept/index.tsx';
import SaleHistory from './page/Enhancement/sale-history/index.tsx';
import POStructure from './page/Enhancement/po-structure/index.tsx';
import Receipt from './page/Enhancement/receipt/index.tsx';
import SaleStatus from './page/Enhancement/sale-status/index.tsx';
import CancelHistory from './page/Enhancement/cancellation-history/index.tsx';
{/* Report */ }
import InventorySummary from './page/Report/inventory-summary/index.tsx';
import ReportBorrow from './page/Report/report-borrow/index.tsx';
import HistoryReport from './page/Report/history-report/index.tsx';
import ReceiveReport from './page/Report/receive-product/index.tsx';
import ReportReserve from './page/Report/report-reserve/index.tsx';
import InventoryHistory from './page/Report/inventory-history/index.tsx';
{/* Job Order */ }
import JobDescription from './page/JobOrder/job-description/index.tsx';
import Vender from './page/JobOrder/vender/index.tsx';
import JobSearch from './page/JobOrder/job-search/index.tsx';
import ReceiveJob from './page/JobOrder/receive-job/index.tsx';
import Padding from './page/JobOrder/padding/index.tsx';
import RemainItem from './page/JobOrder/remain-item/index.tsx';
import Summary from './page/JobOrder/summary/index.tsx';
import Supplier from './page/JobOrder/supplier/index.tsx';
import SupplierNojob from './page/JobOrder/supplier-nojob/index.tsx';
import Document from './page/JobOrder/document/index.tsx';
{/* Report Job Order */ }
import ReceiveJobReport from './page/ReportJobOrder/ReportStock/index.tsx';
import PenddingReport from './page/ReportJobOrder/PenddingReport/index.tsx';
import SupplierReport from './page/ReportJobOrder/SupplierReport/index.tsx';
import ReportStock from './page/ReportJobOrder/PenddingReport/index.tsx';
{/* Admin */ }
import Admin from './page/Admin/index.tsx';
{/* TransportS System */ }
import TransportDecs from './page/TransportSystem/TransportDecs/index.tsx';
import TransportHistory from './page/TransportSystem/TranssportHistory/index.tsx';
import TransportDaily from './page/TransportSystem/TransportDaily/index.tsx';
{/* Repair Systems */ }
import RepairDesc from './page/RepairSystem/RepairDesc/index.tsx';
import RepairType from './page/RepairSystem/RepairType/index.tsx';
import RepairStatus from './page/RepairSystem/RepairStatus/index.tsx';
import ReceiveDevice from './page/RepairSystem/ReceiveDevice/index.tsx';
import ServiceCenter from './page/RepairSystem/ServiceCenter/index.tsx';
import ReturnDevice from './page/RepairSystem/ReturnDevice/index.tsx';
import StatusJob from './page/RepairSystem/StatusJob/index.tsx';
import StatusDesc from './page/RepairSystem/StatusDesc/index.tsx';
import NotRecieved from './page/RepairSystem/NotRecieved/index.tsx';
{/* Setting */ }
import Setting from './page/Setting/index.tsx';
{/* Comment Board*/ }
import CommentBoard from './page/CommentBoard/index.tsx';


function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route path="/login" element={<LogIn />} />
                {/* Enhancement */}
                <Route path="/department" element={<MainLayout><Department /></MainLayout>} />
                <Route path="/employee" element={<MainLayout><Employee /></MainLayout>} />
                <Route path="/product" element={<MainLayout><Product /></MainLayout>} />
                <Route path="/customer" element={<MainLayout><Customer /></MainLayout>} />
                <Route path="/receive-enhance" element={<MainLayout><ReceiveProduct /></MainLayout>} />
                <Route path="/inventory" element={<MainLayout>< Inventory /></MainLayout>} />
                <Route path="/reserve" element={<MainLayout><Reserve /></MainLayout>} />
                <Route path="/borrow" element={<MainLayout><Borrow /></MainLayout>} />
                <Route path="/return" element={<MainLayout><Return /></MainLayout>} />
                <Route path="/borrow-repair" element={<MainLayout><BorrowRepair /></MainLayout>} />
                <Route path="/other" element={<MainLayout><Other /></MainLayout>} />
                <Route path="/claim" element={<MainLayout>< Claim /></MainLayout>} />
                <Route path="/claim-accept" element={<MainLayout><ClaimAccept /></MainLayout>} />
                <Route path="/sale-history" element={<MainLayout><SaleHistory /></MainLayout>} />
                <Route path="/po-structure" element={<MainLayout><POStructure /></MainLayout>} />
                <Route path="/recript" element={<MainLayout>< Receipt /></MainLayout>} />
                <Route path="/sale-status" element={<MainLayout><SaleStatus /></MainLayout>} />
                <Route path="/cancellation-history" element={<MainLayout><CancelHistory /></MainLayout>} />
                {/* Report */}
                <Route path="/inventory-summary" element={<MainLayout><InventorySummary /></MainLayout>} />
                <Route path="/report-borrow" element={<MainLayout><ReportBorrow /></MainLayout>} />
                <Route path="/history-report" element={<MainLayout><HistoryReport /></MainLayout>} />
                <Route path="/receive-report" element={<MainLayout>< ReceiveReport /></MainLayout>} />
                <Route path="/report-reserve" element={<MainLayout><ReportReserve /></MainLayout>} />
                <Route path="/inventory-history" element={<MainLayout><InventoryHistory /></MainLayout>} />
                {/* Job Order */}
                <Route path="/job-description" element={<MainLayout><JobDescription /></MainLayout>} />
                <Route path="/vender" element={<MainLayout>< Vender /></MainLayout>} />
                <Route path="/search-job" element={<MainLayout><JobSearch /></MainLayout>} />
                <Route path="/receive-job" element={<MainLayout><ReceiveJob /></MainLayout>} />
                <Route path="/padding" element={<MainLayout>< Padding /></MainLayout>} />
                <Route path="/supplier" element={<MainLayout><Supplier /></MainLayout>} />
                <Route path="/remaining" element={<MainLayout><RemainItem /></MainLayout>} />
                <Route path="/supplier-nojob" element={<MainLayout>< SupplierNojob /></MainLayout>} />
                <Route path="/document" element={<MainLayout>< Document /></MainLayout>} />
                <Route path="/shipping" element={<MainLayout><Summary /></MainLayout>} />
                <Route path="/joborder-summary" element={<MainLayout><Summary /></MainLayout>} />
                {/*Report Job Order */}
                <Route path="/receivejob-report" element={<MainLayout><ReceiveJobReport /></MainLayout>} />
                <Route path="/pendding-report" element={<MainLayout><PenddingReport /></MainLayout>} />
                <Route path="/supplier-report" element={<MainLayout><SupplierReport /></MainLayout>} />
                <Route path="/report-stock" element={<MainLayout><ReportStock /></MainLayout>} />
                {/* Admin */}
                <Route path="/admin" element={<MainLayout><Admin /></MainLayout>} />
                {/* Transpot Systems*/}
                <Route path="/transport-descriptsion" element={<MainLayout><TransportDecs /></MainLayout>} />
                <Route path="/transport-history" element={<MainLayout><TransportHistory /></MainLayout>} />
                <Route path="/transport-daily" element={<MainLayout><TransportDaily /></MainLayout>} />
                {/* Repair Systems */}
                <Route path="/repair-desc" element={<MainLayout><RepairDesc /></MainLayout>} />
                <Route path="/repair-type" element={<MainLayout><RepairType /></MainLayout>} />
                <Route path="/repair-status" element={<MainLayout><RepairStatus /></MainLayout>} />
                <Route path="/receive-device" element={<MainLayout><ReceiveDevice /></MainLayout>} />
                <Route path="/service-center" element={<MainLayout><ServiceCenter /></MainLayout>} />
                <Route path="/return-device" element={<MainLayout><ReturnDevice /></MainLayout>} />
                <Route path="/status-job" element={<MainLayout><StatusJob /></MainLayout>} />
                <Route path="/status-desc" element={<MainLayout><StatusDesc /></MainLayout>} />
                <Route path="/not-received" element={<MainLayout><NotRecieved /></MainLayout>} />
                {/* Settings*/}
                <Route path="/setting" element={<MainLayout><Setting /></MainLayout>} />
                {/* Comment Board*/}
                <Route path="/comment-board" element={<MainLayout><CommentBoard /></MainLayout>} />
            </Routes>
        </Router>
    );
}

export default AppRoute;
