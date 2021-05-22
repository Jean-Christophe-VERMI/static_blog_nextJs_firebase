import React from 'react';
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'

//Styles
import styles from '../../styles/BlogPosts.module.css'

const BlogPosts = ({ Posts }) => {
  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  }
  
  return (
    <div className={styles.container}>
      <Masonry
        breakpointCols={breakPoints}
        className={styles.mymasonrygrid}
        columnClassName={styles.mymasonrygridcolumn}>
        {Posts.map(({ node }) => <div className={styles.post} key={node.id}>
          <h3 className={styles.titleBalise}>
            <Link 
              href={`/blog/${node.slug}`}
              params={{id : `${node.slug}`}}
            >
              <a className={styles.title}>{node.title}</a>
            </Link>
          </h3>
            <Image
              src={node.featuredImage.node.mediaItemUrl}
              alt={node.title}
              width={450}
              height={300}
            />
        </div>)}
      </Masonry>
    </div>
  );
};

export default BlogPosts;