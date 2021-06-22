import { useState } from 'react';
import { useRouter } from "next/router";
import dashify from 'dashify';
import axios from 'axios';
import firebase from 'firebase/app'
import 'firebase/storage'
import Input from '@material-ui/core/Input';
import withAuth from "../../withAuth";

//Styles
import styles from '../../styles/CreateNewPost.module.css';

const Post = () => {
  const Router = useRouter();

  const [image, setImage] = useState(null);

  const [content, setContent] = useState({
    title: undefined,
    body: undefined,
  })

  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }

  const handleChangeImg = (event) => {
    if (event.target.files[0]) {
    setImage(event.target.files[0]);
    }
};

  const onSubmit = async () => {
    const { title, body } = content;

    //Enregistrement de l'article sur db firestore
    const response = await axios.post('/api/entry', { title, slug: dashify(title), body });
    const postId = response.data.id;
    console.log(postId);

    //Enregistrement de l'image sur bucket Cloud Storage avec l'id de l'article
    const pathReference = firebase.storage().ref(`images/posts/${postId}`);

    pathReference.put(image).then(() => {
      console.log("article et image enregistrés avec succès");
      Router.push("/articles");
    }).catch(function(error) {
    console.log(error);
    });
  }

  return (
    <div className={styles.container}>
      <div>
        <p>Télécharger une image</p>
        <Input type="file" onChange={handleChangeImg} />
        </div>
      <label htmlFor="title">Titre</label>
      <input
        type="text"
        name="title"
        value={content.title}
        onChange={onChange}
        className={styles.title}
      />

      <label htmlFor="body">Article</label>
      <textarea
        name="body"
        value={content.body}
        onChange={onChange}
        className={styles.textarea}
      />
      <button className={styles.button} onClick={onSubmit}>Enregistrer</button>
    </div>
  );
};

export default withAuth(Post);