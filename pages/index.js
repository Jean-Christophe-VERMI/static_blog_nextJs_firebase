import Head from 'next/head'

import Image from 'next/image'
import { getAllPosts } from '../lib/api'
// import styles from '../styles/Home.module.css'

export default function Home({ allPosts: { edges } }) {
  
  return (
    <>
      <Head>
        <title>JCVDEVPRO</title>
      </Head>
      <ul>
        {edges.map(({ node }) => <li key={node.id}>
          <h3>{node.title}</h3>
            <Image
              src={node.featuredImage.node.mediaItemUrl}
              alt={node.title}
              width={450}
              height={300}
            />
          <p>{node.date}</p>
        </li>)}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: { allPosts
    }
  };
}