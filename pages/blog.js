import React from 'react';
import { getAllBlogPosts } from '../lib/api'

//Components
import Menu from '../components/Menu/Burger'
import BlogPosts from '../components/BlogPosts/BlogPosts'
import Footer from '../components/Footer/Footer'


const Blog = ({ allPosts: { edges } }) => (
  <div>
    <Menu />
    <BlogPosts Posts={edges} />
    <Footer />
  </div>
);

export async function getStaticProps() {
  const allPosts = await getAllBlogPosts()
  return {
    props: { allPosts
    }
  };
}

export default Blog;