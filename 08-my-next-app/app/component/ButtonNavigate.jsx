"use client"

import { useRouter } from 'next/navigation'


const ButtonNavigate = ({}) => {

  const { push } = useRouter()

  const handleClick = () => {
    push("/about")
  }

  return (
    <button onClick={handleClick}>Go to About</button>
  )
}

export default ButtonNavigate