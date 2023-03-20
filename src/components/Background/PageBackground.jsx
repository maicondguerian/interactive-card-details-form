import styles from "./pageBackground.module.scss";
import cardFrontImg from '../../assets/bg-card-front.png'

const CardFront = () =>{
  return <img src={cardFrontImg} alt="cardFront" />
}

export const PageBackground = ( {children} ) => {
  return (
    <div id={styles.BackMain}>
      <div id={styles.LeftPageBackground}> <CardFront /> </div>
      <div id={styles.RightPageBackground}> {children} </div>
    </div>
  );
};
