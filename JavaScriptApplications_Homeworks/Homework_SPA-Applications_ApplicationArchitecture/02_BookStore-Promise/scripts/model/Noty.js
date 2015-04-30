var Noty = (function() {

    function display(type, text, time) {
        var n = noty({
            text: text,
            type: type,
            dismissQueue: true,
            layout: 'top',
            theme: 'defaultTheme',
            timeout: time
        });
    }

    function success(text) {
        display('success', text, 3500);
    }

    function error(text) {
        display('error', text, 3500);
    }

    return {
        success: success,
        error: error
    }
}());
