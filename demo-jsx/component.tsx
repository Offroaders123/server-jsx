export default function Date() {
  return (
    <div class="Date">
      {new globalThis.Date().toDateString()}
    </div>
  );
}