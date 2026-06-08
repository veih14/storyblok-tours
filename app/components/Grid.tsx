import React from 'react';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import type { GridBlok, StoryblokBlokProps } from './storyblokTypes';

export default function Grid({ blok }: StoryblokBlokProps<GridBlok>) {
  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          {blok.headline}
        </h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {blok.items?.map((item) => (
            <StoryblokServerComponent blok={item} key={item._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
