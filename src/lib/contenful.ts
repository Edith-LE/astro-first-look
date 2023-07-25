import contentful from "contentful";


export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export const getContentfulData = () => {contentfulClient.getEntry("4upqNGq5Ua74Dtc2jfbHIT")
.then((entry) => console.log(entry))
.catch(console.error)}