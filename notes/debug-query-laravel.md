---
title: Debug Query Laravel
link: https://laravolt.club
tags:
  - laravel
  - php
emoji: ⚡️
modified: 2022-01-02
---

```php
use Illuminate\Support\Facades\DB;

DB::enableQueryLog(); // Enable query log

// kode eloquent atau query builder atau semacamnya

dd(DB::getQueryLog()); // Show results of log
```
