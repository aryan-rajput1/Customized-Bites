// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultHoc from './HOC/Hoc';
import Temp from './components/temp';

function App() {
  return (
    <DefaultHoc path="/" component={Temp} />
  );
}

export default App;
