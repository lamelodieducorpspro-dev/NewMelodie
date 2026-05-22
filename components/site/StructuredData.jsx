// Server-side JSON-LD structured data injector.
// Renders a <script type="application/ld+json"> in the document.
export default function StructuredData({ data, id = "structured-data" }) {
  if (!data) return null;
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
