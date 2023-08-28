import styles from"../page.module.css"

export default function signup(){
    return(
        <main className={styles.signup}>
            <form className={styles.signupForm}>
            <h1 className={styles.signupHead}> SignUp </h1>
            <input  className={styles.signupPageInput} type="text" name="" placeholder="Username" required></input>
            <input className={styles.signupPageInput} type="email" name="" placeholder="Email" required></input>
            <input className={styles.signupPageInput} type="password" name="" placeholder="Password"required></input>
            <input className={styles.signupPageInput} type="password" name="" placeholder="Confirm password" required></input>
            <button className={styles.signupButton} type="submit">SignUp</button>
            </form>


        </main>
    )
}