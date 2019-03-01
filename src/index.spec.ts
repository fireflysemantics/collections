import {
  push,
  pull,
  pre,
  post,
  remove,
  pop,
  sortNumbersDescending,
  sortNumbersAscending,
  sortStringsDescending,
  sortStringsAscending,
  reverse,
  deepClone
} from "./index";

describe("Push", () => {
  it("should have four elements post push", () => {
    const original = ["a", "b"];
    const result = ["a", "b", "c", "d"];
    expect(push(original, "c", "d")).toEqual(result);
  });
});

describe("Pull", () => {
  it("should have 4 elements post pull", () => {
    const original = ["a", "b"];
    const result = ["c", "d", "a", "b"];
    expect(pull(original, "c", "d")).toEqual(result);
  });
});

describe("Pre", () => {
  it("should have four elements after pre", () => {
    const original = ["a", "b"];
    const result = ["c", "d", "a", "b"];
    expect(pre(original, ["c", "d"])).toEqual(result);
  });
});

describe("Post", () => {
  it("should have four elements after post", () => {
    const original = ["a", "b"];
    const result = ["a", "b", "c", "d"];
    expect(post(original, ["c", "d"])).toEqual(result);
  });
});

describe("Remove", () => {
  it("should have 1 element post remove", () => {
    const original = ["a", "b"];
    const result = ["a"];
    expect(remove(original, 1)).toEqual(result);
  });
});

describe("Pop", () => {
  it("should have 1 element post pop", () => {
    const original = ["a", "b"];
    const result = ["a"];
    expect(pop(original)).toEqual(result);
  });
});

describe("SortNumbersDescending", () => {
  it("should sort numbers in descending order", () => {
    const original = [10, 20];
    const result = [20, 10];
    expect(sortNumbersDescending(original)).toEqual(result);
  });
});

describe("SortNumbersAscending", () => {
  it("should sort numbers in ascending order", () => {
    const original = [20, 10];
    const result = [10, 20];
    expect(sortNumbersAscending(original)).toEqual(result);
  });
});

describe("SortStringsAscending", () => {
  it("should sort Strings in ascending order", () => {
    let original = ["Beta", "Alpha"];
    let result = ["Alpha", "Beta"];
    expect(sortStringsAscending(original)).toEqual(result);
    original = ["alpha", "Alpha"];
    result = ["Alpha", "alpha"];
    expect(sortStringsAscending(original)).toEqual(result);
    original = ["a", "A"];
    result = ["A", "a"];
    expect(sortStringsAscending(original)).toEqual(result);
  });
});

describe("SortStringsDescending", () => {
  it("should sort strings in descending order", () => {
    let original = ["Alpha", "Beta"];
    let result = ["Beta", "Alpha"];
    expect(sortStringsDescending(original)).toEqual(result);

    original = ["Alpha", "alpha"];
    result = ["alpha", "Alpha"];
    expect(sortStringsDescending(original)).toEqual(result);
  });
});

describe("Reverse", () => {
  it("should reverse the array", () => {
    const original = [20, 10];
    const result = [10, 20];
    expect(reverse(original)).toEqual(result);
  });
});

describe("Deep Clone", () => {
  class Todo {
    constructor() {}
  }

  it("should deep clone the array", () => {
    const original = [new Todo(), new Todo()];
    const result = deepClone(original);
    expect(deepClone(original)).toEqual(result);
    expect(original[0]===result[0]).toBeFalsy();
    expect(original[1]===result[1]).toBeFalsy();
  });
});
