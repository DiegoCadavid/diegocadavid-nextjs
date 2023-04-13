import { useEffect, useRef, useState } from "react";

interface Props {}

type pointerState = "default" | "big";

const Cursor = ({}: Props) => {
  const [pointer, setPointer] = useState<pointerState>("default");
  const pointerRef = useRef<null | HTMLDivElement>(null);

  const handlePointer = () => {};

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (pointerRef === null) {
        return;
      }

      // Set position
      const pointerSize: number = pointerRef.current?.clientWidth ?? 0;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      pointerRef.current!.style.left = `${mouseX - pointerSize / 2}px`;
      pointerRef.current!.style.top = `${mouseY - pointerSize / 2}px`;

      const target: HTMLElement = e.target as HTMLElement;
      const cursorStyle: string =
        window.getComputedStyle(target)["cursor"] == "auto"
          ? "default"
          : window.getComputedStyle(target)["cursor"];

      switch (cursorStyle) {
        case "pointer":
          setPointer("big");
          break;

        default:
          setPointer("default");
          break;
      }
    };

    if (pointerRef !== null) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [pointerRef.current]);

  return (
    <div
      ref={pointerRef}
      className={`h-fit w-fit pointer-events-none absolute z-50 mix-blend-difference transition-position duration-[50ms] ease-linear
        `}>
      <div
        className={`aspect-square rounded-full  ring-2 ring-primary-500 transition-size duration-200  ease-out
        ${pointer === "default" && "h-4"}
        ${pointer === "big" && "h-8 bg-primary-500"}
        `}></div>
    </div>
  );
};

export default Cursor;
