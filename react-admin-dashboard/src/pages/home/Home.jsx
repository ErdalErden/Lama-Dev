import React from 'react';
import "./home.css";
import FeaturedInfo from '../../components/feturedInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" dataKey="Active User" grid />
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>          
        </div>
    </div>
  )
}
