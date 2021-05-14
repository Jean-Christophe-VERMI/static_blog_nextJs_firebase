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
import { makeStyles } from '@material-ui/core/styles';


//Styles
import styles from '../styles/Home.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  titleAccordion: {
    background: '#44bac4',
  },
  details: {
    background: '#ededeb',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: '200',
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Home({ allPosts: { edges } }) {
  const classes = useStyles();

  const [bgOffre, setBgOffre] = useState({});
  const [bgPath, setBgPath] = useState('/bg_offre.png');

  const servicesSection = useRef(null);
  const prestaSection = useRef(null);

  const executeScroll = () => servicesSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const executeScroll2 = () => prestaSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

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


      <section ref={servicesSection} className={styles.services} style={bgOffre}>
        <div className={styles.boxContainer}>
          <div className={styles.sideLeft}>
            <Accordion className={classes.titleAccordion} onClick={() => setBgPath('/siteweb.png')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Présentez-votre activité</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.titleAccordion} onClick={() => setBgPath('/web-store.png')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Vendez sur internet</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.titleAccordion} onClick={() => setBgPath('/social-media.png')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Développez-votre clientèle</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className={styles.scrollBtn}>
            <Button 
              onClick={executeScroll2} 
              variant="contained" 
              color="primary"
              > Prestations <ExpandMoreIcon />
            </Button>
          </div>
          </div>
        </div>
      </section>


      <section ref={prestaSection} className={styles.offres}>
        <div className={styles.presta}>
          <div className={styles.headerPresta}>
            <h1 className={styles.prestaName}>Essentielle</h1>
            <h4 className={styles.price}>950 €</h4>
          </div>
          <div className={styles.separator}></div>
          <p className={styles.prestaDescription}>L'essentiel pour présenter son activité. Un site internet professionnel avec la possibité d'editer son contenu, rajouter des articles ou des galleries d'images en toute autonomie.</p>
          <ul className={styles.prestaDetails}>
            <li>- Site vitrine</li>
            <li>- Thème personnalisé</li>
            <li>- Gestion de contenu</li>
            <li>- Optimisation référencement</li>
            <li>- Responsive, adapté à l'usage mobile</li>
          </ul>
        </div>
        <div className={styles.presta}>
          <div className={styles.headerPresta}>
            <h1 className={styles.prestaName}>Globale</h1>
            <div className={styles.priceGlobale}>
              <h4 className={styles.price}>1490 €</h4>
              <p className={styles.price2}>ou 950 € + 45 € / mois sur 12 mois</p>
            </div>
          </div>
          <div className={styles.separator}></div>
          <p className={styles.prestaDescription}>Comprend les prestations essentielles, la mise en oeuvre d'une stratégie de référencement pour augmenter votre visibilité et la maintenance de votre site pendant un an.</p>
          <ul className={styles.prestaDetails}>
            <li>- Site vitrine</li>
            <li>- Thème personnalisé</li>
            <li>- Gestion de contenu</li>
            <li>- Maintenance du site internet</li>
            <li>- Responsive, adapté à l'usage mobile</li>
            <li>- Stratégie de référencement globale</li>
            <li>- Acompagnement présence réseaux sociaux</li>
          </ul>
        </div>
        <div className={styles.presta}>
          <div className={styles.headerPresta}>
            <h1 className={styles.prestaName}>E-commerce</h1>
            <h4 className={styles.price}>à partir de 2200 €</h4>
          </div>
          <div className={styles.separator}></div>
          <p className={styles.prestaDescription}>Pour vendre sur internet, création d'une e-boutique avec module de paiement sécurisé.</p>
          <ul className={styles.prestaDetails}>
            <li>- Boutique e-commerce avec certificat SSL</li>
            <li>- Thème personnalisé</li>
            <li>- Module de paiement sécurisé</li>
            <li>- Dashboard pour la gestion des commandes et livraisons</li>
            
          </ul>
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