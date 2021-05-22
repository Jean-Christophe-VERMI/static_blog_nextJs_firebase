const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {

  const headers = { 'Content-Type': 'application/json' };

  /* if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }
 */
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query,variables }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllRealisationPosts() {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(where: {categoryName: "Réalisations"}) {
        edges {
          node {
            id
            title
            slug
            date
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `
  );

  return data?.posts
}

export async function getAllBlogPosts() {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(where: {categoryName: "Blog"}) {
        edges {
          node {
            id
            title
            slug
            date
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `
  );

  return data?.posts
}

export async function getBlogPostDetails(slug) {
  const data = await fetchAPI(
    `
      query SinglePost($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
              title
              content
              slug
              paragraphe1Titre {
                paragraphe1Titre
              }
              paragraphe1 {
                paragraphe1
              }
               paragraphe2Titre {
                paragraphe2Titre
              }
              paragraphe2 {
                paragraphe2
              }
              featuredImage {
                  node {
                      sourceUrl
                  }
              }
          }
      }
    `,{
    variables: {
      id: slug,
      idType: 'SLUG'
    }
  });

  return data.post
}