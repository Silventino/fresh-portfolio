/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Typewriter from "../../islands/typewriter.tsx";

export default function HomeSection() {
  return (
    <section
      class={tw`w-full h-full flex flex-col items-center justify-center`}
    >
      <img
        src="/avatar.svg"
        style={{ height: 80 }}
        alt="photo"
        class={tw`mb-4`}
      />
      <h1 class={tw`text(white 2xl) font(bold)`}>Pedro S. Lopes</h1>
      <Typewriter
        fixedText={"I'm a "}
        phrases={["front-end developer", "mobile developer", "cat lover ♥"]}
      />
    </section>
  );
}
