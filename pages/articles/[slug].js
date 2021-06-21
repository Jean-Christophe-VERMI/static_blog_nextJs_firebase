import { useRouter } from 'next/router'
import db from '../../utils/db';
import parse from "html-react-parser";
import Moment from 'moment';
import 'moment/locale/fr';

//Styles
import styles from '../../styles/Post.module.css'

const Post = (props) => {
  const { entry } = props;
  const router = useRouter()
  if (router.isFallback) {
    return (
      <div>loading</div>
    )
  } else {
    if (entry) {
      return (
        <div className={styles.container}>
          <article className={styles.post}>
            <p>{Moment(entry.created).locale('fr').format("dddd, Do MMMM YYYY")}</p>
            <h1 className={styles.title}>{entry.title}</h1>
            <p className={styles.content}>{parse(entry.body)}</p>
          </article>
        </div>
      );
    } else {
      return (
        <div>not found</div>
      )
    }
  }
};

export const getStaticPaths = async () => {
  const entries = await db.collection("entries").get()
  const paths = entries.docs.map(entry => ({
    params: {
      slug: entry.data().slug
    }
  }));
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("entries").where("slug", "==", slug).get()
  const entry = res.docs.map(entry => entry.data());
  if (entry.length) {
    return {
      props: {
        entry: entry[0]
      }
    }
  } else {
    return {
      props: {}
    }
  }
}

export default Post;