const geezSort = require("./geezSort");

describe("geezSort Function", () => {
  test("sorts Amharic words correctly", () => {
    const input = ["አንቀጽ","ማር","ሀለም","በረከት"];
    const expected = ["ሀለም", "ማር", "በረከት", "አንቀጽ"]; // Sorted by amharicAlphabet order
    expect(geezSort(input)).toEqual(expected);
  });

 test("places non-Amharic words at the end", () => {
    const input = ["ማር", "Hello", "በረከት", "እንደምን", "123"];
    const expected = ["ማር", "በረከት", "እንደምን", "Hello", "123"]; // Non-Amharic words last
    expect(geezSort(input)).toEqual(expected);
  });

  test("maintains order among non-Amharic words", () => {
    const input = ["ሀለም", "World", "ማር", "JavaScript", "በረከት", "123"];
    const expected = ["ሀለም", "ማር", "በረከት", "World", "JavaScript", "123"]; // Non-Amharic words keep order at the end
    expect(geezSort(input)).toEqual(expected);
  });

  test("handles mixed-case English words correctly", () => {
    const input = ["ሀለም", "React", "ማር", "node.js", "በረከት", "123"];
    const expected = ["ሀለም", "ማር", "በረከት", "React", "node.js", "123"]; // Non-Amharic words keep their relative order at the end
    expect(geezSort(input)).toEqual(expected);
  });

  test("returns empty array when input is empty", () => {
    expect(geezSort([])).toEqual([]);
  });

  test("throws error for invalid input", () => {
    expect(() => geezSort(null)).toThrow("Input must be an array of strings.");
    expect(() => geezSort(123)).toThrow("Input must be an array of strings.");
    expect(() => geezSort({ key: "value" })).toThrow("Input must be an array of strings.");
  }); 
});
