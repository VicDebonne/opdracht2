import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from "../components/Layout";
import Input from "../components/Input"
import Results from "../components/Results"
import { useState } from "react";
import Image from 'next/image'

export default function Home({data}) {
  const [beer, setBeer] = useState();
  return (
    <Layout>
      <div className={styles.container}>      
        <Head>
          <title>Few Beers?</title>
          <link rel="icon" href="images/favicon.png" />
        </Head>

        <main className={styles.main}>
            <p className={utilStyles.h2}>Who would you like to have a beer with?</p>
            <h1 className={utilStyles.h1}>Shall we have a FEW BEERS soon?</h1>
            <div>
              <div className={styles.input_container}>
                <Input data={data} onValueChange={(value) => setBeer(value)}/>
                <Results data={data} value={beer}/>
              </div>
            </div>
        </main>
      </div>
    </Layout>
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