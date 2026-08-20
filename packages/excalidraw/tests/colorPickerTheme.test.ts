import { THEME } from "@excalidraw/common";

import { getColorPickerDisplayColor } from "../components/ColorPicker/colorPickerUtils";

describe("color picker theme consistency", () => {
  it("keeps a literal user-picked color unchanged in both themes", () => {
    const yellow = "#ffd43b";

    expect(getColorPickerDisplayColor(yellow, THEME.LIGHT)).toBe(yellow);
    expect(getColorPickerDisplayColor(yellow, THEME.DARK)).toBe(yellow);
  });
});
