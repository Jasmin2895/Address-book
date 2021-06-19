import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import "./userDetails.scss"

const UserDetails = ({userId}) => {
    // const { id } = useParams();
    const { data: people, error, isPending } = useFetch('http://localhost:8000/people/' + userId);
    // const history = useHistory();

    console.log("user details", people, error, isPending)
    const renderEducation = (data) => {
        return(<div className="education-details">
            {data.map((edu, index)=> {
                return <>
                <div className="year">{`${edu.startYear}-${edu.endYear}`}</div>
                <div className="college-course">
                    <h4>{edu.institution}</h4>
                    <p>{edu.degree}</p>
                </div>
                </>
            })}
        </div>)
    }

    const renderExpereience = (data) => {
        return(<div className="experience-details">
            {data.map((edu, index)=> {
                return <>
                <div className="year">{`${edu.startYear}-${edu.endYear? edu.endYear:'Present'}`}</div>
                <div className="company-details">
                    <h4>{edu.institution}</h4>
                    <p>{edu.title}</p>
                </div>
                </>
            })}
        </div>)
    }

    return ( 
        <div className="user-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { people && (
               <><section className="personal-details">
                    <article className="header">
                        <div className="avatar"></div>
                    </article>
                    <article className="personal-data">
                        <h2>{ people.name }</h2>
                        <p>Written by { people.name }</p>
                        <div>{ people.name }</div>
                    </article>
                </section>
                <section className="education">
                    <h2>EDUCATION</h2>
                    
                    {renderEducation(people.education)}
                    

                </section>
                <section className="experience">
                    <h2>EDUCATION</h2>
                    {renderExpereience(people.workExperience)}
                </section>
                </>
            )}
        </div>
     );
}

export default UserDetails;