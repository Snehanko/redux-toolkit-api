import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../features/userDataSlice';
import { alertPop } from '../features/userDataSlice';

const Home = () => {

    const data = useSelector((state) => state.app);
    console.log("data", data.users)
    console.log("data", data.users.length)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getUsers())
        dispatch(alertPop(data.users.length))
    }

    return (
        <div>
            <button onClick={handleClick}>Click here for Data</button>
            <span>Home Page</span>
            <ul>List of Arrays </ul>
            {

                data.users.map(user => <li key={user.id}>{user.name}</li>)
            }
        </div>
    )
}

export default Home
