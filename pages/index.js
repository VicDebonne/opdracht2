import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (

    // <Layout>
      <div className={styles.container}>

        <Head>
          <title>Few Beers?</title>
          <link rel="icon" href="images/favicon.png" />
        </Head>

        <main className={styles.main}>
            <p className={utilStyles.h2}>Who would you like to have a beer with?</p>
            <h1 className={utilStyles.h1}>Shall we have a FEW BEERS soon?</h1>
          
            <div className={styles.input_container}>
              <div className={styles.input}>
              {/* {data.map((post) => (
                <div key={post.id}>
                  <p>{post.name}</p>
                </div>
              ))} */}
              </div>
             
              <div className={styles.input}>
                <p>PREVIEW</p>
              </div>
            </div>
        </main>

        {/* <footer className={styles.footer}>
          <p className={styles.sub_title}>Opdracht 2</p>
        </footer> */}

      </div>
    // </Layout>
  )
}

// export const getStaticProps = async () => {
//   const resp = await fetch(`${process.env.STRAPI_URL}/posts`);
//   const data = await resp.json();
//     // "http://localhost:1337/posts"
//   return {
//     props: {data},
//   };
// }