import Head from 'next/head'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  
  return (
    <>
      <Head>
        <title>JCVDEVPRO</title>
      </Head>
      <ul>
        {posts.map(post => <li>
          <h3>{post.title}</h3>
        </li>)}
      </ul>
    </>
  )
}

export async function getStaticProps () {
  const posts = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=4')
  .then(res => res.json());
  return {
    props: {
      posts
    }
  }
}
