import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';


function App() {
  const year = getFullYear();
  const footerText = getFooterCopy(false);

  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' />
        <button type='submit'>OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {year} - {footerText}</p>
      </div>
    </div>
  );
}

export default App;
