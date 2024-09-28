import './App.css';
// import Test from '../src/Component/Text';
// import Msg from './Component/Msg';
import Product from './Component/Product';
function App() {
  let product1 = {
    title:"Mouse",
    desc:"kjfbkjb dnjkffkjwn hduwe hdnwe",
    oldPrice:300,
    newPrice:230
  }
  return (
    <div className="App">
      <header className="App-header">
      
        <Product product = {product1}/>
      </header>
    </div>
  );
}

export default App;
