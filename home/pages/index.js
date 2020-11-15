import Head from "next/head";

import Header from "../components/Header.jsx";

const Home = () => (
  <div className="container">
    <Head>
      <title>Federated App 1</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
      <h1 className="title">App 1</h1>
      <img className="image" src={'https://avatars2.githubusercontent.com/u/43553652?s=400&u=164e6aa65f5640ff9ff5ffc9b737458fa5002bfb&v=4'} alt="Logo" />
    </main>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 800px;
      }

      .title {
        margin: 0 0 10px 0;
        line-height: 1.15;
        font-size: 4rem;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
