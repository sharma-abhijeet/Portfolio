import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: 'ozox1p3w',
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: 'skqYoXx7onfnpMTrt25lo8Gu1cDBtyyQSU3xJ5SoXdFpzUyKDYrQqAl8tOBAC1jcZJOR03W6ORefOVvukEM2bwgEXoXsDpiYWp2fSsm41R3uLH0hODuW5W9qJsqY4VSyO5EwVewsbPeTdCUrNkUF01yi14UyISuF6AeMXq6jMqt8Fuo8RuL9',
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
