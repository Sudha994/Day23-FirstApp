
import './App.css';
import First from './components/First';
import {Footer} from './components/Footer';
import Header from './components/Header';
import Second from './components/Second';
import Third from './components/Third';
import Event from './components/Event';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Employee from './components/Employee';
import Product from './components/Product';


function App() {
  return (
    <div >
     {/* <h1>welcome to React First App</h1>
     <p>Working with React is fun</p>
     <h3>Testing</h3>*/}

      <Header/>
     <First/>
     <Event/>
     <Second/>
     <Third/>
     <Fourth/>
     <Fifth/>
     <Sixth/>
     <Employee/>
     <Product/>
     <Footer/>
     
    </div>  
  );
}

export default App;
