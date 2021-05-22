import React from 'react';
import { getAllBlogPosts } from '../../lib/api'

//Components
import BlogPosts from '../../components/BlogPosts/BlogPosts'


const Blog = ({ allPosts: { edges } }) => (
  <div>
    <BlogPosts Posts={edges} />
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