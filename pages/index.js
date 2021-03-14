import Head from 'next/head'
import Layout from "../components/layout";
import main from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Digital Bullet Journal</title>
        </Head>

        <main className={main.mainPage}>
          <h1 className={main.title}>Your Personal Bullet Journal</h1>
          <p className="txtPrimary txt--middle">Please, note, for now only DEMO subpage is available for view.</p>
          <div className="flexRow">
            <button className={main.mainBtn}>Demo</button>
            <button className={main.mainBtn}>Create your account</button>
            <button className={main.mainBtn}>Sign in</button>
          </div>
          <footer className={main.footer}><a href='https://www.freepik.com/vectors/calendar'>Calendar vector created by pikisuperstar - www.freepik.com</a></footer>
        </main>
      </div>
    </Layout>
  )
}
