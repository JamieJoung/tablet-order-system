// import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MenuList from "../components/menu/MenuList.tsx";


function OrderPage() {

    return (
        <div className="back-wrap">
            <Header />
            <div className="order-container">
                <MenuList />
            </div>
            <Footer />
        </div>
    );
}

export default OrderPage;