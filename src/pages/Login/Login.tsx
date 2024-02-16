import styles from "./Login.module.css";

interface ILogin {
    email: string;
    password: string;
}

const Login = () => {
    return (
        <div className={styles.container}>
            <h1>Login</h1>
        </div>
    )
}

export default Login;