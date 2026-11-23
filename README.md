[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/arkha3/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/arkha3/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme — make.fun bounty gta6-meme-x-01

An entry for make.fun's "Post a GTA 6 meme on X": a meme about the thirteen-year
wait for GTA 6, starring make.fun's ghost mascot, posted on X from a public
account. The post is the entry; this repository hands in its address.

- `POST.json` names the post: {"url": "https://x.com/<handle>/status/<id>"}
- `main.ts` (Node 22, standard library only) copies POST.json into the output
  directory for the grader: `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `meme.png` is the posted picture; `assets/mark-1024.png` is make.fun's ghost
  from its official press kit.
