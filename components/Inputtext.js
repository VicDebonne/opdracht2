import utilStyles from '../styles/utils.module.css'
const Inputtext = ({data, onValueChange}) => {
    return (
       <>
            <div>
                <p className={utilStyles.inputtitle}>Personal Message:</p>
                <textarea type="text" id="personal" name="personal" rows="6" cols="40"/>
            </div>
       </>
    );
  };
  
  export default Inputtext;
  