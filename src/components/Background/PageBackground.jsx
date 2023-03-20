import styles from "./pageBackground.module.scss";

export const PageBackground = ( {children} ) => {
  return (
    <div id={styles.BackMain}>
      <div id={styles.LeftPageBackground}></div>
      <div id={styles.RightPageBackground}> {children} </div>
    </div>
  );
};
