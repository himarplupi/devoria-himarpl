import { ReactLenis as RL } from "lenis/dist/lenis-react";

export function ReactLenis({ children }) {
  return (
    <RL
      options={{
        prevent: (node) => {
          return node.classList.contains("lenis-prevent");
        },
      }}
      className="max-h-screen overflow-y-auto"
      root
    >
      {children}
    </RL>
  );
}
