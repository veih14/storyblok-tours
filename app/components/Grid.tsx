import React from 'react';
import { StoryblokServerComponent } from '@storyblok/react/rsc';

export default function Grid(params) {
  const { blok } = params;
  return (
    <section>
      <h2>{params.blok.headline}</h2>
      {blok.items.map((blok: any) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </section>
  );
}
