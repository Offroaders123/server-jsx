import { createSignal } from "solid-js";
import Date from "./demo-jsx/component.js";

// @DOCTYPE html
<html>
<body>

{"My first PHP script!"}
<Date/>
<MyButton/>
<BigList/>
{import("./demo-jsx/template.js")}

</body>
</html>

// This is a client component. How can we distinguish the difference here?
function MyButton() {
  const [title, setTitle] = createSignal<string>("Update my name!");

  return (
    <button onclick={() => setTitle("The New Black")}>{title()}</button>
  );
}

// This is server-side rendered. I don't want this to run on the client.
// Right now this looks no different than the client one.
// That's what we have to figure out.
function BigList() {
  return (
    Array.from({ length: 40 }, () =>
      <em><code>{Math.random()}</code></em>
    )
  );
}
