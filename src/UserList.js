import { Link } from "react-router-dom";

const UserList = ({people}) => {
        return ( 
        <div className="user-list">
            {people.map(people => 
                <div className="user-preview" key={people.id}>
                    <Link>
                        <p>{people.name}</p>
                    </Link> 
                     
                </div>)}
        </div>
     );
}
 
export default UserList;