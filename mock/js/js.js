module.exports = {
    h2: '数组方法小结',
    abstract: '摘要:先从最简单的数组开始吧！！！',
    data: [
        {
            title: '1.数组的增加、修改和删除',
            upContent: [
                {
                    subTitle: 'push',
                    content: ['●向数组末尾增加新的内容', '●返回值:新增加后数组的长度', '●原数组发生改变'],
                    demo: ['let ary=[]','let res=ary.push(1,2,3);', '返回:','res=3','ary=[1,2,3]']
                },
                {
                    subTitle: 'pop',
                    content: ['●删除数组中最后一项', '●返回值:被删除的那一项', '●原数组发生改变'],
                    demo: ['let ary=[1,2,3]','let res=ary.pop();', '返回:','res=3','ary=[1,2]']
                },
                {
                    subTitle: 'unshift',
                    content: ['●向数组开头增加一项', '●返回值:增加后数组的长度', '●原数组发生改变'],
                    demo: ['let ary=[0]','let res=ary.unshift(1,2,3);', '返回:','res=4','ary=[1,2,3,0]']
                },
                {
                    subTitle: 'shift',
                    content: ['●删除数组中的第一项', '●返回值:被删除的那一项', '●原数组发生改变'],
                    demo: ['let ary=[1,2,3]','let res=ary.shift();', '返回:','res=1','ary=[2,3]']
                },
                {
                    subTitle: 'splice',
                    content: ['●既能实现删除,也能实现增加与修改', '●删除:splice(n,m)','●从索引n开始删除m个元素','●返回值:删除的内容以一个新的数组的方式返回','●更改:splice(n,m,x)','●从索引n开始删除m个,用x替换','●返回值:删除的内容以一个新的数组的方式返回','●增加:splice(n,0,x)','●将x加到n的前面','●返回值:[]', '●原数组发生改变'],
                    demo: ['let ary=[0,1,2,3,4,5,6]','let res=ary.splice(2,3);', '返回:','res=[2,3,4]','ary=[0,1,5,6]','res=ary.splice(2,3,7,8);', '返回:','res=[2,3,4]','ary=[0,1,7,8,5,6]','res=ary.splice(2,0,7,8);', '返回:','res=[]','ary=[0,1,7,8,2,3,4,5,6]']
                }
            ]
        },
        {
            title: '2.数组的截取和拼接',
            upContent: [
                {
                    subTitle: 'slice',
                    content: ['●在原数组中截取某一部分:slice(n, m)', '●返回值:从索引n开始找到索引为m处(不包括m),将找到的部分以新数组返回','●slice(n)', '●返回值:从索引n开始到数组末尾', '●原数组不变'],
                    demo: ['let ary=[0,1,2,3,4,5,6]','let res=ary.slice(1,4);', '返回:','res=[1,2,3]','ary=[0,1,2,3,4,5,6]','res=ary.slice(3);', '返回:','res=[3,4,5,6]','ary=[0,1,2,3,4,5,6]']
                },
                {
                    subTitle: 'concat',
                    content: ['●把两个数组拼接到一起', '●返回值:返回拼接后的数组','●原数组不变'],
                    demo: ['let ary=[0,1,2,3]','let arr=[4,5,6]','let res=ary.concat(arr);', '返回:','res=[0,1,2,3,4,5,6]','ary=[0,1,2,3],arr=[4,5,6]']
                }
            ]
        },
        {
            title: '3.把数组转化为字符串',
            upContent: [
                {
                    subTitle: 'toString',
                    content: ['●把数组转化为字符串', '●返回值:以字符串的形式返回','●原数组不变'],
                    demo: ['let ary=[0,1,2,3,4,5,6]','let res=ary.toString();', '返回:','res="0,1,2,3,4,5,6"','ary=[0,1,2,3,4,5,6]']
                },
                {
                    subTitle: 'join',
                    content: ['●按照一个分隔符,把数组中的每一项拼成一个字符串', '●返回值:在数组的每一项间加入指定的分隔号,以字符串的形式返回','●原数组不变'],
                    demo: ['let ary=[0,1,2,3,4,5,6]','let res=ary.join("!");', '返回:','res="0!1!2!3!4!5!6"','ary=[0,1,2,3,4,5,6]']
                }
            ]
        },
        {
            title: '4.排序和排列',
            upContent: [
                {
                    subTitle: 'reverse',
                    content: ['●把数组到过来排序', '●返回值:倒过来后的数组','●原数组发生改变'],
                    demo: ['let ary=[0,1,2,3,4,5,6]','let res=ary.reverse();', '返回:','res=[6,5,4,3,2,1,0]','ary=[6,5,4,3,2,1,0]']
                },
                {
                    subTitle: 'sort',
                    content: ['●对数组进行排序', '●返回值:在数组的每一项间加入指定的分隔号,以字符串的形式返回','●原数组不变'],
                    demo: ['let ary=[4,1,6,3,4,0,2]','let res=ary.sort((a,b)=>(a-b));', '返回:','res=[0,1,2,3,4,5,6]','ary=[0,1,2,3,4,5,6]','res=ary.sort((a,b)=>(a-b));', '返回:','res=[6,5,4,3,2,1,0]','ary=[6,5,4,3,2,1,0]']
                }
            ]
        },
        {
            title: '5.只在标准浏览器中兼容的',
            upContent: [

                {
                    subTitle: 'indexOf / lastIndexOf',
                    content: [ '●一般用于验证内容是否在数组中存在','●返回值:当前内容在数组中第一次 / 最后一次出现的位置的索引,如无这一项返回 - 1;有则返回索引','●原数组不变'],
                    demo: ['let ary=[4,1,6,3,4,6,2]','let res=ary.indexOf(6);', '返回:','res=2','ary=[4,1,6,3,4,6,2]','res=ary.lastIndexOf(6);','返回:','res=5','ary=[4,1,6,3,4,6,2]']
                },
                {
                    subTitle: 'forEach',
                    content: ['●都是用来遍历数组中的每一项的,数组中有多少项,函数就执行多少次', '●返回值:无','●原数组不变'],
                    demo: []
                },
                {
                    subTitle: 'map',
                    content: ['●都是用来遍历数组中的每一项的,数组中有多少项,函数就执行多少次,把原内容进行替换的功能', '●返回值:替换后的数组','●原数组不变'],
                    demo: ['let ary=[0,1,2,3,4]','let arr=[5,6,7,8,9]','let res=ary.map((item.index)=>(arr[index]));', '返回:','res=[5,6,7,8,9]','ary=[0,1,2,3,4]','arr=[5,6,7,8,9]']
                }
            ]
        }
    ],
    date: '2017-6-3 15:08',
    name: 'cc',
    number: '389',
    id: '1'
}



























