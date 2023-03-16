import { useEffect, useState } from "react"
import { getAllUsers } from "../api"
import UserCard from "./UserCard"

function Users(){
const [allUsers, setAllUsers] = useState([])
const[isLoading, setIsLoading] = useState(true)

useEffect(() => {
    setIsLoading(true)
    getAllUsers().then((usersFromApi) => {
        setAllUsers(usersFromApi)
setIsLoading(false)
    })
}, [])


return isLoading ? (
    <h1> Loading....</h1>
) : (

    <div>
    <section>
    <h2> Here are all of the users:</h2>
     {allUsers.map((users) => {
            return  <UserCard key = {users.username} users={users} />
        })}
        </section>
    </div>
)
}

export default Users