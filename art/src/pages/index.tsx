import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";



const inter = Inter({ subsets: ["latin"] });

interface MyProps {
  text: string;
}

const Home: React.FC<MyProps> = ({ text }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id={styles.body}>
        <div >
        <div id={styles.main}>
        <div id={styles.box1}></div>

        <div id={styles.box2}>
            <div id={styles.text}>
            ART is the <br/>work of god

            </div>
        </div>
        <div id={styles.box3}>
            <div id={styles.container}>
              <div id={styles.logo}>
                <b>ART</b>
              </div>  
              <div id={styles.menu}>
                <ul>
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <Link href="/login"><li>login</li></Link>
                </ul>
              </div>
            </div>
        </div>
      
        </div>
        </div>
      </main>
    </>
  );
};

export default Home;
