import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState('light');
  const [Mode1, setMode1] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils-dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils-light Mode';
    }
  };

  const toggleMode1 = () => {
    if (Mode1 === 'light') {
      setMode1('dark');
      document.body.style.backgroundColor = 'pink';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils-dark Mode';
    } else {
      setMode1('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils-light Mode';
    }
  };

  return (
    <>
      
        <Navbar title="Textutils" Mode={Mode} toggleMode={toggleMode} Mode1={Mode1} toggleMode1={toggleMode1} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm heading="Enter text to analyse" Mode={Mode} showAlert={showAlert} />          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter text to analyse" Mode={Mode} showAlert={showAlert} />} />
          </Routes> */}
        </div>
      
    </>
  );
}

export default App;
