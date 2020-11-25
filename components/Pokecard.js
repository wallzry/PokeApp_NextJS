import Image from 'next/image'
import styles from '../styles/Pokecard.module.scss'

const Pokecard = ({ name, img, type, exp }) => {
  return (
    <div className={styles.Pokecard}>
      <h2 className={styles.Pokecard_Title}>{name}</h2>
      <div className={styles.Pokecard_Image}>
        <Image src={img} alt="Pokemon Image" width={100} height={100} />
      </div>
      <p className="styles.Pokecard_Data">Type: {type}</p>
      <p className="styles.Pokecard_Data">EXP: {exp}</p>
    </div>
  )
}

export default Pokecard
