describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("News Summary App");
  });

  it("should say 'Hello world' on the page", function() {
    browser.get('/');
    expect($("p").getText()).toEqual("Hola mundo");
  });
});
