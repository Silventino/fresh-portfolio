/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import SkillProgressBar from "./skill-progress-bar.tsx";

export default function AboutSection() {
  return (
    <section
      class={tw`w-full h-full flex flex-col items-center justify-center`}
      style={{ position: "relative" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: 900,
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            fontSize: 36,
            fontFamily: '"Rubik",sans-serif',
            fontWeight: "700",
            color: "#454360",
          }}
        >
          About Me
        </h2>

        <div
          style={{
            height: 300,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/me2.png"
            style={{ height: 150, marginRight: 30 }}
            alt="photo"
            class={tw`mb-4`}
          />

          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderRight: "15px solid white",
              transform: "translateY(-5px)",
            }}
          />

          <div
            style={{
              boxShadow: "0 5px 60px 0 rgb(69 67 96 / 10%)",
              height: "100%",
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: 20,
              display: "flex",
              padding: 30,
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1, paddingLeft: 15, paddingRight: 15 }}>
              <p style={{ fontWeight: "200" }}>
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
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                paddingLeft: 15,
                paddingRight: 15,
                justifyContent: "space-around",
                height: "100%",
              }}
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>Want to know more?</h1>
          <a
            href="https://drive.google.com/file/d/1SqEC_wYSA7zderUzXW4o9d9Z8KM5_iZg/view?usp=sharing"
            target="_blank"
            style={{
              color: "#fff",
              background: "#ff4c60",
              display: "inline-block",
              verticalAlign: "middle",
              padding: "15px 30px 15px 30px",
              borderRadius: 30,
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
