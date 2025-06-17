import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';
import { Item } from '../types/interfaces';

const Index: React.FC = () => {
  const [itens, setItens] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItens = async () => {
      const response = await axios.get('/api/itens');
      setItens(response.data);
    };
    fetchItens();
  }, []);

  return (
    <div>
      <h1>Lista de Itens</h1>
      <div>
        {itens.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Index;
