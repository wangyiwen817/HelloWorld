function DrawPyramid(totalrows) {
    var currentRow, spaceCount, starCount;
    var spacestr, starstr, finalstr;
    for (currentRow = 0; currentRow < totalrows; currentRow++) {
        spacestr = "";
        starstr = "";
        finalstr = "";
        for (spaceCount = 0; spaceCount < (totalrows - currentRow - 1); spaceCount++) {
            spacestr = spacestr + " "; //空格
        }
        for (starCount = 0; starCount < (2 * currentRow + 1); starCount++) {
            starstr = starstr + "*"; //*号
        }
        finalstr = spacestr + starstr;
        console.log(finalstr); //两串组合输出
    }
}
var rows = process.argv[2];
DrawPyramid(parseInt(rows));
