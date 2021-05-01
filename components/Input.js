import utilStyles from '../styles/utils.module.css'
import styles from './Input.module.css'
import Inputtext from './Inputtext'

const Input = ({data, onValueChange}) => {

   

    return (
        <>
            <div className={styles.inputbox}>
                <p className={utilStyles.inputtitle}>Choose your type of beer:</p>
                <form  onChange={(e) => onValueChange(e.target.value)}>
                    {data.map((beer) => (
                    <div key={beer.id}>
                        <input className={styles.inputfield} type="radio" id="beer" name="beer" value={beer.name}/>
                        <label className={styles.inputlabel} for="beer" >{beer.name}</label><br></br>
                    </div>
                    ))}
                </form>
                
            </div>
        </>
    );
  };
  
  export default Input;
