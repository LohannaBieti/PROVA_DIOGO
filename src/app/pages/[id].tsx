import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ComentarioList from '../../components/ComentarioList';
import ComentarioForm from '../../components/ComentarioForm';
import { Item, Comentario } from '../../types/interfaces';

interface ItemDetalhesProps {
  id: string;
}

const ItemDetalhes: React.FC<ItemDetalhesProps> = ({ id }) => {
  const [item, setItem] = useState<Item | null>(null);
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  useEffect(() => {
    const fetchItem = async () => {
      const itemResponse = await axios.get(`/api/itens/${id}`);
      setItem(itemResponse.data);

      const comentarioResponse = await axios.get(`/api/itens/${id}/comentarios`);
      setComentarios(comentarioResponse.data);
    };
    fetchItem();
  }, [id]);

  return (
    <div>
      {item && (
        <>
          <h1>{item.nome}</h1>
          <p>{item.descricao}</p>
          <h3>Comentários:</h3>
          <ComentarioList comentarios={comentarios} />
          <ComentarioForm itemId={Number(id)} />
        </>
      )}
    </div>
  );
};

export default ItemDetalhes;
