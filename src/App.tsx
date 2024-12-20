import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import logo from './assets/stackline_logo.svg';
import LineChart from './components/LineChart/LineChart';
import Sidebar from './components/Sidebar/Sidebar';
import Table from './components/Table/Table';
import { useEffect, useState } from 'react';
import { setData } from './store/productSlice';
import { RootState } from './store';
import { api } from './api';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await api.get('/api/products');
        dispatch(setData(response.data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const product = products[0];

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Stackline Logo" className="logo" />
      </header>
      <div className="container">
        {
          loading ? <Loader /> : (
            <>
              <Sidebar product={product} />
              <main className="main-content">
                  <LineChart sales={product.sales} />
                  <Table product={product} />
              </main>
            </>
          )
        }
      </div>
    </div>
  );
}

export default App
