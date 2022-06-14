import styles from '../styles/Login.module.css';
import Image from 'next/image';
import icon from './Images/logo.svg';


function Login () {
    return (
        <div className={styles.login_container}>
            <div className={styles.login_card}>
                <Image src={icon} width={100} height={100} />
                <div className={styles.sign_in_container}>
                    <button>Login with Moralis</button>
                </div>
            </div>
        </div>
    );
}

export default Login;