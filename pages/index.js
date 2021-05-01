import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home({data}) {
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
              <p className={utilStyles.h2}>Choose your type of beer:</p>
              {data.map((beer) => (
                <div key={beer.id}>
                  <input type="radio" id="male" name="gender" value="male"/>
                  <label for="male" >{beer.name}</label><br></br>
                </div>
              ))}
              </div>
              {console.log(data)}
             
              <div className={styles.input}>
                <p>PREVIEW</p>
              </div>
            </div>
        </main>

      </div>
    // </Layout>
  )
}

export const getStaticProps = async () => {
  const resp = await fetch(
    `${process.env.STRAPI_URL}/beers`
  );
  const data = await resp.json();

  return {
    props: {
      data,
    },
  };
};