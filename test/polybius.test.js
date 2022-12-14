const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("Polybius Square", () => {
    it(`thinkful should be: 4432423352125413`, () => {
        let actual = polybius("thinkful");
        let expected = "4432423352125413";
        expect(actual).to.eql(expected);
    })
    it(`Hello world should be: 3251131343 2543241341`, ()=> {
        let actual = polybius("Hello world");
        let expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    })
    it(`('3251131343 2543241341', false) shoud be: 'hello world'`, () => {
        let actual = polybius("3251131343 2543241341", false);
        let expected = "hello world";
        expect(actual).to.eql(expected);
    })
    it(`("4432423352125413", false) should be: th(i/j)nkful`, () => {
        let actual = polybius("4432423352125413", false);
        let expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    })
    it(`("44324233521254134", false) should be: false`, () => {
        let actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    })
})