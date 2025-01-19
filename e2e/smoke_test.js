SuiteOf('smoke');

Scenario('example.comにアクセスする',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example Domain')
});
