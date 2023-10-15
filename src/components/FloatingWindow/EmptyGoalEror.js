import React ,{useState} from "react";
import style from './EmptyGoal.module.css';
import Container from '../UI/Container'

function EmptyGoal(props){
    console.log(props.errorOrNot);
    const [showError, setErrorOrNot] = useState(props.errorOrNot);
    const closeErrorMessage = () =>{
            setErrorOrNot(!showError);
      
    };


    return(
        <React.Fragment>

    <div className={`${style['black-background']} ${showError !== true ? style['hide-error']: ''}`} onClick={closeErrorMessage}>

    </div>
        <Container>

        <div className={`${style['floating-window']} ${showError !== true ? style['hide-error']: ''}`}>
        <header>

            <h3 className={style.h3}>An Error Occurred</h3>
        </header>
        <section className={style.section}>
            
            <p>Please,don't enter empty String</p>
        </section>
            <footer>

            <button type="button" className={style.button} onClick={closeErrorMessage}>close</button>
            </footer>

        </div>
        </Container>
        </React.Fragment>
    )
}

export default EmptyGoal;