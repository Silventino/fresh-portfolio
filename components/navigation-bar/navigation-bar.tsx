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
import { myColors, DRAWER_WIDTH } from "../../utils/constants.ts";

export default function NavigationBar() {
  return (
    <div
      class={tw`h-screen bg-primaryBG-500 border-r-1 border-gray-600 pb-4 pt-14 px-10 flex flex-col justify-between fixed`}
      style={{ width: DRAWER_WIDTH }}
    >
      <p class={tw`text(white 2xl) font-black mb-10`}>
        silventino<span class={tw`text-red-600`}>.</span>
      </p>

      <nav>
        <ul>
          <NavigationItem
            href={"#home"}
            icon={<HomeIcon color={myColors.selectedText} />}
          >
            Home
          </NavigationItem>

          <NavigationItem
            href={"#about"}
            icon={<AboutIcon color={myColors.selectedText} />}
          >
            About
          </NavigationItem>

          {/* 
          <NavigationItem
            href={"#services"}
            icon={<ServicesIcon color={myColors.selectedText} />}
          >
            Services
          </NavigationItem> 
          */}

          <NavigationItem
            href={"#education"}
            icon={<EducationIcon color={myColors.selectedText} />}
          >
            Education
          </NavigationItem>

          <NavigationItem
            href={"#works"}
            icon={<WorksIcon color={myColors.selectedText} />}
          >
            Works
          </NavigationItem>

          {/* 
          <NavigationItem
            href={"#blog"}
            icon={<BlogIcon color={myColors.selectedText} />}
          >
            Blog
          </NavigationItem> 
          */}

          <NavigationItem
            href={"#contact"}
            icon={<ContactIcon color={myColors.selectedText} />}
          >
            Contact
          </NavigationItem>
        </ul>
      </nav>

      <div />
      <div />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <a href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge-dark.svg"
            alt="Made with Fresh"
            style={{ marginBottom: 10 }}
          />
        </a>

        <p class={tw`text(gray-400 xs) font-thin`}>© Silventino 2022</p>
      </div>
    </div>
  );
}
