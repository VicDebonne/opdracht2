import utilStyles from '../styles/utils.module.css'
import styles from './Results.module.css'

const Results = ({data, value}) => {
    return (
        <>
            <div className={styles.resultsbox}>
                <p>{value}</p>
            </div>
        </>
    );
  };
  
  export default Results;
  