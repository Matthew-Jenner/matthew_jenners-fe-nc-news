import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/Users"

function UserCard({user}){
const {user:loggedInUser, setUser} = useContext(UserContext)
console.log(user)
console.log(loggedInUser)
    return (
        <div className="user_card">
       
            <img className = "article_image" src={user.avatar_url} alt={`avatar of ${user.name}`}></img>
            <div className = "article_container">
           <button onClick={()=> setUser(user)}>log in as {user.username}</button>
            </div>
            
        </div>
    )
}

export default UserCard