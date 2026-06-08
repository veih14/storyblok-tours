import React from 'react';
import type { HeroBlok, StoryblokBlokProps } from './storyblokTypes';

export default function Hero({ blok }: StoryblokBlokProps<HeroBlok>) {
  return (
    <section className="container mx-auto px-4 w-full pt-32 pb-16">
      <h1 className="text-center text-5xl md:text07xl font-bold">
        {blok.headline}
      </h1>
      <p className="text-center text-xl mt-8">{blok.content}</p>
    </section>
  );
}
