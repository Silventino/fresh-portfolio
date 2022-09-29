/** @jsx h */
import { h } from "preact";
import ProgressBar from "./progress-bar.tsx";

type Props = {
  color: string;
  progress: number;
  skill: string;
};

export default function SkillProgressBar({ color, progress, skill }: Props) {
  return (
    <div>
      <div
        style={{
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>{skill}</p>
        <p style={{ fontWeight: "200" }}>{progress}%</p>
      </div>
      <ProgressBar color={color} progress={progress} />
    </div>
  );
}
