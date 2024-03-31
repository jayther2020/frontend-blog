import{_ as s,c as a,o as n,a as l}from"./app.d7bf4c8e.js";const A=JSON.parse('{"title":"JavaScript\u5904\u7406\u6587\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"URL.createObjectURL(file)","slug":"url-createobjecturl-file","link":"#url-createobjecturl-file","children":[]},{"level":2,"title":"FileReader","slug":"filereader","link":"#filereader","children":[]}],"relativePath":"pages/front-end-stack1/basic/js5/index.md"}'),e={name:"pages/front-end-stack1/basic/js5/index.md"},o=l(`<h1 id="javascript\u5904\u7406\u6587\u4EF6" tabindex="-1">JavaScript\u5904\u7406\u6587\u4EF6 <a class="header-anchor" href="#javascript\u5904\u7406\u6587\u4EF6" aria-hidden="true">#</a></h1><h2 id="url-createobjecturl-file" tabindex="-1"><code>URL.createObjectURL(file)</code> <a class="header-anchor" href="#url-createobjecturl-file" aria-hidden="true">#</a></h2><blockquote><p>\u5C06\u6587\u4EF6\u57DF\u8F6C URL\uFF0C\u53EF\u7528\u4E8E\u672C\u5730\u9884\u89C8</p></blockquote><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#flie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onchange</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">URL</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createObjectURL</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="filereader" tabindex="-1">FileReader <a class="header-anchor" href="#filereader" aria-hidden="true">#</a></h2>`,5),p=[o];function t(c,r,F,i,D,y){return n(),a("div",null,p)}const C=s(e,[["render",t]]);export{A as __pageData,C as default};