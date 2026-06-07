import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';
import { notFound } from 'next/navigation';

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  try {
    const response = await client.getStory(`tours/${slug}`, {
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

export default async function ToursPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = await fetchTourPage(slug);

  return <StoryblokStory story={story} />;
}
