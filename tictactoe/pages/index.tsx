import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Board from "../containers/Board";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tictactoe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Tic tac toe bitches</h1>
        <Board />
      </main>
    </div>
  );
};

export default Home;