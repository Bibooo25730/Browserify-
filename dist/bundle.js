(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// import anime from "animejs";
// 浣跨敤 import 瀵煎叆
// browserify ./src/main.js > ./dist/bundle.js
// ParseError: 'import' and 'export' may appear only with 'sourceType: module
// 鎴戜滑鐪嬪埌鎶ラ敊浜嗭細鏄洜涓?Browserify 涓嶇悊瑙ｅ鍏ワ紝鍥犱负 import 鏄竴涓?es6鍑芥暟锛屽洜姝ゆ垜浠鍏堥渶瑕佸皢璇ヤ唬鐮佽浆鎹负 鏅€氱殑 js
// 浠ヤ究 Browserify 鍙互鎹嗙粦瀹?// Browserify 鍏跺疄鏄釜鍙墿灞曞伐鍏凤紝鎴戜滑瑕佸畨瑁呬釜鎻掍欢鑳借 Browserify 鏉ラ€昏緫 Es6璇硶
//  npm install --save-dev @babel/core @babel/preset-env babelify
//  鍒囨崲鍒?packjson 鏂囦欢涓?鎴戜滑鐪嬪埌鏂板畨瑁呯殑鍔熻兘鍦?devDependencies 瀵硅薄涓紝鑰屼笉鏄緷璧栭」涔嬩竴锛屽洜涓烘垜浠娇鐢?-- save 銆?
//  鎴戜滑鍒涘缓涓€涓?蹇呴』鍛藉悕涓?babel config
//  browserify ./src/main.js > ./dist/bundle.js -t babelify
//  鍦?bundle.js 鏂囦欢涓紝鍑芥暟鍜屼娇鐢ㄧ殑渚濊禆椤硅浆鎹负甯歌鐨勬祻瑙堝櫒鍙嬪ソ浠ｇ爜锛岃繖鍦ㄥ紑鍙戝拰娴嬭瘯寰堝ソ锛屼絾鏄负浜嗗湪鍒嗗彂鐗堟湰涓幏寰楁洿濂界殑鎬ц兘锛岄渶瑕佸璇ヤ唬鐮佽繘琛屽帇缂?
//  鍙栨秷娉ㄩ噴 鎴?鍒犻櫎浠讳綍鏈娇鐢ㄧ殑鍙橀噺 鎴?鍑芥暟涔熷垹闄ょ┖鐧藉鐨勭缉杩?
//  杩欐牱鍋氬緢瀹规槗锛屽綋鏈夋暟鍗冭浠ｇ爜闇€瑕佺悽涓煡鐪嬫椂锛岃繖鍑犱箮鏄竴椤逛笉鍙兘瀹屾垚鐨勪换鍔°€?
//  骞歌繍鐨勬槸鏈変釜鎻掍欢鍙互甯姪鎴戜滑瀹屾垚杩欓」浠诲姟 锛?npm install --save -dev tinyify
//  browserify ./src/main.js > ./dist/bundle.js --plugin tinyify
//  const a = 'hello A'; consolo.log(a) ==>  consolo.log('hello A')锛?灏嗗父閲忕殑鍊艰浆涓虹洿鎺ュ湪鎺у埗鍙版棩蹇楀嚱鏁颁腑浣跨敤锛屾墍浠ユ垜浠娇鐢ㄧ殑鍐呭瓨鏇村皯锛岃繖鎰忓懗鐫€鎬ц兘鏇撮珮鐨勪唬鐮侊紝杩欏浜庣Щ鍔ㄦ祻瑙堝櫒闈炲父鏈夌敤銆?
//  涓€涓寘鍚暟鍗冭浠ｇ爜鐨勫ぇ鍨?js 鏂囦欢锛屾垜浠€氳繃 鏈０鏄庣殑鍙橀噺鏉ユ晠鎰忓垱寤轰竴涓敊璇紝鎻愮ず 鍙橀噺 閿欒鏉ヨ嚜绗?1296 琛岋紝杩欐剰鍛崇潃鎴戜滑闇€瑕佹粴鍔ㄦ暣涓〉闈互鍒拌揪淇銆傚ソ娑堟伅鏄湁涓€浜涚濂囩殑瑙ｅ喅鏂规鍙互甯姪瑙ｅ喅瀹冿紝瀹冭绉颁负 婧愭槧灏勶紝鍩烘湰涓婃槸鎹嗙粦涔嬪墠浠ｇ爜鐨勭紪鐮佽〃绀猴紝杩欐剰鍛崇潃 涓€鏃︽祻瑙堝櫒鎵惧埌涓€涓敊璇紝瀹冨皢 璇诲彇婧愭槧灏勫苟浣跨敤瀹冨憡璇夊紑鍙戜汉鍛樻潵鑷摢涓ā鍧楃殑鍝竴琛屼腑鐨勯敊璇?
//  browserify ./src/main.js > ./dist/bundle.js -d 涓嶈鍦ㄤ唬鐮佺殑鍙戣鐗堜腑鐢熸垚婧愪唬鐮佹槧灏勶紝鍥犱负瀹冩樉鐒朵細缁檅undle鏂囦欢澧炲姞澶鐨勫ぇ灏?
//  鐩村埌杩欓噷鎴戜滑娉ㄦ剰鍒拌緭鍏ラ偅涔堥暱鐨勫懡浠ゆ湁鐐圭儲浜猴紝灏界鎴戜滑鍙互鍥炶溅閫夋嫨鍛戒护锛屼絾涔熸湁寰堝皯浣跨敤鐨勫懡浠ょ粡甯稿繕璁般€?
//  涓€涓潪甯哥畝鍗曠殑瑙ｅ喅鏂规鏄垱寤轰竴涓嚜瀹氫箟鍛戒护锛岃鍛戒护鍙互寰堢煭锛屽苟涓旀湁涓€涓湁鎰忎箟鐨勫悕绉?==銆?package.json
//  鍒扮洰鍓嶄负姝紝鎴戜滑涓€鐩村湪灏嗕富妯″潡涓庝緷璧栭」浠ｇ爜锛屼絾鏈夋椂鎴戜滑甯屾湜鎶婂畠浠垎寮€锛屽苟灏嗕緷璧栭」淇濈暀涓虹嫭绔嬮儴鍒嗭紝鍥犱负瀹冨皢琚綉绔欑殑澶氫釜椤甸潰浣跨敤锛屽洜姝ゆ垜浠彲浠ョ紦瀛樺畠骞堕槻姝㈡祻瑙堝櫒鍦ㄦ瘡娆￠〉闈㈤渶瑕佸畠鏃跺悜鏈嶅姟鍣ㄥ彂閫佸彟涓€涓姹傘€?
//  browserify ./src/main.js -x animejs > ./dist/bundle.js 浣跨敤 -x 鏍囧織鍜屼緷璧栨€х殑璺緞 鎴?鍚嶇О 鍛婅瘔娴忚鍣ㄦ枃浠跺寘浣跨敤瀹冪殑渚濊禆锛屼絾鏄垜浠笉甯屾湜瀹冧繚瀛樺湪姘旀场鏂囦欢涓?
//  browserify -r animejs > ./dist/anime.js  -r 鏍囧織 琛ㄧず娴忚鍣ㄧ煡閬撹繖鏄竴涓緷璧栭」鐨勬柟寮忓垱寤猴紝骞朵笖闇€瑕佽涓绘ā鍧椾娇鐢ㄣ€?
 
const anime = require('animejs')
anime({
    targets:'body',
    duration:5000,
    backgroundColor:'#ffea00'
})



},{"animejs":"animejs"}]},{},[1]);
