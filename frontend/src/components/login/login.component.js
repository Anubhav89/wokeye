import React from 'react'
import styles from "./login.module.css"
import { Link } from "react-router-dom"

function LoginComponent() {
    return (
        <div className={styles.majorContainer}>
            <div className={styles.loginContainer}>
                <h2>Welcome to Wokeye</h2>
                <div className={styles.inpCtn}>
                    <input type="email" placeholder="Email" className={styles.input}/>
                    <input type="password" placeholder="Password" className={styles.input}/>
                </div>
                <button className={styles.button}>Login</button>
                <p style={{margin:"0px",fontSize:14}}>Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>
        </div>
    )
}

export default LoginComponent