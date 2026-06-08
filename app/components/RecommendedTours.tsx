import React from 'react';
import RecommendedTour from './RecommendedTour';
import type {
  RecommendedToursBlok,
  StoryblokBlokProps,
} from './storyblokTypes';

export default function RecommendedTours({
  blok,
}: StoryblokBlokProps<RecommendedToursBlok>) {
  return (
    <section className="py-16 container mx-auto w-full px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {blok.headline}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {blok.tours?.map((tour) => (
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </section>
  );
}
