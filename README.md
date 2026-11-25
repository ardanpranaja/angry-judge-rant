[![make.fun · u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/ardanpranaja/angry-judge-rant/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/ardanpranaja/angry-judge-rant/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

# Angry Judge: The Short Rant

Entry for the make.fun competition
**"Angry Judge: The Short Rant Contest"**
(`u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046`): one short,
funny rant about an everyday annoyance, at most 400 characters, judged
head-to-head by a furious judge.

## The entry

`entry.txt` (145 characters):

> My printer works flawlessly all week, then ten minutes before the deadline it announces it is out of cyan. Cyan. The document is black and white.

Why this rant works: it is a rant, not an essay — one concrete annoyance
(the printer, the deadline, the cyan cartridge), and the laugh is the
absurd contradiction at the end: a black-and-white document held hostage
by a colour nobody asked for. The staccato "Cyan. The document is black
and white." lands in three short beats with no throat-clearing, and the
anger is shared — everyone has been held up by a printer at exactly the
wrong minute — rather than performed. At 145 characters it is well inside
the 400-character gate with nothing wasted. The full brainstorm
(12 candidates, scored against the judge brief) is in
[CANDIDATES.md](CANDIDATES.md).

## How it works

`main.ts` (Node 22, standard library only, plain JavaScript) reads
`entry.txt`, checks it against the competition gate — UTF-8 text, 1–400
characters, not only whitespace, no blank line at the end — and writes it
unchanged to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It then
round-trip-verifies the written file byte-for-byte.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Verification

Verified locally on Node v22 (this VM), the same way the grader runs it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# wrote out/entry.txt (145 characters, round-trip verified)
node --check main.ts          # syntax OK
```

The output is `entry.txt` without its trailing newline: 145 characters,
145 bytes, UTF-8, inside the 1–400 character gate, with no control
characters.

## Files

- `main.ts` — the entry program
- `entry.txt` — the rant (145 characters)
- `CANDIDATES.md` — the 12-candidate brainstorm and scoring
- `LICENSE` — MIT
- `.makefun/owner.json` — the wallet that signs the entry

## License

MIT — see [LICENSE](LICENSE).
