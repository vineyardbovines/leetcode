function findSubstring(s: string, words: string[]): number[] {
    const wordLength = words[0].length;
    const numberOfWords = words.length;

    const wordCount: Map<string, number> = new Map();
    const result: number[] = [];

    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    for (let i = 0; i < wordLength; i++) {
        const seenWords: Map<string, number> = new Map();
        let left = i;
        let right = i;
        let count = 0;

        while (right + wordLength <= s.length) {
            const word = s.substring(right, right + wordLength);
            right += wordLength;

            if (wordCount.has(word)) {
                seenWords.set(word, (seenWords.get(word) || 0) + 1);
                count++;

                while (seenWords.get(word)! > wordCount.get(word)!) {
                    const leftWord = s.substring(left, left + wordLength);
                    seenWords.set(leftWord, seenWords.get(leftWord)! - 1);
                    count--;
                    left += wordLength;
                }

                if (count === numberOfWords) {
                    result.push(left);
                }
            } else {
                seenWords.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;
}
