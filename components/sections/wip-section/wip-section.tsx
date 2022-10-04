/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";

export default function WipSection() {
  return (
    <section
      class={tw`w-full h-full flex flex-col items-center justify-center`}
      style={{ position: "relative" }}
    >
      <img src="/robozin.png" />
      <h2
        style={{
          fontSize: 36,
          fontFamily: '"Rubik",sans-serif',
          fontWeight: "700",
          color: "#454360",
        }}
      >
        Work in Progress
      </h2>
    </section>
  );
}
