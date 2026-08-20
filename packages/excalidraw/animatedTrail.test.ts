import { AnimatedTrail } from "./animatedTrail";

describe("AnimatedTrail", () => {
  it("uses a CSS hook instead of a SMIL animate node for dashed trails", () => {
    const trail = new AnimatedTrail(
      {
        state: {
          scrollX: 0,
          scrollY: 0,
          zoom: { value: 1 },
          offsetLeft: 0,
          offsetTop: 0,
        },
      } as any,
      {
        animateTrail: true,
        fill: () => "transparent",
        stroke: () => "#6965db",
      },
    );
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    trail.start(svg);
    trail.startPath(10, 10);

    const path = svg.querySelector("path");
    expect(path).not.toBeNull();
    expect(path?.classList.contains("animated-trail--dashed")).toBe(true);
    expect(svg.querySelector("animate")).toBeNull();

    trail.stop();
  });
});
