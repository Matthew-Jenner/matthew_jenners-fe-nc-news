import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/Users"

function UserCard({user}){
const {user:loggedInUser, setUser} = useContext(UserContext)
console.log(loggedInUser)
    return (
        <div className="user_card" onClick={()=> setUser(user)}>
        <Link to = {"/"}>
            <img className = "user_image" src={user.avatar_url} alt={`avatar of ${user.name}`}></img>            
           <p> {user.username}</p>
            </Link>
            
        </div>
    )
}

export default UserCard