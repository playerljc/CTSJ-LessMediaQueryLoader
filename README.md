# LessMediaQueryLoader

English | [简体中文](./README-zh_CN.md)

#### A loader that handles media query webpack in less

## Introduction

When we usually write media queries, we always mix the css(less) code of non-media query and the css(less) code of media query together. The disadvantage of writing this way is that it is not easy to extract, modify and Maintenance is difficult, mainly because it is hard to find. This plug-in is written to solve such problems.

## Install

``` 
npm install @ctsj/less-media-query-loader --save-dev 
```

``` 
yarn add @ctsj/less-media-query-loader -D 
```

## example

There is a typical directory structure as follows

user

- index.jsx
- index.less
- index.mq.pad.less
- index.mq.pc.less
- index.mq.phone.less

Write css code independent of media query in index.less
Adapt the css code under the pad in index.mq.pad.less
Adapt css code under pc in index.mq.pc.less
Adapt the css code of the mobile phone in index.mq.phone.less

The *.less files in any directory can have the agreed three media query files, *.mq.pad.less, *.mq.pc.less and *.mq.phone.less

## use

### Basic usage

```
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
```

### Using configuration

```
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
              // &#x53EF;&#x4EE5;&#x52A0;&#x5165;&#x591A;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5A92;&#x4F53; &#x67E5;&#x8BE2;&#xFF0C;&#x5C5E;&#x6027;&#x662F;*.mq.${&#x5C5E;&#x6027;&#x540D;}.less&#xFF0C;&# x503C;&#x662F;&#x5A92;&#x4F53;&#x67E5;&#x8BE2;&#x5B57;&#x7B26;&#x4E32;
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
```
