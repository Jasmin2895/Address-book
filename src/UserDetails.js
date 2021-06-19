import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const UserDetails = () => {
    const { id } = useParams();
    const { data: people, error, isPending } = useFetch('http://localhost:8000/people/' + id);
    const history = useHistory();

    return ( 
        <div className="user-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { people && (
                <article>
                    <h2>{ people.name }</h2>
                    <p>Written by { people.name }</p>
                    <div>{ people.name }</div>
                    
                </article>
            )}
        </div>
     );
}

export default UserDetails;