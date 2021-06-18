import React, {useState} from 'react';
import "./userList.css"
import {DataGrid} from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {userRows} from "../../../dummyData"
import {Link} from "react-router-dom";
import {Slide, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {css} from "glamor";
// toast.configure();
toast.configure({
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    transition: Slide,
    pauseOnFocusLoss: false,
    className: css({
        backgroundColor: 'red',
    }),
    bodyClassName: css({
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
    })
});

function UserList() {
    const [data, setData] = useState(userRows);
    const [showAlert, setShowAlert] = useState(false);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
        toast.success('User Successfully Deleted');
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt=""/>
                        {params.row.Username}
                    </div>
                )
            }
        },
        {field: 'email', headerName: 'Email', width: 200},
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 170,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 170,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];


    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection/>
        </div>
    );
}


export default UserList;