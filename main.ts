/*function print(a:number):number{
    return a = 5;
}*/

function drawtower(n:number){

    var q,w,e:number;
    var spc,sta,end:string;  //spc:space,sta:start,end:end

    for(q=0 ; q<n ; q++){    //设置层数
        spc = "";
        sta = "";
        end = "";

        for(w=0 ; w<(n-q-1) ; w++){   //打印空格
            spc = spc + "";
        }
        for(e=0 ; e<(2*q+1) ; e++){   //打印*号
            sta = sta + "*"; 
        }
        end = spc + sta;
        console.log(end);
    }
}

var x:string = process.argv[2];
drawtower(parseInt(x));