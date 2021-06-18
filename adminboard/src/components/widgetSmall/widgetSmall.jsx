import React from 'react';
import "./widgetSmall.css"
import {VisibilitySharp} from '@material-ui/icons';

function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Join Customers</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img src="../assets/images/hello.svg" alt="" className="widgetSmallImg"/>
                    <div className="widgetSmallCus">
                        <span className="widgetSmallUsername">James Folk</span>
                        <span className="widgetSmallUserJob">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilitySharp className="widgetSmallIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="../assets/images/hello.svg" alt="" className="widgetSmallImg"/>
                    <div className="widgetSmallCus">
                        <span className="widgetSmallUsername">Marry James </span>
                        <span className="widgetSmallUserJob">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilitySharp className="widgetSmallIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default WidgetSmall;