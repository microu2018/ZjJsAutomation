/**
 * Create macaca test groups and run by template.
 * 
 */
const testConsts = require('./test_consts');
const runner = require('./macaca_tc_template');

let testGroups = [];

let testGroup1 = function (driver) {
  describe('Macaca test group 1', function () {
    it('#0, test case 01', function () {
      return driver
        .get('https://www.baidu.com')
        .sleep(testConsts.timeUnit.second)
        .title()
        .then(value => console.log('page title:', value));
    });

    it('#1, test case 02', function () {
      return driver
        .get('https://www.sogou.com')
        .sleep(testConsts.timeUnit.second)
        .title()
        .then(value => console.log('page title:', value));
    });
  });
};
testGroups.push(testGroup1);

let testGroup2 = function (driver) {
  describe('Macaca test group 2', function () {
    it('#2, test case 03', function () {
      return driver
        .get('https://www.qa.strikingly.com')
        .title()
        .then(value => console.log('page title:', value));
    });

    it('#3, test case 04', function () {
      return driver
        .get('https://www.qa.sxl.cn/s#')
        .title()
        .then(value => console.log('page title:', value));
    });
  });
}
testGroups.push(testGroup2);

runner.macacaTestGroups(testGroups);