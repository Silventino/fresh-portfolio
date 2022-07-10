/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
// import HouseIcon from "./icons/home-icon.tsx";
// import AboutIcon from "./icons/about-icon.tsx";

type Props = {
  icon: any;
  children: string;
};

export default function NavigationBar({ icon, children }: Props) {
  return (
    <li class={tw`mb-2`}>
      <a
        class={tw`text(white sm) flex hover:text(selectedText-500)`}
        href={"/pedro"}
      >
        {icon}
        <span class={tw`ml-4`}>{children}</span>
      </a>
    </li>
  );
}
