import utilStyles from '../styles/utils.module.css'
import styles from './Input.module.css'
import Inputtext from './Inputtext'
import { useState } from "react";

const Input = ({data, onValueChange}) => {
    const [sending, setSending] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSending(true);
      const email = e.target.email.value;
      if (email) {
        const r = await fetch("/api/beer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });
        const result = await r.json();
        if (!result.succeeded) {
          setError(result.reason);
        }
        setSuccess(true);
        setSending(false);
      }
    };

    const getForm = () => {
        return(
        <form onSubmit={handleSubmit}>
            <div>
                <p className={utilStyles.inputtitle}>Personal Message:</p>
                <textarea type="text" id="personal" name="personal" rows="6" cols="39"/>
            </div>

            <div>
                <p className={utilStyles.inputtitle}>Send email to:</p>
                <input type="email" name="email" id="email" />
            </div>

            <input className={styles.button} type="submit" value="SEND!" />
        </form>
        );
    };

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
                {getForm()}
            </div>
        </>
    );
  };
  
  export default Input;
