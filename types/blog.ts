export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  author?: string;
  tags?: string[];
  publishedAt?: string;
};
