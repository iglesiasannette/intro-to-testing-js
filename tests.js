
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
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when passed Jane', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when passed "Alex"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when passed "Pat"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when passed helloWorld', function () {
    expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed helloWorld', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });

});

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
});

    describe('isEven', function() {
        it('should be a defined function', function () {
            expect(typeof isEven).toBe('function');
        });
        it('should return a boolean when called', function () {
            expect(isEven()).toBe('boolean');
        });
        it('should return true when passed 2', function () {
            expect(isEven(2)).toBe(true);
        });
        it('should return true when passed -4', function () {
            expect(isEven(-4)).toBe(true);
        });
        it('should return false when passed 3', function () {
            expect(isEven(3)).toBe(false);
        });
        it('should return false when passed "banana"', function () {
            expect(isEven("banana")).toBe(false);
        });
        it('should return true when passed 8', function () {
            expect(isEven(8)).toBe(true);
        });
        it('should return false when passed Infinity', function () {
            expect(isEven(Infinity)).toBe(false);
        });
        it('should return false when passed "true"', function () {
            expect(isEven("true")).toBe(false);
        });
        it('should return false when passed "false"', function () {
            expect(isEven("false")).toBe(false);
        });
});
    describe('isVowel', function() {
        it('should be a defined function', function () {
            expect(typeof isVowel).toBe('function');
        });
        it('should return a boolean when called', function () {
            expect(isVowel()).toBe('boolean');
        });
        it('should return true when passed "a"', function () {
            expect(isVowel("a")).toBe(true);
        });
        it('should return true when passed "A"', function () {
            expect(isVowel("A")).toBe(true);
        });
        it('should return false when passed "y"', function () {
            expect(isVowel("y")).toBe(false);
        });
        it('should return false when passed 4', function () {
            expect(isVowel(4)).toBe(false);
        });
        it('should return false when passed "true"', function () {
            expect(isVowel("true")).toBe(false);
        });
        it('should return false when passed "false"', function () {
            expect(isVowel("false")).toBe(false);
        });
        it('should return false when passed "banana"', function () {
            expect(isVowel("banana")).toBe(false);
        });
});
    describe('add' , function() {
        it("should be a defined function", function () {
            expect(typeof add).toBe("function");
        });
        it("should return the number 5 when passed the numbers 2 and 3", function () {
            expect(add(2,3)).toBe(5);
        });
        it("should return the number -12 when passed the numbers -3 and -9", function () {
            expect(add(-3,-9)).toBe(-12);
        });
        it("should return the number 11 when passed the number '5' and 6", function () {
            expect(add('5',6)).toBe(11);
        });
        it("should return the number 6 when passed the number '-4' and '10'", function () {
            expect(add('-4','10')).toBe(6);
        });
        it("should return isNaN when passed the 'banana' and 'split'", function () {
            expect(add('banana','split')).toBe(isNaN);
        });
        it("should return isNaN when passed the 2 and 'apples'", function () {
            expect(add(2,'apples')).toBe(isNaN);
        });
        it ("should return isNaN when empty", function() {
            expect(add('','')).toBe(isNaN);
    });
});
});






