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
                <Route path="/receive-product" element={<MainLayout><ReceiveProduct /></MainLayout>} />
                <Route path="/reserve" element={<MainLayout><Reserve /></MainLayout>} />
                <Route path="/return" element={<MainLayout><Return /></MainLayout>} />
                <Route path="/sale-history" element={<MainLayout><SaleHistory /></MainLayout>} />
                <Route path="/sale-status" element={<MainLayout><SaleStatus /></MainLayout>} />
                {/* Enhancement */}
            </Routes>
        </Router>
    );
}

export default AppRoute;
