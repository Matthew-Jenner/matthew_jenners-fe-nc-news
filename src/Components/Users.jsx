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

console.log(allUsers)
return isLoading ? (
    <h1> Loading....</h1>
) : (

    <div>
    <section>
    <h2> Select your avatar:</h2>
     {allUsers.map((user) => {
            return  <UserCard key = {user.username} user={user} />
        })}
        </section>
    </div>
)
}

export default Users