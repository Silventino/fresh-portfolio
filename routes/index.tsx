/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavigationBar from "../components/navigation-bar/navigation-bar.tsx";
import Head from "../components/head/head.tsx";
import ContentContainer from "../components/content-container/content-container.tsx";
import ContentItem from "../components/content-item/content-item.tsx";
import HomeSection from "../components/sections/home-section/home-section.tsx";

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
          <img
            src="/logo.svg"
            height="100px"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </ContentItem>

        <ContentItem id={"services"} customClass={"bg-secondaryBG-500"}>
          <img
            src="/logo.svg"
            height="100px"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </ContentItem>

        <ContentItem id={"education"} customClass={"bg-secondaryBG-500"}>
          <img
            src="/logo.svg"
            height="100px"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </ContentItem>

        <ContentItem id={"works"} customClass={"bg-secondaryBG-500"}>
          <img
            src="/logo.svg"
            height="100px"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </ContentItem>

        <ContentItem id={"blog"} customClass={"bg-secondaryBG-500"}>
          <img
            src="/logo.svg"
            height="100px"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </ContentItem>

        <ContentItem id={"contact"} customClass={"bg-secondaryBG-500"}>
          <img
            src="/logo.svg"
            height="100px"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </ContentItem>
      </ContentContainer>
    </div>
  );
}
