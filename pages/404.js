import A from "../components/link/A";

export default function Error() {
  return (
    <>
      <h1>404 - Not Found</h1>
      <A text={'На главную'} link={'/'}/>
    </>
  )
}