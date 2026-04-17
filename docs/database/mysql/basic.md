---
title: MySQL 基础操作
date: '2026-04-17'
description: 连接数据库、常见 CRUD 与分页查询示例。
---

## 连接数据库

安装并配置好环境变量后，可以直接在终端连接 MySQL：

```bash
mysql -u root -p
```

首次本地安装时，某些环境下密码可能为空，直接回车即可。实际项目里仍然应该设置密码并控制权限。

## 常用数据库命令

```sql
SHOW DATABASES;
CREATE DATABASE js001;
USE js001;
```

- `SHOW DATABASES;`：查看当前所有数据库。
- `CREATE DATABASE ...;`：创建数据库。
- `USE ...;`：切换当前数据库。

## 增删改查

### 新增 `INSERT`

```sql
INSERT INTO news (title, content, addTime) VALUES ('title', 'content', '2026-04-17');
```

Node.js 示例：

```js
connection.promise().query(
  'INSERT INTO news (title, content, `addTime`, country, type, imgUrl) VALUES (?, ?, ?, ?, ?, ?)',
  [title, content, addTime, country, type, imgUrl],
);
```

### 删除 `DELETE`

```sql
DELETE FROM news WHERE id = 1;
```

删除语句一定要带条件，否则会删全表。

### 修改 `UPDATE`

```sql
UPDATE news SET title = 'new title' WHERE id = 1;
```

### 查询 `SELECT`

```sql
SELECT * FROM news WHERE id = 1;
SELECT title, content FROM news WHERE type = 'tech';
```

Node.js 示例：

```js
connection.promise().query('SELECT * FROM news WHERE id = ?', [id]);
```

## 分页查询

MySQL 常用 `LIMIT` 做分页。

```sql
SELECT * FROM news LIMIT 0, 10;
SELECT * FROM news LIMIT 4, 6;
SELECT * FROM news LIMIT 5, 1;
```

含义分别是：

- `LIMIT 0, 10`：从第 1 条开始，取 10 条。
- `LIMIT 4, 6`：从第 5 条开始，取 6 条。
- `LIMIT 5, 1`：只取第 6 条。

Node.js 分页参数示例：

```js
connection.promise().query(
  'SELECT * FROM news LIMIT ?, ?',
  [(page - 1) * perPage, perPage],
);
```

## 基本实践建议

- 表名和字段名保持统一命名风格。
- 业务查询尽量使用参数化占位符，避免 SQL 注入。
- 更新和删除语句务必带 `WHERE`。
- 分页查询要有稳定排序，否则翻页结果可能不稳定。

## 总结

MySQL 入门最重要的是先把连接、建库、CRUD 和 `LIMIT` 用熟。业务代码里再往上，就是索引、事务、锁和慢查询这些更偏工程化的问题。
