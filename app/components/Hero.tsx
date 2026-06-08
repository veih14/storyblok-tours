import React from 'react';

export default function Hero(params) {
  const { blok } = params;
  return (
    <section>
      <h1>{blok.headline}</h1>
      <p>{blok.content}</p>
    </section>
  );
}
