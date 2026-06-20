import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getEvents, getPrograms } from "@/sanity/lib/fetchers";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [programs, events] = await Promise.all([getPrograms(), getEvents()]);

  return [
    {
      url: absoluteUrl(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/event"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...programs.flatMap((program) =>
      program.slug?.current
        ? [
            {
              url: absoluteUrl(`/program/${program.slug.current}`),
              changeFrequency: "monthly" as const,
              priority: 0.7,
            },
          ]
        : [],
    ),
    ...events.flatMap((event) =>
      event.slug?.current
        ? [
            {
              url: absoluteUrl(`/event/${event.slug.current}`),
              changeFrequency: "monthly" as const,
              priority: 0.8,
            },
          ]
        : [],
    ),
  ];
}
