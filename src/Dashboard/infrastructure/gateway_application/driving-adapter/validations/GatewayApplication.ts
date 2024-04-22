import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(1, { message: 'El campo nombre no puede estar vacio.' }),
  upstream_url: z.string().min(1, { message: 'El campo Api Url no puede estar vacio.' }),
  origin_urls: z.string().min(1, { message: 'El campo origins no puede estar vacio.' }),
});