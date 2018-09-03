import { ResponseError } from '../models/response-error';

export const HTTP_UNAUTHORIZED: ResponseError = {
  message: 'Usuário não autorizado',
  code: 'HTTP_UNAUTHORIZED'
};

export const HTTP_UNEXPECTED: ResponseError = {
  message: 'Erro inesperado',
  code: 'HTTP_UNEXPECTED'
};

export const CLIENT_CONNECTION: ResponseError = {
  message: 'Problemas com a sua conexão',
  code: 'CLIENT_CONNECTION'
};
