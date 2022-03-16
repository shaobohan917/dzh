

/**
 * 修改url的参数
 * @param {原url} url 
 * @param {参数名} paramName 
 * @param {参数值} replaceWith 
 * @returns 
 */
function addOrgToUrl(url, paramName, replaceWith) {
    if (url.indexOf(paramName) > -1) {
        var re = eval('/(' + paramName + '=)([^&]*)/gi');
        url = url.replace(re, paramName + '=' + replaceWith);
    } else {
        var paraStr = paramName + '=' + replaceWith;
        var idx = url.indexOf('?');
        if (idx < 0)
            url += '?';
        else if (idx >= 0 && idx != url.length - 1)
            url += '&';
        url = url + paraStr;
    }
    return url
}