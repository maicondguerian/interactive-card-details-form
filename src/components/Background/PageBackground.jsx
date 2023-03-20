import styles from "./pageBackground.module.scss";

const CardFront = () => {
  return <div alt="cardFront" id={styles.cardFrontImg}>
  </div>
}
const CardBackImg = () => {
  return <div alt="cardFront" id={styles.cardBackImg}>
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
