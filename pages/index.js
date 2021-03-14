import Link from 'next/link'

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
            <Link href="/entries/new-entry">
              <button className="mainBtn">Demo</button>
            </Link>
            <button className="mainBtn">Create your account</button>
            <button className="mainBtn">Sign in</button>
          </div>
          <footer className={main.footer}><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></footer>
        </main>
      </div>
    </Layout>
  )
}
