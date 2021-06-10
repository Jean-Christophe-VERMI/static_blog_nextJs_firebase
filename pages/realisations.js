import styles from '../styles/Realisations.module.css'
import Image from 'next/image'

const Realisations = () => (

    <div>
      <section>
        <h3>Restaurant Le Panoramique</h3>
        <div className={styles.imgContainer}>
          <div className={styles.imgProject}>
            <Image
              src='/Realisations/le_panoramique/desktop.PNG'
              alt='version desktop'
              width={700}
              height={400}
            />
          </div>
          <div className={styles.imgProject}>
            <Image
              src='/Realisations/le_panoramique/mobile.PNG'
              alt='version desktop'
              width={250}
              height={400}
            />
          </div>
        </div>
        
      </section>
    </div>
)

export default Realisations;