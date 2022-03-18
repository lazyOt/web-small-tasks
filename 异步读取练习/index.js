var jsonUrl="user.json";

// -------回调函数方式加载数据-------------
function readFile(fn){
    $.getJSON(jsonUrl,function(data){
        // data：获取的对象数组
        fn(data);
    });
}
function loadData(){
    // 定义回调函数
    readFile((data)=>{
        let tableBody=document.getElementById("tableBody");
        for(let i in data){
            tableBody.innerHTML+='<td>'+data[i].id+'</td><td>'+data[i].email+'</td><td>'+data[i].name+'</td>'
        }
    })
}
// -------promise方式加载数据-----------
function promiseLoad(){
    $.getJSON(jsonUrl,function(data){
        let promise = new Promise(function(resolve,reject){
            resolve(data);
        });
        promise.then((data)=>{
            let tableBody=document.getElementById("tableBody");
            for(let i in data){
                tableBody.innerHTML+='<td>'+data[i].id+'</td><td>'+data[i].email+'</td><td>'+data[i].name+'</td>'
            }
        });
    });
}


// -------删除表格中的数据----------------
function cleanTable(){
    let tableBody=document.getElementById("tableBody");
    tableBody.innerHTML="";
}