import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Khoan';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Ease frontend',
  };
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Khoan Gip</p>
        <p>
          Xin chao {name} - {age}
        </p>
        <p>
          {isMale && (
            <>
              <span>Male</span>
              <span>Male</span>
              <span>Male</span>
            </>
          )}
        </p>
        <p>{student.name}</p>
        <ul>
          {colorList.map((color) => (
            <li key={color} style={{ color }}>
              {color}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
