[rewrite_local]

^https?://dancefit.dailyyogac.com/dancefit/user/common/info("?.*)? url script-response-body https://github.com/wflove520/qx/raw/main/rehanwudao.js
^https?://dancefit.dailyyogac.com/dancefit/user/obprogram/detail("?.*)? url script-response-body https://github.com/wflove520/qx/raw/main/rehanwudao.js

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
