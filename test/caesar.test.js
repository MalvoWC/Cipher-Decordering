const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("Caesar shift", () => {
    it(`return false if shift is 0, < -25, >25`, () => {
        let actual =( caesar("thinkful", 0) || caesar("thinkful", -26) || caesar("thinkful",  26));
        expect(actual).to.be.false;
    })
    it("ignores capital letters and handles past the letter `z`", () => {
        let actual = caesar("Zebra Magazine", 3);
        let expected = "cheud pdjdclqh";
        expect(actual).to.eql(expected);
    })
    it(`("thinkful", 3) should be: wklqnixo`, () => {    
        let actual = caesar("thinkful", 3);
        let expected = "wklqnixo";
        expect(actual).to.equal(expected);

    })
    it(`("thinkful", -3) should be: qefkhcri`, () => {
        let actual = caesar("thinkful", -3);
        let expected = "qefkhcri";
        expect(actual).to.equal(expected)
    })
    it(`("wklqnixo", 3, false) should be: thinkful`, () => {
        let actual = caesar("wklqnixo", 3, false);
        let expected = "thinkful";
        expect(actual).to.equal(expected);
    })
    it(`("This is a secret message!", 8) should be: bpqa qa i amkzmb umaaiom!`, () => {
        let actual = caesar("This is a secret message!", 8);
        let expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.equal(expected);
    })
    it(`("BPQA qa I amkzmb umaaiom!", 8, false) should be: this is a secret message!`, () => {
        let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        let expected = "this is a secret message!";
        expect(actual).to.equal(expected);
    })
    it(`(thinkful) should be: false`, () => {
        let actual = caesar("thinkful");
        let expected = false;
        expect(actual).to.eql(expected);
    })
    it(`(thinkful) should be: false`, () => {
    const actual = caesar("thinkful")
    const expected = false
    expect(actual).to.equal(expected)
  })
  
  it(`(thinkful, 99) should be: false`, () => {
    const actual = caesar("thinkful", 99)
    const expected = false
    expect(actual).to.equal(expected)
  })
  
  it(`(thinkful, -26) should be: false`, () => {
    const actual = caesar("thinkful", -26)
    const expected = false
    expect(actual).to.equal(expected)
  })
})
