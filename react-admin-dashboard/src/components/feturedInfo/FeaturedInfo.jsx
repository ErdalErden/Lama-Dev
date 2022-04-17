import React from 'react';
import "./featuredInfo.css";
import {ArrowDownward,ArrowUpward} from "@material-ui/icons";

export default function featuredInfo() {
  return (
    <div className='featured'>
        <div className="featureItem">
            <span className="featuredTitle">Revanue</span>
            <div className="feturedMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11,4 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="feturedSub">Compare to last month</span>
        </div>
        <div className="featureItem">
            <span className="featuredTitle">Sales</span>
            <div className="feturedMoneyContainer">
                <span className="featuredMoney">$5,800</span>
                <span className="featuredMoneyRate">-1,4 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="feturedSub">Compare to last month</span>
        </div>
        <div className="featureItem">
            <span className="featuredTitle">Cost</span>
            <div className="feturedMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">+18.3 <ArrowUpward className='featuredIcon positive'/></span>
            </div>
            <span className="feturedSub">Compare to last month</span>
        </div>
    </div>
  )
}
