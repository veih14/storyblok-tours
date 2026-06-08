import React from 'react';
import type { StoryblokBlokProps, TestimonialBlok } from './storyblokTypes';

export default function Testimonial({
  blok,
}: StoryblokBlokProps<TestimonialBlok>) {
  return (
    <div className="bg-white p-8 rounded-sm shadow">
      <p className="text-xl leading-relaxed text-gray-700">{blok.comment}</p>
      <p className="text-lg font-semibold mt-6">{blok.name}</p>
    </div>
  );
}
