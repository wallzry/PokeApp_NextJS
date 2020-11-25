import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Pokegame from './../components/Pokegame'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/faviconpoke.ico" />
      </Head>
      <Pokegame />
    </div>
  )
}
