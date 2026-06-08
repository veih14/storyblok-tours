import React from 'react';
import Link from 'next/link';
import type { RecommendedTourStory } from './storyblokTypes';

type RecommendedTourProps = {
  story: RecommendedTourStory;
};

export default function RecommendedTour({ story }: RecommendedTourProps) {
  const image = story.content.main_image?.filename;

  return (
    <div className="bg-white rounded-sm shadow">
      {image ? (
        <img className="aspect-video object-cover w-full" src={image} alt="" />
      ) : null}
      <div className="p-8">
        <div className="flex gap-4 justify-between text-lg font-bold">
          <h3>{story.content.name} stories</h3>
          <p>
            {Number(story.content.price).toLocaleString('en-US', {
              style: 'currency',
              currency: 'TWD',
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
          {story.content.location}, Taiwan
        </p>
        <Link
          className="font-bold text-base mt-8 block underline"
          href={`/${story.full_slug}`}
        >
          View Tour
        </Link>
      </div>
    </div>
  );
}
