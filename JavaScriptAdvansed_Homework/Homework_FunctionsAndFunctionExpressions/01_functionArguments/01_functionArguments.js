function printArgsInfo() {
    
    for (var i in arguments) {
        var type = typeof arguments[i];
        console.log(arguments[i] + " " + "(" + type + ")");
    }
};
//printArgsInfo(2, 3, 2.5, -110.5564, false);
//printArgsInfo(null, undefined, "", 0, [], {});

// use apply()
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
printArgsInfo.apply(null, [[1, 2], ["string", "array"], ["single value"]]);
printArgsInfo.apply();

// use call()
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], { name: "Peter", age: 20 });
printArgsInfo.call(null, "some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], { name: "Peter", age: 20 });
printArgsInfo.call();

//printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);