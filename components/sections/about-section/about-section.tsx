import SkillProgressBar from "./skill-progress-bar.tsx";

export default function AboutSection() {
  return (
    <section
      class={`w-full h-full flex flex-col items-center justify-center relative`}
    >
      <div
        class={`w-full h-full flex flex-col justify-between max-w-4xl px-6 py-4 md:py-10`}
      >
        <h2
          style={{
            fontFamily: '"Rubik",sans-serif',
            color: "#454360",
          }}
          class={`text-4xl font-bold`}
        >
          About Me
        </h2>

        <div class={`flex flex-col md:flex-row items-center `}>
          <img
            src="/me2.png"
            alt="photo"
            class={`mb-4 mr-0 md:mr-4 md:mb-0 h-40 w-40 rounded-full`}
          />

          {/* // TODO turn this triangle into a separeted component */}
          <div
            style={{
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderRight: "15px solid white",
              transform: "translateY(-5px)",
            }}
            class={`hidden md:flex w-0 h-0`}
          />

          <div
            style={{ boxShadow: "0 5px 60px 0 rgb(69 67 96 / 10%)" }}
            class={`flex-col md:flex-row px-2 md:px-6 py-4 w-full h-full flex items-center bg-white rounded-2xl`}
          >
            <div class={`flex px-2 md:px-6 py-1 md:py-6 `}>
              <p class={`font-extralight`}>
                I'm a software engineer based in Brazil 🇧🇷 with 4 years of
                experience in the software industry.
                <br></br>
                <br></br>
                My focus area for the past few years has been frontend
                development with React, but I'm also skilled in backend
                development with NodeJS. Having worked with many legacy
                codebases made refactoring my speciality 🔧
              </p>
            </div>

            <div
              class={`hidden md:flex flex-row md:flex-col w-full h-full justify-around px-4 flex-1`}
            >
              <SkillProgressBar
                color="rgb(255, 76, 96)"
                progress={90}
                skill={"React"}
              />
              <SkillProgressBar
                color="rgb(255, 209, 92)"
                progress={85}
                skill={"TypeScript"}
              />
              <SkillProgressBar
                color="rgb(108, 108, 229)"
                progress={70}
                skill={"NodeJS"}
              />
            </div>
          </div>
        </div>

        <div class={`flex flex-col w-full items-center`}>
          <h1 class={`text(2xl) mb-4`}>Want to know more?</h1>
          <a
            href="https://silventino.notion.site/Pedro-Silveira-Lopes-9386f60ab4634284b2cf3b5d987113af"
            target="_blank"
            class={`text(white) inline-block rounded-full align-middle px-6 py-4 bg-rose-500`}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
