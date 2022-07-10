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

export default function NavigationBar() {
  return (
    <div
      class={tw`h-screen w-1/4 bg-primary-500 border-r-1 border-gray-600 py-14 px-10 flex flex-col justify-between`}
    >
      <p class={tw`text(white 2xl) font-black mb-10`}>
        silventino<span class={tw`text-red-600`}>.</span>
      </p>

      <nav>
        <ul>
          <NavigationItem icon={<HomeIcon color="#ffd15c" />}>
            Home
          </NavigationItem>

          <NavigationItem icon={<AboutIcon color="#ffd15c" />}>
            About
          </NavigationItem>

          <NavigationItem icon={<ServicesIcon color="#ffd15c" />}>
            Services
          </NavigationItem>

          <NavigationItem icon={<EducationIcon color="#ffd15c" />}>
            Education
          </NavigationItem>

          <NavigationItem icon={<WorksIcon color="#ffd15c" />}>
            Works
          </NavigationItem>

          <NavigationItem icon={<BlogIcon color="#ffd15c" />}>
            Blog
          </NavigationItem>

          <NavigationItem icon={<ContactIcon color="#ffd15c" />}>
            Contact
          </NavigationItem>
        </ul>
      </nav>

      <p class={tw`text(white xs) font-thin`}>© Silventino 2022</p>
    </div>
  );
}
