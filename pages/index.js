import Meta from '../components/Meta'
import { useEffect, useState, useRef } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

//Styles
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
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
      background: '#edece8',
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
              JCVDEVPRO D??veloppement web <br/>
              & r??ferencement SEO
            </p>
            <p className={styles.paragraphe2}>
            Je suis Jean-Christophe Vermi d??veloppeur web freelance professionnel. <br/> 
            Je d??veloppe votre site avec Wordpress, la solution de gestion de contenu le plus populaire au monde. Mais peut-??tre pr??f??rerez-vous une exp??rience de naviagation encore plus optimale avec une SPA en React ou NextJs ?<br/><br/>Quelque soit votre projet web, site vitrine, boutique e-commerce, ou qu'il s'agisse de mettre en place une strat??gie de r??f??recement pour am??liorer votre visibilit??, je vous accompagne dans sa r??alisation.
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
                <Typography className={classes.title}>Pr??sentez votre activit??</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Typography className={classes.content}>
                  Pr??sentez votre activit?? avec un site internet moderne, fonctionnel et optimis?? pour les usages mobiles. Confier son d??veloppement ?? un professionnel c'est l'assurance d'un travail de qualit??. Je vous guide dans l'utilisation de votre vitrine commerciale, avec le CMS Wordpress vous pouvez ensuite g??rer vous m??me l'ajout de nouveaux contenus.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion className={classes.titleAccordion} onClick={() => setBgPath('/social-media.png')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.title}>D??veloppez-votre client??le</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Typography className={classes.content}>
                  Pour renforcer votre pr??sence sur le web il est primordial de mettre en place une strat??gie SEO pour faire face ?? la concurrence et vous d??marquer. Vous souhaitez am??liorer votre visibilit?? sur les moteurs de recherche ou conqu??rir de nouveaux clients gr??ce aux r??seaux sociaux ? Je peux vous accompagner dans cette d??marche pour la r??ussite de votre entreprise.
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
                  Vous avez pour ambition de vendre sur internet, avoir son site e-commerce est aujourd'hui accessible ?? tous les budgets. D??velopp?? avec Woocommerce vous disposerez d'un dashbord pour la gestion de vos commandes et l'nt??gration d'un syst??me de paiement s??curis?? avec Paypal et Stripe. Lancez votre e-commerce avec une solution flexible, fiable et de qualit??.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className={styles.scrollBtn2}>
              <Button 
                onClick={executeScroll2} 
                variant="contained" 
                className={classes.button}
                > R??alisations <ExpandMoreIcon />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className={styles.titleRealisations}>Derni??res r??alisations</h1>
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

