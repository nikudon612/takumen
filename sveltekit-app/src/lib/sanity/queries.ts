import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}

export const navigationQuery = groq`*[_type == "navigation" && _id == "navigation"][0]{
  logo {
    asset->{
      url
    }
  },
  links[]{
    label,
    href
  }
}`;

export interface Navigation {
	logo?: {
		asset: {
			url: string;
		};
	};
	links: {
		label: string;
		href: string;
	}[];
}

export const footerQuery = groq`*[_type == "footer" && _id == "footer"][0]{
  locationLabel,
  address
}`;

export interface Footer {
	locationLabel?: string;
	address?: string;
}

// Temporarily use this
export const homeQuery = groq`*[_type == "home"][0]{ introText, slideshowImages[]{ asset->{url}, alt, caption } }`;

export interface Home {
	introText?: string;
	slideshowImages: {
		asset: {
			url: string;
		};
		alt?: string;
		caption?: string;
	}[];
}
