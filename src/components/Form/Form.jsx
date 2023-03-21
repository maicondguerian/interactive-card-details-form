import styles from './form.module.scss';

export const Form = () => {
    return (

        <div className={styles.formWrapper}>
            <form className={styles.form}>
                <fieldset id={styles.cardInfo}>
                        <label for="name">cardholder name</label>
                        <input type="text" id='name' required pattern='[a-z]+' placeholder='e.g. Jane Applessed' maxlength="23" autoComplete='off'/>
                        <label for="number">card number</label>
                        <input type="number" id='number' required pattern='[0-9]{12}' placeholder='e.g. 1234 5678 9123 0000'  min="0" max="12"/>
                </fieldset>
                <fieldset className={styles.dateCvc}>
                    <div className={styles.data}>
                        <label htmlFor="month">exp.date (mm/yy)</label>
                        <div className={styles.dataDado}>
                            <input type="number" name="" id="month"  required pattern='[0-9]{2}' placeholder='MM'/>
                            <input type="number" name="" id="year" required pattern='[0-9]{2}' placeholder='YY'/>
                        </div>
                    </div>
                    <div className={styles.cvc}>
                        <label htmlFor="cvc">cvc</label>
                        <input type="number" name="" id="cvc" required pattern='[0-9]{3}' placeholder='e.g. 123'/>
                    </div>
                </fieldset>
            <button type='submit'>Confirm</button>
            </form>
        </div>
    )

}



