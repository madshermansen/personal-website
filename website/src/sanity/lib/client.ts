import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { Project } from '../types/types';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function getProjects(): Promise<Project[]> {

  const query = `*[_type == "project"]{title, description, github, blog, url, image, slug, tags} | order(publishedAt desc)`;
  const result = await client.fetch(query);

  return result;
}