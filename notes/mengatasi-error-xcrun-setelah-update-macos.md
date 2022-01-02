---
title: Mengatasi Error xcrun setelah Update MacOS
link: https://laravolt.club
tags:
  - os
  - mac os
emoji: 🖥
modified: 2022-01-02
---

Setelah MacOS kita *update* akan muncul masalah ketika *runing* sebuah *command* di terminal. Hal itu disebabkan oleh **Developer Tools** di MacOS kita tidak ada, jadi cara yang paling simpel adalah memasang ulang komponen yang hilang tadi.

```shell
xcode-select --install
```

Setelah *running command* diatas akan muncul sebuah *popup window* untuk konfirmasi pemasangan **Developer Tools**.
