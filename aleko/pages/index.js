import Head from "next/head";

const Header = (await import("home/Header")).default;

const Home = () => (
  <div className="container">
    <Head>
      <title>Federated App 2</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
      <h1 className="title">
        App 2
      </h1>
      {/* <img className="image" src={'https://media4.giphy.com/media/SpoV1pB4g7gXvWo3Up/giphy.gif?cid=ecf05e479e04413e83e664349873eb6dbdfce0c2f9dfa5e4&rid=giphy.gif'} alt="Logo" /> */}
    </main>

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
        width: 600px;
      }

      .title {
        margin: 0 0 10px 0;
        line-height: 1.15;
        font-size: 4rem;
      }
    `}</style>
  </div>
);

export default Home;
