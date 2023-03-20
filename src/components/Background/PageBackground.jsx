import styles from "./pageBackground.module.scss";

const CardFront = () => {
  return (
    <div alt="cardFront" id={styles.cardFrontImg}>
      <ul id={styles.circleLi}>
        <li></li>
        <li></li>
      </ul>
      <ul id={styles.cardNumber}>
        <li>0000</li>
        <li>0000</li>
        <li>0000</li>
        <li>0000</li>
      </ul>
      <ul className={styles.cardName}>
          <li>maicondlol</li>
          <li>MM/YY</li>
        </ul>
    </div>
  )

}
const CardBackImg = () => {
  return <div alt="cardFront" id={styles.cardBackImg}>
    <span>CVC</span>
  </div>
}

export const PageBackground = ( {children} ) => {
  return (
    <div id={styles.BackMain}>
      <div id={styles.LeftPageBackground}>
        <CardFront />
        <CardBackImg />
      </div>
      <div id={styles.RightPageBackground}> {children} </div>
    </div>
  );
};
