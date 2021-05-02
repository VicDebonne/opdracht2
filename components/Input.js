import utilStyles from '../styles/utils.module.css'
import styles from './Input.module.css'
import { useState } from "react";
import Link from 'next/link';

const Input = ({data, onValueChange}) => {
        const [show, setShow] = useState(true);
        const [hide, setHide] = useState(false);


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
            const toggleShow = () => {
                setShow(!show);
                console.log(show);
            }

            const toggleHide= () => {
                setHide(!hide);
                console.log(hide);
            }

            return(
                <form > {/*onSubmit={handleSubmit}*/}
                    <div>
                        <p className={utilStyles.inputtitle}>Personal Message:</p>
                        <textarea type="text" id="personal" name="personal" rows="6" cols="39"/>
                    </div>

                    <div style={{
                        display: show?"block":"none"
                    }}>
                        <p className={utilStyles.inputtitle}>Send email to:</p>
                        <input className={styles.email} type="email" name="email" id="email" />
                        <a className={styles.button} onClick={() => {
                            toggleShow();
                            toggleHide();
                        }}>SEND!</a>
                    </div>

                    <div style={{
                        display: hide?"block":"none"
                    }}>
                        <p className={utilStyles.response}>Your friend gets your email, ENJOY YOUR DRINK!</p>
                        <a className={styles.link2} onClick={() => {
                            toggleShow();
                            toggleHide();
                        }}>Send another email</a>
                    </div>
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
