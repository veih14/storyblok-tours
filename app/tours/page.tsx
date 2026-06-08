import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';
import { notFound } from 'next/navigation';
import RecommendedTour from '../components/RecommendedTour';

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  try {
    const response = await client.getStory(`tours`, {
      version: 'draft',
    });

    return response.data.story;
  } catch (error) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'status' in error &&
      error.status === 404
    ) {
      notFound();
    }

    throw error;
  }
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: 'tour',
    version: 'draft',
  });

  return response.data.stories;
};

export default async function Tours() {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {tours.map((tour) => (
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </div>
  );
}
