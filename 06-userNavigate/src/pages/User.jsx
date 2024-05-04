import { useNavigate, useParams } from "react-router-dom"
import { getUser,  deleteUser } from "../users"

const User = () => {
  const {idUser} = useParams()
  const navigate = useNavigate()
  const user = getUser(idUser)

  const handleDelete = () => {
    deleteUser(idUser)
    navigate("/users")
  }

  if (!user) {
    return <div>No se encuentra el usuario</div>
  }
  
  return (
    <li>
      <h4>{user.name}</h4>
      <h3>@{user.username}</h3>
      <strong>website: {user.website}</strong>
      <br />
      <strong>phone: {user.phone}</strong>
      <button onClick={handleDelete} style={{background: "red"}}>DELETE</button>
    </li>
  )
}

export default User