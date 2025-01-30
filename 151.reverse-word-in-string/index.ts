function reverseWords(s: string): string {
    s = s.trim();
    let words = s.split(/\s+/);
    words.reverse();
    return words.join(" ");
};
