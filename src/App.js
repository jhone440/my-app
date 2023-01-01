import logo from './logo.svg';
import './App.css';
import Event from './components/2-7.Event/Event';
import Condition from './components/2-8.Conditional/Condition';
import List from './components/2-9.List/List';
import ControlComponent from './components/2-10.Form/ControlComponent';
import UncontrolComponent from './components/2-10.Form/UncontrolComponent';
import State from './components/3-3.Hook/State';
import Reducer from './components/3-3.Hook/Reducer';
import Memo from './components/3-8.Memorization/Memo';
import Movie from './components/Movie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/movie/:id" element={<Detail />} />           
      </Routes>
    </Router>
  )
}
export default App;
