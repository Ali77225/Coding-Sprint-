import Image from "next/image"
import { getWikiSummary, searchWiki } from "../../lib/wikipedia"

export default async function TestPage() {
  const summary = await getWikiSummary("Trou noir")
  const results = await searchWiki("intelligence")

  return (
    <div style={{ padding: 40, color: "white", background: "#111", minHeight: "100vh" }}>
      
      <h1>Test getWikiSummary</h1>
      <p><strong>Titre :</strong> {summary.title}</p>
      <p><strong>Intro :</strong> {summary.extract}</p>
      {summary.thumbnail && (
        <Image 
          src={summary.thumbnail.source} 
          alt={summary.title}
          width={200}
          height={200}
        />
      )}

      <hr style={{ margin: "40px 0", borderColor: "#333" }} />

      <h1>Test searchWiki</h1>
      <ul>
        {results.map(r => <li key={r}>{r}</li>)}
      </ul>

    </div>
  )
}