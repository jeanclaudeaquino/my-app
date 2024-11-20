
const HomeScreen = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>JC's Demo app for app deployment (TESTING 20/11/2024)</h1>
      <p style={styles.description}>
       On my machine
      </p>
      <button style={styles.button} onClick={() => alert('Button clicked!')}>
        Get Started
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default HomeScreen;
