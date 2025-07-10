import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div className="main_layout">
            <Navbar/>

            <div className="main_container">
                <Outlet/>
            </div>

            <Footer/>
        </div>
    )
}