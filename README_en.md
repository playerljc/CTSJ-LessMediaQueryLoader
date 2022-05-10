# LessMediaQueryLoader

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
