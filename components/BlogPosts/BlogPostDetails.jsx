//import Meta from '../Meta';
import {useEffect} from 'react'
import Image from 'next/image'

//Styles
import styles from '../../styles/BlogPostDetails.module.css'

const BlogPostDetails = ({ post }) => {
  
   useEffect(() => {
    console.log(post);
  },[post])

  return (
      <div className={styles.container}>
        <section className={styles.firstZone}>
          <div className={styles.leftSide}>
            <h1 className={styles.title}>{post.title}</h1>
            <h3 className={styles.paragrapheTitle}>{post.paragraphe1Titre.paragraphe1Titre}</h3>
            <p className={styles.paragraphe}>{post.paragraphe1.paragraphe1}</p>
            <h3 className={styles.paragrapheTitle}>{post.paragraphe2Titre.paragraphe2Titre}</h3>
            <p className={styles.paragraphe}>{post.paragraphe2.paragraphe2}</p>
          </div>
          <div className={styles.rightSide}>
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              width={550}
              height={450}
            />
          </div>
        </section>
        <section className={styles.secondZone}>
          <div className={styles.sources}>
            <p><a target='blank' href='https://www.entreprises.gouv.fr/fr/actualites/france-relance/prolongation-de-l-aide-de-500-euros-aux-tpe-pour-soutenir-numerisation'>Pour en savoir plus</a></p>
            <p><a target='blank' href='https://cheque.francenum.gouv.fr/ecom'>Déposer un dossier sur le site dédié</a></p>
          </div>
        </section>
      </div>
  );
};

export default BlogPostDetails;
