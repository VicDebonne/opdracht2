import Layout from "../../components/Layout";
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import styles from '../../components/Input.module.css'
import Image from 'next/image'
import image from "next/image";

// const imgLoader = () => {
//     return `${process.env.STRAPI_URL} + ${beer.img.url}`
//   }


const Details = ({beer}) => {
    return (
        <Layout>
            <Link href={'/'}><span className={styles.link2}> back</span></Link>
            <h1 className={utilStyles.h1}>{beer.name}</h1>
            <p className={utilStyles.description}>{beer.description}</p>
            <div className={utilStyles.line}></div>

            {/* <Image
                src="/f"
                alt={beer.name}
                width={100}
                height={100}
            />
            {console.log(beer.img.)} */}
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
