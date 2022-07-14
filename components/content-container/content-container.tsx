/** @jsx h */
import { h, VNode } from "preact";
import { tw } from "@twind";
import { DRAWER_WIDTH } from "../../utils/constants.ts";

type Props = { children: VNode | VNode[] };

export default function ContentContainer({ children }: Props) {
  return (
    <div
      class={tw`w-full bg-white scroll-smooth`}
      style={{
        paddingLeft: DRAWER_WIDTH,
        height: "fit-content",
        scrollBehavior: "smooth",
      }}
    >
      {children}
    </div>
  );
}
