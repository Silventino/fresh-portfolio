import NavigationBar from "../components/navigation-bar/navigation-bar.tsx";

export default function DynamicNavigationBar() {
  const windowWidth = window.innerWidth;
  console.log(windowWidth);

  return <NavigationBar />;
}
