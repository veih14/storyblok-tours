import React from 'react';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import type { PageBlok, StoryblokBlokProps } from './storyblokTypes';

export default async function Page({ blok }: StoryblokBlokProps<PageBlok>) {
  return (
    <main>
      {blok.blocks?.map((childBlok) => (
        <StoryblokServerComponent blok={childBlok} key={childBlok._uid} />
      ))}
    </main>
  );
}
