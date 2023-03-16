import { Link } from "react-router-dom"

function UserCard({users}){
    return (
        <div className="user_card">
        <Link to = {`/`}>
            <img className = "article_image" src={users.avatar_url} alt={`avatar of ${users.name}`}></img>
            <div className = "article_container">
            <h2>{users.username}</h2>
            </div>
            </Link>
        </div>
    )
}

export default UserCard