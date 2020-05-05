import ReactDOM from 'react-dom';
import React from 'react';
// 普通暴露必须以对象解构赋值的形式导入    包括一个一个export和用对象的形式集中export
import { cube } from './math';
// 默认暴露，则只需用一个变量整体接收  export default
import data from '../json/data.json';
// 直接引入css文件，但是必须借助于loader
import '../css/test.css';
import 'babel-polyfill';

import { a } from './tree-shaking';

import Search from './search';
import Search1 from './search copy';
import Search2 from './search copy 2';
import Search3 from './search copy 3';
import Search4 from './search copy 4';
import Search5 from './search copy 5';

// 注意data会自动被转换为原生的js对象或者数组
document.write('entry.js is work <br/>');
document.write(`${cube(2)}<br/>`);
document.write(`${JSON.stringify(data)}<br/>`);

console.log('🚀🚀🚀wimi======>>>tree', a);

ReactDOM.render(
    <>
        <Search />
        <Search1 />
        <Search2 />
        <Search3 />
        <Search4 />
        <Search5 />
    </>,
    document.getElementById('root'),
);
