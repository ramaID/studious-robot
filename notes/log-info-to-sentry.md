---
title: Fungsi logInfo ke Sentry untuk Production
link: https://laravolt.club
tags:
  - php
  - laravel
emoji: ⚡️
modified: 2022-01-02
---

Jadi, *most commonly* kita tidak *elok* atau tidak etis untuk *debugging* ketika sudah **production**. Dan, *certain case* kita perlu *logging* untuk perbaikan ***issue*** di **production**. Untuk itulah, ***logInfo*** ke Sentry ini lahir. Heuheu.

```php

if (! function_exists('logInfo')) {
    function logInfo(String $message): void
    {
        \Sentry\captureMessage($message, \Sentry\Severity::info());

        \Illuminate\Support\Facades\Log::info($message);
    }
}
```
