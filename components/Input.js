import utilStyles from '../styles/utils.module.css'
import styles from './Input.module.css'
import { useState } from "react";
import Link from 'next/link';

const Input = ({data, onValueChange}) => {
    const [sending, setSending] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = async (event) => {
        event.preventDefault()

        const res = await fetch(
          'https://hooks.zapier.com/hooks/catch/123456/abcde',
          {
            body: JSON.stringify({
              email: event.target.email.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )
    
        const result = await res.json()
        // result.user => 'Ada Lovelace'
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
                        <label className={styles.inputlabel} for="beer" >{beer.name}</label><Link key={beer.id} href={'/beers/' + beer.id}><span className={styles.link}>info</span></Link>
                    </div>
                    ))}
                </form>
                {getForm()}
            </div>
        </>
    );
  };
  
  export default Input;
