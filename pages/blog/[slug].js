import Link from 'next/link'
import { getAllBlogPosts } from '../../lib/api'
import { getBlogPostDetails } from '../../lib/api'
import BlogPostDetails from '../../components/BlogPosts/BlogPostDetails'

const PostDetails = ({ post }) => {
  
  return (
    <div>
      <BlogPostDetails post={post} />
      <Link href='/blog'>Go Back</Link>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await getAllBlogPosts();
  const datas = res.edges

  const ids = datas.map((post) => post.node.slug)
  const paths = ids.map((id) => ({ params: { slug: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug
  const post = await getBlogPostDetails(slug);


  return {
    props: { post
    }
  };
}

export default PostDetails;


