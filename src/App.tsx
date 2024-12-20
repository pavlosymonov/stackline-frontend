import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import logo from './assets/stackline_logo.svg';
import LineChart from './components/LineChart/LineChart';
import Sidebar from './components/Sidebar/Sidebar';
import Table from './components/Table/Table';
import data from './data.json';
import { useEffect } from 'react';
import { Product, setData } from './store/productSlice';
import { RootState } from './store';

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(setData(data as unknown as Product[]));
  }, [dispatch]);

  const product = products[0];

  return product ? (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Stackline Logo" className="logo" />
      </header>
      <div className="container">
        <Sidebar product={product} />
        <main className="main-content">
            <LineChart sales={product.sales} />
            <Table product={product} />
        </main>
      </div>
    </div>
  ) : <></>
}

export default App
