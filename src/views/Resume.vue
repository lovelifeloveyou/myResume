<template>
	<div class="container" id="app" v-cloak>
		<header>
			<div class="title">
				<h1>{{name}}</h1>
				<h2>{{target}}</h2>
			</div>
			<img class="avatar" :src="avatar">
			<ul class="message">
				<li v-for="(item, index) in messages" class="iconfont-title" :class="item.icon" :key="index">
					<a :href="item.href" target="_blank">{{item.title}}</a>
				</li>
			</ul>
		</header>
		<div class="content" style="text-align: left;">
				<div class="column-6">
						<div class="section">
                <div class="sec-title-wrapper">
                  <div class="iconfont-big icon-study">
                  </div>
                  <div class="sec-title">
                    <h3>
                      <div class="sec-zh">教育经历</div>
                      <div class="sec-en">Education</div>
                    </h3>
                  </div>
                </div>
								<template v-for="(edu, index) in education">
										<div class="sec-content" :key="index">
												<div class="timeline-item">
														<div class="timeline-title icon-tag iconfont-middle">
																<span v-html="edu.school"></span>
																<span class="time" v-html="edu.time"></span>
														</div>
														<ul style="display:inline-block">
																<li class="iconfont icon-xueweimao" v-html="edu.profession"></li>
														</ul>
												</div>
										</div>
								</template>
						</div>
						<div class="section">
                <div class="sec-title-wrapper">
                  <div class="iconfont-big icon-gongzuo">
                  </div>
                  <div class="sec-title">
                    <h3>
                      <div class="sec-zh">工作与项目经验</div>
                      <div class="sec-en">Experience</div>
                    </h3>
                  </div>
                </div>
								<div class="sec-content" v-for="(item, index) in project1" :key="index">
										<div class="timeline-item">
												<div class="timeline-title iconfont-middle icon-gongju">
														<span v-html="item.name"></span>
														<span class="time" v-html="item.time"></span>
												</div>
												<div class="position" v-html="item.position"></div>
												<ul v-for="(value, i) in item.desc" :key="i">
														<li class="iconfont icon-wujiaoxing" v-html="value"></li>
												</ul>
										</div>
								</div>
						</div>
				</div>
				<div class="column-6 column">
						<div class="section">
								<div class="sec-content" v-for="(item, index) in project2" :key="index">
										<div class="timeline-item">
												<div class="timeline-title iconfont-middle icon-gongju">
														<span v-html="item.name"></span>
														<span class="time" v-html="item.time"></span>
												</div>
												<div class="position" v-html="item.position"></div>
												<ul v-for="(value, i) in item.desc" :key="i">
														<li class="iconfont icon-wujiaoxing" v-html="value"></li>
												</ul>
										</div>
                    <div v-if="index === 1"><br /></div>
								</div>
                <div class="sec-title-wrapper">
                  <div class="iconfont-big icon-gongju">
                  </div>
                  <div class="sec-title">
                    <h3>
                      <div class="sec-zh">个人项目</div>
                      <div class="sec-en">Personal Project</div>
                    </h3>
                  </div>
                </div>
								<div class="sec-content" v-for="(item, index) in personProjects" :key="index">
										<div class="time-line">
												<div class="timeline-title iconfont-middle" :class="item.icon" v-html="item.direction"></div>
												<template v-for="(skillName, index) in item.list">
														<div v-if="skillName.name" class="skill-name" :key="index">
                              <span style="color: #000;">项目预览：</span>
                              <span style="cursor: pointer;"  @click="view">{{skillName.name}}</span>
                            </div>
														<ul v-for="(value, i) in skillName.desc" :key="i">
																<li class="iconfont icon-wujiaoxing" v-html="value"></li>
														</ul>
												</template>
										</div>
                    <div v-if="index === 1"><br /></div>
								</div>
						</div>

						<div class="section">
                <div class="sec-title-wrapper">
                  <div class="iconfont-big icon-tool">
                  </div>
                  <div class="sec-title">
                    <h3>
                      <div class="sec-zh">技能</div>
                      <div class="sec-en">Skills</div>
                    </h3>
                  </div>
                </div>
								<div class="sec-content" v-for="(item, index) in skill" :key="index">
										<div class="time-line">
												<div class="timeline-title iconfont-middle" :class="item.icon" v-html="item.direction"></div>
												<template v-for="(skillName, index) in item.list">
														<div class="skill-name" v-html="skillName.name" :key="index"></div>
														<ul v-for="(value, i) in skillName.desc" :key="i">
																<li class="iconfont icon-wujiaoxing" v-html="value"></li>
														</ul>
												</template>
										</div>
								</div>
						</div>
				</div>
		</div>
	</div>
</template>

<script lang="tsx">
	import { Component, Vue } from 'vue-property-decorator'
  import { messageType } from '@/types/type'
	@Component({})
	export default class Resume extends Vue {
    private name: string = '邱建强'
    private target: string = '应聘前端开发'
    private avatar: string = 'https://cdn.jsdelivr.net/gh/lovelifeloveyou/somePic/blog/微信图片_20200515093543.jpg'

    private messages: messageType[] = [
      { icon: 'icon-telephone', href: 'tel:', title: '18879879920' },
      { icon: 'icon-weixin', href: 'weixin:', title: 'qjqdedream77' },
      { icon: 'icon-youxiang1', href: 'mailto:lovelifeloveyou7@gmail.com', title: 'lovelifeloveyou7@gmail.com' },
      { icon: 'icon-wifi', href: 'https://lovelifeloveyou.github.io/superqjq-blog/', title: 'superqjq的博客' },
      { icon: 'icon-GitHub', href: 'https://github.com/lovelifeloveyou', title: 'lovelifeloveyou' }
    ];

    private education: Array<{ school: string, time: string, profession: string }> = Array(
      { school: '景德镇陶瓷大学', time: '2015.09-2019.06', profession: '计算机科学与技术' }
    )

    private project1: Array<{ name: string, time: string, desc: string[] }> = Array(
      { name: '工作经历', time: '2018.06 - 至今', position: 'Web前端工程师', desc: Array(
        '杭州才云科技有限公司    2018.06 - 2019.02',
        '上海益政网络科技发展有限公司    2019.03 - 2020.05',
        '上海达龙信息科技有限公司    2020.05-至今') 
      },
      { name: '国家电网Compass平台', time: '2018.06 - 2019.02', desc: Array(
        '项目描述：基于React/Redux开发后台多页面系统，主要负责登陆注册、报表、多语言等功能模块',
        '项目贡献：完成事项管理的所有关联，自动表单配置的重构，及其他基本功能的开发：编写基础组件封装到公司自研UI组件库、私有化部署npm包,js-xlsx+handsontable+ecahrts实现excel上传编辑然后显示成图表') 
      },
      { name: '澳门智慧政务——受理系统', time: '2019.03 - 2020.05', desc: Array(
        '项目描述：基于Vue/Vuex+Element开发一窗系统，主要负责结果物领取、挂单、调单、材料签入签出、收费等功能模块',
        '项目痛点：自动表单渲染后的校验问题',
        '项目贡献：功能模块的独立开发，及完善searchTable组件的功能和基本功能的开发') 
      },
      { name: '澳门智慧政务——运维平台', time: '2019.03 - 2020.05', desc: Array(
        '项目描述：基于，Vue/Vuex+Element开发后台系统，主要负责事项管理、自动表单配置、消息模板等功能模块',
        '项目痛点：自动表单配置所有的属性配置写在一个文件中，不具有可读性',
        '项目贡献：完成事项管理的所有关联，自动表单配置的重构，及其他基本功能的开发') 
      },
      { name: '澳门公共服务一户通', time: '2019.03 - 2020.05', desc: Array(
        '项目描述：基于Vue/Vuex+Element开发一网系统，主要负责事项受理流程、材料问答等功能模块',
        '项目贡献: 基本功能的独立开发，事项模糊搜索显示结果时先渲染骨架屏及关键字的突出') 
      },
      { name: '统计分析系统', time: '2020.05 - 至今', desc: Array(
        '项目描述：基于Vue+Echarts开发的统计分析系统，主要负责业务统计部分的所有功能',
        '项目贡献：编写可复用组件应用到项目中的图表显示中，数据使用excel导出') 
      }
    )

    private project2: Array<{ name: string, time: string, desc: string[] }> = Array(
      { name: '云电脑商城端', time: '2020.05 - 至今', desc: Array(
        '项目地址：https://www.dalongyun.com/',
        '项目描述：云电脑产品的商城端页面',
        '项目贡献：基础功能的独立开发,常用组件的封装，使用多坏境多入口打包，将pc端和移动端代码写在同一个项目中') 
      },
      { name: '云电脑流桌面', time: '2020.05 - 至今', desc: Array(
        '项目地址: http://g.dalongyun.com/games',
        '项目描述：基于webrtc的云游戏，实现用户在PC网页，手机上玩大型网游的移动端应用',
        '项目贡献：封装移动端手势操作库，实现鼠标点击及触屏操作；封装自定义键盘；支持自定义开发，达到不同产品线自定义其中的UI；使用jsBridge与ios通信；对键盘列表的滚动进行优化，避免出现卡顿。',
        '项目说明:此项目由我独立搭建，使用vue-cli3，其中自定义开发通过导出组件，放在CDN上供各产品线完成') 
      }
    )

    private personProjects: Array<{ icon: string, direction: string, list: Array<{ name?: string, desc: string[] }> }> = Array(
      { icon: 'icon-web1', direction: 'vue可视化编辑平台', list: Array({
        desc: Array(
          'vue开发的支持可视化编辑、自由拖拽排版、实时预览的,且可生成代码的工具',
          '设计理念：基于JSON Schema，简单易用。中心思想就是数据控制视图显示，所有的操作功能本质上都是在操作数据。',
          '使用handlebars作为js模板引擎生成代码,实现拖拽组件到画布区，撤销重做功能，根据组件标识，通过作用域插槽，自定义组件行为'
        )
      })},
      { icon: 'icon-web1', direction: 'Vue+Typescript仿写CNode社区', list: Array({
        name: 'https://lovelifeloveyou.github.io/vue-ts-cnode/',
        desc: Array(
          '基于Vue全家桶+TSX+TypeScript+Less实现的仿CNode中文社区项目',
          '项目进度：基本实现了CNode中文社区的所有功能'
        )
      })},
      // { icon: 'icon-web1', direction: 'Vue+TypeScript+Element的博客前台', list: Array({
      //   name: '',
      //   desc: Array(
      //     '实现功能：登录注册、文章列表、github授权登录、点赞与评论、留言、文章归档',
      //     '使用技术：vue/vuex+typescript+axios+element-ui', 
      //     '项目注意点：让vue识别全局方法/变量，引入的模块要声明，this的类型检查'
      //   )
      // })},
      // { icon: 'icon-web1', direction: 'react+Dva+Ant Design的博客后台管理系统', list: Array({
      //   name: '',
      //   desc: Array(
      //     '实现功能：登录注册、文章列表、标签列表、个人介绍、点赞与评论、发文',
      //     '使用技术：react+redux+dva+axios+antd', 
      //     '项目实现：markdown渲染采用了开源的marked，代码高亮用了 highlight.js '
      //   )
      // })}
      // { icon: 'icon-web1', direction: '基于node+express+mongodb的博客后台API', list: Array({
      //   name: '',
      //   desc: Array(
      //     '实现功能： 登录、文章管理、标签管理、评论、留言管理、用户管理、友情链接管理、时间轴管理、身份验证',
      //     '项目难点：各模块的列表都使用分页的形式，对用户身份进行验证和加密处理，评论是有状态的，管理员可设置是否显示该评论'
      //   )
      // })}
    )

    private skill: Array<{ icon: string, direction: string, list: Array<{ name: string, desc: string[] }> }> = Array(
      { icon: 'icon-shezhi', direction: '技术技能', list: Array({
        name: '',
        desc: Array(
          '熟练使用Vue全家桶，有复杂系统开发经验',
          '熟悉使用React技术框架，了解React Hooks的使用',
          '了解Node.js的开发，使用MongoDB或MySql做数据存储',
          '了解TypeScript的使用',
          '熟练掌握JavaScript，代码编写遵守规范，能够运用模块化、面向对象的方式编程',
          '熟悉异步编程',
          '能够编写语义化的HTML，模块化的CSS，实现常用布局，熟悉Less、Sass等CSS预处理器，了解HTML5/CSS3，并能熟练使用部分新特性',
          '熟悉Webpack等前端自动化工具'
        )
      })}
    )

    public view (): void {
      window.open('https://lovelifeloveyou.github.io/vue-ts-cnode/')
    }
	}
</script>

<style lang="less">
@font-face {
  font-family: iconfont;
  src: url(../assets/font-size/29f046f8a4f7b65ad1d1e7d56d5a5621.eot);
  src: url(../assets/font-size/29f046f8a4f7b65ad1d1e7d56d5a5621.eot#iefix) format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2"),url(../assets/font-size/006adc9b50650b771d50fe78d3815389.woff) format("woff"),url(../assets/font-size/0f1e2ed4d62816918023516de7798f00.ttf) format("truetype"),url(../assets/font-size/7563278383acb0da4747b85841ecb696.svg#iconfont) format("svg");
}

.iconfont:before {
  display: inline-block;
  font-size: 16px;
  padding-right: 3px;
}

.iconfont-title,.iconfont:before {
  font-family: iconfont!important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfont-title {
  font-size: 20px;
}

.iconfont-big {
  width: 44px;
  height: 44px;
  font-size: 28px;
  line-height: 44px;
}

.iconfont-big,.iconfont-middle:before {
  font-family: iconfont!important;
  box-sizing: border-box;
  font-style: normal;
  display: inline-block;
  background: #254664;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfont-middle:before {
  position: absolute;
  left: -21px;
  top: -7px;
  width: 38px;
  height: 38px;
  font-size: 24px;
  line-height: 38px;
}

.icon-telephone:before {
  content: "\e645";
}

.icon-weixin:before {
  content: "\e608";
}

.icon-web1:before {
  content: "\e6fb";
}

.icon-wujiaoxing:before {
  content: "\e676";
}

.icon-shezhi:before {
  content: "\e667";
}

.icon-wifi:before {
  content: "\e61c";
}

.icon-bangdingshouji:before {
  content: "\e607";
}

.icon-youxiang1:before {
  content: "\e64d";
}

.icon-tool:before {
  content: "\e69f";
}

.icon-gongju:before {
  content: "\e66f";
}

.icon-study:before {
  content: "\e61d";
}

.icon-GitHub:before {
  content: "\e6d5";
}

.icon-tag:before {
  content: "\e637";
}

.icon-yun:before {
  content: "\eb2c";
}

.icon-yingyu:before {
  content: "\e640";
}

.icon-gongzuo:before {
  content: "\e687";
}

.icon-xueweimao:before {
  content: "\e807";
}

.icon-ziyuan:before {
  content: "\e620";
}

.icon-rongyu:before {
  content: "\e629";
}

@media (max-width: 1024px),print {
  .column-6 {
      float:left;
      width: 100%;
  }

  .column {
      padding-left: 0;
  }

  .avatar {
      display: none;
  }

  .title {
      text-align: center;
  }

  .container {
      width: 100%;
      margin: 10px auto 0;
      box-shadow: 2px 2px 5px;
  }

  header {
      padding: 30px 10px;
      color: #fff;
      background: #254664!important;
      overflow: hidden;
  }

  .content {
      padding: 30px 15px;
      background: #fff;
      overflow: hidden;
  }
}

@media (min-width: 1024px),print {
  .column-6 {
      float:left;
      width: 50%;
  }

  .column {
      padding-left: 15px;
  }

  .avatar {
      width: 130px;
      height: 130px;
      display: block;
      float: right;
  }

  .title {
      float: left;
      text-align: left;
  }

  .container {
      width: 970px;
      margin: 10px auto 0;
      box-shadow: 2px 2px 5px;
  }

  header {
      color: #fff;
      background: #254664!important;
  }

  .content,header {
      padding: 30px 45px;
      overflow: hidden;
  }

  .content {
      background: #fff;
  }
}

.message {
  margin: 0 20px 0 0;
  font-size: 18px;
  line-height: 1.4;
  float: right;
  padding-left: 20px;
  text-align: left;
}

.message :hover {
  transition: .3s ease-out;
  color: #a3d3d1;
}

.title>h1 {
  font-size: 72px;
  line-height: 1;
  margin: 5px 0;
  padding: 5px 0;
  font-weight: bold;
}

.title>h2 {
  font-size: 20.8px;
  font-weight: 400;
  margin: 5px 0;
  padding: 5px 6px;
}

.sec-title-wrapper {
  display: flex;
}

.sec-title {
  padding-left: 10px
}

.sec-zh {
  color: #000;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.15;
}

.sec-en {
  font-size: 16px;
  font-weight: 700;
  font-variant: small-caps;
  color: #254664;
}

.sec-content {
  padding: 20px 0 0;
  margin-left: 20px;
  border-left: 5px solid #254664;
  font-size: 16px;
}

.sec-education-content {
  margin-left: 20px;
  border-left: 5px solid #333;
  padding-bottom: 10px;
  font-size: 16px;
}

.timeline-item {
  padding-bottom: 10px;
}

.timeline-title {
  background: #254664;
  color: #fff;
  font-size: 17px;
  line-height: 1.5;
  font-weight: 400;
  padding-left: 25px;
  border-radius: 5px;
  position: relative;
}

.timeline-title>.time {
  float: right;
  padding-right: 10px;
}

.education,.sec-education-content {
  font-size: 16px;
}

.education-name {
  font-size: 16px;
  padding: 6px 0 5px 25px;
  line-height: 1.15;
}

.position {
  font-size: 18px;
  font-weight: 700;
  margin: 6px 0 5px 25px;
}

.lang-cert {
  display: flex;
  margin-left: 26px;
  padding: 6px 0 5px;
}

.lang-grade {
  font-size: 20px;
  font-weight: 700;
}

.lang-progress {
  margin-left: 10px;
  flex-grow: 1;
  background: #333;
  border-radius: 5px;
}

.lang-progress-bar {
  width: 64%;
  background: teal;
  overflow: hidden;
  border-radius: 5px;
}

.lang-progress-label {
  float: right;
  line-height: 25px;
  padding-right: 5px;
  color: #fff;
}

.skill-name {
  font-size: 18px;
  padding: 6px 0 5px 26px;
}

body,html {
  background: #e0e0e0;
  font-family: Helvetica Neue,Arial,PingFang SC,Hiragino Sans GB,STHeiti,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 15px;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #fff;
}

h3,ul {
  margin: 0;
}

ul {
  padding: 0 0 0 25px;
}

strong {
  color: #254664;
}

strong.link {
  text-decoration: underline;
}

li {
  list-style: none;
  line-height: 1.42;
}

</style>
