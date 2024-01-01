(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{294:function(t,a,n){t.exports=n.p+"assets/img/image-20230627013650783.4cd1eb1b.png"},295:function(t,a,n){t.exports=n.p+"assets/img/image-20230627013750917.e7eca908.png"},296:function(t,a,n){t.exports=n.p+"assets/img/image-20230627013812156.f1f36eaf.png"},297:function(t,a,n){t.exports=n.p+"assets/img/image-20230626012420704.d219bf0a.png"},298:function(t,a,n){t.exports=n.p+"assets/img/image-20230627013010561.9b88f718.png"},299:function(t,a,n){t.exports=n.p+"assets/img/image-20230627013301567.c82da942.png"},300:function(t,a,n){t.exports=n.p+"assets/img/image-20230627013451592.693a88ec.png"},301:function(t,a,n){t.exports=n.p+"assets/img/image-20230627013214005.4eab8232.png"},302:function(t,a,n){t.exports=n.p+"assets/img/image-20230628200750897.a88ad61a.png"},303:function(t,a,n){t.exports=n.p+"assets/img/image-20230627013235308.8a349cd8.png"},304:function(t,a,n){t.exports=n.p+"assets/img/image-20230703015552225.84346a31.png"},305:function(t,a,n){t.exports=n.p+"assets/img/image-20230720000446971.073a72c3.png"},306:function(t,a,n){t.exports=n.p+"assets/img/image-20230720000633464.40322b28.png"},307:function(t,a,n){t.exports=n.p+"assets/img/image-20230720000822586.9d672b38.png"},308:function(t,a,n){t.exports=n.p+"assets/img/image-20230720000901180.82c59151.png"},309:function(t,a,n){t.exports=n.p+"assets/img/image-20230720000840015.b3b97302.png"},310:function(t,a,n){t.exports=n.p+"assets/img/image-20230720000930734.91555255.png"},495:function(t,a,n){"use strict";n.r(a);var v=n(14),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"随机事件和概率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#随机事件和概率"}},[t._v("#")]),t._v(" 随机事件和概率")]),t._v(" "),a("p",[t._v("不相容和独立的区别，不相容指二者不能同时发送\n$$\nP(AB) = 0\n$$\n独立指二者是否发生不对另一个事件产生任何影响\n$$\nP(A|B) = P(A) \\quad P(AB) = P(A)P(B)\n$$\n"),a("img",{attrs:{src:n(294)}})]),t._v(" "),a("p",[t._v("对于 17 题，显而易见，条件概率满足\n$$\nP(\\overline{A}|\\overline{B}) = P(\\overline{A}|B)\n$$\n根据题意有\n$$\nP(\\overline{A}|\\overline{B}) = 1-P(A|B) = P(\\overline{A}|B)\n$$\n所以有\n$$\n1 = P(A|B) + P(\\overline{A}|B)\n$$\n故 B 是否发生对 A 根本不产生任何影响，故二者独立")]),t._v(" "),a("p",[t._v("条件概率问题")]),t._v(" "),a("img",{attrs:{src:n(295)}}),t._v(" "),a("img",{attrs:{src:n(296)}}),t._v(" "),a("h2",{attrs:{id:"一维随机变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一维随机变量"}},[t._v("#")]),t._v(" 一维随机变量")]),t._v(" "),a("h3",{attrs:{id:"密度函数和分布函数转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密度函数和分布函数转换"}},[t._v("#")]),t._v(" 密度函数和分布函数转换")]),t._v(" "),a("p",[t._v("当已知密度函数 f 求分布函数时，需要注意")]),t._v(" "),a("ul",[a("li",[t._v("对于分布函数 F 一定要表明 0 和 1 的部分，定义域应包含整个实数域")]),t._v(" "),a("li",[t._v("另外在积分的时候，一定是求定积分，上下限一定要明确，直接求不定积分再手动加限是不对的")])]),t._v(" "),a("h3",{attrs:{id:"常见分布表示和密度函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见分布表示和密度函数"}},[t._v("#")]),t._v(" 常见分布表示和密度函数")]),t._v(" "),a("p",[t._v("常见分布的符号表示")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("连续型")]),t._v(" "),a("th"),t._v(" "),a("th",[t._v("离散型")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("正态分布")]),t._v(" "),a("td",[t._v("N(μ, ν)")]),t._v(" "),a("td",[t._v("二项分布")]),t._v(" "),a("td",[t._v("B(n, p)")])]),t._v(" "),a("tr",[a("td",[t._v("均匀分布")]),t._v(" "),a("td",[t._v("U(a, b)")]),t._v(" "),a("td",[t._v("0/1 分布")]),t._v(" "),a("td",[t._v("B(1, p)")])]),t._v(" "),a("tr",[a("td",[t._v("指数分布")]),t._v(" "),a("td",[t._v("E(λ)")]),t._v(" "),a("td",[t._v("泊松分布")]),t._v(" "),a("td",[t._v("P(λ)")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("几何分布")]),t._v(" "),a("td",[t._v("GE(p)")])])])]),t._v(" "),a("p",[t._v("指数分布密度函数和分布函数为\n$$\nf(x) = \\lambda e^{-\\lambda x} \\quad F(x) = 1-e^{-\\lambda x}\n$$\n均匀分布的密度函数就是一个常数"),a("code",[t._v("1/(b-a)")])]),t._v(" "),a("p",[t._v("泊松分布的分布函数\n$$\nP(x) = \\frac{\\lambda^x}{x!}e^{-\\lambda}\n$$\n几何分布的含义是，对于一个伯努利实验，第 X 次才成功的概率分布，如对于一个 3 次的抛硬币抛到花面的几何分布，有")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("X")]),t._v(" "),a("th",[t._v("1")]),t._v(" "),a("th",[t._v("2")]),t._v(" "),a("th",[t._v("3")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("P")]),t._v(" "),a("td",[t._v("1/2")]),t._v(" "),a("td",[t._v("1/4")]),t._v(" "),a("td",[t._v("1/4")])])])]),t._v(" "),a("p",[t._v("设不成功概率为 q = 1-p，则\n$$\nP(X=k) = q^{k-1}p\n$$\n几何分布的期望为 1/p，证明如下（感觉是一个无穷级数问题）")]),t._v(" "),a("img",{attrs:{src:n(297)}}),t._v(" "),a("p",[t._v("几何分布的方差\n$$\nD(X) = \\frac{1-p}{p^2}\n$$")]),t._v(" "),a("h3",{attrs:{id:"一维正态分布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一维正态分布"}},[t._v("#")]),t._v(" 一维正态分布")]),t._v(" "),a("p",[t._v("一维正态分布\n$$\nX\\sim N(\\mu,\\upsilon) \\rightarrow p(x) = \\frac{1}{\\sqrt{2\\pi},\\upsilon}e^{-\\frac{(x-\\mu)^2}{2\\upsilon}}\n$$\n其密度函数显然是一个关于 x = μ 对称的曲线，故当 x = μ 时，其分布函数值为 1/2")]),t._v(" "),a("p",[t._v("三道有关一维正态的性质栗题")]),t._v(" "),a("img",{attrs:{src:n(298)}}),t._v(" "),a("h2",{attrs:{id:"二维随机变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二维随机变量"}},[t._v("#")]),t._v(" 二维随机变量")]),t._v(" "),a("h3",{attrs:{id:"二维离散随机变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二维离散随机变量"}},[t._v("#")]),t._v(" 二维离散随机变量")]),t._v(" "),a("p",[t._v("在这种二维离散分布的耦合中，显然 X1 和 X2 是不独立的，二者组合为二维离散分布后出现了条件限制，并非各自概率直接相乘")]),t._v(" "),a("img",{attrs:{src:n(299)}}),t._v(" "),a("p",[t._v("不能说一模一样，只能说极其相似")]),t._v(" "),a("img",{attrs:{src:n(300)}}),t._v(" "),a("h3",{attrs:{id:"二维正态分布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二维正态分布"}},[t._v("#")]),t._v(" 二维正态分布")]),t._v(" "),a("p",[t._v("不太懂")]),t._v(" "),a("img",{attrs:{src:n(301)}}),t._v(" "),a("img",{attrs:{src:n(302)}}),t._v(" "),a("img",{attrs:{src:n(303)}}),t._v(" "),a("p",[t._v("选择 D、B，根据对称性很容易得出答案")]),t._v(" "),a("h3",{attrs:{id:"多维随机变量函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多维随机变量函数"}},[t._v("#")]),t._v(" 多维随机变量函数")]),t._v(" "),a("blockquote",[a("p",[t._v("重难点")])]),t._v(" "),a("p",[t._v("一维到多维的转换：从分布函数的定义入手，二重积分，找上下限是关键")]),t._v(" "),a("p",[t._v("T17、20、23、27")]),t._v(" "),a("h3",{attrs:{id:"条件概率密度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件概率密度"}},[t._v("#")]),t._v(" 条件概率密度")]),t._v(" "),a("p",[t._v("二维随机变量的条件概率密度公式\n$$\nf_{X|Y}(x|y) = \\frac{f(x,y)}{f_Y(y)}\n$$")]),t._v(" "),a("h3",{attrs:{id:"多维随机变量的独立性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多维随机变量的独立性"}},[t._v("#")]),t._v(" 多维随机变量的独立性")]),t._v(" "),a("p",[t._v("独立性的判断，当二维随机变量边际密度函数满足\n$$\np_X(x)p_Y(y)=p(x,y)\n$$\n则 X 和 Y 互相独立")]),t._v(" "),a("p",[t._v("试算法判断独立性，如对于均匀分布 X~U(0,2)，随机变量 Y = X^2，则\n$$\nP(X<1,Y<1) = P(X<1) = \\frac{1}{2}\n$$\n但有\n$$\nP(X<1)P(Y<1) = \\frac{1}{2}\\times\\frac{1}{2}= \\frac{1}{4}\n$$\n故二者不独立（只有联合概率等于编辑概率相乘，两随机变量才互相独立）")]),t._v(" "),a("h2",{attrs:{id:"随机变量的数字特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#随机变量的数字特征"}},[t._v("#")]),t._v(" 随机变量的数字特征")]),t._v(" "),a("h3",{attrs:{id:"常见分布的期望和方差"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见分布的期望和方差"}},[t._v("#")]),t._v(" 常见分布的期望和方差")]),t._v(" "),a("p",[t._v("同一随机变量的期望和方差满足\n$$\nD(X) = E(X^2)-[E(X)]^2\n$$\n随机变量函数在期望和方差上的变化\n$$\nE(2X+1) = 2E(X)+E(1)\\quad D(2X+4) = 2^2D(X)\n$$")]),t._v(" "),a("p",[t._v("指数分布\n$$\nf(x) = \\lambda e^{-\\lambda x} \\rightarrow E(X) = \\frac{1}{\\lambda}\\quad D(X) = \\frac{1}{\\lambda^2}\n$$\n均匀分布\n$$\nE(x)=\\int_a^b\\frac{xdx}{b-a}\\quad E(x^2)=\\int_a^b\\frac{x^2dx}{b-a}\n$$\n根据方差公式化来化去可以得到\n$$\nE(X) = \\frac{a+b}{2}\\quad D(X) = \\frac{b^2-a^2}{12}\n$$\n一维正态分布的期望和方差\n$$\nX\\sim N(u,v^2)\\Rightarrow f(x)=\\frac{1}{\\sqrt{2\\pi}v}e^{-\\frac{(x-u)^2}{2v}}\\rightarrow E(X)=u\\quad D(X)=v^2\n$$")]),t._v(" "),a("h3",{attrs:{id:"方差、协方差和相关系数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方差、协方差和相关系数"}},[t._v("#")]),t._v(" 方差、协方差和相关系数")]),t._v(" "),a("p",[t._v("方差的运算\n$$\nD(X+Y) = D(X)+D(Y)+2\\rho\\sqrt{D(X)D(Y)}\n$$\n其中\n$$\n2\\rho\\sqrt{D(X)D(Y)}\\quad 等价于\\quad 2Cov(X,Y)\n$$\n协方差\n$$\nCov(U,V) = E(UV) - E(U)E(V)\n$$\n相关系数\n$$\n\\rho = \\frac{Cov(U,V)}{\\sqrt{D(U)D(V)}}\n$$\n随机变量 X 自身对自身的相关系数为 1，协方差为 D(X)\n$$\nCov(X,X) = E(X^2)-E^2(X) = D(X) \\quad \\rho = 1\n$$\n互相独立的变量 X 和 Y 的相关系数为 0\n$$\nCov(X,Y) = E(XY)-E(X)E(Y) = 0\n$$\n任意随机变量与常数的相关系数为 0\n$$\nCov(X, C) = E(XC)-E(X)E(C) = CE(X)-CE(X) = 0\n$$\n线性相关的两个随机变量相关系数一定为 1，设 Y = 2X+1\n$$\nCov(X,Y) = E(2X^2+X)-E(X)E(2X+1)\n$$\n拆开为\n$$\n2E(X^2)+E(X)-E(X)[2E(X)+1] = 2E(X^2)-2E^2(X) = 2D(X)\n$$\n同时有\n$$\n\\sqrt{D(X)D(Y)} = \\sqrt{D(X)D(2X+1)} = \\sqrt{4D^2(X)} = 2D(X)\n$$\n故有 ρ = 1（分子分母恒等）")]),t._v(" "),a("p",[t._v("协方差的分配律\n$$\nCov(X+2Y,X-2Y)\n$$\n和乘法分配律一模吊样，等于\n$$\nCov(X,X)+Cov(X,-2Y)+Cov(2Y,X)+Cov(2Y,-2Y)\n$$\n这里的系数都可以提出来，直接提，因为协方差的"),a("strong",[t._v("单个")]),t._v("变量以期望的形式参与运算（期望的系数提出均为线性，方差为平方），进一步为（中间项约掉）\n$$\nCov(X,X)-4Cov(Y,Y)\n$$\n故最后化为 D(X)-4D(Y)")]),t._v(" "),a("p",[t._v("一些相互转化的栗题，掌握上述规律绝对可以秒杀")]),t._v(" "),a("img",{attrs:{src:n(304)}}),t._v(" "),a("h3",{attrs:{id:"不相关和独立"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不相关和独立"}},[t._v("#")]),t._v(" 不相关和独立")]),t._v(" "),a("p",[t._v("不相关即指，两随机变量相关系数 ρ = 0，满足\n$$\nCov(X,Y) = E(XY)-E(X)E(Y) = 0\n$$\n即\n$$\nE(XY) = E(X)E(Y)\n$$\n但这并不能说明变量 X 和 Y 是独立的，我们称 X Y 独立，当且仅当\n$$\nP(XY) = P(X)P(Y)\n$$\n即二者联合分布等于两随机变量的边际分布直接相乘，参考多为随机变量的独立性（离散随机变量一个道理）")]),t._v(" "),a("p",[t._v("独立和不相关的内在含义是什么？？？")]),t._v(" "),a("h2",{attrs:{id:"大数定律"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大数定律"}},[t._v("#")]),t._v(" 大数定律")]),t._v(" "),a("h3",{attrs:{id:"切比雪夫不等式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切比雪夫不等式"}},[t._v("#")]),t._v(" 切比雪夫不等式")]),t._v(" "),a("p",[t._v("切比雪夫\n$$\nP{|X-E(X) \\geq x|} = \\frac{D(X)}{x^2}\n$$\n自然有\n$$\nP{|X-E(X) \\leq x|} = 1-\\frac{D(X)}{x^2}\n$$")]),t._v(" "),a("h3",{attrs:{id:"大数定律-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大数定律-2"}},[t._v("#")]),t._v(" 大数定律")]),t._v(" "),a("p",[t._v("所有的大数定律好像都基于切比雪夫不等式")]),t._v(" "),a("p",[t._v("多随机变量大数定律：对于随机变量们"),a("code",[t._v("x1,x2,...,xn")]),t._v("，他们满足同一分布且具有相同的期望与方差（有时表述为"),a("code",[t._v("x1,x2,...,xn")]),t._v("为来自同一总体的简单随机样本），那么设这堆随机变量的均值为\n$$\n\\overline{X} = \\frac{1}{n}\\sum_{i=1}^nX_i\n$$\n则有大数定律，重点在于求这个均值（即除以 n）\n$$\nP{|\\overline{X}-E(X)| \\geq x} = \\frac{D(X)}{nx^2}\n$$")]),t._v(" "),a("h3",{attrs:{id:"二项分布的收敛"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二项分布的收敛"}},[t._v("#")]),t._v(" 二项分布的收敛")]),t._v(" "),a("p",[t._v("二项分布收敛于正态分布")]),t._v(" "),a("p",[t._v("当随机变量 X 满足二项分布 X~B(n, p)，则有\n$$\nP{\\frac{X-E(X)}{\\sqrt{D(X)}}\\leq x} = P{\\frac{X-np}{\\sqrt{np(1-p)}}\\leq x} = \\Phi(x)\n$$\n这里的 Φ 为标准正态分布的分布函数，可以通过查表获得取值")]),t._v(" "),a("h2",{attrs:{id:"数理统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数理统计"}},[t._v("#")]),t._v(" 数理统计")]),t._v(" "),a("p",[t._v("请着重理清总体和样本的关系以及它们之间的计算，对于对于正态分布从期望和方差入手，牢记期望和方差的运算性质\n$$\nA = \\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1)\\quad E(A)=n-1\\quad D(A) = 2(n-1)\n$$\n牢记三种常见统计抽样分布：卡方分布、t 分布和 F 分布")]),t._v(" "),a("ul",[a("li",[t._v("卡方分布为标准正态分布的平方和分布，期望为自由度 n，方差为自由度的两倍 2n（所谓自由度就是参与卡方分布的标准正态分布的个数）")]),t._v(" "),a("li",[t._v("t 分布为一个标准正态分布除以一个卡方分布，t 分布的自由度为其分布位置卡方分布的自由度 n")]),t._v(" "),a("li",[t._v("F 分布为两个卡方分布除以自身自由度之商")])]),t._v(" "),a("p",[t._v("卡方分布\n$$\n\\frac{\\chi(n)/n}{\\chi(m)/m} \\sim F(n,m)\n$$\n其中 n 为自由度一，m 为自由度二")]),t._v(" "),a("h2",{attrs:{id:"参数估计和假设检验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数估计和假设检验"}},[t._v("#")]),t._v(" 参数估计和假设检验")]),t._v(" "),a("h3",{attrs:{id:"参数估计和无偏估计量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数估计和无偏估计量"}},[t._v("#")]),t._v(" 参数估计和无偏估计量")]),t._v(" "),a("p",[t._v("二阶原点矩估计，令\n$$\nE(X^2) = \\int_{-\\infty}^{+\\infty}x^2f(x)dx = A_2 = \\frac{1}{n}\\sum_{i=1}^nX_i^2\n$$\n求解未知数")]),t._v(" "),a("p",[t._v("结合无偏估计量考察最大似然估计量，即求出最大似然估计后，再根据"),a("code",[t._v("E(最大似然估计量)")]),t._v("是否等于未知量本身，判断最大似然估计量是否无偏")]),t._v(" "),a("img",{attrs:{src:n(305)}}),t._v(" "),a("img",{attrs:{src:n(306)}}),t._v(" "),a("p",[t._v("这里通过期望将二者连续起来，好像就是在最大似然估计后用了一次矩估计进行判断？")]),t._v(" "),a("h3",{attrs:{id:"t-检验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#t-检验"}},[t._v("#")]),t._v(" t 检验")]),t._v(" "),a("p",[t._v("懂不了一点")]),t._v(" "),a("img",{attrs:{src:n(307)}}),t._v(" "),a("img",{attrs:{src:n(308)}}),t._v(" "),a("img",{attrs:{src:n(309)}}),t._v(" "),a("img",{attrs:{src:n(310)}})])}),[],!1,null,null,null);a.default=s.exports}}]);