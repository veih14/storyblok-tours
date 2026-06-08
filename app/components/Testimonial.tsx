import React from 'react';

export default function Testimonial(params) {
  const { blok } = params;
  return (
    <div>
      <p>{blok.comment}</p>
      <p>{blok.name}</p>
    </div>
  );
}
