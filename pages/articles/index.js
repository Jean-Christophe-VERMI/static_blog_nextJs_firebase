import Link from 'next/link'
import db from '../../utils/db';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Moment from 'moment';
import 'moment/locale/fr';

import { getUserFromCookie } from '/firebase/userCookies';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  post: {
    width: '30%',
    margin: '1rem'
  },
  button: {
    margin: "1rem"
  },
});

//Styles
import styles from '../../styles/Posts.module.css'

const Posts = (props) => {
  const { entriesData } = props;
  const userFromCookie = getUserFromCookie()
  const classes = useStyles();

  return (
    <div className={styles.container}>
      {userFromCookie && (
        <Link className={styles.newPost} href={`/admin/post`}>
          <Button 
              className={classes.button}
              variant="contained"
              > Ajouter un article
          </Button>
        </Link>
      )}
      <div className={styles.posts}>
        {entriesData.map(entry => (
          <Card className={classes.post} key={entry.id}>
            <Link href={`/articles/${entry.slug}`}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      <p className={styles.title}>{entry.title}</p>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {Moment(entry.created).locale('fr').format("dddd, Do MMMM YYYY")}
                  </Typography>
                  {userFromCookie && (
                    <Link href={`/admin/edit/${entry.id}`}>
                      Editer
                    </Link>
                  )}
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const entries = await db.collection('entries').orderBy('created', 'desc').get();
  const entriesData = entries.docs.map(entry => ({
    id: entry.id,
    ...entry.data()
  }));
  return {
    props: { entriesData },
    revalidate: 10
  }
}

export default Posts;