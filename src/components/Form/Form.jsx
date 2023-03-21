import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import styles from './form.module.scss';

export const Form = () => {
    const { handleUser, user, number, handleNumber, month, handleMonth, year, handleYear, cvc, handleCvc } = useContext(MyContext)
    return (
        <div className={styles.formWrapper}>
            <form className={styles.form}>
                <fieldset id={styles.cardInfo}>
                        <label for="name">cardholder name</label>
                        <input type="text" id='name' required pattern='[a-z]+' placeholder='e.g. Jane Applessed' maxlength="20"
                        value={user} onChange={handleUser} autoComplete='off'/>
                        <label for="number">card number</label>
                        <input id='number' placeholder='e.g. 1234 5678 9123 0000'  value={number} onChange={handleNumber} autoComplete='off'/>
                </fieldset>
                <fieldset className={styles.dateCvc}>
                    <div className={styles.data}>
                        <label htmlFor="month">exp.date (mm/yy)</label>
                        <div className={styles.dataDado}>
                            <input type="number" name="" id="month" maxlength="2" required pattern='[0-9]{2}' placeholder='MM' value={month} onChange={handleMonth}autoComplete='off'/>
                            <input type="number" name="" id="year" maxlength="2" required pattern='[0-9]{2}' placeholder='YY' value={year} onChange={handleYear}autoComplete='off'/>
                        </div>
                    </div>
                    <div className={styles.cvc}>
                        <label htmlFor="cvc">cvc</label>
                        <input type="number" name="" id="cvc" maxlength="3" required pattern='[0-9]{3}' placeholder='e.g. 123' value={cvc} onChange={handleCvc}autoComplete='off'/>
                    </div>
                </fieldset>
            <button type='submit'>Confirm</button>
            </form>
        </div>
    )

}



