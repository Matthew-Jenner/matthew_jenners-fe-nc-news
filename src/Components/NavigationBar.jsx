import { Link } from "react-router-dom"

function NavigationBar(){

    
    return (
        <nav className="nav_options">
            <Link to = {"/"}> Home </Link>
            <h2>Topics:</h2>
            <Link to = {"/"}> All </Link>
            <Link to={"/topics/coding"}> Coding </Link>
            <Link to={"/topics/cooking"}> Cooking </Link>
            <Link to={"/topics/football"}> Football </Link>
        </nav>
    )
}
export default NavigationBar