import Date from "./demo-jsx/component.js";

// @DOCTYPE html
<html>
<body>

{"My first PHP script!"}
<Date/>
<BigList/>

</body>
</html>

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
