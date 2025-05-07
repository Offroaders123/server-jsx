import { createSignal } from "solid-js";

const [count, setCount] = createSignal<number>(0);

<button onclick={() => setCount(count => count + 1)}>Counter: {count()}</button>
