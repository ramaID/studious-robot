---
title: Fungsi convertToMethodName
link: https://laravolt.club
tags:
  - php
emoji: ⚡️
modified: 2022-01-02
---

Di fungsi ini, kita akan mengubah parameter:

## Dari
- `string` yang ***belum*** `method-able`

## Menjadi
- sebuah `string` yang `method-able` dengan format **camelCase**.

```php
public function convertToMethodName(string $str): string
{
    $str = strtolower($str);
    $method = ucwords(preg_replace('/[^a-zA-Z0-9]/', ' ', $str));

    return lcfirst(str_replace(' ', '', $method));
}
```
