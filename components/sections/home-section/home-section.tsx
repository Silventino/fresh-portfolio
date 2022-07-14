/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Typewriter from "../../../islands/typewriter.tsx";
import InstagramIcon from "./icons/instagram-icon.tsx";
import LinkedinIcon from "./icons/linkedin-icon.tsx";
import TwitterIcon from "./icons/twitter-icon.tsx";
import MailIcon from "./icons/mail-icon.tsx";
import Background from "../../../islands/background.tsx";

export default function HomeSection() {
  return (
    <section
      class={tw`w-full h-full flex flex-col items-center justify-center`}
      style={{ position: "relative" }}
    >
      <Background />

      <img
        src="/avatar.svg"
        style={{ height: 110 }}
        alt="photo"
        class={tw`mb-4`}
      />
      <h1 class={tw`text(white 2xl) font(bold)`}>Pedro S. Lopes</h1>
      <Typewriter
        fixedText={"I'm a "}
        phrases={["front-end developer", "mobile developer", "cat lover ♥"]}
      />

      <div class={tw`flex mt-7`}>
        <a target="_blank" href="https://instagram.com/silventino/">
          <InstagramIcon color={"#fff"} width={21} />
        </a>

        <a
          target="_blank"
          href="https://twitter.com/silventino"
          class={tw`ml-5`}
        >
          <TwitterIcon color={"#fff"} width={21} />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/silventino/"
          class={tw`ml-5`}
        >
          <LinkedinIcon color={"#fff"} width={21} />
        </a>

        <a
          // target="_blank"
          href="mailto:silventino.dev@gmail.com?Subject=Hey%20there%21"
          class={tw`ml-5`}
        >
          <MailIcon color={"#fff"} width={21} />
        </a>
      </div>
    </section>
  );
}
