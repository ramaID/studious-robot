---
title: Query MySQL untuk Select Size Per-Table
link: https://laravolt.club
tags:
  - sql
emoji: 💽
modified: 2022-01-02
---

```sql
SELECT
    table_name, table_rows, data_length, index_length,
    round(((data_length + index_length) / 1024 / 1024),2) "size in MB"
FROM
    information_schema.TABLES
WHERE
    table_schema = "dev_moodle"
ORDER BY
    (data_length + index_length) DESC;
```
