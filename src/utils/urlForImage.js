import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

// /**
//  * 
//  * @param {import("@sanity/image-url").SanityImageSource} source 
//  * @returns {import("@sanity/image-url").types.ImageUrlBuilder}
//  */
export default function urlForImage(source) {
  return builder.image(source);
}
