import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

interface Props {}

type pointerState = "default" | "big";

const Cursor = ({}: Props) => {
  const [pointer, setPointer] = useState<pointerState>("default");
  const pointerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (pointerRef === null) {
        return;
      }

      const pointerSize: number = pointerRef.current?.clientWidth ?? 0;

      const pointerPosX = e.clientX - pointerSize / 2;
      const pointerPosY = e.clientY - pointerSize / 2;

      const screenWidth = document.body.clientWidth;
      const screenHeight =
        document.body.clientHeight > window.innerHeight
          ? document.body.clientHeight
          : window.innerHeight;

      if (pointerPosX > 0 && pointerPosX < screenWidth - pointerSize) {
        pointerRef.current!.style.left = `${pointerPosX}px`;
      }

      if (pointerPosY > 0 && pointerPosY < screenHeight - pointerSize) {
        pointerRef.current!.style.top = `${pointerPosY}px`;
      }

      const target: HTMLElement = e.target as HTMLElement;
      const cursorStyle: string = target.classList.contains("pointer") ? "pointer" : "";

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
      className={ clsx("pointer-events-none fixed z-50 hidden h-fit w-fit mix-blend-difference  md:block") }>
      <div
        className={`aspect-square w-2 rounded-full ring-2 ring-primary-500 transition-transform  ease-out
        ${pointer === "big" && "scale-[2] bg-primary-500"}
        `}></div>
    </div>
  );
};

export default Cursor;
