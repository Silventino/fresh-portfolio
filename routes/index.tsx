/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavigationBar from "../components/navigation-bar/navigation-bar.tsx";
import Head from "../components/head/head.tsx";
import ContentContainer from "../components/content-container/content-container.tsx";
import ContentItem from "../components/content-item/content-item.tsx";
import HomeSection from "../components/sections/home-section/home-section.tsx";
import AboutSection from "../components/sections/about-section/about-section.tsx";
import WipSection from "../components/sections/wip-section/wip-section.tsx";

export default function Home() {
  return (
    <div class={tw`h-screen bg-primaryBG-500 flex`}>
      <Head />
      <NavigationBar />

      <ContentContainer>
        <ContentItem id={"home"} customClass={"bg-primaryBG-500"}>
          <HomeSection />
        </ContentItem>

        <ContentItem id={"about"} customClass={"bg-secondaryBG-500"}>
          <AboutSection />
        </ContentItem>

        <ContentItem id={"education"} customClass={"bg-secondaryBG-500"}>
          <WipSection />
        </ContentItem>

        <ContentItem id={"works"} customClass={"bg-secondaryBG-500"}>
          <WipSection />
        </ContentItem>

        {/* <ContentItem id={"blog"} customClass={"bg-secondaryBG-500"}>
          <WipSection />
        </ContentItem> */}

        <ContentItem id={"contact"} customClass={"bg-secondaryBG-500"}>
          <WipSection />
        </ContentItem>
      </ContentContainer>
    </div>
  );
}
