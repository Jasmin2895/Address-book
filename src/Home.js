import React, {useState, useEffect} from "react";
import UserList from './UserList';
import UserDetails from './UserDetails';
import useFetch from './useFetch';
import "./home.scss"

const Home = () => {
    const [userId, setSelectedUserId] = useState(1)
    const { data: people, isPending, error } = useFetch('http://localhost:8000/people');
    console.log("people", people)
    
    // people.sort((a,b)=> {
    //     return a.name-b.name
    // })

    const handleUserId = (userId) => {
        setSelectedUserId(userId)
    }


    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { people && <UserList className="user-list" people={people} selectedUserId={handleUserId} />}
            { people && <UserDetails className="user-details" userId={userId}></UserDetails>} 
        </div>
     );
}
 
export default Home;