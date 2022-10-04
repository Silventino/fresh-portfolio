import { h, VNode } from "preact";

type Props = {
  children: VNode | VNode[];
  id: string;
  customClass: string;
};

export default function ContentItem({ children, id, customClass }: Props) {
  return (
    <div id={id} class={`w-full h-screen ${customClass}`}>
      {children}
    </div>
  );
}
