import Typewriter from "../../../islands/typewriter.tsx";
import InstagramIcon from "./icons/instagram-icon.tsx";
import LinkedinIcon from "./icons/linkedin-icon.tsx";
import TwitterIcon from "./icons/twitter-icon.tsx";
import MailIcon from "./icons/mail-icon.tsx";
import Background from "../../../islands/background.tsx";

export default function HomeSection() {
  return (
    <section
      class={`w-full h-full flex flex-col items-center justify-center`}
      style={{ position: "relative" }}
    >
      <Background />

      <img src="/me.png" style={{ height: 110 }} alt="photo" class={`mb-4`} />
      <h1 class={`text(white 2xl) font(bold)`}>Pedro S. Lopes</h1>
      <Typewriter
        fixedText={"I'm a "}
        phrases={["front-end developer", "mobile developer", "cat lover ♥"]}
      />

      <div class={`flex mt-7`}>
        <a target="_blank" href="https://instagram.com/silventino/">
          <InstagramIcon color={"#fff"} width={21} />
        </a>

        <a target="_blank" href="https://twitter.com/silventino" class={`ml-5`}>
          <TwitterIcon color={"#fff"} width={21} />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/silventino/"
          class={`ml-5`}
        >
          <LinkedinIcon color={"#fff"} width={21} />
        </a>

        <a
          // target="_blank"
          href="mailto:silventino.dev@gmail.com?Subject=Hey%20there%21"
          class={`ml-5`}
        >
          <MailIcon color={"#fff"} width={21} />
        </a>
      </div>
    </section>
  );
}
