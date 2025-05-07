import { createSignal } from "solid-js";
import Date from "./demo-jsx/component.js";

// @DOCTYPE html
<html>
<body>

{"My first PHP script!"}
<Date/>
<MyButton/>

</body>
</html>

// This is a client component. How can we distinguish the difference here?
function MyButton() {
  const [title, setTitle] = createSignal<string>("Update my name!");

  return (
    <button onclick={() => setTitle("The New Black")}>{title()}</button>
  );
}
