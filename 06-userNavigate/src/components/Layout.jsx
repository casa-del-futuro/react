import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link> { " | "}
        <Link to="/about">About</Link> {" | "}
        <Link to="/users">Users</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout 