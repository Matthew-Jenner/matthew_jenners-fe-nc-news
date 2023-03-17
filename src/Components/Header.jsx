import { Link } from "react-router-dom"

function Header(){
return (
    <div>
    <h1 className="header">Matthews' News</h1>
    <Link to = {"/users"}>
    <button className="change_user_button">Change User</button>
    </Link>
    </div>
)
}
export default Header