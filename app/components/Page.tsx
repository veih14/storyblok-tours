import React from 'react';
import { StoryblokServerComponent } from '@storyblok/react/rsc';

export default async function Page(params) {
  const { blok } = await params;
  return (
    <main>
      {blok.blocks.map((blok: any) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
}
