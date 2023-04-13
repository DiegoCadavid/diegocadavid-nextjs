import { useEffect, useRef, useState } from "react";

interface Props {}

type pointerState = "default" | "big" ;

const Cursor = ({}: Props) => {
  const [pointer, setPointer] = useState<pointerState>("default");
  const pointerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (pointerRef === null) {
        return;
      }

      // Set position
      const pointerSize: number = pointerRef.current?.clientWidth ?? 0;

      const pointerPosX = e.clientX - pointerSize / 2;
      const pointerPosY = e.clientY - pointerSize / 2;

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (pointerPosX > 0 && pointerPosX < screenWidth - pointerSize) {
        pointerRef.current!.style.left = `${pointerPosX}px`;
      }

      if (pointerPosY > 0 && pointerPosY < screenHeight - pointerSize) {
        pointerRef.current!.style.top = `${pointerPosY}px`;
      }

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
      className={`pointer-events-none absolute z-50 h-fit w-fit mix-blend-difference transition-position duration-[50ms] ease-linear`}>
      <div
        className={`aspect-square rounded-full  ring-2 ring-primary-500 transition-size duration-200  ease-out
        ${pointer === "default" && "h-4"}
        ${pointer === "big" && "h-8 bg-primary-500"}
        `}></div>
    </div>
  );
};

export default Cursor;
