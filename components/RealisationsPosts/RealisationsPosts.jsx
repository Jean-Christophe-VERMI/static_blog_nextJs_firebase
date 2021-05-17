import React from 'react';
import Image from 'next/image'

//Styles
import styles from '../../styles/RealisationsPosts.module.css'

const RealisationsPosts = ({Posts}) => (
  <div>
    <section className={styles.posts}>
      {Posts.map(({ node }) => <div className={styles.post} key={node.id}>
        <h3 className={styles.title}>{node.title}</h3>
          <Image
            src={node.featuredImage.node.mediaItemUrl}
            alt={node.title}
            width={450}
            height={300}
          />
      </div>)}
    </section>
  </div>
);

export default RealisationsPosts;


