const Card = ({  title, description, images }) => {
  return (
    <li>
      <img src={images[0]} alt={description} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  )
}

export default Card