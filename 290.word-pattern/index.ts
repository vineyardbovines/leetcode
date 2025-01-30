function wordPattern(pattern: string, s: string): boolean {
    const patternCharsUnuiqeIds = new Map<string, number>();
    const wordsUnuiqeIds = new Map<string, number>();

    const words = s.split(" ");

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        const uniqueId = i;

        if (!patternCharsUnuiqeIds.has(char)) {
            patternCharsUnuiqeIds.set(char, uniqueId);
        }
        if (!wordsUnuiqeIds.has(word)) {
            wordsUnuiqeIds.set(word, uniqueId);
        }
    }

    for (let i = 0; i < pattern.length; i++) {
        const wordsUnuiqeId = wordsUnuiqeIds.get(words[i]);
        const patternCharUnuiqeId = patternCharsUnuiqeIds.get(pattern[i]);

        if (wordsUnuiqeId !== patternCharUnuiqeId) {
            return false;
        }
    }

    return true;
}

