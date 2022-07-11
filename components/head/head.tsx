/** @jsx h */
import { h } from "preact";

export default function Head() {
  return (
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="A portfolio website using fresh and deno"
      />
      <title>Fresh Portfolio</title>
      <link rel="stylesheet" href="/index.css" />
    </head>
  );
}
