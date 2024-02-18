import { FormEvent, useContext, useState } from "react";
import styles from "./Login.module.css";
import { AuthContext } from "../../contexts/AuthContext";

interface ILogin {
    email: string;
    password: string;
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signIn} = useContext(AuthContext);
    
    async function handleLogin(event: FormEvent){
        event.preventDefault();
        await signIn({email, password});
    }
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password"  onChange={e => setPassword(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Login;