[rewrite_local]

https://dancefit.dailyyogac.com/dancefit/user/common/info?df_channel=800001&df_deviceid=a3650933e9014668ab0bf75717a67248&df_devicetype=2&df_is_gray=0&df_is_pad=0&df_version=df-1.29.1.0&sid=ca6b586a545c43c40d6babcf931e7ea5&sign=0e92d0a322e1c9ce18138e29e3253ea1&time=1721825133&uid=5013873647
 url script-response-body https://github.com/wflove520/qx/raw/main/rehanwudao.js
https://dancefit.dailyyogac.com/dancefit/user/obprogram/detail?df_channel=800001&df_deviceid=a3650933e9014668ab0bf75717a67248&df_devicetype=2&df_is_gray=0&df_is_pad=0&df_version=df-1.29.1.0&sid=ca6b586a545c43c40d6babcf931e7ea5&sign=78f525e1cd3b4be724e2f6f69542044f&time=1721825128&uid=5013873647
 url script-response-body https://github.com/wflove520/qx/raw/main/rehanwudao.js

[mitm]
hostname = dancefit.dailyyogac.com

var url = $request.url;
var body = $response.body;

if (/^https?://dancefit.dailyyogac.com/dancefit/user/common/info("?.*)?$/.test(url)) {
    let obj = JSON.parse($response.body);
    obj.result.is_first_buy = true;
    obj.result.member_duration.is_valid = true;
    obj.result.equity_duration = [
        {
            "is_valid": true,
            "start_time": 999,
            "equity_type": 1,
            "end_time": 99999999999
        }
    ];
    obj.result.member_duration.end_time = 9999191919;
    obj.result.login_type = 3;
    $done({ body: JSON.stringify(obj) });
} else if (/^https?://dancefit.dailyyogac.com/dancefit/user/obprogram/detail("?.*)?$/.test(url)) {
    let obj = JSON.parse($response.body);
    obj.result.is_vip = true;
    $done({ body: JSON.stringify(obj) });
} else if (/^https?://dancefit.dailyyogac.com/.*$/.test(url)) {
    //vip权限
    body = body.replace(/is_vip":true/g, 'is_vip":false');
}
$done({ body });
