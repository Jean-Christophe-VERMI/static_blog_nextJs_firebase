import React from 'react';
import Image from 'next/image'

//Styles
import styles from '../../styles/RealisationsPosts.module.css'

const RealisationsPosts = ({Posts}) => (
  <div className={styles.container}>
    <section className={styles.posts}>
      {Posts.map(({ node }) => <div className={styles.post} key={node.id}>
          <div className={styles.divTitle}>
            <h3 className={styles.title}>{node.title}</h3>
          </div>
          <div className={styles.img}>
          <Image
              src={node.featuredImage.node.mediaItemUrl}
              alt={node.title}
              width={450}
              height={300}
            />
          </div>
      </div>)}
    </section>
  </div>
);

export default RealisationsPosts;