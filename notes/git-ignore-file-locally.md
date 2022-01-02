---
title: Mengabaikan Beberapa File Local di Git
link: https://laravolt.club
tags:
  - git
emoji: ⚡️
modified: 2022-01-02
---

```shell
# ignore some files
git update-index --skip-worktree <file-name>

# reverse some files
git update-index --no-skip-worktree <file-name>
```
