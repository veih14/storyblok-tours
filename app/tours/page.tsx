import Image from 'next/image';
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';

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

export default async function Tours() {
  const story = await fetchToursPage();

  return <StoryblokStory story={story} />;
}
