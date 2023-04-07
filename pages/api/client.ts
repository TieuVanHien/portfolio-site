import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'bz3yi40h',
  dataset: 'portfolio',
  apiVersion: '2022-03-10',
  useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
