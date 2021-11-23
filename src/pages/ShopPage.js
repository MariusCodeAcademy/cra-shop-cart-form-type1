import { useState, useEffect } from 'react';
import List from '../components/Shop/List';

function ShopPage() {
  const [shopItems, setShopItems] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    getShopItems();
  }, []);

  const getShopItems = () => {};

  return (
    <main>
      <h1>Shop page</h1>
      <List items={shopItems} />
    </main>
  );
}

export default ShopPage;
