import React from 'react';
import useAuth from '../../Context/useAuth';
import AddProduct from './Admin/AddProduct/AddProduct';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageOrder from './Admin/ManageOrder/ManageOrder';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import MyOrder from './User/MyOrder';
import Review from './User/Review';

const Dashboard = () => {
    const {admin} = useAuth()
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            {admin ? <div>
                <ManageOrder></ManageOrder>
                <MakeAdmin></MakeAdmin>
                <AddProduct></AddProduct>
            </div>: <div>
                <MyOrder></MyOrder>
                <Review></Review>
                </div>}
        </div>
    );
};

export default Dashboard;