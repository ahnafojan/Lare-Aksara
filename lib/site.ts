const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lare-aksara.vercel.app";

export const siteConfig = {
  name: "Lare Aksara",
  description:
    "Komunitas literasi indie untuk anak-anak di Banjarnegara melalui buku, musik, dan seni rupa.",
  url: configuredSiteUrl.replace(/\/$/, ""),
  locale: "id_ID",
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export function createExcerpt(text: string, maxLength = 160) {
  const normalizedText = text.replace(/\s+/g, " ").trim();

  if (normalizedText.length <= maxLength) {
    return normalizedText;
  }

  return `${normalizedText.slice(0, maxLength - 3).trimEnd()}...`;
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
