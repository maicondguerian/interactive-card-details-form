import styles from './form.module.scss';

export const Form = () => {
    return (

        <div className={styles.formWrapper}>
            <ul>
                <li>
                    <p><label for="name">cardholder name</label></p>
                    <span>
                        <input type="text" id='name' />
                    </span>
                </li>
                <li>
                    <p><label for="number">card number</label></p>
                    <span>
                        <input type="text" id='number' />
                    </span>
                </li>
            </ul>
            <span>EXP. DATE (MM/YY)</span>
            <div >
                <ul className={styles.secondUl}>
                <li><input type="text" name="" id="month" /></li>
                <li><input type="text" name="" id="" /></li>
                <li><input type="text" name="" id="" /></li>
                </ul>
            </div>
            <button>Confirm</button>
        </div>



    )

}



