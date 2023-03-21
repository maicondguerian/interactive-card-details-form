import styles from './form.module.scss';

export const Form = () => {
    return (

        <div className={styles.formWrapper}>
            <form className={styles.form}>
                <fieldset id={styles.nomeNumero}>
                        <label for="name">cardholder name</label>
                        <input type="text" id='name' required pattern='/[a-z]/gi' placeholder='e.g. Jane Applessed' />
                        <label for="number">card number</label>
                        <input type="text" id='number' required pattern='/[0-9]{12}/g' placeholder='e.g. 1234 5678 9123 0000'/>
                </fieldset>
                <fieldset className={styles.dateCvc}>
                    <div className={styles.data}>
                        <label htmlFor="month year">exp.date (mm/yy)</label>
                        <div className={styles.dataDado}>
                            <input type="text" name="" id="month" required pattern='' placeholder='MM'/>
                            <input type="text" name="" id="year" required pattern='' placeholder='YY'/>
                        </div>
                    </div>
                    <div className={styles.cvc}>
                        <label htmlFor="cvc">cvc</label>
                        <input type="text" name="" id="cvc" required pattern='' placeholder='e.g. 123'/>
                    </div>
                
                </fieldset>
            <button type='submit'>Confirm</button>
            </form>
        </div>
    )

}



