function canConstruct(ransomNote: string, magazine: string): boolean {
    let magaHash = {};

    for (let c of magazine) {
        magaHash[c] = (magaHash[c] || 0) + 1;
    }

    for (let c of ransomNote) {
        if (!magaHash[c] || magaHash[c] <= 0) {
            return false;
        }
        magaHash[c]--;
    }

    return true;
};
