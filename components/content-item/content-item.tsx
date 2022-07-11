/** @jsx h */
import { h, VNode } from "preact";
import { tw } from "@twind";

type Props = {
  children: VNode | VNode[];
  id: string;
  customClass: string;
};

export default function ContentItem({ children, id, customClass }: Props) {
  return (
    <div id={id} class={tw`w-full h-screen ${customClass}`}>
      {children}
    </div>
  );
}
