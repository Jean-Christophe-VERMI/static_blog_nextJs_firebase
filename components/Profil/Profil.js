import { useUser } from '../../firebase/useUser'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//Styles
import styles from '../../styles/Profil.module.css';

const Profil = () => {
    const { user, logout } = useUser()

    return (
        <div className={styles.container}>
            {user && (
                <div className={styles.profilInfos}>
                    <p className={styles.email}>connecté en tant que : {user.email}</p>
                    <ExitToAppIcon alt='Logout' onClick={() => logout()}/>
                </div>
            )}
        </div>
    )
}

export default Profil
