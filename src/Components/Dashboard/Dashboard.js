import React from 'react';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import MyOrder from './User/MyOrder';
import Review from './User/Review';

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <MyOrder></MyOrder>
            <Review></Review>
        </div>
    );
};

export default Dashboard;