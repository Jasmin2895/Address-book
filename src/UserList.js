import React from "react";
import "./userList.scss"
const UserList = ({people, selectedUserId}) => {
    let alphabetOrder = {}
    console.log("user list", people)
    people.forEach(element => {
        if(alphabetOrder[element.name[0]]){
            alphabetOrder[element.name[0]].push({id:element.id, name:element.name})
        }else {
            alphabetOrder[element.name[0]] = [{id:element.id, name:element.name}]
        }
    });

    console.log("alphabetOrder", alphabetOrder)

    const selectUserId = (userId) => {
        selectedUserId(userId)
    }
        return ( 
        <div className="user-list">
            {Object.keys(alphabetOrder).map(alphabets=> 
                <><h3>{alphabets}</h3>
                {alphabetOrder[alphabets].map(people=> {
                    return (<div onClick={()=> selectUserId(people.id)} className="user-preview" key={people.id}>
                       <p>{people.name}</p>
                    </div>)})
                }</>
                
            )}
        </div>
     );
}
 
export default UserList;