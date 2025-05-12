export const prerender = false;
export function GET() {
  const now = Date.now();
  return new Response(
    JSON.stringify({
      name: "Astro",
      now,
    }),
  );
}
