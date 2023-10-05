import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Routes } from 'react-router-dom';

let name = "vinayak";
function App() {

  const [mode, setmode] = useState('light')
  const [toggleText, settoggleText] = useState('Enable DarkMode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {   //this function decides what message will be there in that alert and also what type of alert will it be like success, warning, danger, etc.
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#02182e'
      settoggleText('Enable LightMode')
      showAlert("DarkMode enabled", "success")
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      settoggleText('Enable DarkMode')
      showAlert("LightMode enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Vinayak's Project" line1="About Us" mode={mode} toggleMode={toggleMode} toggleText={toggleText} /><br />
        <Alert alertMessage={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} label="Enter the text below:" mode={mode} />} />
          </Routes>
        </div >
      </Router>
    </>
  );
}

export default App
