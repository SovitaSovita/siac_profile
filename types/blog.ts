export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: string[];
  author?: string;
  tags?: string[];
  publishedAt?: string;
};
