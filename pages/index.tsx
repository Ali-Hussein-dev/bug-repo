import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <br />
      <Link href="/nested/1">Page 1</Link>
      <br />
      <br />
      <Link href="/nested/2">Page 2</Link>
      <br />
      <br />
      <Link href="/nested/324">non-existing Page </Link>
    </div>
  );
};

export default Home;
