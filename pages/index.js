import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import Menu from '../components/Menu/Burger'
import Image from 'next/image'
import { getAllPosts } from '../lib/api'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


//Styles
import styles from '../styles/Home.module.css'


export default function Home({ allPosts: { edges } }) {
 
  const [bgOffre, setBgOffre] = useState({});
  const [bgPath, setBgPath] = useState('/bg_offre.png');

  const offreSection = useRef(null);
  const executeScroll = () => offreSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

  useEffect(() => {
    const setBackground = () => {
      const bgStyle = {
        backgroundImage: `url(${bgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        transitionDuration: '1s',
      };
      setBgOffre(bgStyle); 
    }
    setBackground();
  }, [bgPath]);
  
  return (
    <>
      <Head>
        <title>JCVDEVPRO</title>
      </Head>
      <section className={styles.header}>
        <div className={styles.navbar}>
          <Menu />
          <h2 className={styles.responsiveTitle}>JCVDEVPRO</h2>
        </div>
        <div className={styles.description}>
          <div>
            <h2 className={styles.title}>JCVDEVPRO</h2>
          </div>
          <div>
            <p className={styles.paragraphe1}>
              #DeveloppementWeb
              #TransformationDigitale
            </p>
            <p className={styles.paragraphe2}>
              Vous êtes artisant, commerçant ou une association, vous souhaitez réaliser projet web ?
              Faites vous conseiller et accompagner par un professionnel.
            </p>
          </div>
        </div>
        <div className={styles.scrollBtn}>
          <Button 
            onClick={executeScroll} 
            variant="outlined" 
            color="primary"
            > Services <ExpandMoreIcon />
          </Button>
        </div>
      </section>


      <section ref={offreSection} className={styles.offre} style={bgOffre}>
        <div className={styles.boxContainer}>
          <div className={styles.sideLeft}>
            <Accordion onClick={() => setBgPath('/siteweb.png')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Présentez-votre activité</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion onClick={() => setBgPath('/web-store.png')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Vendez sur internet</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion onClick={() => setBgPath('/social-media.png')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Développez-votre clientèle</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.sideRight}>

          </div>
        </div>
      </section>


      <section className={styles.realisations}>
        <ul>
          {edges.map(({ node }) => <li key={node.id}>
            <h3>{node.title}</h3>
              <Image
                src={node.featuredImage.node.mediaItemUrl}
                alt={node.title}
                width={450}
                height={300}
              />
            <p>{node.date}</p>
          </li>)}
        </ul>
      </section>
      
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: { allPosts
    }
  };
}