import styles from "./pageBackground.module.scss";
import cardFrontImg from '../../assets/bg-card-front.png'
import cardBackImg from '../../assets/bg-card-back.png'

const CardFront = () =>{
  return <img src={cardFrontImg} alt="cardFront" id={styles.cardFrontImg} />
}
const CardBackImg = () =>{
  return <img src={cardBackImg} alt="cardFront" id={styles.cardBackImg}/>
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
