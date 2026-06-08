import Image from 'next/image';
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  try {
    const response = await client.getStory(`home`, {
      version: 'draft',
      resolve_relations: 'recommended_tours.tours',
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

export default async function Home() {
  const story = await fetchHomePage();

  return <StoryblokStory story={story} />;
}
