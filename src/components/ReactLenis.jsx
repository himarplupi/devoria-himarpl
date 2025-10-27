import { ReactLenis as RL } from "lenis/dist/lenis-react";

export function ReactLenis({ children }) {
  return (
    <RL
      options={{
        gestureOrientation: "vertical",
        prevent: (node) => {
          return node.classList.contains("lenis-prevent");
        },
      }}
      style={{ touchAction: "pan-y" }}
      className="h-screen overflow-y-scroll flex flex-col justify-center items-center lg:pt-[50px] pt-10"
      root
    >
      {children}
    </RL>
  );
}
