import Meta from '../components/Meta'
import { useEffect, useState, useRef } from 'react'
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
    background: '#d9dbdb',
  },
  title: {
    fontFamily: 'Nunito, sans-serif',
    fontSize: '18px',
  },
  details: {
    background: '#dbdad7',
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: '200',
    fontWeight: theme.typography.fontWeightRegular,
  },
  content: {
    textAlign: 'justify',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '400'
  },
  button: {
    background: '#357680',
    color: '#ffffff',
    '&:hover': {
      background: '#357680',
      color: '#ffffff',
   },
  },

}));

export default function Home() {
  const classes = useStyles();

  const [bgOffre, setBgOffre] = useState({});
  const [bgPath, setBgPath] = useState('/bg_offre.png');

  const servicesSection = useRef(null);
  const realisationsSection = useRef(null);
  
  const executeScroll = () => servicesSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const executeScroll2 = () => realisationsSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

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
      <Meta />
      <section className={styles.firstSection}>
        <div className={styles.description}>
            <p className={styles.paragraphe1}>
              JCVDEVPRO Développement web <br/>
              & réferencement SEO
            </p>
            <p className={styles.paragraphe2}>
            Je suis Jean-Christophe Vermi développeur web freelance professionnel. Je développe votre site vitrine avec Wordpress, le CMS le plus populaire au monde. Vous souhaitez une expérience de naviagation encore plus optimale avec une SPA en React ou NextJs ? Vous aimeriez lancer une boutique e-commerce ou renforcer votre présence sur le web face à la concurrence ? Quelque soit votre projet web, je vous accompagne dans sa réalisation.
            </p>
            <div className={styles.scrollBtn}>
              <Button 
                onClick={executeScroll} 
                variant="contained" 
                className={classes.button}
                > Services <ExpandMoreIcon />
              </Button>
            </div>
        </div>
      </section>
      <section ref={servicesSection} className={styles.services} style={bgOffre}>
        <div className={styles.boxContainer}>
          <div className={styles.sideLeft}>
            <Accordion className={classes.titleAccordion}  onClick={() => setBgPath('/siteweb.png')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.title}>Présentez votre activité</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Typography className={classes.content}>
                  Présentez votre activité avec un site internet moderne, fonctionnel et optimisé pour les usages mobiles. Confier son développement à un professionnel c'est l'assurance d'un travail de qualité. Je vous guide dans l'utilisation de votre vitrine commerciale, avec le CMS Wordpress vous pouvez ensuite gérer vous même l'ajout de nouveaux contenus.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion className={classes.titleAccordion} onClick={() => setBgPath('/social-media.png')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.title}>Développez-votre clientèle</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Typography className={classes.content}>
                  Pour renforcer votre présence sur le web il est primordial de mettre en place une stratégie SEO pour faire face à la concurrence et vous démarquer. Vous souhaitez améliorer votre visibilité sur les moteurs de recherche ou conquérir de nouveaux clients grâce aux réseaux sociaux ? Je peux vous accompagner dans cette démarche pour la réussite de votre entreprise.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.titleAccordion} onClick={() => setBgPath('/web-store.png')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.title}>Vendez sur internet</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Typography className={classes.content}>
                  Vous avez pour ambition de vendre sur internet, avoir son site e-commerce est aujourd'hui accessible à tous les budgets. Développé avec Woocommerce vous disposerez d'un dashbord pour la gestion de vos commandes et l'ntégration d'un système de paiement sécurisé avec Paypal et Stripe. Lancez votre e-commerce avec une solution flexible, fiable et de qualité.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className={styles.scrollBtn2}>
              <Button 
                onClick={executeScroll2} 
                variant="contained" 
                className={classes.button}
                > Réalisations <ExpandMoreIcon />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className={styles.titleRealisations}>Dernières réalisations</h1>
        <div className={styles.realisations}>
          <div ref={realisationsSection} id={styles.project} className={styles.panoramique}>
            <div className={styles.urlContainer}>
              <a className={styles.urlProject} href='https://restaurant-le-panoramique.fr' target='_blank'>https://restaurant-le-panoramique.fr</a>
            </div>
          </div>
          <div id={styles.project} className={styles.pastor}>
            <div className={styles.urlContainer}>
              <a className={styles.urlProject} href='https://pastor-voyance-magnetisme.com' target='_blank'>https://pastor-voyance-magnetisme.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

