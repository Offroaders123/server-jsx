// This is on the server

export function Date() {
  return (
    <div class="Date">
      {new globalThis.Date().toDateString()}
    </div>
  );
}

export function BigList() {
  return (
    <>{Array.from({ length: 40 }, () =>
      <em><code>{Math.random()}</code></em>
    )}</>
  );
}
