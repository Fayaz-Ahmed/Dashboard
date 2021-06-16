import React from 'react';
import "./home.css"
import FeaturedInfo from "../../featuredInfo/featuredInfo";
import Chart from "../../chart/chart";
import {userData} from "../../../dummyData";

function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Sales" grid dataKey="Active Customer"/>

        </div>
    );
}

export default Home;