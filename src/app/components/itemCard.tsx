import React from 'react';
import Link from 'next/link';
import { Item } from '../types/interfaces';

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="item-card">
      <h2>{item.nome}</h2>
      <p>{item.descricao}</p>
      <p><strong>Categoria:</strong> {item.categoria.nome}</p>
      <Link href={`/itens/${item.id}`}>
        <a>Ver detalhes</a>
      </Link>
    </div>
  );
};

export default ItemCard;