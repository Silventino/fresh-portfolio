/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

type Props = {
  fixedText: string;
  phrases: string[];
};

export default function Typewriter({ fixedText, phrases }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [writing, setWriting] = useState(true);

  const [blinking, setBlinking] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const NUMBER_OF_BLINKS = 4;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const palavra = phrases[index];
      if (writing) {
        if (text === palavra) {
          // init blinking effect
          setBlinking(true);
        } else {
          setText(text + palavra[text.length]);
        }
      } else {
        if (text.length === 0) {
          setIndex((index + 1) % phrases.length);
          setWriting(true);
        } else {
          setText(text.slice(0, text.length - 1));
        }
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [text, writing]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (blinking) {
        if (blinkCount === NUMBER_OF_BLINKS) {
          setBlinkCount(0);
          setShowCursor(true);
          setBlinking(false);
          setWriting(false);
          return;
        }

        setShowCursor(!showCursor);
        setBlinkCount(blinkCount + 1);
      }
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [blinking, blinkCount]);

  return (
    <p class={tw`font-bold text(md white) font(thin)`}>
      {fixedText}
      {text}
      <span
        style={{
          fontSize: 20,
          fontWeight: "bold",
          opacity: showCursor ? 1 : 0,
        }}
      >
        |
      </span>
    </p>
  );
}
