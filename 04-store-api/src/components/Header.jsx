import "./Header.css"
import Filters from './Filters'

const Header = ({setFilters}) => {


  return (
    <>
    <h1> Store API 🛒 </h1>
    <Filters setFilters={setFilters} />
    </>
  )
}

export default Header