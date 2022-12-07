import ProgressBar from "./progress-bar.tsx";

type Props = {
  color: string;
  progress: number;
  skill: string;
};

export default function SkillProgressBar({ color, progress, skill }: Props) {
  return (
    <div>
      <div style={{ minWidth: 120 }} class={`flex mb-3 justify-between`}>
        <p>{skill}</p>
        <p class={`font-extralight`}>{progress}%</p>
      </div>
      <ProgressBar color={color} progress={progress} />
    </div>
  );
}
