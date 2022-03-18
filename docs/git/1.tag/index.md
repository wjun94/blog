---
title: Git Tag
group:
  path: /git
  title: Git
  order: 3
nav:
  title: Git Tag
  order: 2
---

# Git Tag - 打标签

## 列出所有标签

```bash
$ git tag
v1.0
v2.0
```

这个命令以字母顺序列出标签，但是它们显示的顺序并不重要。
你也可以按照特定的模式查找标签。 例如，Git 自身的源代码仓库包含标签的数量超过 500 个。 如果只对 1.8.5 系列感兴趣，可以运行：

```bash
$ git tag -l "v1.8.5*"
v1.8.5
v1.8.5-rc0
v1.8.5-rc1
v1.8.5-rc2
v1.8.5-rc3
v1.8.5.1
```

## 创建带备注标签

```bash
git tag -a 1.0 -m "备注信息"
```

通过使用 `git show` 命令可以看到标签信息和与之对应的提交信息。

## 轻量标签

另一种给提交打标签的方式是使用轻量标签。 轻量标签本质上是将提交校验和存储到一个文件中——没有保存任何其他信息。 创建轻量标签，不需要使用 -a、-s 或 -m 选项，只需要提供标签名字：

```bash
$ git tag v1.4-lw
$ git tag
v0.1
v1.3
v1.4
v1.4-lw
v1.5
```

## 删除标签

要删除掉你`本地仓库`上的标签，可以使用命令 `git tag -d <tagname>`。 例如，可以使用以下命令删除一个轻量标签：

```bash
$ git tag -d v1.4-lw
Deleted tag 'v1.4-lw' (was e7d5add)
```

## 提交标签

```bash
$ git tag origin v1.0
```

删除`远程标签`的方式：

```bash
$ git push origin --delete <tagname>
```

## 参考资料

[Git 基础 - 打标签](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE)
