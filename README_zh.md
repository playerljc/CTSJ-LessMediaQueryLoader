# LessMediaQueryLoader

简体中文 | [English](./README.md)

#### 一个在less中处理媒体查询webpack的loader

## 简介

我们平时写媒体查询的时候都是将非媒体查询的css(less)代码和媒体查询的css(less)代码都混杂在一起，这样写的弊端在于不好按照媒体查询的类型进行抽取，修改和维护困难，主要是不好找，本插件就是要解决这样的问题而编写的。

## 安装

` npm install @ctsj/less-media-query-loader --save-dev `

` yarn add @ctsj/less-media-query-loader -D `

## 例子

有如下典型目录结构

user

- index.jsx
- index.less
- index.mq.pad.less
- index.mq.pc.less
- index.mq.phone.less

在index.less中编写和媒体查询无关的css代码
在index.mq.pad.less中适配pad下的css代码
在index.mq.pc.less中中适配pc下的css代码
在index.mq.phone.less中适配手机端的css代码

任意目录下的*.less文件都可以有约定的3个媒体查询文件，*.mq.pad.less、*.mq.pc.less和*.mq.phone.less

## 使用

### 基本使用

`
  <pre>
  {
    module:{
      rules:[
        {
          test: /\.less$/,
          use: '@ctsj/less-media-query-loader',
        }
      ]
    }
  }
  </pre>
`

### 使用配置

`
  <pre>
  /* webpack&#x914D;&#x7F6E; */
  {
    module:{
      rules:[
        {
          test: /\.less$/,
          use: [
            {
              loader: '@ctsj/less-media-query-loader',
              // &#x53EF;&#x4EE5;&#x52A0;&#x5165;&#x591A;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5A92;&#x4F53;&#x67E5;&#x8BE2;&#xFF0C;&#x5C5E;&#x6027;&#x662F;*.mq.${&#x5C5E;&#x6027;&#x540D;}.less&#xFF0C;&#x503C;&#x662F;&#x5A92;&#x4F53;&#x67E5;&#x8BE2;&#x5B57;&#x7B26;&#x4E32;
              options: {
                 bigScreen: '@media screen and (min-width: 1925px)'
              }
            }
          ],
        }
      ]
    }
  }

  /* &#x52A0;&#x5165;*.mq.bigScreen.less&#x6587;&#x4EF6; */
  </pre>
    `
