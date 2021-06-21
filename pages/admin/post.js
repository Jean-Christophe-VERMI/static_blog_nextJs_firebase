import { useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';

import withAuth from "../../withAuth";

//Styles
import styles from '../../styles/CreateNewPost.module.css';

const Post = () => {
  const [content, setContent] = useState({
    title: undefined,
    body: undefined,
  })
  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }
  const onSubmit = async () => {
    const { title, body } = content;
    await axios.post('/api/entry', { title, slug: dashify(title), body });
  }
  return (
    <div className={styles.container}>
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