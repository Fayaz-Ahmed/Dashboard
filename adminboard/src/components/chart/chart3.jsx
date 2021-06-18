import React from 'react';

function Chart3() {
    return (

        <div className="charts__right">
            <div className="charts__right__title">
                <div>
                    <h1>Last Year Stat Reports</h1>
                    <p>EiTech1, Colombo, SL</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
                <div className="card1">
                    <h1>Income</h1>
                    <p>$751,300</p>
                </div>

                <div className="card2">
                    <h1>Sales</h1>
                    <p>$1,243,200</p>
                </div>

                <div className="card3">
                    <h1>Users</h1>
                    <p>39000</p>
                </div>

                <div className="card4">
                    <h1>Orders</h1>
                    <p>188190</p>
                </div>
            </div>
        </div>
    );
}

export default Chart3;