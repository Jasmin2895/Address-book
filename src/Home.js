import UserList from './UserList';
import UserDetails from './UserDetails';
import useFetch from './useFetch';

const Home = () => {
    
    const { data: people, isPending, error } = useFetch('http://localhost:8000/people');

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { people && <UserList people={people} />} 
        </div>
     );
}
 
export default Home;