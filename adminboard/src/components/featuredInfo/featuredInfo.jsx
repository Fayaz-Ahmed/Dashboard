import React from 'react';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';
import "./featuredInfo.css"

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem1">
                <span className="featuredTitle">
                    Users
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">4,545</span>
                    <span className="featuredMoneyRate">-4.7 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem2">
                <span className="featuredTitle">
                    Orders
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">6,574</span>
                    <span className="featuredMoneyRate">-1.7 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem3">
                <span className="featuredTitle">
                    Clients
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2,234</span>
                    <span className="featuredMoneyRate">+2.7 <ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
        </div>
    );
}

export default FeaturedInfo;