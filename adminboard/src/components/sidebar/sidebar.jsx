import React from 'react';
import "./sidebar.css"
import {
    LineStyleTwoTone,
    Timeline,
    TrendingUp,
    PeopleAlt,
    ShoppingCart,
    MonetizationOn,
    Assessment,
    MailOutline,
    Message,
    Feedback,Settings,Report
} from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleTwoTone className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PeopleAlt className="sidebarIcon"/>
                            Customers
                        </li>
                        <li className="sidebarListItem">
                            <ShoppingCart className="sidebarIcon"/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <MonetizationOn className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <Assessment className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Mails
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon"/>
                            Messages
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon"/>
                            Feedbacks
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <LineStyleTwoTone className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>
                            Reports
                        </li>
                        <li className="sidebarListItem">
                            <Settings className="sidebarIcon"/>
                            Settings
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;