import React from 'react';
import RecommendedTour from './RecommendedTour';

export default function RecommendedTours(params) {
  const { blok } = params;
  return (
    <section>
      <h2>{blok.headline}</h2>
      {blok.tours.map((tour: any) => (
        <RecommendedTour story={tour} key={tour.content._uid} />
      ))}
    </section>
  );
}
