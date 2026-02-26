import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts', // O nome que aparecerá na URL da API (ex: /api/posts)
  admin: {
    useAsTitle: 'title', // O campo que define o nome do item na listagem
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText', // Editor de texto estilo Word/Notion
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Rascunho', value: 'draft' },
        { label: 'Publicado', value: 'published' },
      ],
      defaultValue: 'draft',
    },
  ],
}