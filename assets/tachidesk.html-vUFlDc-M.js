import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as i,a as s,b as n,d as e,e as l}from"./app-I7aTs5Ax.js";const p={},u={href:"https://github.com/Suwayomi/docker-tachidesk",target:"_blank",rel:"noopener noreferrer"},r=s("p",null,"开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extensions，点右上角的 Enabled Languages 按钮，设置为中文源，然后会在页面底部发现中文漫画源。安装源后，进入 Souces 中点击进入对应源。",-1),d={href:"https://github.com/tachiyomiorg/tachiyomi",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/Haleydu/Cimoc",target:"_blank",rel:"noopener noreferrer"},m=l(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.7&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">tachidesk-docker</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/suwayomi/tachidesk<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> tachidesk<span class="token punctuation">-</span>docker
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai <span class="token comment"># Use TZ database name from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones</span>
      <span class="token punctuation">-</span> DEBUG=false
      <span class="token punctuation">-</span> BIND_IP=0.0.0.0
      <span class="token punctuation">-</span> BIND_PORT=4567
      <span class="token punctuation">-</span> SOCKS_PROXY_ENABLED=false
      <span class="token punctuation">-</span> DOWNLOAD_AS_CBZ=true
      <span class="token comment">#- MAX_PARALLEL_UPDATE=3</span>
      <span class="token comment">#- BASIC_AUTH_ENABLED=true</span>
      <span class="token comment">#- BASIC_AUTH_USERNAME=manga</span>
      <span class="token comment">#- BASIC_AUTH_PASSWORD=hello123</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/tachidesk<span class="token punctuation">:</span>/home/suwayomi/.local/share/Tachidesk
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;4567:4567&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> on<span class="token punctuation">-</span>failure<span class="token punctuation">:</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以将本地的漫画资源导入到路径 <code>/volume1/docker/tachidesk/local</code>。请注意，导入的漫画需要按文件夹分类，并确保图片按文件名排序。</p><p>点击左侧的 <code>Extensions</code> 按钮，点右上角的 <code>Enabled Languages</code> 选项，将其设置为中文源，然后会在页面底部发现中文漫画源。安装好漫画源扩展后，点击左侧的 <code>Sources</code> 按钮，然后选择不同来源的 <code>BROWSE</code>，即可浏览对应源的在线漫画。在线漫画会下载到 <code>/volume1/docker/tachidesk/downloads</code> 目录。安装各类在线漫画源扩展，以便进行在线搜索、阅读和下载漫画。</p>`,3);function v(_,h){const a=o("ExternalLinkIcon");return c(),i("div",null,[s("p",null,[s("a",u,[n("Tachidesk"),e(a)]),n(" 是一个免费的开源漫画阅读器，支持在各种客户端上部署，可以方便地订阅并聚合漫画源。为了实现统一的漫画阅读体验和浏览管理，建议将 Tachidesk-Server 部署在 NAS 上，并通过网页端访问以进行漫画阅读，以获得类似应用的操作习惯。")]),r,s("p",null,[n("如果你仅使用 Android 设备，可以选择使用开源漫画阅读器 "),s("a",d,[n("Tachiyomi"),e(a)]),n("。如果你需要访问一些老旧漫画作品，还可以考虑使用 "),s("a",k,[n("Cimoc"),e(a)]),n("。")]),m])}const f=t(p,[["render",v],["__file","tachidesk.html.vue"]]);export{f as default};
