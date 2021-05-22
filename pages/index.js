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
    background: '#C3C0B7',
  },
  details: {
    background: '#ededeb',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: '200',
    fontWeight: theme.typography.fontWeightRegular,
  },
  button: {
    background: "#C3C0B7",
    color: '#000000',
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
      <Meta />
      <section className={styles.firstSection}>
        <div className={styles.description}>
          <div>
            <p className={styles.paragraphe1}>
              #DéveloppementWeb
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
            variant="contained" 
            className={classes.button}
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
              className={classes.button}
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
          <div className={styles.prestaMain}>
            <p className={styles.prestaDescription}>L'essentiel pour présenter son activité. Un site internet professionnel avec la possibité d'editer son contenu, rajouter des articles ou des galleries d'images en toute autonomie.</p>
            <ul className={styles.prestaDetails}>
              <li>- Site vitrine</li>
              <li>- Thème personnalisé</li>
              <li>- Gestion de contenu</li>
              <li>- Optimisation référencement</li>
              <li>- Responsive, adapté à l'usage mobile</li>
            </ul>
          </div>
          </div>
        <div className={styles.presta}>
          <div className={styles.headerPresta}>
            <h1 className={styles.prestaName}>Globale</h1>
            <h4 className={styles.price}>1490 €</h4>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.prestaMain}>
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
        </div>
        <div className={styles.presta}>
          <div className={styles.headerPresta}>
            <h1 className={styles.prestaName}>E-commerce</h1>
            <h4 className={styles.price}>à partir de 2200 €</h4>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.prestaMain}>
            <p className={styles.prestaDescription}>Pour vendre sur internet, création d'une e-boutique avec module de gestion des commandes et livraisons. Solution de paiement sécurisé. Accompagnement au démarage de l'activité.</p>
            <ul className={styles.prestaDetails}>
              <li>- Boutique e-commerce avec certificat SSL</li>
              <li>- Thème personnalisé</li>
              <li>- Module de paiement sécurisé</li>
              <li>- Rapports traffic, optimisation référencement </li>
              <li>- Dashboard pour la gestion des commandes et analyse comptable </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

