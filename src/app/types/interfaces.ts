export interface Item {
    id: number;
    nome: string;
    descricao: string;
    categoria: string;
  }
  
  export interface Usuario {
    id: number;
    nome: string;
    email: string;
  }
  
  export interface Comentario {
    id: number;
    texto: string;
    usuario: Usuario;
    itemId: number;
    criadoEm: string;
  }
  
  export interface LoginResponse {
    token: string;
  }