import React from 'react';
import Link from 'next/link';

export default function RecommendedTour(props) {
  return (
    <div>
      <Link href={`/${props.story.full_slug}`}>
        <h3>{props.story.content.name}</h3>
      </Link>
    </div>
  );
}
