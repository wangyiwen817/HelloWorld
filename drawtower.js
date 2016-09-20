function drawtower(n) {
    var q, w, e;
    var spc, sta, end; //spc:space,sta:start,end:end
    for (q = 0; q < n; q++) {
        spc = "";
        sta = "";
        end = "";
        for (w = 0; w < (n - q - 1); w++) {
            spc = spc + "";
        }
        for (e = 0; e < (2 * q + 1); e++) {
            sta = sta + "*";
        }
        end = spc + sta;
        console.log(end);
    }
}
var x = process.argv[2];
drawtower(parseInt(x));
