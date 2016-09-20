function drawtower(n:number){

    var q,w,e:number;
    var spc,sta,end:string;//spc:space,sta:start,end:end

    for(q=0 ; q<n ; q++){   //层数
        spc = "";
        sta = "";
        end = "";

        for(w=0 ; w<(n-q-1) ; w++){   //空格
            spc = spc + "";
        }
        for(e=0 ; e<(q*2+1) ; e++){   //*号
            sta = sta + "*";
        }
        end = spc + sta;
        console.log(end);
    }
}

var x:string = process.arg(2);
drawtower(parseInt(x));