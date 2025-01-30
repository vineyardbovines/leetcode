function calculate(s: string): number {
    let i = 0;

    const calc = (): number => {
        let stack: number[] = [];
        let num = 0;
        let sign = 1;
        let result = 0;

        while (i < s.length) {
            const char = s[i];

            if (char >= '0' && char <= '9') {

                num = num * 10 + (char.charCodeAt(0) - '0'.charCodeAt(0));
            }
            else if (char === '(') {
                i++;
                num = calc();
            }
            else if (char === ')') {
                result += sign * num;
                return result;
            }
            else if (char === '+' || char === '-') {
                result += sign * num;
                sign = char === '+' ? 1 : -1;
                num = 0;
            }
            i++;
        }

        return result + sign * num;
    }

    return calc();
}


// extremely dirty but fast solution
// function calculate(s: string): number {
//     return Function(`return (${s})`)();
// };
