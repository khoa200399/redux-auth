import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useGetUsersQuery } from "../../redux/api";
import { selectUser } from "../../redux/userSlice";
import { Redirect } from "react-router-dom";

const Dashboard: React.FC = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);
    const { data, isLoading, error } = useGetUsersQuery('');
    console.log(user)
    console.log('data',data)
    console.log('err',error)
    // if (!user || error?.originalStatus === 401) {
    //     return <Redirect to="/login" />;
    // }
    return <>
        Dashboard
        <button onClick={() => dispatch(logout()) }>Log out</button>
    </>
}

export default Dashboard;