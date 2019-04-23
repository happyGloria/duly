function Trim(str, is_global) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
}

function getStr(text, str) {
    var str_before = text.split(str)[0];
    var str_after = text.split(str)[1];
    return (str_before + "\\" + str + "\\" + str_after);
}

var has_cookie;
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            var str = unescape(document.cookie.substring(c_start, c_end));
            var has_cookie = JSON.parse([str]);
            $("#view1").show();
        } else {
            $("#view2").show();
            $("#view3").show();
        }
    } else {
        $("#view2").show();
        $("#view3").show();
    }
    return ""
}


function safeExit() {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookies("ZTCloud_loginuserkey"); 
    if (cval != null)
        document.cookie = "ZTCloud_loginuserkey" + "=" + cval + ";expires=" + exp.toGMTString();
    window.location.href = "/";
}

function getCookies(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}