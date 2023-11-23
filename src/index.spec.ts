import {expect} from "chai";
import {describe} from "mocha";
import {greet} from "./index";

describe("greet", function () {
  it('should log "Hello World"', function () {
    expect(greet).to.be.a("function");
    const result = greet();
    expect(result).to.equal("Hello World");
  });
});
