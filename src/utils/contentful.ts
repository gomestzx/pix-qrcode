import { createClient } from 'contentful';

// Verificar se as variáveis de ambiente estão definidas
if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is not defined');
}
if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN is not defined');
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries(limit = 10, skip = 0) {
  const entries = await client.getEntries({ content_type: 'post', limit, skip });
  return entries.items;
}

export async function fetchTotalEntries() {
  const entries = await client.getEntries({ content_type: 'post' });
  return entries.total;
}

// Nova função para buscar os últimos 4 posts
export async function fetchLatestPosts() {
  const entries = await client.getEntries({
    content_type: 'post',
    limit: 4,
    order: ['-sys.createdAt'] // Ordena pelo campo de criação em ordem decrescente
  });
  return entries.items;
}
