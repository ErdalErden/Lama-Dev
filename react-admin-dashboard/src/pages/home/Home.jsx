import React from 'react';
import "./home.css";
import FeaturedInfo from '../../components/feturedInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from '../../dummyData';

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" dataKey="Active User" grid />
    </div>
  )
}

