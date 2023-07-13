import { useSession, signIn, signOut } from "next-auth/react"
import styles from "../styles/logIn.module.css"

const logIn = () => {
    const { data: session } = useSession()
    console.log(session)
  if (session) {
    return (
      <>
      <div className={styles.loginSection}>
      <img className={styles.profilePhoto} src={session.user.image} alt="" />
      <h1>
        hello {session.user.name} <br />
        Signed in as {session.user.email} </h1><br />

        </div>
        <button className={styles.signOutBtn} onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
    <div className={styles.btn}>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in Github</button>
      <button className={styles.googleBtn} onClick={()=> signIn("google")}>Sign in Google</button>
      </div>
    </>
  )
}
export default logIn;