// import logo from './logo.svg';
import './App.css';

// import si Component yg sudah kita buat
// ButtonClass dan ButtonFunctional

// commonJS = require
// moduleJS = import
import ButtonClass from './components/ButtonClass';
import ButtonFunctional from './components/ButtonFunctional';

import Container from './components/Container';

// Komponen utama nya
function App() {
  return (
    <div style={
      // jadi Object
      {
        padding: "0.5em",
        display: "flex",
        flexDirection: "row",
        gap: "0.5em",
      }
    }>
      <ButtonClass />
      <ButtonClass text="Data Class" />
      <ButtonClass text="Custom Class" />

      <ButtonFunctional text="Data Functional" />
      <ButtonFunctional text="Custom" />
      <ButtonFunctional />

      <Container />
    </div>
  );
}

export default App;
