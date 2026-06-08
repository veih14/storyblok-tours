import React from 'react';

export default function Feature(params: any) {
  const { blok } = params;
  return (
    <div>
      <h3>{blok.headline}</h3>
      <p>{blok.content}</p>
    </div>
  );
}
