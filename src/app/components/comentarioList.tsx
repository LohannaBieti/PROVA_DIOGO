import React from 'react';
import { Comentario } from '../types/interfaces';

interface ComentarioListProps {
  comentarios: Comentario[];
}

const ComentarioList: React.FC<ComentarioListProps> = ({ comentarios }) => {
  return (
    <div>
      <h3>Comentários</h3>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario.id}>
            <p>{comentario.texto}</p>
            <p><strong>Autor:</strong> {comentario.autor.nome} | <strong>Data:</strong> {comentario.data}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComentarioList;