import React from 'react';
import "./home.css"
import FeaturedInfo from "../../featuredInfo/featuredInfo";
import Chart from "../../chart/chart";
import {userData} from "../../../dummyData";
import WidgetSmall from "../../widgetSmall/widgetSmall";
import WidgetLarge from "../../widgetLarge/widgetLarge";
import Chart2 from "../../chart/chart2";

function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="Active Customers" grid dataKey="Active Customer"/>
            <Chart2/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    );
}

export default Home;