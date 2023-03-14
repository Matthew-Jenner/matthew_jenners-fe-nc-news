import { Link } from "react-router-dom"

function NavigationBar(){
    return (
        <div>
        <Link to = {"/"}> Home </Link>
        <button>Topic</button>
        <button>sort by:</button>
        </div>
    )
}
export default NavigationBar