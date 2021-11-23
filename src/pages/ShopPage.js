import { useState, useEffect } from 'react';
import List from '../components/Shop/List';
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

function ShopPage() {
  const [shopItems, setShopItems] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    getShopItems();
  }, []);

  const getShopItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      console.log('ShopPage.js: response ===', response);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Shop page</h1>
      <List items={shopItems} />
    </main>
  );
}

export default ShopPage;
