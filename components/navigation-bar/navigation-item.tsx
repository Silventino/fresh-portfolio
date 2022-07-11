/** @jsx h */
import { h, VNode } from "preact";
import { tw } from "@twind";

type Props = {
  icon: VNode;
  href: string;
  children: VNode | string;
};

export default function NavigationBar({ icon, children, href }: Props) {
  return (
    <li class={tw`mb-4`}>
      <a
        class={tw`text(white sm) flex hover:text(selectedText-500)`}
        href={href}
      >
        {icon}
        <span class={tw`ml-4`}>{children}</span>
      </a>
    </li>
  );
}
