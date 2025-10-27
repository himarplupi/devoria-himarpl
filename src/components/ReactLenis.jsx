import { ReactLenis as RL } from "lenis/dist/lenis-react";

export function ReactLenis({ children }) {
  return (
    <RL
      options={{
        prevent: (node) => {
          return node.classList.contains("lenis-prevent");
        },
      }}
      className="max-h-screen overflow-y-auto flex flex-col justify-center items-center lg:pt-[50px] pt-10"
      root
    >
      {children}
    </RL>
  );
}
