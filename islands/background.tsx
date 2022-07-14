/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import GameIcon from "../components/background/icons/game-icon.tsx";
import MusicIcon from "../components/background/icons/music-icon.tsx";
import PawIcon from "../components/background/icons/paw-icon.tsx";
// import { tw } from "@twind";
import StarIcon from "../components/background/icons/star-icon.tsx";

const MOD_LAYER_1 = 20;
const MOD_LAYER_2 = 35;
const MOD_LAYER_3 = 50;
const MOD_LAYER_4 = 65;

type Props = {};

export default function Background({}: Props) {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    const listener: any = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setPositionX(x);
      setPositionY(y);
    };

    document.addEventListener("mousemove", listener);

    return () => document.removeEventListener("mousemove", listener);
  }, []);

  const transformLayer1 = `translate(-${positionX / MOD_LAYER_1}px, -${
    positionY / MOD_LAYER_1
  }px)`;

  const transformLayer2 = `translate(-${positionX / MOD_LAYER_2}px, -${
    positionY / MOD_LAYER_2
  }px)`;

  const transformLayer3 = `translate(-${positionX / MOD_LAYER_3}px, -${
    positionY / MOD_LAYER_3
  }px)`;
  const transformLayer4 = `translate(-${positionX / MOD_LAYER_4}px, -${
    positionY / MOD_LAYER_4
  }px)`;

  return (
    <div>
      {/* LAYER 1 */}
      <StarIcon
        width={30}
        color={"#FFD15C"}
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          transform: `${transformLayer1} rotate(45deg)`,
        }}
      />

      <MusicIcon
        width={30}
        color={"#FFD15C"}
        style={{
          position: "absolute",
          top: "20%",
          right: "30%",
          transform: `${transformLayer1} rotate(20deg)`,
        }}
      />

      <StarIcon
        width={30}
        color={"#FFD15C"}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          transform: `${transformLayer1} rotate(5deg)`,
        }}
      />

      <PawIcon
        width={30}
        color={"#FFD15C"}
        style={{
          position: "absolute",
          left: "10%",
          bottom: "10%",
          transform: `${transformLayer1} rotate(-135deg)`,
        }}
      />
      {/* FIM LAYER 1 */}

      {/* LAYER 2 */}
      <StarIcon
        width={30}
        color={"#6C6CE5"}
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          transform: `${transformLayer2} rotate(25deg)`,
        }}
      />

      <GameIcon
        width={30}
        color={"#6C6CE5"}
        style={{
          position: "absolute",
          left: "45%",
          top: "10%",
          transform: `${transformLayer2} rotate(-5deg)`,
        }}
      />

      <MusicIcon
        width={30}
        color={"#6C6CE5"}
        style={{
          position: "absolute",
          bottom: "20%",
          right: "30%",
          transform: `${transformLayer2} rotate(-20deg)`,
        }}
      />

      {/* FIM LAYER 2 */}

      {/* LAYER 3 */}

      <PawIcon
        width={30}
        color={"#FF4C60"}
        style={{
          position: "absolute",
          left: "25%",
          top: "30%",
          transform: `${transformLayer3} rotate(-45deg)`,
        }}
      />

      <GameIcon
        width={30}
        color={"#FF4C60"}
        style={{
          position: "absolute",
          left: "40%",
          bottom: "10%",
          transform: `${transformLayer3} rotate(10deg)`,
        }}
      />

      {/* FIM LAYER 3 */}

      {/* LAYER 4 */}

      <MusicIcon
        width={30}
        color={"#44D7B6"}
        style={{
          position: "absolute",
          left: "15%",
          bottom: "30%",
          transform: `${transformLayer4} rotate(35deg)`,
        }}
      />

      <StarIcon
        width={30}
        color={"#44D7B6"}
        style={{
          position: "absolute",
          top: "45%",
          right: "20%",
          transform: `${transformLayer4} rotate(45deg)`,
        }}
      />

      {/* FIM LAYER 4 */}
    </div>
  );
}
