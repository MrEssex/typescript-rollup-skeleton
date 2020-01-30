var expect = require("chai").expect;
var testable = require("../dist/index.cjs");

require("mocha-sinon");

describe("greet()", function() {
  beforeEach(function() {
    this.sinon.stub(console, "log");
  });

  it('should log "Hello World"', function() {
    testable.greet();
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith("Hello World")).to.be.true;
  });
});
