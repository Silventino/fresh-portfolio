import { h, VNode } from "preact";

type Props = { children: VNode | VNode[] };

export default function ContentContainer({ children }: Props) {
  return (
    <div class={`w-full bg-white scroll-smooth md:pl-52 h-fit`}>{children}</div>
  );
}
