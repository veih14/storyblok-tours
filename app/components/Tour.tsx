import { renderRichText } from '@storyblok/react/rsc';
import React from 'react';

export default function Tour(props) {
  return (
    <main className="container mx-auto px-4 w-full pt-32 pb-16">
      <h1 className="text-3xl md:text-5xl font-bold">{props.blok.name}</h1>
      <img className="mt-12" src={props.blok.main_image.filename} />
      <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">
        {props.blok.introduction}
      </p>
      <div
        className="prose md:prose-lg mt-16 max-w-none prose-headings:mt-8 prose-headings:font-bold prose-headings:text-gray-950 prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base prose-p:text-gray-800"
        dangerouslySetInnerHTML={{
          __html: renderRichText(props.blok.body),
        }}
      ></div>
    </main>
  );
}
