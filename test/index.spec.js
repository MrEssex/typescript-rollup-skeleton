import { expect } from 'chai';
import index from '../dist/index.cjs';

import 'mocha-sinon';

describe('greet()', function () {
  // eslint-disable-next-line mocha/no-hooks-for-single-case
  beforeEach(function () {
    this.sinon.stub(console, 'log');
  });

  it('should log "Hello World"', function () {
    index();
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('Hello World')).to.be.true;
  });
});
