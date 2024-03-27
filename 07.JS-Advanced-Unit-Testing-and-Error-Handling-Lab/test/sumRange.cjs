const { expect } = require("chai");
// const { subSum } = require("../main.cjs");
function subSum(nums = [], start, end) {
  const lastNumberIndex = nums.length - 1;

  // Handle non-array nums
  if (!Array.isArray(nums)) {
    return NaN;
  }

  // Handle nums containing non-number type
  if (Array.isArray(nums) && nums.some((item) => typeof item !== "number")) {
    return NaN;
  }

  if (start < 0) {
    start = 0;
  }

  if (end > lastNumberIndex) {
    end = lastNumberIndex;
  }

  let sum = 0;

  nums.slice(start, end + 1).forEach((num) => {
    sum = sum + num;
  });

  return sum % 1 === 0 ? sum : Number(sum.toFixed(1));
}

describe("subSum", () => {
  it("should output 150", () => {
    expect(subSum([10, 20, 30, 40, 50, 60], 3, 300)).to.equal(150);
  });

  it("should output 3.3", () => {
    expect(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.equal(3.3);
  });

  it("should output NaN", () => {
    expect(subSum([10, "twenty", 30, 40], 0, 2)).to.be.NaN;
    expect(subSum("text", 0, 2)).to.be.NaN;
    expect(subSum([{}, [], true, "hello"], 0, 3)).to.be.NaN;
  });

  it("should output 0", () => {
    expect(subSum([], 1, 2)).to.equal(0);
  });
});
