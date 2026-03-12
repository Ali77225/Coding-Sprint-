import { WikiSummary } from "../types"

export async function getWikiSummary(topic: string): Promise<WikiSummary> {
  const res = await fetch(
    `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`,
    { cache: "force-cache" } as RequestInit
  )
  if (!res.ok) throw new Error(`Article introuvable : ${topic}`)
  return res.json()
}

export async function searchWiki(query: string): Promise<string[]> {
  const url = new URL("https://fr.wikipedia.org/w/api.php")
  url.searchParams.set("action", "query")
  url.searchParams.set("list", "search")
  url.searchParams.set("srsearch", query)
  url.searchParams.set("format", "json")
  url.searchParams.set("origin", "*")
  url.searchParams.set("srlimit", "6")

  const res = await fetch(url.toString())
  const data = await res.json()
  return data.query.search.map((r: { title: string }) => r.title)
}