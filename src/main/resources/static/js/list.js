// new Vue({
//     el: '#test',
//     data: {
//         msg: [] //msg 可为数组或对象;
//         // Url:AbUrl+"uploads/"		//图片拼接路径
//     },
//     mounted: function() {
//         this.get();
//         this.gethref();
//         //this.returnId();
//     },
//     methods: {
//         get: function() {
//             var urls = '127.0.0.1:9000';
//             var i = urls.split("=");
//             var ids = i[1]; //获取动态id
//             //console.log(ids)
//             this.$http.get(urls+"/test", { //index/recsupply
//                 emulateJSON: true
//             }).then(function(res) {
//                 alert(res);
//                 var data = res.data;
//                 //console.log(data)
//                 var List =data.data;
//                 this.msg =List;
//             }, function() {
//                 console.log('请求失败处理');
//             });
//         },
//         //向详情页传id参数
//         gethref:function(msg){
//             //console.log(msg)
//             return 'supply_info_text.html?id='+msg
//
//         }
//
//     }
// });
