import Pokecard from '../components/Pokecard'
import defaultPokemons from './defaultPokemons'
import styles from '../styles/Pokedex.module.scss'

const Pokedex = ({ pokemon, exp, isWinner }) => {
  let title
  if (isWinner) {
    title = <h1>Winning Hand</h1>
  } else {
    title = <h1>Losing Hand</h1>
  }
  // if (isWinner) {
  //   title = <h1 className={styles.Pokedex_Winner}>Winning Hand</h1>
  // } else {
  //   title = <h1 className={styles.Pokedex_Loser}>Losing Hand</h1>
  // }
  const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
  const convertId = (id) => {
    return id.toString().padStart(3, '0')
  }
  return (
    <div className={styles.Pokedex}>
      {title}
      <h4>Total Experience: {exp}</h4>
      <div className={styles.Pokedex_Cards}>
        {pokemon.map((p, index) => (
          <Pokecard
            key={p.name + '-' + index}
            name={p.name}
            img={POKE_API.concat(`${convertId(p.id)}.png`)}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  )
}

export default Pokedex
