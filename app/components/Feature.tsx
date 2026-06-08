import React from 'react';

export default function Feature(params: any) {
  const { blok } = params;
  return (
    <div className="bg-white p-8 rounded-sm shadow">
      <h3 className="font-bold text-3xl">{blok.headline}</h3>
      <p className="mt-6 text-xl">{blok.content}</p>
    </div>
  );
}
