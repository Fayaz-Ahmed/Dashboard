import React from 'react';
import "./header.css";
import {NotificationsActive, Language, Settings} from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
            <div className="headerWrapper">
                <div className="headLeft">
                    <div className="logo">
                        <h1><a href="index.html"><span className="log-w3pvt">E</span>iTech1</a> <label
                            className="sub-des">Computer Software</label></h1>
                    </div>
                </div>
                <div className="headRight">
                    <div className="headerIcons">
                        <NotificationsActive/>
                        <span className="headIconBadge">
                             2
                        </span>
                    </div>
                    <div className="headerIcons">
                        <Language/>
                    </div>
                    <div className="headerIcons">
                        <Settings/>
                    </div>
                    <img src="../assets/images/image.jpg" alt="" className="headAvatar"/>
                </div>
            </div>
        </div>
    );
}

export default Header;