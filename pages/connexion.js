import FirebaseAuth from '../components/Auth/FirebaseAuth'

//Styles
import styles from '../styles/Connexion.module.css'

const connexion = () => {
    return (
        <div className={styles.container}>
            <div>
                <FirebaseAuth />
            </div>
        </div>
    )
}

export default connexion
