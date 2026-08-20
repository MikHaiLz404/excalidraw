import { render } from "@testing-library/react";

import { Range } from "./Range";

describe("Range", () => {
  it("assigns its slider a stable DOM id", () => {
    const { container } = render(
      <Range label="Opacity" value={100} onChange={() => {}} />,
    );

    expect(container.querySelector(".range-input")?.id).not.toBe("");
  });
});
