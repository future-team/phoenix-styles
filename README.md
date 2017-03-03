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
    <link rel="stylesheet" href="http://future-team.github.io/phoenix-styles/dist/phoenix-styles.min.css" />
    // add IOS skin
    <link rel="stylesheet" href="http://future-team.github.io/phoenix-styles/dist/skin-ios.min.css" />

    // ES6
    import 'phoenix-styles/less/public.less';

    // Less(packaging by less-loader)
    @import '~phoenix-styles/less/public.less';
```

## Documentation

[http://future-team.github.io/phoenix-styles/example/index.html](http://future-team.github.io/phoenix-styles/example/index.html)

## Command

```
  $ npm run build
  $ npm run less 
  $ npm run dev
```

## Repair

`version 1.4.1` 新增menu组件样式 <br/>
`version 1.1.3` 引入gfs-icons <br/>
`version 1.1.1` 样式统一加ph前缀，配合Phoenix-ui@v1.1.1使用 <br/>
`version 1.1.0` 增加IOS样式(ios-skin) <br/>
`version 1.0.0` 增加phoenix-styles-grid.less兼容Android4.4以下布局方案 <br/>
`version 0.3.8` 样式参数化 <br/>