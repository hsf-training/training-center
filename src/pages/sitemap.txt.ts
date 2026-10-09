import { getCollection } from "astro:content";

// List of all tutorial webpages, used by the HSF training catalog
export async function GET() {
  const tutorials = await getCollection("tutorials");
  const urls = tutorials.map((tut) => tut.data.webpage).sort();
  return new Response(urls.join("\n") + "\n");
}
