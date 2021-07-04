import A from "./link/A";

const MainContainer = ({children}) => {
  return (
    <>
      <header style={{background: '#193038', padding: '10px 20px'}}>
        <A text={'Главная'} link={'/'} />
        <A text={'Пользователи'} link={'/users'} />
      </header>
      <div>
        {children}
      </div>
    </>
  )
}

export default MainContainer