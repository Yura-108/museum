import { z } from 'zod';

export const paginationSchema = z.object({
  total_pages: z.number().int().nonnegative(),
});

export const paginationDataSchema = z.object({
  pagination: paginationSchema,
});

export const artWorksSchema = z.object({
  id: z.number().int().positive(),
  artist_title: z.string().nullable(),
  title: z.string().nullable(),
  image_id: z.string().nullable(),
  artist_display: z.string().nullable(),
  date_display: z.string().nullable(),
  date_start: z.number().nullable(),
  date_end: z.number().nullable(),
  dimensions: z.string().nullable(),
  credit_line: z.string().nullable(),
  on_loan_display: z.string().nullable(),
  thumbnail: z.object({ alt_text: z.string().nullable() }).nullable(),
});

export const artWorkDataSchema = z.object({
  data: artWorksSchema,
});

export const artWorkDataArraySchema = z.object({
  data: z.array(artWorksSchema),
});

export const artWorkAndPaginationSchema = paginationDataSchema.merge(
  artWorkDataArraySchema,
);

export const searchSchema = z.object({
  id: z.number().int().positive(),
});

export const searchDataSchema = z.object({
  data: z.array(searchSchema),
});

export const searchAndPaginationSchema =
  paginationDataSchema.merge(searchDataSchema);
