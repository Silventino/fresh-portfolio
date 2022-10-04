import { JSX } from "preact";

type Props = { color: string; width: number; style?: JSX.CSSProperties };

export default function MusicIcon({ color, width, style }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width={width}
      style={style}
    >
      <path
        fill={color}
        d="M511.1 367.1c0 44.18-42.98 80-95.1 80s-95.1-35.82-95.1-79.1c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32.01 4.898V148.1L192 224l-.0023 208.1C191.1 476.2 149 512 95.1 512S0 476.2 0 432c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32 4.898V126.5c0-12.97 10.06-26.63 22.41-30.52l319.1-94.49C472.1 .6615 477.3 0 480 0c17.66 0 31.97 14.34 32 31.99L511.1 367.1z"
      />
    </svg>
  );
}
