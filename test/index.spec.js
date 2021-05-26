import {expect} from 'chai';
import greet from '../dist/index.cjs';

import 'mocha-sinon';

describe('greet()', function ()
{
  // eslint-disable-next-line mocha/no-hooks-for-single-case
  beforeEach(function ()
  {
    this.sinon.stub(console, 'log');
  });

  it('should log "Hello World"', function ()
  {
    greet();
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('Hello World')).to.be.true;
  });
});
