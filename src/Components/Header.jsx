import { Link } from "react-router-dom"

function Header(){
return (
    <div>
    <h1 className="header">Matthews' News</h1>
    <Link to = {"/users"}>
    <button>Log in</button>
    </Link>
    </div>
)
}
export default Header