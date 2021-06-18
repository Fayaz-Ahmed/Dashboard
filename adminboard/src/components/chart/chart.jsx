import React from 'react';
import "./chart.css"
import {LineChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


function Chart({title, data, dataKey, grid}) {


    return (
        <div className="chart">
            <h3 className="chartTitle">
                {title}
            </h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#5550bd"/>
                        <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                        <YAxis/>
                        <Tooltip/>
                        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                        {/*{grid && <Area type="monotone" dataKey="name" stroke="#8884d8" fill="#8884d8"/>}*/}
                    {/*{grid && <CartesianGrid strokeDasharray="3 3"/>}*/}
                    {/*<XAxis dataKey={dataKey}/>*/}
                    {/*<YAxis/>*/}
                    {/*<Tooltip/>*/}
                    {/*<Area type="monotone" dataKey="name" stroke="#8884d8" fill="#8884d8"/>*/}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;