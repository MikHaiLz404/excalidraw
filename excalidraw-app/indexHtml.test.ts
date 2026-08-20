import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("production analytics bootstrap", () => {
  it("does not load Simple Analytics when Do Not Track is enabled", () => {
    const html = readFileSync(resolve(__dirname, "index.html"), "utf8");

    expect(html).toContain('navigator.doNotTrack !== "1"');
  });
});
