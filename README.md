# LessMediaQueryLoader

English | [简体中文](./README_zh.md)

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
  /* webpack configure; */
  {
    module:{
      rules:[
        {
          test: /\.less$/,
          use: [
            {
              loader: '@ctsj/less-media-query-loader',
              // Multiple custom media queries can be added, the property is *.mq.${property name}.less, and the value is the media query string
              options: {
                 bigScreen: '@media screen and (min-width: 1925px)'
              }
            }
          ],
        }
      ]
    }
  }

  /* add *.mq.bigScreen.less files; */
```
