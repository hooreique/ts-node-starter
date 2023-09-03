import { createInterface } from 'node:readline/promises';
import { Readable } from 'node:stream';

const main = (nextInt: () => number, println: (a: number) => void) => {
    for (let i = 3; i > 0; --i) println(nextInt());
};

(_ => {
    const q: number[] = [];
    let i = -1;
    createInterface({ input: Readable.from('3 2 1') })
        .on('close', () => {
            const a: number[] = [];
            _(
                () => q[++i],
                _ => a.push(_)
            );
            console.log(a.join('\n'));
        })
        .on('line', _ =>
            _.trim()
                .split(/\s+/)
                .forEach(_ => q.push(Number.parseInt(_)))
        );
})(main);
