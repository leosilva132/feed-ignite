import styles from './Header.module.css';

import ignitelogo from '../assets/ignite-logo.svg'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={ignitelogo} alt="Logo Ignite Feed" />
            <h1>Ignite Feed</h1>
        </header>
    );

}   