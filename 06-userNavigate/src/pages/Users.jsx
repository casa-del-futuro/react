import { Link, Outlet } from "react-router-dom"
import { getAllUsers } from "../users"


const Users = () => {
  return (
    <>
      <h1>Users</h1>
      <section className="users">
        <ul>
          {getAllUsers().map(user =>{
            return(
              <li key={user.id}>
                <Link to={"/users/"+ user.id }><h4>{user.name}</h4></Link>
              </li>
            )
          })}
        </ul>
        <Outlet/>
      </section>
    </>
  )
}

export default Users