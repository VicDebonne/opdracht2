import Layout from "../../components/Layout";
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import styles from '../../components/Input.module.css'
import Image from 'next/image'

const Details = ({beer}) => {

    // const loadImage = () => {
    //     const url = beer.img;
    // }

    // const beerImg = beer.img[0];
    // const url = `/ + ${process.env.STRAPI_URL} + ${beerImg.url}`;

    return (
        <Layout>
            <Link href={'/'}><span className={styles.link2}> back</span></Link>
            <h1 className={utilStyles.h1}>{beer.name}</h1>
            <p className={utilStyles.description}>{beer.description}</p>
            <div className={utilStyles.line}></div>
            {/* {console.log(beerImg.url)} */}
            {/* <Image 
                src={url}
                alt="Picture of a beer"
                width={319.44}
                height={696.96}
            /> */}
        </Layout>
    );
  };
  
export default Details;

export const getStaticPaths = async () => {
    const res = await fetch(
        `${process.env.STRAPI_URL}/beers`
      );
    const data = await res.json();

    const paths = data.map(beer => {
        return{
            params: {id: beer.id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(
            `${process.env.STRAPI_URL}/beers/${id}`
        )
    const data = await res.json();

    return {
        props: {beer:data}
    }
}

