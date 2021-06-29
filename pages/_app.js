import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <>
      <h1
        style={{
          backgroundColor: 'Cyan',
          marginTop: '0px',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        HELLO THERE THIS IS A NAV BAR LOCATION
      </h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
