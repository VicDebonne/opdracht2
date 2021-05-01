import utilStyles from '../styles/utils.module.css'
import styles from './Results.module.css'
import Image from 'next/image'

const Results = ({data, value}) => {

    const checkBeer = () => {
        if(value === "Bush Triple" ) {
          return "/images/beer-2.jpg";
        }
        if(value === "Stella Artois" ) {
            return "/images/beer-3.jpg";
        }
        if(value === "La Chouffe" ) {
            return "/images/beer-1.jpg";
        }
      }

    return (
        <>
            <div className={styles.resultsbox}>
                {/* <Image
                    src="/images/beer-1.jpg"
                    alt="Picture of a beer"
                    width={319.44}
                    height={696.96}
                /> */}
                <img 
                    key={data.id}
                    width={319.44}
                    height={696.96}
                    src={checkBeer()}
                    alst={data.name}
                />

                <p>{checkBeer()}</p>
            </div>
        </>
    );
  };
  
  export default Results;