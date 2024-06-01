import ButtonNavigate from "./component/ButtonNavigate"
import Image from "next/image"

export default function Home() {

  return (
    <main>
      <h1>Home</h1>
      <Image style={{background: "white"}} src={"/vercel.svg"} alt="Vercel Logo" width={72} height={16} />
      <ButtonNavigate />
    </main>
  )
}
