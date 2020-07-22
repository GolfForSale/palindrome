const { checkPalindrome } = require(".");

describe('checkPalindrome', () => {
    it('should return true if text is palindrome', () => {
        const text = "kajak"
        expect(checkPalindrome(text)).toBe(true);
    });
    it('should return false if text is not palindrome', () => {
        const text = "is kajak palindrome?"
        expect(checkPalindrome(text)).toBe(false);
    });
});
