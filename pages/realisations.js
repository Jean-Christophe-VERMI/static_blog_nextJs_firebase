import { getAllRealisationPosts } from '../lib/api'

//Components
import RealisationsPosts from '../components/RealisationsPosts/RealisationsPosts'


const Realisations = ({ allPosts: { edges } }) => {
  return (
  
    <div>
      <RealisationsPosts Posts={edges} />
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllRealisationPosts()
  return {
    props: { allPosts
    }
  };
}

export default Realisations;