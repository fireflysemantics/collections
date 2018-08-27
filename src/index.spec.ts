import { expect } from "chai";
import "mocha";
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
  reverse
} from "./index";

describe("Push", () => {
  it("should have four elements post push", () => {
    const original = ["a", "b"];
    const result = ["a", "b", "c", "d"];
    expect(push(original, "c", "d")).to.eql(result);
  });
});

describe("Pull", () => {
  it("should have 4 elements post pull", () => {
    const original = ["a", "b"];
    const result = ["c", "d", "a", "b"];
    expect(pull(original, "c", "d")).to.eql(result);
  });
});

describe("Pre", () => {
  it("should have four elements after pre", () => {
    const original = ["a", "b"];
    const result = ["c", "d", "a", "b"];
    expect(pre(original, ["c", "d"])).to.eql(result);
  });
});

describe("Post", () => {
  it("should have four elements after post", () => {
    const original = ["a", "b"];
    const result = ["a", "b", "c", "d"];
    expect(post(original, ["c", "d"])).to.eql(result);
  });
});

describe("Remove", () => {
  it("should have 1 element post remove", () => {
    const original = ["a", "b"];
    const result = ["a"];
    expect(remove(original, 1)).to.eql(result);
  });
});

describe("Pop", () => {
  it("should have 1 element post pop", () => {
    const original = ["a", "b"];
    const result = ["a"];
    expect(pop(original)).to.eql(result);
  });
});

describe("SortNumbersDescending", () => {
  it("should sort numbers in descending order", () => {
    const original = [10, 20];
    const result = [20, 10];
    expect(sortNumbersDescending(original)).to.eql(result);
  });
});

describe("SortNumbersAscending", () => {
  it("should sort numbers in ascending order", () => {
    const original = [20, 10];
    const result = [10, 20];
    expect(sortNumbersAscending(original)).to.eql(result);
  });
});

describe("SortStringsAscending", () => {
  it("should sort Strings in ascending order", () => {
    let original = ["Beta", "Alpha"];
    let result = ["Alpha", "Beta"];
    expect(sortStringsAscending(original)).to.eql(result);
    original = ["alpha", "Alpha"];
    result = ["Alpha", "alpha"];
    expect(sortStringsAscending(original)).to.eql(result);
    original = ["a", "A"];
    result = ["A", "a"];
    expect(sortStringsAscending(original)).to.eql(result);
  });
});

describe("SortStringsDescending", () => {
  it("should sort strings in descending order", () => {
    let original = ["Alpha", "Beta"];
    let result = ["Beta", "Alpha"];
    expect(sortStringsDescending(original)).to.eql(result);

    original = ["Alpha", "alpha"];
    result = ["alpha", "Alpha"];
    expect(sortStringsDescending(original)).to.eql(result);
  });
});


describe("Reverse", () => {
    it("should reverse the array", () => {
      const original = [20, 10];
      const result = [10, 20];
      expect(reverse(original)).to.eql(result);
    });
  });
  