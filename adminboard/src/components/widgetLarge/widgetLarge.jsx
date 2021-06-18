import React from 'react';
import "./widgetLarge.css"

function WidgetLarge() {
    const Button = ({type}) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTitle">Current transactions</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">User</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Amount</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="../assets/images/hello.svg" alt="" className="widgetLargeImg"/>
                        <span className="widgetLargeUsername">Ronaldo</span>
                    </td>
                    <td className="widgetLargeDate">21/06/2021</td>
                    <td className="widgetLargeAmount">$120.00</td>
                    <td className="widgetLargeStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="../assets/images/hello.svg" alt="" className="widgetLargeImg"/>
                        <span className="widgetLargeUsername">Messi</span>
                    </td>
                    <td className="widgetLargeDate">21/06/2021</td>
                    <td className="widgetLargeAmount">$178.00</td>
                    <td className="widgetLargeStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="../assets/images/hello.svg" alt="" className="widgetLargeImg"/>
                        <span className="widgetLargeUsername">Ramos</span>
                    </td>
                    <td className="widgetLargeDate">20/06/2021</td>
                    <td className="widgetLargeAmount">$130.00</td>
                    <td className="widgetLargeStatus"><Button type="Pending"/></td>
                </tr>
            </table>
        </div>
    );
}

export default WidgetLarge;