import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import dashify from 'dashify';
import axios from 'axios';


//Styles
import styles from '../../../styles/EditOnePost.module.css';

const EditEntry = () => {
  const router = useRouter()
  const [content, setContent] = useState({
    title: '',
    body: '',
  })

  useEffect(async () => {
    const { id } = router.query;
    if (id) {
      const res = await axios.get(`/api/entry/${id}`);
      const { title, body } = res.data;
      setContent({
        title,
        body
      })
    }
  }, [router])

  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }

  const onSubmit = async (e) => {
    const { id } = router.query
    const { title, body } = content;
    console.log(id, title, body);
    await axios.put(`/api/entry/${id}`, {
      slug: dashify(title),
      title,
      body,
    });
    router.back();
  }

  const onDelete = async () => {
    if (confirm("Confirmer la suppression de l'article ?")) {
      const { id } = router.query;
      await axios.delete(`/api/entry/${id}`);
      router.back();
    } else {
      return false;
    }
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
        className={styles.textarea}
        name="body"
        value={content.body}
        onChange={onChange}
      />
      <button
        className={styles.button}
        type="button"
        onClick={onSubmit}
      >
        Enregister
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={onDelete}
      >
        Supprimer
      </button>
    </div>
  );
};

export default EditEntry;