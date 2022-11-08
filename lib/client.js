import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'l0v6p23f',
    dataset: 'production',
    apiVersion: '2022-10-17',
    useCdn: true,
    token: 'skF4GkaEl5wtC5xKFXd8WdHZ1Mred538weLkS5KhwsDaA9q1A7RypSIqhnaYxbW4VdEGDpM8YtyC7x21EwomUn7sagnobdjotmGFNgfDtLIEIyFR3dZdDNz2JZxCwFikJUa0IS3sHnp4rj1G1HHJsLGaMigTc29xls0ShPa8wheFmf8l7r9n',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);