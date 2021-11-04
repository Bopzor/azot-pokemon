export type Pokemon = {
  name: string;
  images: {
    back: string;
    front: string;
  };
};

export type Paginated<T> = {
  count: number;
  results: T[];
};
