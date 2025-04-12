var obj = [
    1, 2, 3, 4, 4, 4, 5, 5, 5
];
var arr = function (x) {
    var counter = {};
    for (var i_1 = 0; i_1 < x.length; i_1++) {
        if (counter[x[i_1]] == undefined)
            counter[x[i_1]] = 0;
        counter[x[i_1]]++;
    }
    var newobj = [];
    var i;
    for (i in counter) {
        if (counter[i] < 3)
            newobj.push(i);
    }
    return newobj;
};
console.log(arr(obj));
