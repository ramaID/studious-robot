---
title: Fungsi getFilenameOnly
link: https://laravolt.club
tags:
  - php
emoji: ⚡️
modified: 2022-01-02
---

Ketika user mengunggah sebuah *file* ke **web server** kadang kala kita hanya butuh nama dari berkasnya saja, tanpa perlu *extension*-nya. Berikut ini *regex* yang menghapus *file extension* (***dot*** yang diikuti oleh karakter sejumlah 3 atau 4).

```php
public function getFilenameOnly(string $str): string
{
    return preg_replace('/\\.[^.\\s]{3,4}$/', '', $filename);
}
```
