# phoenix-styles
一套完整的UI样式库,提供了简洁风格的布局和组件样式。
搭配React UI组件库phoenix-ui使用: [https://github.com/future-team/phoenix-ui](https://github.com/future-team/phoenix-ui)

## Install
```
    $ npm install phoenix-styles --save
```

## Usage

```
    // Global
    <link rel="stylesheet" href="../dist/phoenix-styles.min.css" />
    // add IOS skin
    <link rel="stylesheet" href="../dist/skin-ios.min.css" />

    // ES6
    import 'phoenix-styles/less/public.less';

    // Less
    @import 'phoenix-styles/less/public.less';
```

## Documentation

[http://uedfamily.com/documents/phoenix-styles/doc/](http://uedfamily.com/documents/phoenix-styles/doc/)

## Command

```
  $ npm run build
  $ npm run less 
  $ npm run dev
```

## Repair

`version 0.3.8` 样式参数化 <br/>
`version 1.0.0` 增加phoenix-styles-grid.less兼容Android4.4以下布局方案 <br/>
`version 1.1.0` 增加IOS样式(ios-skin) <br/>
