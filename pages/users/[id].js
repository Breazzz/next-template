import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

export default function({user}) {
  const router = useRouter()
  return (
    <MainContainer>
      Пользователь id: {router.query.id}
      <div>Имя пользователя: {user.name}</div>
      <div>Email: {user.email}</div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()
  return {
    props: {user}, // will be passed to the page component as props
  }
}