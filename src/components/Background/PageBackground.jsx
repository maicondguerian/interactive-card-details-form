import { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
import styles from "./pageBackground.module.scss";

const CardFront = () => {
  const { user, number, month, year } = useContext(MyContext)
  return (
    <div alt="cardFront" id={styles.cardFrontImg}>
      <ul id={styles.circleLi}>
        <li></li>
        <li></li>
      </ul>
      <ul id={styles.cardNumber}>
        <li>{number ? number : '0000 0000 0000 0000'}</li>
      </ul>
      <ul className={styles.cardName}>
          <li>{user ? user : 'e.g. Jane Applessed'}</li>
          <li>{month ? month : 'MM'}/{year ? year : 'YY'}</li>
        </ul>
    </div>
  )
}
const CardBackImg = () => {
  const { cvc } = useContext(MyContext)
  return <div alt="cardFront" id={styles.cardBackImg}>
    <span>{cvc ? cvc : 'CVC'}</span>
  </div>
}

export const PageBackground = ( {children} ) => {
  return (
    <div id={styles.BackMain}>
      <div id={styles.LeftPageBackground}>
        <CardFront />
        <CardBackImg />
      </div>
      <div id={styles.RightPageBackground}>{children}</div>
    </div>
  );
};
