/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import HomeIcon from "./icons/home-icon.tsx";
import AboutIcon from "./icons/about-icon.tsx";
import ServicesIcon from "./icons/services-icon.tsx";
import WorksIcon from "./icons/works-icon.tsx";
import BlogIcon from "./icons/blog-icon.tsx";
import EducationIcon from "./icons/education-icon.tsx";
import ContactIcon from "./icons/contact-icon.tsx";
import NavigationItem from "./navigation-item.tsx";
import { DRAWER_WIDTH } from "../../utils/constants.ts";

export default function NavigationBar() {
  return (
    <div
      class={tw`h-screen bg-primaryBG-500 border-r-1 border-gray-600 pb-4 pt-14 px-10 flex flex-col justify-between fixed`}
      style={{ width: DRAWER_WIDTH }}
    >
      <p class={tw`text(white 2xl) font-black mb-10`}>
        silventino<span class={tw`text-red-600`}>.</span>
      </p>

      <nav style={{ marginBottom: 60 }}>
        <ul>
          <NavigationItem href={"#home"} icon={<HomeIcon color="#ffd15c" />}>
            Home
          </NavigationItem>

          <NavigationItem href={"#about"} icon={<AboutIcon color="#ffd15c" />}>
            About
          </NavigationItem>

          <NavigationItem
            href={"#services"}
            icon={<ServicesIcon color="#ffd15c" />}
          >
            Services
          </NavigationItem>

          <NavigationItem
            href={"#education"}
            icon={<EducationIcon color="#ffd15c" />}
          >
            Education
          </NavigationItem>

          <NavigationItem href={"#works"} icon={<WorksIcon color="#ffd15c" />}>
            Works
          </NavigationItem>

          <NavigationItem href={"#blog"} icon={<BlogIcon color="#ffd15c" />}>
            Blog
          </NavigationItem>

          <NavigationItem
            href={"#contact"}
            icon={<ContactIcon color="#ffd15c" />}
          >
            Contact
          </NavigationItem>
        </ul>
      </nav>

      <p class={tw`text(gray-400 xs) font-thin`}>© Silventino 2022</p>
    </div>
  );
}
