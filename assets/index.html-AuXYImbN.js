import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c,a as e,d as s,b as n,e as t}from"./app-I7aTs5Ax.js";const r={},p=e("blockquote",null,[e("p",null,"开源工具、效率方法、心理学探索的自我提升笔记")],-1),d={href:"https://discord.gg/PZTQfJ4GjX",target:"_blank",rel:"noopener noreferrer"},u=e("img",{src:"https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge",alt:"",tabindex:"0",loading:"lazy"},null,-1),h=e("figcaption",null,null,-1),g=t('<h2 id="✨-初衷" tabindex="-1"><a class="header-anchor" href="#✨-初衷" aria-hidden="true">#</a> ✨ 初衷</h2><p>曾经，我采用了 Notion、Obsidian 和 飞书 等多款知识管理工具来存储我的心得与笔记。然而，这种方式导致我的资料分散，难以管理和分享。</p><p>更重要的是，<strong>笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。</strong></p><p>为此，我基于 VuePress 和 vuepress-theme-hope 构建了 LearnData 开源笔记，将我所有的笔记与文章聚合到同一页面形成知识库，便于集中管理和分享。</p><figure><img src="https://img.newzone.top/2022-08-22-19-28-25.png?imageMogr2/thumbnail/600x" alt="" tabindex="0" loading="lazy"><figcaption>笔记 + 文章 = LearnData 知识库</figcaption></figure><figure><img src="https://img.newzone.top/2022-08-24-19-14-59.png" alt="" tabindex="0" loading="lazy"><figcaption>笔记/博客自动化发布</figcaption></figure><h2 id="🧱-笔记结构" tabindex="-1"><a class="header-anchor" href="#🧱-笔记结构" aria-hidden="true">#</a> 🧱 笔记结构</h2><ul><li>置顶：日常习惯、健身、阅读；</li><li>软件应用：常用应用、Chrome 扩展和相关教程；</li><li>Docker 服务：NAS 和服务器上的后端应用，主要以 Docker 方式部署；</li><li>系统问题：Windows 系统优化和相关问题；</li><li>代码编程：常用代码的学习和使用笔记，页面开发攻略和网站相关的工具和知识收集；</li><li>生活角落：说明书、生活记录和小技巧；</li><li>博客汇总：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。</li></ul><h2 id="🍥-搭建-learndata" tabindex="-1"><a class="header-anchor" href="#🍥-搭建-learndata" aria-hidden="true">#</a> 🍥 搭建 LearnData</h2>',9),m={href:"https://github.com/rockbenben/LearnData",target:"_blank",rel:"noopener noreferrer"},b=e("figure",null,[e("img",{src:"https://img.newzone.top/2022-08-10-19-32-05.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),k=e("figure",null,[e("img",{src:"https://img.newzone.top/2022-08-10-19-34-13.png?imageMogr2/thumbnail/500x",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),_=t(`<li><p>接着，进入项目仓库的「Settings」&gt;「Actions」&gt;「General」，选中底部 Workflow permissions 中的 <code>Read and write permissions</code>，然后点击保存即可。如果未授权，GitHub Page 部署会由于 repo 权限不足而报错 <code>failed with exit code 128</code>。</p><figure><img src="https://img.newzone.top/2023-03-14-04-02-16.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>接下来，请进入菜单栏顶部的「Actions」&gt;「最新的 workflow」，并点击右上方的「Re-run jobs」&gt;「Re-run all jobs」，以重新生成网页。若部署正确，GitHub 将自动搭建 gh-page 分支页面。</p><figure><img src="https://img.newzone.top/2023-03-14-04-04-52.gif?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>需要注意的是：如果你不需要将网页部署同步到个人服务器，<strong>请删除 <code>.github/workflows/main.yml</code> 中 Sync files 区块的代码</strong>，否则会出现报错 <code>Error: Input required and not supplied: server</code>。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>   <span class="token comment">### 没有服务器的话，请删除本区块代码，防止报错 ###</span>
   <span class="token comment"># 将页面推送到服务器，timeout 时间从默认的 1 分钟调整到 10 分钟。</span>
   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 📂 Sync files
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> SamKirkland/FTP<span class="token punctuation">-</span>Deploy<span class="token punctuation">-</span>Action@v4.3.4
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
         <span class="token key atrule">local-dir</span><span class="token punctuation">:</span> docs/.vuepress/dist/
         <span class="token key atrule">server</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ftp_host <span class="token punctuation">}</span><span class="token punctuation">}</span>
         <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ftp_username <span class="token punctuation">}</span><span class="token punctuation">}</span>
         <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ftp_password <span class="token punctuation">}</span><span class="token punctuation">}</span>
         <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ftp_port <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 建议更改默认的 21 端口</span>
         <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">600000</span>
   <span class="token comment">### 没有服务器的话，请删除本区块代码，防止报错 ###</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>然后点击「Settings」, 修改 <code>Repository name</code> 为 <code>用户名.github.io</code>。假设你的仓库链接是 <code>https://github.com/xxx/LearnData</code>，那么中间的 <code>xxx</code> 就是你的用户名。如果该仓库名称已被使用，GitHub Pages 将无法正常显示样式，请查看页面底部的常见问题来设置子域名。</p><figure><img src="https://img.newzone.top/20180505202201.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>在同一页面选择「Settings」&gt;「Pages」&gt;「Build and deployment」&gt;「Branch」, 将 gh-page branch 设为 GitHub Pages 的来源，网站运行目录默认为 <code>/(root)</code>。设置完成后，点击「Save」。如果找不到 gh-pages 分支，可以按照上面提到的第三步进行操作，或在 GitHub 中修改任意文件以手动触发 GitHub Action，等待其执行完成后，再重新设置 Pages 的来源。</p><figure><img src="https://img.newzone.top/2022-08-10-19-39-15.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>设置成功后，页面会提示访问链接：<code>https://xxx.github.io/</code>。此时，你的知识库就已经搭建完成了。</p><p>如果未出现访问链接提示或不能打开 GitHub Pages，则删除 <code>docs/_posts</code> 路径下的博客文章。这是因为 GitHub Pages 有时会对旧文章里的代码报错。</p></li>`,5),v=e("p",null,[n("注意：如果出现报错 "),e("code",null,"Error: Input required and not supplied: server"),n("，请删除 "),e("code",null,".github/workflows/main.yml"),n(" 中 Sync files 区块的代码，以避免出现报错。")],-1),f=e("h2",{id:"🔣-配置-learndata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🔣-配置-learndata","aria-hidden":"true"},"#"),n(" 🔣 配置 LearnData")],-1),y=e("h3",{id:"文档结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文档结构","aria-hidden":"true"},"#"),n(" 文档结构")],-1),w=e("code",null,"docs",-1),x={href:"https://github.com/rockbenben/LearnData/blob/main/samplepage.md?plain=1",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"order",-1),D=t(`<p>docs 目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>docs
<span class="token operator">|</span>── .vuepress               <span class="token comment"># 网站配置</span>
│   ├── config.ts           <span class="token comment"># 网站环境依赖和网站属性</span>
│   ├── sidebar.ts          <span class="token comment"># 侧边栏</span>
│   ├── navbar.ts           <span class="token comment"># 导航栏</span>
│   ├── theme.ts            <span class="token comment"># 主题和插件</span>
│   └── templateBuild.html  <span class="token comment"># 网页模板，网站关键词和统计</span>
<span class="token operator">|</span>── _posts                  <span class="token comment"># 博客文章目录</span>
├── _temp                   <span class="token comment"># 草稿箱</span>
├── reading                 <span class="token comment"># 读书笔记</span>
├── anyname                 <span class="token comment"># 自定义笔记</span>
├── blog.md                 <span class="token comment"># 博客页面</span>
└── intro.md                <span class="token comment"># 博主个人介绍</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),L=e("code",null,"docs/.vuepress",-1),z={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"docs/.vuepress/sidebar.ts",-1),G=e("code",null,"docs/.vuepress/theme.ts",-1),S={href:"https://newzone.top/web/Comments.html",target:"_blank",rel:"noopener noreferrer"},V=t('<p>注意：</p><ul><li>LearnData 默认使用了 algolia 全文搜索。如果你没有使用 algolia 爬虫，则可以在 <code>docs/.vuepress/config.ts</code> 文件中删除 plugins 下的 docsearchPlugin 区块，网站将转用本地全文索引搜索。</li><li><code>docs/_temp</code> 文件夹默认不同步到 GitHub 上。你可以手动在本地建立 <code>_temp</code> 文件夹，用来存放草稿。</li><li>自 VuePress2 的 beta.54 版本开始，文件夹名前缀为 <code>_</code> 在生成链接时将被省略，例如文章路径为 <code>/_posts/</code>，但网页链接路径会是 <code>/posts/</code>。</li></ul><h3 id="看板娘" tabindex="-1"><a class="header-anchor" href="#看板娘" aria-hidden="true">#</a> 看板娘</h3>',3),A={href:"https://github.com/stevenjoezhang/live2d-widget",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"docs\\.vuepress\\public",-1),q=t("<p>如果网站部署在子页面 <code>https://xxx.github.io/yyy</code>，则需将子页面路径 yyy 加入到以下两个文件：</p><ul><li>将 <code>docs\\.vuepress\\public\\live2d-widget\\autoload.js</code> 文件第三行的 <code>const live2d_path = &quot;/live2d-widget/&quot;</code> 修改为 <code>const live2d_path = &quot;/yyy/live2d-widget/&quot;</code>。</li><li>将 <code>docs\\.vuepress\\templateBuild.html</code> 文件中看板娘区块代码 <code>&lt;script src=&quot;/live2d-widget/autoload.js&quot;&gt;</code> 修改为 <code>&lt;script src=&quot;/yyy/live2d-widget/autoload.js&quot;&gt;</code>。</li></ul>",2),F=e("code",null,"docs\\.vuepress\\public\\live2d-widget",-1),T={href:"https://github.com/fghrsh/live2d_api",target:"_blank",rel:"noopener noreferrer"},R=t(`<h3 id="读书笔记" tabindex="-1"><a class="header-anchor" href="#读书笔记" aria-hidden="true">#</a> 读书笔记</h3><p>读书笔记中可能会有大量的原文引用，这与 LearnData 精简化知识点的初衷并不相符。因此，我们使用 docsify 来构建读书笔记，并将其放置于 <code>docs/reading</code> 目录下。在生成静态页面后，该路径下的文件不会被转换为 HTML 文件，而是将被自动复制到静态网站下，完成 docsify 页面构建和独立的读书笔记搜索索引。</p><p>由于读书笔记架构更换到 docsify，不能使用相对链接。请调整 <code>docs\\.vuepress\\sidebar.ts</code> 的 <code>{ text: &quot;读书笔记&quot;, icon: &quot;read&quot;, link: &quot;https://newzone.top/reading/&quot; }</code>，将 <code>newzone.top</code> 替换为你的博客域名。</p><p>如果你没有部署 Waline，或不需统计阅读量和评论功能，可移除 <code>docs\\reading\\index.html</code> 中的 Waline 代码块。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">waline</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&quot;https://waline.newzone.top&quot;</span><span class="token punctuation">,</span>
   <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地图片引用" tabindex="-1"><a class="header-anchor" href="#本地图片引用" aria-hidden="true">#</a> 本地图片引用</h3><p>为了避免在生成静态页面时出现 <code>Rollup failed to resolve import</code> 错误，本地图片必须保存在 <code>docs/.vuepress/public</code> 路径下。如果图片名称为 <code>1.png</code>，保存在 <code>docs/.vuepress/public/imgs</code> 路径下，则可以使用以下链接来引用该图片：<code>/imgs/1.png</code> 或使用 Markdown 图片链接：<code>![](/imgs/1.png)</code>。本方法也适用于将附件部署到网站上。</p><h2 id="🖥️-网站部署" tabindex="-1"><a class="header-anchor" href="#🖥️-网站部署" aria-hidden="true">#</a> 🖥️ 网站部署</h2><p>在将 LearnData 推送到 GitHub 后，会自动生成可访问的网页。但由于国内访问 GitHub Pages 的速度不稳定，为了确保网站能够正常访问，建议增加国内的访问节点。</p><p>很多人选择使用 Gitee Pages 作为国内节点，通过 GitHub Actions 将新文档同步到 Gitee 上，从而生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 有很多限制，例如必须实名认证、免费版无法自定义域名，近期也发生过下架风波。因此，我没有选择 Gitee，而是将文档同步到国内服务器（域名需要备案）或 Vercel（国外服务可能会出现断网）。</p><h3 id="同步到服务器" tabindex="-1"><a class="header-anchor" href="#同步到服务器" aria-hidden="true">#</a> 同步到服务器</h3><p>如果你的项目已经搭建好，但出现了红色的叉叉提示，这可能是 GitHub Actions 同步到服务器时发生了错误。你需要进入项目仓库的「Setting」&gt;「Secrets」&gt;「Action」，并添加 <code>FTP_HOST</code>、<code>FTP_PORT</code>、<code>FTP_USERNAME</code> 和 <code>FTP_PASSWORD</code> 的密钥。之后，每当文件发生变化时，GitHub Actions 就会将修改推送到服务器的 FTP 上。</p>`,12),N=e("code",null,".github/workflows/main.yml",-1),O={href:"https://newzone.top/deploy/Static.html#%E5%90%8C%E6%AD%A5%E5%88%B0-oss",target:"_blank",rel:"noopener noreferrer"},M=e("h3",{id:"部署到-vercel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署到-vercel","aria-hidden":"true"},"#"),n(" 部署到 Vercel")],-1),j=e("p",null,"Vercel 的速度比 GitHub Pages 稳定一些，不过「*.vercel.app」域名已经被 DNS 污染。建议国内用户绑定自定义域名以获得更好的使用体验。",-1),B=e("p",null,"Vercel 部署步骤如下：",-1),C={href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2FLearnData%2Ftree%2Fgh-pages",target:"_blank",rel:"noopener noreferrer"},W=e("img",{src:"https://vercel.com/button",alt:"Vercel",loading:"lazy"},null,-1),I=e("code",null,"https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages",-1),U=e("code",null,"rockbenben/LearnData",-1),$=e("code",null,"你的用户名/仓库名",-1),K=t('<li><p>输入一个你喜欢的 Vercel 项目名称，默认 private 即可，然后点击 <code>Create</code>。</p><figure><img src="https://img.newzone.top/2022-08-24-17-24-16.png" alt="" tabindex="0" loading="lazy"><figcaption>创建 Vercel 项目</figcaption></figure></li><li><p>接着，Vercel 会基于 LearnData 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。几十秒后，满屏的烟花会庆祝你部署成功。此时，点击 <code>Go to Dashboard</code> 跳转到应用的控制台。</p><figure><img src="https://img.newzone.top/2022-08-24-17-21-58.png" alt="" tabindex="0" loading="lazy"><figcaption>Vercel 部署成功提示</figcaption></figure></li>',2),Z=e("p",null,[n("为了让 Vercel 页面与 GitHub Pages 自动保持同步更新，你需要配置 "),e("code",null,"PERSONAL_TOKEN"),n(" 和 GitHub Actions。")],-1),J={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},Q=e("li",null,"在项目仓库中选择「setting」>「Secrets」>「Action」，新建密钥 PERSONAL_TOKEN，并填入刚复制的 token 值。",-1),X=e("li",null,[n("将下方代码编辑到 "),e("code",null,".github/workflows/main.yml"),n(" 文件末尾，注意修改 "),e("code",null,"dst_owner"),n(" 和 "),e("code",null,"dst_repo_name"),n("。")],-1),Y=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 将页面更新到 Vercel</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy file to Vercel
  <span class="token key atrule">if</span><span class="token punctuation">:</span> always()
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> andstor/copycat<span class="token punctuation">-</span>action@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">personal_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PERSONAL_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">src_path</span><span class="token punctuation">:</span> /.
    <span class="token key atrule">dst_path</span><span class="token punctuation">:</span> /
    <span class="token comment"># 你的用户名</span>
    <span class="token key atrule">dst_owner</span><span class="token punctuation">:</span> rockbenben
    <span class="token comment"># 与 Vercel 链接的仓库名，也就是 Vercel 部署时新建的仓库</span>
    <span class="token key atrule">dst_repo_name</span><span class="token punctuation">:</span> LearnData<span class="token punctuation">-</span>Vercel
    <span class="token key atrule">dst_branch</span><span class="token punctuation">:</span> main
    <span class="token key atrule">src_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
    <span class="token key atrule">clean</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ee=t('<h2 id="🤔-常见问题" tabindex="-1"><a class="header-anchor" href="#🤔-常见问题" aria-hidden="true">#</a> 🤔 常见问题</h2><h3 id="网页显示异常" tabindex="-1"><a class="header-anchor" href="#网页显示异常" aria-hidden="true">#</a> 网页显示异常</h3><p>如果你的网站只显示文字而不能正常显示网页，可能是因为网站路径不正确导致的页面样式错误。比如，GitHub Page 提示访问链接 <code>https://xxx.github.io/yyy</code>，则需要将 <code>docs/.vuepress/config.ts</code> 中的 base 改为 <code>/yyy</code>，其默认值为 <code>/</code>。请按照此路径将网站的 base 设置正确，以确保你的网站能够正常显示。</p><figure><img src="https://img.newzone.top/2023-03-14-06-11-10.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="同步服务器报错" tabindex="-1"><a class="header-anchor" href="#同步服务器报错" aria-hidden="true">#</a> 同步服务器报错</h3><ul><li><p><code>Error: Input required and not supplied: server</code> 表示服务器配置错误，请按照上方的网站部署步骤检查配置。如果你不需要将<strong>文件同步到服务器</strong>，则请删除 <code>.github/workflows/main.yml</code> 中 Sync files 区块的代码，以避免出现报错。</p></li><li><p><code>FTPError: 530 Login authentication failed</code> 指 FTP 密码错误或账号不存在，可使用 FileZilla 来测试 FTP 的有效性。</p></li><li><p><code>Error: Timeout (control socket)</code> 指同步服务器出现超时报错。如果出现该错误，可以进入 Actions 页面，点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭服务器防火墙，检查 GitHub 服务器 IP 是否屏蔽了。</p></li></ul><h3 id="err-module" tabindex="-1"><a class="header-anchor" href="#err-module" aria-hidden="true">#</a> ERR_MODULE</h3><p>如果出现 <code>Error [ERR_MODULE_NOT_FOUND]: Cannot find module</code> 的报错，可能是第三方插件或 pacakge.json 环境依赖未正确配置。此报错出现的几率极低，如果遇到，可以使用最新版本的 <code>package.json</code> 和 <code>pnpm-lock.yaml</code> 来覆盖本地设置，或者删除主目录下的 <code>.npmrc</code> 文件。</p><h3 id="静态文件名字总变" tabindex="-1"><a class="header-anchor" href="#静态文件名字总变" aria-hidden="true">#</a> 静态文件名字总变</h3>',9),ne={href:"https://github.com/rockbenben/LearnData/tree/nohashname",target:"_blank",rel:"noopener noreferrer"},ae=e("h3",{id:"本地运行-learndata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本地运行-learndata","aria-hidden":"true"},"#"),n(" 本地运行 LearnData")],-1),se={href:"https://newzone.top/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},te=e("li",null,[n("将 LearnData 项目下载到本地后，在项目目录下打开终端，输入命令 "),e("code",null,"pnpm i"),n(" 安装依赖。")],-1),oe=e("li",null,[n("在终端中输入命令 "),e("code",null,"pnpm docs:dev"),n("，若成功则会提示访问链接，默认为 "),e("code",null,"http://localhost:8080/"),n("。")],-1),ie=e("p",null,[n("本地服务运行后，修改文件时页面会同步更新预览。若需停止本地服务器，可在终端中按下 "),e("code",null,"Ctrl + C"),n("。")],-1);function le(ce,re){const a=i("ExternalLinkIcon");return l(),c("div",null,[p,e("figure",null,[e("a",d,[u,s(a)]),h]),g,e("ol",null,[e("li",null,[e("p",null,[n("首先，进入 "),e("a",m,[n("LearnData"),s(a)]),n(" 项目页，点击右上角「Use this template」后选择「Create a new repository」。")]),b,k]),_]),v,f,y,e("p",null,[n("LearnData 网站的配置和文本都存放在 "),w,n(" 文件夹中。文章和页面的配置可参考主目录下的 "),e("a",x,[n("samplepage.md"),s(a)]),n("。其中，"),P,n(" 参数表示侧边栏的顺序，数字越小越靠前，支持非整数和负数。我个人的偏好是将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。这种设置使我能随时记录低于 1000 字的短文，同时不会影响那些寻求干货文章的用户体验，因为干货文章的排序始终保持在最上方。")]),D,e("p",null,[L,n(" 路径下是网站的配置文件，我已添加了详细的注释。你可以参考注释和 "),e("a",z,[n("vuepress-theme-hope 配置案例"),s(a)]),n("来调整配置。请在 "),E,n(" 文件中修改文件夹路径，后台会自动抓取路径下的 md 文件来生成侧边栏。"),G,n(" 有"),e("a",S,[n("评论插件"),s(a)]),n("的相关配置。")]),V,e("p",null,[n("LearnData 集成了看板娘 "),e("a",A,[n("Live2D Widget"),s(a)]),n("，支持随机对话、切换人物服饰和玩打飞机游戏，能提升网站美观度和趣味性。如果不需要看板娘，可以删除 "),H,n(" 下的 live2d-widget 文件夹。")]),q,e("p",null,[n("如果你想要修改看板娘模型，请参考 "),F,n(" 路径下的 README 和修改说明。如果你想在服务器上自建 "),e("a",T,[n("live2d api"),s(a)]),n("，请注意添加跨域配置，否则可能会出现只显示文字而不显示看板娘图片的情况。")]),R,e("p",null,[n("如果你不需要将文档同步到服务器的 FTP 上，则请删除 "),N,n(" 中 Sync files 区块的代码，以避免出现报错。或者根据 "),e("a",O,[n("GitHub 同步到 OSS"),s(a)]),n(" 步骤将网页部署到云存储上。")]),M,j,B,e("ol",null,[e("li",null,[e("p",null,[n("点击 "),e("a",C,[W,s(a)]),n(" 或将 "),I,n(" 中的 "),U,n(" 改为 "),$,n("，然后会跳转至 Vercel 进行网页部署。如果你未登录，Vercel 提示你注册或登录，请使用 GitHub 账户进行快捷登录。")])]),K,e("li",null,[Z,e("ul",null,[e("li",null,[n("新建 "),e("a",J,[n("Personal access tokens"),s(a)]),n("，勾选权限「repo (Full control of private repositories)」，生成后复制 token 值。")]),Q,X]),Y])]),ee,e("p",null,[n("VuePress 默认使用 Vite。在打包时，会为文件引入时间戳和 hash，并对其进行重命名。这会导致即使没有更新文章，大部分生成的静态文件也会发生更改。如果你希望减少重命名频次，可以使用「"),e("a",ne,[n("nohashname"),s(a)]),n("」分支。该分支使用的打包工具是 Webpack，并使用 chainWebpack 设置文件命名规则，避免不必要的文件重命名。（注意：nohashname 非主分支，不作功能更新。）")]),ae,e("ol",null,[e("li",null,[n("为了本地运行，你需要安装 npm 和 pnpm 环境，可参考"),e("a",se,[n("环境部署教程"),s(a)]),n("。")]),te,oe]),ie])}const ue=o(r,[["render",le],["__file","index.html.vue"]]);export{ue as default};
