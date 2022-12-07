import { h, VNode } from "preact";

type Props = {
  icon: VNode;
  href: string;
  children: VNode | string;
};

export default function NavigationItem({ icon, children, href }: Props) {
  return (
    <li class={`mb-4`}>
      <a class={`text(white sm) flex hover:text(selectedText-500)`} href={href}>
        {icon}
        <span class={`ml-4`}>{children}</span>
      </a>
    </li>
  );
}
