# 时间复杂度计算

我们想要知道一个算法的「时间复杂度」，很多人首先想到的的方法就是把这个算法程序运行一遍，那么它所消耗的时间就自然而然知道了。
这种方式可以吗？当然可以，不过它也有很多弊端。
这种方式非常容易受运行环境的影响，在性能高的机器上跑出来的结果与在性能低的机器上跑的结果相差会很大。而且对测试时使用的数据规模也有很大关系。再者，并我们在写算法的时候，还没有办法完整的去运行呢。
时间复杂度常用[大 O 符号](https://baike.baidu.com/item/%E5%A4%A7O%E7%AC%A6%E5%8F%B7)表述。
<a name="JoUyc"></a>

## 常数阶 O(1)

无论代码执行了多少行，只要是没有循环等复杂结构，那这个代码的时间复杂度就都是 O(1)，如：

```javascript
function main() {
  // O(1)	叫做常数阶
  const a = true; // 1 unit time
  if (a) {
    console.log('success');
  }
}
```

上述代码在执行的时候，它消耗的时候并不随着某个变量的增长而增长，那么无论这类代码有多长，即使有几万几十万行，都可以用 O(1)来表示它的时间复杂度。
<a name="ebOQ6"></a>

## 线性阶 O(n)

```javascript
function main() {
  // 1 + n + n + n = 1 + 3n   // O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

上面的代码，执行次数为 1 + 3n。

```javascript
function main() {
  // T(n)=O(n) 线性阶
  // 1 + n + n + n(1 + 20 * 3) = 63n + 1  // O(n)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 20; j++) {
      console.log(j);
    }
  }
}
```

计算： 1+ 2n + n(1 + 20 \* 3) = 63n + 1
上面代码，for 循环里面的代码会执行 n 遍，因此它消耗的时间是随着 n 的变化而变化的，因此这类代码都可以用 O(n)来表示它的时间复杂度。
<a name="ScOAp"></a>

## 对数阶 O(logN)

```javascript
function main() {
  // log(2)n
  // O(logn)
  int i = 1
  while(i < n) {
  	i = i * 2	// 每次都乘2， 2ᕽ = n    x = log(2)n   2为底数，n为真数(对数公式)
  }
}
```

<a name="S4DOe"></a>

## 平方阶 O(**n²**)

```javascript
function main() {
  // 执行了 1 + 2n + n*(1+3n) = 3n² + 3n + 1
  // 3n² + 3n + 1
  // T(n)=O(n²) 平方阶
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(j);
    }
  }
}
```

```javascript
function main() {
  // 3 + 3n + n * (3n) = 3 +3n + 3n²		影响这语句执行速度的核心是3n²，前面的都可以忽略
  // 简写成T(n) = O(n ^ 2)
  int sum = 0
  int i = 1
  int j = 1
  for(; i<=n;++i) {
  	j = 1
    for(; j <= n; ++j) {	// 1 + 3n
    	sum = sum + i * j
    }
  }
}
```

<a name="HCZGo"></a>

## 线性对数阶 O(nlogN)

```javascript
function main() {
  // 1 + 2 *log2(n) + log2(n) * 1 + 3n = 1 + 3 * log(2)n + 2 * nlog2(n)
  // O(nlogn)
  for (let i = 1; i < n; i += i) {
    // i = i + i; i = 2i; 1 + 2log(2)n
    for (let j = 0; j < 20; j++) {
      // 1 + 3n
      console.log(j);
    }
  }
}
```

如何在不运行代码的情况下，用“肉眼”得到一段代码的执行时间呢？

> T(n) = O(f(n))

- T(n)代表代码执行的时间
- n 表示数据规模的大小
- f(n)表示每个代码执行的次数总和
- 因为这是一个公式，所以用 f(n)来表示。公式中的 O，表示代码的执行时间 T(n)与 f(n)表达式成正比

时间复杂度实际上并不具备表示代码真正的执行时间，而是代表代码执行时间随数据规模增长的变化趋势，所以，也叫作渐进时间复杂度，简称时间复杂度。

<img src="./static/image1.png" alt="img" width="500"/>
<a name="pcFYU"></a>

## 递归

```javascript
function main(n) {
  // O(2^n)
  if (n <= 1) return;
  return main(n - 1) + main(n - 2);
}
```

<img src="./static/image2.png" alt="img" width="500"/>
