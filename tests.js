
// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});



describe("sum" , function() {
    it("should be a defined function", function () {
        expect(typeof sum).toBe("function");
    });
    it("should return the number 4 when passed the number 2 and 2", function () {
        expect(sum(2, 2)).toBe(4);
    });
    it ("should return false when passed two strings", function() {
        expect(sum("black", "sheep")).toBe(false);
    });
});


describe('sayHello', function() {
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when passed Jane', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when passed "Alex"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });it('should return the string "Hello, Pat!" when passed "Pat"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

});






