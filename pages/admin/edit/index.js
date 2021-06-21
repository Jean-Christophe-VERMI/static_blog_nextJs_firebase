import { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from 'axios';

import withAuth from "../../../withAuth";


//Styles
import styles from '../../../styles/PostListAdmin.module.css'

const List = ({ user }) => {

  const [entries, setEntries] = useState([]);

  useEffect(async () => {
    
    const res = await axios.get('/api/entries');
    setEntries(res.data.entriesData);
  }, []);

  return (
    <div className={styles.container}>
      {entries.map(entry => (
        <div key={entry.id}>
          <Link href={`/admin/edit/${entry.id}`}>
            <a>{entry.title}</a>
          </Link>
          <br/>
        </div>
      ))}
    </div>
  );
};

export default withAuth(List);