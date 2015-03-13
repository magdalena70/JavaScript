var specialConsole = (function specialConsole() {
    
    function writeLine() {
        var result = '';
        if (arguments.length > 1) {
            result = console.log(writeLineWithMatchInfo(arguments));
        } else if (arguments.length == 1) {
            result = console.log(writeLineWithoutMatchInfo(arguments[0]));
        } else {
            result = console.log();
        }

        return result;
    }
    
    function writeInfo() {
        var result = '';
        if (arguments.length > 1) {
            result = console.log(writeLineWithMatchInfo(arguments));
        } else if (arguments.length == 1) {
            result = console.log(writeLineWithoutMatchInfo(arguments[0]));
        } else {
            result = console.error("Error: Info cannot be empty!");
        }

        return result;
    }
    
    function writeError() {
        var result = '';
        if (arguments.length > 1) {
            result = console.error(writeLineWithMatchInfo(arguments));
        } else if (arguments.length == 1) {
            result = console.error(writeLineWithoutMatchInfo(arguments[0]));
        } else {
            result = console.error("Error: Error message cannot be empty!");
        }

        return result;
    }
    
    function writeWarning() {
        var result = '';
        if (arguments.length > 1) {
            result = console.warn(writeLineWithMatchInfo(arguments));
        } else if(arguments.length == 1) {
            result = console.warn(writeLineWithoutMatchInfo(arguments[0]));
        } else {
            result = console.warn("Warning: Warning message cannot be empty!");
        }

        return result;
    }
    
    function writeLineWithoutMatchInfo(input) {
        return input.toString();
    }
    
    function writeLineWithMatchInfo(arguments) {
        var i;
        var pattern = arguments[0];
        var matchInfo = pattern.match(/{{1}[0-9]}{1}/g);
        var replacedMatchInfo = [];
        replacedMatchInfo[0] = pattern.replace(matchInfo[0], arguments[1]);
        if (matchInfo.length > 1) {
            for (i = 1; i < matchInfo.length; i++) {
                replacedMatchInfo[i] = replacedMatchInfo[i - 1].replace(matchInfo[i], arguments[i + 1]);
            }
        }

        var output = replacedMatchInfo[replacedMatchInfo.length - 1].toString();
        return output;
    }
    
    return {
        writeLine : writeLine,
        writeInfo : writeInfo,
        writeError : writeError,
        writeWarning : writeWarning
    };
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine();
specialConsole.writeLine("Object: {0} is {1} old.", 
    { name: "Gosho", toString: function () { return this.name } },
    { age: 29, toString: function () { return this.age } });
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeError();
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeWarning();
specialConsole.writeInfo();
specialConsole.writeInfo("Info: Hi there! Here is some info for you.");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function () { return this.msg } });
