import A from "../components/link/A";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

  return (
    <MainContainer>
      Пользователи:
      <ul>
        {users.map(({id, name}) =>
          <li key={id}>
            <A text={name} link={`/users/${id}`}/>
          </li>
        )}
      </ul>
    </MainContainer>
  )
}

export default Users

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await response.json()
  return {
    props: {users}, // will be passed to the page component as props
  }
}