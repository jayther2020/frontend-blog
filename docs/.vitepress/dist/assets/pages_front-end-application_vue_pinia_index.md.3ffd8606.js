import{_ as s,c as n,o as a,a as l}from"./app.d773c0a6.js";const i=JSON.parse('{"title":"Pinia","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521D\u8BC6\u548C\u5B89\u88C5","slug":"\u521D\u8BC6\u548C\u5B89\u88C5","link":"#\u521D\u8BC6\u548C\u5B89\u88C5","children":[]},{"level":2,"title":"state","slug":"state","link":"#state","children":[{"level":3,"title":"$patch","slug":"patch","link":"#patch","children":[]},{"level":3,"title":"$state\u4FEE\u6539","slug":"state\u4FEE\u6539","link":"#state\u4FEE\u6539","children":[]}]},{"level":2,"title":"getters","slug":"getters","link":"#getters","children":[]},{"level":2,"title":"actions","slug":"actions","link":"#actions","children":[]}],"relativePath":"pages/front-end-application/vue/pinia/index.md"}'),p={name:"pages/front-end-application/vue/pinia/index.md"},o=l(`<h1 id="pinia" tabindex="-1">Pinia <a class="header-anchor" href="#pinia" aria-hidden="true">#</a></h1><h2 id="\u521D\u8BC6\u548C\u5B89\u88C5" tabindex="-1">\u521D\u8BC6\u548C\u5B89\u88C5 <a class="header-anchor" href="#\u521D\u8BC6\u548C\u5B89\u88C5" aria-hidden="true">#</a></h2><blockquote><ol><li>\u5B89\u88C5pinia\uFF1A<code>npm install pinia -S</code></li><li>\u5E94\u7528\u91CC\u4F7F\u7528Pinia</li><li>\u521B\u5EFA\u76F8\u5173\u7684Pinia\u5B58\u50A8\u6A21\u5757\uFF08store\uFF09\u3002</li><li>\u5728\u6307\u5B9A\u7EC4\u4EF6\u4F7F\u7528\u6307\u5B9A\u5B58\u50A8\u6A21\u5757</li></ol></blockquote><p><code>Vue3\u4E2D\u7684app.js</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createPinia</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pinia</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">createPinia</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span></code></pre></div><p><code>Vue2\u4E2D\u7684index.js</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createPinia</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PiniaVuePlugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pinia</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// Vue2\u7528\u6CD5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(PiniaVuePlugin)  </span><span style="color:#676E95;">// Vue2\u4F7F\u7528\u8BE5\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">createPinia</span><span style="color:#A6ACCD;">())  </span><span style="color:#676E95;">// Vue2\u4F7F\u7528Store</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5B58\u50A8\u6A21\u5757\u8981\u70B9\uFF1A</p><ol><li><p>\u5BFC\u5165\uFF1A<code>import {defineStore} from &quot;pinia&quot;;</code></p></li><li><p>\u7528<code>defineStore</code>\u521B\u5EFA\u5B58\u50A8\u5E76\u5BFC\u51FA</p><p>\u683C\u5F0F\u4E3A\uFF1A<code>defineStore(id,options)</code></p></li><li><p>\u5BFC\u51FA\u547D\u540D\u683C\u5F0F\u6700\u597D\u4E3A<code>use...store</code></p></li></ol></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">defineStore</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pinia</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> useSettingsStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineStore</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SettingsStore</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u4F7F\u7528Pinia\u5B58\u50A8\u6A21\u5757\u8981\u70B9\uFF1A</p><ol><li>\u5C06\u8981\u7528\u5230\u7684\u5B58\u50A8\u6A21\u5757\u5BFC\u5165\u8FDB\u53BB</li><li>\u7528\u5355\u4E2A\u53D8\u91CF\u6765\u63A5\u6536\u5B58\u50A8\u6A21\u5757</li><li>\u7528\u6765\u81EA<code>pinia</code>\u7684<code>storeToRefs()</code>\u51FD\u6570\u6765\u62C6\u5206\u5B58\u50A8\u6A21\u5757\u7684\u591A\u4E2A\u72B6\u6001\u53D8\u91CF\uFF0C\u5426\u5219\u65E0\u54CD\u5E94\u5F0F\u3002</li></ol></blockquote><p><code>cpn.vue</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useSettingsStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/store/SettingsStore.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">storeToRefs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pinia</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5BFC\u5165\u6765\u81EA\`pinia\`\u7684\`storeToRefs()\`\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> settingStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSettingsStore</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;">// \u5148\u63A5\u6536\u5B58\u50A8\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> themeColor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isDarkMode </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">storeToRefs</span><span style="color:#A6ACCD;">(settingStore) </span><span style="color:#676E95;">//\u518D\u5C06\u5176\u72B6\u6001\u89E3\u5305\u51FA\u6765</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span><span style="color:#676E95;">&lt;!--...--&gt;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-hidden="true">#</a></h2><blockquote><p><code>isRef(\u72B6\u6001\u5B58\u50A8\u7684state) === false</code></p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> useStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineStore</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">storeId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u63A8\u8350\u4F7F\u7528 \u5B8C\u6574\u7C7B\u578B\u63A8\u65AD\u7684\u7BAD\u5934\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      counter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Eduardo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      isDarkMode</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u4E5F\u53EF\u4EE5state: () =&gt; ({counter: 0, name: &#39;Eduardo&#39;, isDarkMode: true}),</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="patch" tabindex="-1">$patch <a class="header-anchor" href="#patch" aria-hidden="true">#</a></h3><blockquote><p>\u5728\u5B58\u50A8\u5B9E\u4F8B\u53D8\u91CF\u7684\u5C5E\u6027\uFF0C\u5141\u8BB8\u4F60\u7528\u4E00\u4E2A <code>state</code> \u7684\u8865\u4E01\u5BF9\u8C61\u5728\u540C\u4E00\u65F6\u95F4\u66F4\u6539\u591A\u4E2A\u5C5E\u6027\uFF1A</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> settingStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSettingsStore</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;">// \u65B9\u5F0F1\uFF1A\u5BF9\u8C61\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">settingStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$patch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u7528\u90E8\u5206\u5BF9\u8C61\u6765\u4FEE\u6539\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Colorado</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isDarkMode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u65B9\u5F0F2\uFF1A\u51FD\u6570\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">settingStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$patch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Colorado</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isDarkMode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isDarkMode</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="state\u4FEE\u6539" tabindex="-1">$state\u4FEE\u6539 <a class="header-anchor" href="#state\u4FEE\u6539" aria-hidden="true">#</a></h3><blockquote><p>\u4E0D\u5E38\u7528\uFF0C\u8981\u7528\u5B83\u4FEE\u6539\u5FC5\u987B\u8986\u76D6\u539F\u5148\u6574\u4E2Astate\u5BF9\u8C61\uFF0C\u8FD8\u662F\u53EF\u88AB<code>$patch()</code>\u4EE3\u66FF</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">settingStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$state</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">counter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Rick</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">isDarkMode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></blockquote><h2 id="getters" tabindex="-1">getters <a class="header-anchor" href="#getters" aria-hidden="true">#</a></h2><blockquote><ol><li>\u4E00\u822C\u683C\u5F0F\u662F\u4EE5state\u4F5C\u4E3A\u53C2\u6570\u7684\u7BAD\u5934\u51FD\u6570\uFF08\u76F4\u89C2\uFF09\uFF0C\u4EA6\u53EF\u91C7\u7528\u666E\u901A\u51FD\u6570\u683C\u5F0F</li><li>\u52A8\u6001getter\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u6765\u5B9E\u73B0\u4F20\u53C2</li><li>\u53EF\u4EE5\u901A\u8FC7this\u6765\u8BBF\u95EEstore\u5B9E\u4F8B\uFF0C\u4EE5\u6B64\u6765\u4F7F\u7528\u5176\u4ED6\u7684getters\uFF08\u9700\u8981\u6807\u6CE8\u7C7B\u578B\uFF09</li></ol></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> useStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineStore</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">storeId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      counter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">basicMsg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Count is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">msg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Count is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">double</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">msg</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="actions" tabindex="-1">actions <a class="header-anchor" href="#actions" aria-hidden="true">#</a></h2><blockquote><p>\u5B83\u53EF\u4EE5\u76F4\u63A5\u6539\u53D8\u72B6\u6001\uFF0C\u4E5F\u53EF\u4EE5\u4E00\u6B21\u6027\u63D0\u4EA4\u591A\u6B21\u6216\u591A\u4E2Amutations\uFF0C==\u9002\u5408\u4F53\u73B0\u9875\u9762\u903B\u8F91==</p><p>\u53EF\u4EE5\u5904\u7406\u5F02\u6B65\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u53EF\u4EE5\u5305\u542B\u4EFB\u4F55\u5F02\u6B65\u64CD\u4F5C\u3002\u64CD\u4F5C\u5982\u4E0B\uFF1A</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> useStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineStore</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">storeId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      counter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">incrementBy2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">+=</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">action1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">token</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SchoolList</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">token</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,26),e=[o];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};