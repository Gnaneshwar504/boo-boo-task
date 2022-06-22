import Header from './components/Header';
import Template from './components/Template';
import Invoice from './components/Invoice';
import Footer from './components/Footer';



import './App.css';

function App() {
  return (
    <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    
      <Header />
      <Template />
      <Invoice />
      <Footer />
     
    
    </>
  );
}

export default App;
