import React from 'react';
import type { FeatureBlok, StoryblokBlokProps } from './storyblokTypes';

export default function Feature({ blok }: StoryblokBlokProps<FeatureBlok>) {
  return (
    <div className="bg-white p-8 rounded-sm shadow">
      <h3 className="font-bold text-3xl">{blok.headline}</h3>
      <p className="mt-6 text-xl">{blok.content}</p>
    </div>
  );
}
