import type { ISbStoryData, SbBlokData } from '@storyblok/react/rsc';
import type { renderRichText } from '@storyblok/react/rsc';

export type StoryblokBlokProps<T extends SbBlokData = SbBlokData> = {
  blok: T;
};

export type StoryblokAsset = {
  filename?: string;
};

export type BlokList = SbBlokData[];

export type PageBlok = SbBlokData & {
  blocks?: BlokList;
};

export type GridBlok = SbBlokData & {
  headline?: string;
  items?: BlokList;
};

export type HeroBlok = SbBlokData & {
  headline?: string;
  content?: string;
};

export type FeatureBlok = SbBlokData & {
  headline?: string;
  content?: string;
};

export type TestimonialBlok = SbBlokData & {
  comment?: string;
  name?: string;
};

export type TourBlok = SbBlokData & {
  name?: string;
  main_image?: StoryblokAsset;
  introduction?: string;
  body?: Parameters<typeof renderRichText>[0];
};

export type RecommendedToursBlok = SbBlokData & {
  headline?: string;
  tours?: RecommendedTourStory[];
};

export type RecommendedTourContent = SbBlokData & {
  _uid?: string;
  name?: string;
  main_image?: StoryblokAsset;
  price?: string | number;
  location?: string;
};

export type RecommendedTourStory = ISbStoryData<RecommendedTourContent>;
