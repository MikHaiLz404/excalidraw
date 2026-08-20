import { vi } from "vitest";

import { Excalidraw } from "../index";
import { render } from "./test-utils";

describe("editor page lifecycle", () => {
  it("uses pagehide instead of the forbidden unload event", async () => {
    const addEventListener = vi.spyOn(window, "addEventListener");

    try {
      await render(<Excalidraw />);

      const registeredEvents = addEventListener.mock.calls.map(([event]) => event);
      expect(registeredEvents).toContain("pagehide");
      expect(registeredEvents).not.toContain("unload");
    } finally {
      addEventListener.mockRestore();
    }
  });
});
