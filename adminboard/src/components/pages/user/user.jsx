import React from 'react';
import "./user.css"
import {
    AddSharp,
    CalendarToday,
    CloudUploadSharp,
    LocationCitySharp,
    MailSharp,
    PermIdentity,
    PhoneAndroidSharp, PlusOne
} from '@material-ui/icons';
import {Link} from "react-router-dom";

function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/addUser">
                    <button className="userAddButton"><AddSharp className="add"/>Create</button>
                </Link>

            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="../assets/images/hello.svg" alt="" className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Bell</span>
                            <span className="userShowUserJob">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Profile Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">anna78</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.10.1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidSharp className="userShowIcon"/>
                            <span className="userShowInfoTitle">+94778366330</span>
                        </div>
                        <div className="userShowInfo">
                            <MailSharp className="userShowIcon"/>
                            <span className="userShowInfoTitle">anna@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationCitySharp className="userShowIcon"/>
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdatedItem">
                                <label>Username</label>
                                <input type="text" placeholder="anna78" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdatedItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Becker" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdatedItem">
                                <label>E-Mail</label>
                                <input type="text" placeholder="anna@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdatedItem">
                                <label>Phone Number</label>
                                <input type="text" placeholder="+94778366330" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdatedItem">
                                <label>Address</label>
                                <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="../assets/images/hello.svg" alt=""/>
                                <label htmlFor="file">
                                    <CloudUploadSharp className="uploadImg"/>
                                </label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default User;