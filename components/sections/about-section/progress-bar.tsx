type Props = {
  color: string;
  progress: number;
};

export default function ProgressBar({ color, progress }: Props) {
  return (
    <div
      style={{
        height: 7,
        backgroundColor: "#f1f1f1",
        borderRadius: 15,
      }}
      class={`w-full`}
    >
      <div
        style={{
          height: 7,
          width: `${progress}%`,
          backgroundColor: color,
          borderRadius: 15,
        }}
      />
    </div>
  );
}
