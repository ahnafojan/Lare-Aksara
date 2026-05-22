import { client } from "@/sanity/lib/client";
import {
  EVENT_BY_SLUG_QUERY,
  EVENTS_QUERY,
  PROGRAM_BY_SLUG_QUERY,
  PROGRAMS_QUERY,
} from "@/sanity/lib/queries";
import type { EventDetail, EventSummary, Program } from "@/types";

function warnSanityFetch(label: string, error: unknown) {
  console.warn(`[sanity] Failed to fetch ${label}. Showing fallback content.`, error);
}

export async function getPrograms(): Promise<Program[]> {
  try {
    return await client.fetch<Program[]>(PROGRAMS_QUERY);
  } catch (error) {
    warnSanityFetch("programs", error);
    return [];
  }
}

export async function getProgramBySlug(slug: string): Promise<Program | null> {
  try {
    return await client.fetch<Program | null>(PROGRAM_BY_SLUG_QUERY, {
      slug,
    });
  } catch (error) {
    warnSanityFetch(`program "${slug}"`, error);
    return null;
  }
}

export async function getEvents(): Promise<EventSummary[]> {
  try {
    return await client.fetch<EventSummary[]>(EVENTS_QUERY);
  } catch (error) {
    warnSanityFetch("events", error);
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<EventDetail | null> {
  try {
    return await client.fetch<EventDetail | null>(EVENT_BY_SLUG_QUERY, {
      slug,
    });
  } catch (error) {
    warnSanityFetch(`event "${slug}"`, error);
    return null;
  }
}
