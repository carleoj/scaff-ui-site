import LivePreview from "./LivePreview";

export default function Container({ title, variants }) {
  return (
    <div className="space-y-4">
      {variants.map((variant) => (
        <LivePreview key={variant.id} title={title} variant={variant} />
      ))}
    </div>
  );
}
