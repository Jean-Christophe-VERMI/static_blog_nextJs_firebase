import React from 'react';
import { getAllRealisationPosts } from '../lib/api'

//Components
import Menu from '../components/Menu/Burger'
import RealisationsPosts from '../components/RealisationsPosts/RealisationsPosts'
import Footer from '../components/Footer/Footer'


const Realisations = ({ allPosts: { edges } }) => (
  <div>
    <Menu />
    <RealisationsPosts Posts={edges} />
    <Footer />
  </div>
)

export async function getStaticProps() {
  const allPosts = await getAllRealisationPosts()
  return {
    props: { allPosts
    }
  };
}


export default Realisations;


