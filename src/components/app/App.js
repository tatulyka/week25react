//import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import {Header, data, options} from '../Header/Header';
//import * as objFunc from '../../Template/testFunction'

import '../../style/App.css';

function App() {
///1 деструктуризация
//const {getHello, getSay} = objFunc
//2 подход - тоже самое, но создаются две переменные
//const testHello = objFunc.getHello
//const testSay = objFunc.getSay
//getHello();
//getSay();

  return (
    <>
      <Header />
    </>
  );
}

export default App;
