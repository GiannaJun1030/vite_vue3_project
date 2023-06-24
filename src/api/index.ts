import { makeRequest } from '@/service/api.ts';

export const login = makeRequest<{ name: string; password: string }>({
  url: '/api/login',
  method: 'post'
});

export const getHomeMultidata = makeRequest({
  url: '/api/home/multidata',
  method: 'post'
});
