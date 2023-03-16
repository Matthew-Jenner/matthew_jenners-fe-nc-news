import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/Users"

function UserCard({users}){
const {user:loggedInUser, setUser} = useContext(UserContext)
console.log(loggedInUser)

    return (
        <div className="user_card">
       
            <img className = "article_image" src={users.avatar_url} alt={`avatar of ${users.name}`}></img>
            <div className = "article_container">
            <Link to = {`/`}><button onClick={()=> setUser(users)}>log in as {users.username}</button></Link>
            </div>
            
        </div>
    )
}

export default UserCard