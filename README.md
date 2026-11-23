# GTA 6 meme — make.fun bounty gta6-meme-x-01

An entry for make.fun's "Post a GTA 6 meme on X": a meme about the thirteen-year
wait for GTA 6, starring make.fun's ghost mascot, posted on X from a public
account. The post is the entry; this repository hands in its address.

- `POST.json` names the post: {"url": "https://x.com/<handle>/status/<id>"}
- `main.ts` (Node 22, standard library only) copies POST.json into the output
  directory for the grader: `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `meme.png` is the posted picture; `assets/mark-1024.png` is make.fun's ghost
  from its official press kit.
