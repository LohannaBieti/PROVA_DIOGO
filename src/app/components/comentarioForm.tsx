import React, { useState } from 'react';
import axios from 'axios';

interface ComentarioFormProps {
  itemId: number;
}

const ComentarioForm: React.FC<ComentarioFormProps> = ({ itemId }) => {
  const [comentario, setComentario] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`/api/itens/${itemId}/comentarios`, { texto: comentario });
      setComentario(''); // Limpa o campo após envio
    } catch (err) {
      console.error('Erro ao enviar comentário', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escreva seu comentário"
      />
      <button type="submit">Enviar Comentário</button>
    </form>
  );
};

export default ComentarioForm;