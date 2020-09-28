import 'mocha'
import 'should'

import add from '../src/index'

describe('project', function () {
  it('should work', function () {
    add(1, 2).should.equal(3)
  })
})
