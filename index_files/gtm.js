
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"921",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"--\";try{a=window.lp.analytics.dataLayer[0].page_type,\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a?(a=window.lp.analytics.dataLayer[0].content_group_2,a=\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a?\"--\":a.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase()):a=a.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase()}catch(b){a=\"--\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";try{if(a=window.lp.analytics.dataLayer[0].accountId,\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a)if(a=window.lp.analytics.dataLayer[0].lp_luna_uuid,\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a)if(a=window.lp.analytics.dataLayer[0].lp_luna_id,\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a){try{a=window.LP.loginManager.user.id}catch(c){a=\"\"}if(\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a)a=\"\"}}catch(c){a=\"\"}if(\"\"!=a){var b=new Date;b.setFullYear(b.getFullYear()+10);\ndocument.cookie=\"ttid\\x3d\"+a+\"; expires\\x3d\"+b.toGMTString()+\";\"}else if(-1\u003Cdocument.cookie.indexOf(\"ttid\"))try{b=\"; \"+document.cookie;var d=b.split(\"; ttid\\x3d\");2==d.length\u0026\u0026(a=d.pop().split(\";\").shift())}catch(c){a=\"\"}else a=\"\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"--\";try{if(a=window.lp.analytics.dataLayer[0].lp_luna_uuid,\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a)if(a=window.lp.analytics.dataLayer[0].lp_luna_id,\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a){try{a=window.LP.loginManager.user.id}catch(b){a=\"--\"}if(\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a)a=\"--\"}}catch(b){a=\"--\"}return\"--\"==a?\"logged out\":\"logged in\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"--\";try{a=localStorage.getItem(\"cd30_AdBlock\"),null!=a\u0026\u0026(a=a.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase())}catch(b){a=\"--\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"--\";try{if(a=document.title,\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a)a=\"--\"}catch(b){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"--\";try{a=window.lp.analytics.dataLayer[0].subtype,\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a?(a=window.lp.analytics.dataLayer[0].subtypes,a=\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a?\"--\":a.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase()):a=a.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase()}catch(b){a=\"--\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $gtm(\"#activities-op\").parent().parent().parent().length\u0026\u0026\"tours\"==$gtm(\"#activities-op\").parent().parent().parent().attr(\"id\")?\"tours:open planet\":$gtm(\"#activities-es\").parent().parent().parent().length\u0026\u0026\"tours\"==$gtm(\"#activities-es\").parent().parent().parent().attr(\"id\")?\"tours:elasticsearch\":\"--\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"--\";try{a=document.referrer}catch(b){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"==typeof window.utag_data?\"gtm\":\"utag\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"false\";try{a=lp.analytics.dataLayer[0].detail.product_ids,\"undefined\"!=typeof a\u0026\u0026\"object\"!=typeof a\u0026\u0026\"\"!=a\u0026\u0026(a=\"true\")}catch(b){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=url?url:window.location.href,b=\/[?\u0026]dfpkey=([^\u0026#]*)\/i;return(a=b.exec(a))?a[1]:\"--\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){name=\"dfpkey\";var a=new RegExp(\"[?\\x26]\"+name+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");a=a.exec(window.location.href);try{return decodeURIComponent(a[2].replace(\/\\+\/g,\" \"))}catch(b){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"--\";try{if(a=window.lp.analytics.dataLayer[0].atlas_id,\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a)a=\"--\"}catch(b){a=\"--\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"--\";try{a=location.protocol}catch(b){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"--\";try{var b=window.location.hash.indexOf(\"#\");a=-1!=b?window.location.hash.substring(b+1):\"--\";if(\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a)a=\"--\"}catch(c){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return navigator.userAgent})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.lp.analytics.dataLayer[0].purchased.order_id})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.lp.analytics.dataLayer[0].purchased.order_total})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.lp.analytics.dataLayer[0].purchased.order_promo_code})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.lp.analytics.dataLayer[0].purchased.currency_code;return\"USD\"==a?\"4217\":\"EUR\"==a||\"GBP\"==a?\"1238\":\"0\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.lp.analytics.dataLayer[0].purchased.currency_code})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"--\";try{a=window.lp.analytics.dataLayer[0].purchased[0].product_ids,a=\"undefined\"==typeof a||\"object\"==typeof a||\"\"==a?\"--\":a.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase()}catch(b){a=\"--\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"50\";return function(b){try{a\u0026\u0026b.set(\"dimension\"+a,b.get(\"clientId\"))}catch(c){console.log(c)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.lp.analytics.dataLayer[0].detail.product_prices})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=50;return function(b){try{a\u0026\u0026b.set(\"dimension\"+String(a),b.get(\"clientId\"))}catch(c){console.log(c)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(c,d,e){var a=function(a){return(a=a.replace(\/^\\\/[a-z]{2}-[a-z]{2}\/i,\"\"))?a:\"\/\"},n=function(a,c){var e=a.split(\/[\u0026;]\/),f=[],g=\"\";if(\"\"===a)return\"\";for(var b=0;b\u003Ce.length;b++){var k=e[b].split(\"\\x3d\"),d=k[0];k=k[1];include=!0;for(var l=0;l\u003Cc.length;l++){var h;(h=d.toLowerCase()===c[l].toLowerCase())||(h=\/(([^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+(\\.[^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))\/,h=h.test(d));h\u0026\u0026(include=\n!1)}include\u0026\u0026f.push({name:d,value:k})}for(b=0;b\u003Cf.length;b++)g+=f[b].name,g+=\"\\x3d\",g+=f[b].value,b!==f.length-1\u0026\u0026(g+=\"\\x26\");return\"?\"+g};a=a(c);var m=a.split(\"?\");c=m[0];a=1\u003Cm.length?a.replace(c,\"\").substring(1):\"\";d=n(a,d);a=c+d;a=a.replace(\/([a-zA-Z0-9\\.\\+_-`~!#\\$%\\^\u0026*\\(\\)]+(@|%40|%2540)[a-zA-Z0-9\\.\\+_-`~!#\\$%\\^\u0026*\\(\\)]+\\.[a-zA-Z0-9\\.\\+_-`~!#\\$%\\^*\\(\\)]+)\/gi,e);\"?\"==a.substring(a.length-1)\u0026\u0026(a=a.substring(0,a.length-1));return a}return e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.lp.analytics.dataLayer[0].purchased.order_shipping_amt})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.lp.analytics.dataLayer[0].purchased.order_tax_amt})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[\"domain1.com\"],a=0;a\u003Cb.length;a++){var c=new RegExp(b[a],\"i\");if(c.test(",["escape",["macro",28],8,16],"))return!0}return!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product_categories"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product_variants"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"country"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_group_1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_group_2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_group_3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd1_Continent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd2_Country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd3_City"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd4_Neighbourhood"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd5_Region"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd6_SiteSection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd7_Topic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd8_BookingType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd9_TestExperience"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd10_ArticleName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd11_ForumCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd12_ForumContinent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd13_ForumCountry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd14_ForumPostTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd21_AtlasDestination"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd22_ApplicationName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd25_Bookable"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd26_PartnerOfferingDetails"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd27_PartnerOfferingKind"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd28_PartnerName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"poiType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"resource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kind"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"poiName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"channel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"interest"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",22]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",40]],["map","index","2","group",["macro",41]],["map","index","3","group",["macro",42]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",43]],["map","index","2","dimension",["macro",44]],["map","index","3","dimension",["macro",45]],["map","index","4","dimension",["macro",46]],["map","index","5","dimension",["macro",47]],["map","index","6","dimension",["macro",48]],["map","index","7","dimension",["macro",49]],["map","index","8","dimension",["macro",50]],["map","index","9","dimension",["macro",51]],["map","index","10","dimension",["macro",52]],["map","index","11","dimension",["macro",53]],["map","index","12","dimension",["macro",54]],["map","index","13","dimension",["macro",55]],["map","index","14","dimension",["macro",56]],["map","index","21","dimension",["macro",57]],["map","index","22","dimension",["macro",58]],["map","index","24","dimension",["macro",2]],["map","index","25","dimension",["macro",59]],["map","index","26","dimension",["macro",60]],["map","index","27","dimension",["macro",61]],["map","index","28","dimension",["macro",62]],["map","index","29","dimension",["macro",1]],["map","index","30","dimension",["macro",3]],["map","index","32","dimension",["macro",7]],["map","index","33","dimension",["macro",6]],["map","index","34","dimension",["macro",63]],["map","index","35","dimension",["macro",0]],["map","index","36","dimension",["macro",64]],["map","index","37","dimension",["macro",65]],["map","index","38","dimension",["macro",5]],["map","index","39","dimension",["macro",66]],["map","index","46","dimension",["macro",67]],["map","index","47","dimension",["macro",68]],["map","index","51","dimension",["macro",13]],["map","index","52","dimension",["macro",14]],["map","index","57","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-11222786-2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"insuranceWidgetType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteSection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"destinationDirectory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"firstname lastname nickname address gender p e profileurl email pwd fname lname user\".split(\" \"),b=\"email_removed\",c=",["escape",["macro",25],8,16],",d=document.location.pathname+document.location.search;return c(d,a,b)})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"firstname lastname nickname address gender p e profileurl email pwd fname lname user\".split(\" \"),b=\"email_removed\",c=",["escape",["macro",25],8,16],";return c(",["escape",["macro",74],8,16],",a,b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"applicationName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"campaignPageName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"destinationSubNav"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"atlasId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"testExperience"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentContinent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentCountry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentCity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentNeighbourhood"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentRegion"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"forumCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"forumContinent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"forumCountry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"forumPostTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"poiAttributes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hasPhoto"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleTemplate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adBlock"
    },{
      "function":"__f",
      "vtp_stripWww":false,
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"poiType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hasVideo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"poiVenueType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"poiName"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",71]],["map","index","2","group",["macro",41]],["map","index","3","group",["macro",72]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"booking.com, viator.com, rome2rio.com, hotels.lonelyplanet.com",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","allowLinker","value","true"],["map","fieldName","page","value",["macro",73]],["map","fieldName","referrer","value",["macro",75]],["map","fieldName","userId","value",["macro",76]],["map","fieldName","customTask","value",["macro",24]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","15","dimension",["macro",76]],["map","index","22","dimension",["macro",77]],["map","index","24","dimension",["macro",78]],["map","index","17","dimension",["macro",79]],["map","index","6","dimension",["macro",71]],["map","index","18","dimension",["macro",72]],["map","index","19","dimension",["macro",80]],["map","index","25","dimension",["macro",81]],["map","index","26","dimension",["macro",82]],["map","index","9","dimension",["macro",83]],["map","index","29","dimension",["macro",84]],["map","index","31","dimension",["macro",85]],["map","index","32","dimension",["macro",74]],["map","index","1","dimension",["macro",86]],["map","index","2","dimension",["macro",87]],["map","index","3","dimension",["macro",88]],["map","index","4","dimension",["macro",89]],["map","index","5","dimension",["macro",90]],["map","index","10","dimension",["macro",91]],["map","index","11","dimension",["macro",92]],["map","index","12","dimension",["macro",93]],["map","index","13","dimension",["macro",94]],["map","index","14","dimension",["macro",95]],["map","index","20","dimension",["macro",96]],["map","index","21","dimension",["macro",97]],["map","index","27","dimension",["macro",98]],["map","index","30","dimension",["macro",99]],["map","index","33","dimension",["macro",100]],["map","index","34","dimension",["macro",101]],["map","index","35","dimension",["macro",102]],["map","index","37","dimension",["macro",103]],["map","index","38","dimension",["macro",104]],["map","index","39","dimension",["macro",105]],["map","index","57","dimension",["macro",106]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-11222786-2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAction"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",108],
      "vtp_map":["list",["map","key","play","value","12"],["map","key","finish","value","13"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAutoplay"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bookingType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"partner"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bookingDestination"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bookingDepartureDate"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"registrationStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"registrationSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shareLocation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mobileAppName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"platformType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.promoClick.promotions.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.promoClick.promotions.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkLocation"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"validation"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tagType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tagLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tagId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"site_section"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product_names"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"lpCurrency"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bookingProvider"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bookingName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tnm"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"carouselIsHidden"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bookingReturnDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"partner"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAutoplay"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10000000000000000,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async=\"async\" data-gtmsrc=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.pubads().disableInitialLoad()});window.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dfp=window.lp.analytics.dfp||{};window.dfpSlots=window.dfpSlots||{};lp.ads=lp.ads||{};$gtm.fn.isOnScreen=function(){var b=500;var a=$gtm(window).scrollTop();var c=a+$gtm(window).height()+b;a=a\u003Cb?0:a-b;b=this.offset().top;var d=b+this.outerHeight();return b\u003C=c\u0026\u0026d\u003E=a};\nfunction getFromDataLayer(b){var a=window.lp.analytics.dataLayer,c=\"--\";if(!a||!Array.isArray(a)||1\u003Ea.length)return c;for(var d=0;d\u003Ca.length;d++){var e=a[d][b];if(e){c=e;break}}return c}\nfunction DFPpush1x1(b,a,c){googletag.cmd.push(function(){window.dfpSlots[a]=googletag.defineSlot(b,[[1,1],[320,60],[300,500],[600,300]],a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",getFromDataLayer(\"cd7_Topic\")).setTargeting(\"site_section\",getFromDataLayer(\"cd6_SiteSection\")).setTargeting(\"tnm\",window.location.pathname.split(\"?\")[0].split(\"\/\").slice(-1)[0]).setTargeting(\"ctt\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"continent\",\nwindow.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"cnty\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"country\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"city\",window.lp.ads.city?window.lp.ads.city:\"--\").setTargeting(\"dest\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"destination\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"state\",window.lp.ads.state?window.lp.ads.state:\"--\").setTargeting(\"interest\",\nwindow.lp.ads.interest?window.lp.ads.interest:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",c).addService(googletag.pubads());googletag.enableServices();googletag.display(a);callfetchibids(a,b,[[1,1],[320,60],[300,500],[600,300]])})}\nfunction DFPpushSuperZone(b,a,c){googletag.cmd.push(function(){var d=googletag.sizeMapping().addSize([1600,0],[[1600,400],[970,250],[728,90],[1,1]]).addSize([970,0],[[970,250],[728,90],[1,1]]).addSize([728,0],[[728,90],[1,1]]).addSize([300,0],[[300,250],[1,1]]).addSize([0,0],[]).build();window.dfpSlots[a]=googletag.defineSlot(b,[[1,1],[970,250],[300,250],[728,90]],a).defineSizeMapping(d).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",getFromDataLayer(\"cd7_Topic\")).setTargeting(\"site_section\",\ngetFromDataLayer(\"cd6_SiteSection\")).setTargeting(\"tnm\",window.location.pathname.split(\"?\")[0].split(\"\/\").slice(-1)[0]).setTargeting(\"ctt\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"continent\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"cnty\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"country\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"city\",window.lp.ads.city?window.lp.ads.city:\"--\").setTargeting(\"dest\",window.lp.ads.destination?\nwindow.lp.ads.destination:\"--\").setTargeting(\"destination\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"state\",window.lp.ads.state?window.lp.ads.state:\"--\").setTargeting(\"interest\",window.lp.ads.interest?window.lp.ads.interest:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",c).addService(googletag.pubads());googletag.enableServices();googletag.display(a);callfetchibids(a,b,parseSizeMappings(d))})}\nfunction DFPpushLeader(b,a,c){googletag.cmd.push(function(){var d=googletag.sizeMapping().addSize([1600,0],[[1600,600],[970,250],[728,90]]).addSize([970,0],[[970,250],[728,90]]).addSize([768,0],[[728,90]]).addSize([320,0],[[300,250],[320,50]]).addSize([0,0],[]).build();window.dfpSlots[a]=googletag.defineSlot(b,[[1,1],[300,250],[150,120],[970,250],[970,90],[320,50],[728,90]],a).defineSizeMapping(d).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"site_section\",\ngetFromDataLayer(\"cd6_SiteSection\")).setTargeting(\"tnm\",window.location.pathname.split(\"?\")[0].split(\"\/\").slice(-1)[0]).setTargeting(\"ctt\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"continent\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"cnty\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"country\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"city\",window.lp.ads.city?window.lp.ads.city:\"--\").setTargeting(\"dest\",window.lp.ads.destination?\nwindow.lp.ads.destination:\"--\").setTargeting(\"destination\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"state\",window.lp.ads.state?window.lp.ads.state:\"--\").setTargeting(\"interest\",window.lp.ads.interest?window.lp.ads.interest:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",c).addService(googletag.pubads());googletag.enableServices();googletag.display(a);callfetchibids(a,b,parseSizeMappings(d))})}\nfunction DFPpushInArticle(b,a,c){googletag.cmd.push(function(){var d=googletag.sizeMapping().addSize([768,0],[[1,1],[300,250]]).addSize([320,0],[[320,50],[1,1],[300,250]]).addSize([0,0],[]).build();window.dfpSlots[a]=googletag.defineSlot(b,[[320,50],[1,1],[300,250]],a).defineSizeMapping(d).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"site_section\",getFromDataLayer(\"cd6_SiteSection\")).setTargeting(\"tnm\",window.location.pathname.split(\"?\")[0].split(\"\/\").slice(-1)[0]).setTargeting(\"ctt\",\nwindow.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"continent\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"cnty\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"country\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"city\",window.lp.ads.city?window.lp.ads.city:\"--\").setTargeting(\"dest\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"destination\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"state\",\nwindow.lp.ads.state?window.lp.ads.state:\"--\").setTargeting(\"interest\",window.lp.ads.interest?window.lp.ads.interest:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",c).addService(googletag.pubads());googletag.enableServices();googletag.display(a);callfetchibids(a,b,parseSizeMappings(d))})}\nfunction DFPpushYieldMo(b,a,c){googletag.cmd.push(function(){window.dfpSlots[a]=googletag.defineSlot(b,[[300,250],[320,50]],a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"site_section\",getFromDataLayer(\"cd6_SiteSection\")).setTargeting(\"tnm\",window.location.pathname.split(\"?\")[0].split(\"\/\").slice(-1)[0]).setTargeting(\"ctt\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"continent\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"cnty\",\nwindow.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"country\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"city\",window.lp.ads.city?window.lp.ads.city:\"--\").setTargeting(\"dest\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"destination\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"state\",window.lp.ads.state?window.lp.ads.state:\"--\").setTargeting(\"interest\",window.lp.ads.interest?window.lp.ads.interest:\"--\").setTargeting(\"dfpkey\",\n",["escape",["macro",11],8,16],").setTargeting(\"position\",c).addService(googletag.pubads());googletag.enableServices();googletag.display(a);callfetchibids(a,b,[[300,250],[320,50]])})}\nfunction DFPpushRail(b,a,c){googletag.cmd.push(function(){var d=googletag.sizeMapping().addSize([768,0],[[300,600]]).addSize([320,0],[[300,250]]).addSize([0,0],[]).build();window.dfpSlots[a]=googletag.defineSlot(b,[[300,600],[300,250]],a).defineSizeMapping(d).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"site_section\",getFromDataLayer(\"cd6_SiteSection\")).setTargeting(\"tnm\",window.location.pathname.split(\"?\")[0].split(\"\/\").slice(-1)[0]).setTargeting(\"ctt\",\nwindow.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"continent\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"cnty\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"country\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"city\",window.lp.ads.city?window.lp.ads.city:\"--\").setTargeting(\"dest\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"destination\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"state\",\nwindow.lp.ads.state?window.lp.ads.state:\"--\").setTargeting(\"interest\",window.lp.ads.interest?window.lp.ads.interest:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",c).addService(googletag.pubads());googletag.enableServices();googletag.display(a);callfetchibids(a,b,parseSizeMappings(d))})};\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction getWindowDimensions(){var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,b=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return[a,b]}function parseSizeMappings(a){try{var b=getWindowDimensions(),c=a.filter(function(a){return a[0][0]\u003C=b[0]\u0026\u0026a[0][1]\u003C=b[1]});return 0\u003Cc.length?c[0][1]:[]}catch(d){return console.log(\"error parsing sizeMappings:\"),console.log(a),console.log(d),a[a.length-1][1]}}\n!function(a,b,c,d,g,e,f){b[a]||(b[a]={init:function(){b[a]._Q.push([\"i\",arguments])},fetchBids:function(){b[a]._Q.push([\"f\",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(\"apstag\",window,document,\"script\",\"\/\/c.amazon-adsystem.com\/aax2\/apstag.js\");apstag.init({pubID:\"9ff46a1a-506a-48db-933d-3a15b9fc3f87\",adServer:\"googletag\"});\nfunction callfetchibids(a,b,c){apstag.fetchBids({slots:[{slotID:a,slotName:b,sizes:c}],timeout:2E3},function(b){googletag.cmd.push(function(){apstag.setDisplayBids();googletag.pubads().refresh([window.dfpSlots[a]])})})};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00426801",
      "tag_id":18
    },{
      "function":"__csm",
      "once_per_event":true,
      "vtp_clientId":"18074138",
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":59
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":142
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":179
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"partner",
      "vtp_useImageTag":false,
      "vtp_activityTag":"activ0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8275102",
      "vtp_ordinalStandard":["macro",32],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":198
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"partner",
      "vtp_useImageTag":false,
      "vtp_activityTag":"adven0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8275102",
      "vtp_ordinalStandard":["macro",32],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":199
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"partner",
      "vtp_useImageTag":false,
      "vtp_activityTag":"airpo0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8275102",
      "vtp_ordinalStandard":["macro",32],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":201
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"partner",
      "vtp_useImageTag":false,
      "vtp_activityTag":"carre0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8275102",
      "vtp_ordinalStandard":["macro",32],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":202
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"partner",
      "vtp_useImageTag":false,
      "vtp_activityTag":"fligh0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8275102",
      "vtp_ordinalStandard":["macro",32],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":203
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"partner",
      "vtp_useImageTag":false,
      "vtp_activityTag":"holid0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8275102",
      "vtp_ordinalStandard":["macro",32],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":204
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"partner",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hotel0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8275102",
      "vtp_ordinalStandard":["macro",32],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":205
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"partner",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sight0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8275102",
      "vtp_ordinalStandard":["macro",32],
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":206
    },{
      "function":"__fls",
      "vtp_customVariable":["list",["map","key","u1","value",["macro",35]],["map","key","u2","value",["macro",36]]],
      "vtp_revenue":["macro",17],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",16],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sale",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sales0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8275102",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",33],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":216
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/www.awin1.com\/sread.img?tt=ns\u0026tv=2\u0026merchant=",["escape",["macro",19],12],"\u0026amount=",["escape",["macro",17],12],"\u0026cr=USD\u0026ref=",["escape",["macro",16],12],"\u0026parts=Default:",["escape",["macro",17],12],"\u0026vc=",["escape",["macro",18],12],"\u0026ch=aw\u0026testmode=0"],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",32],
      "tag_id":217
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","google_custom_params","value","window.google_tag_params"]],
      "vtp_conversionId":"1036907458",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",33],
      "tag_id":228
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",17],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"810992074",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"OKY8CPP5t38QyoPbggM",
      "vtp_url":["macro",33],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":232
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",17],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"810960798",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"EQNBCO3wt38Qno_ZggM",
      "vtp_url":["macro",33],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":233
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",17],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"810993683",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"NL_KCJ74t38Qk5DbggM",
      "vtp_url":["macro",33],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":234
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",17],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"810993275",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"7-YVCIzgoH8Q-4zbggM",
      "vtp_url":["macro",33],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":235
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",17],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"810992044",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"scl0CPH3t38QrIPbggM",
      "vtp_url":["macro",33],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":236
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",17],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"810991993",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"hFCjCJzts38Q-YLbggM",
      "vtp_url":["macro",33],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":237
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",17],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"810960339",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"fpbXCMXys38Q04vZggM",
      "vtp_url":["macro",33],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":238
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":250
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Thorn Tree Insurance Widget",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",69],
      "vtp_eventAction":"conversion",
      "vtp_eventLabel":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":253
    },{
      "function":"__opt",
      "teardown_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-MSX7VJ2",
      "vtp_gaSettings":["macro",69],
      "tag_id":267
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":268
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":292
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",107],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":300
    },{
      "function":"__opt",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-MSX7VJ2",
      "vtp_gaSettings":["macro",69],
      "tag_id":301
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",109],"metric","1"]],
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":["macro",108],
      "vtp_eventLabel":["macro",110],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - Video Tracking"],["map","index","36","dimension",["macro",111]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1033
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","9","metric",["macro",113]]],
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":"onsite download",
      "vtp_eventLabel":["template","to: ",["macro",112]],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - Download"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1034
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"partner click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric",["macro",114]]],
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":["macro",115],
      "vtp_eventLabel":["macro",116],
      "vtp_dimension":["list",["map","index","41","dimension",["macro",117]],["map","index","42","dimension",["macro",118]],["map","index","7","dimension","GA - Event - Partner Clicks"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1035
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"outbound link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":"non-social outbound link",
      "vtp_eventLabel":["template","to: ",["macro",112]],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - Non-Social Outbound Link"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1036
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":"social outbound link",
      "vtp_eventLabel":["template","to: ",["macro",112]],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - Social Outbound Link"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1037
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"user acquisition",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","18","metric",["macro",119]]],
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":["template","registration:",["macro",120]],
      "vtp_eventLabel":["macro",121],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - Registration"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1038
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":["template","share location: ",["macro",122]],
      "vtp_eventLabel":["template",["macro",123]," share"],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - Social Intent to Share"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1039
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","14","metric",["macro",124]]],
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":"intent to download app",
      "vtp_eventLabel":["template",["macro",125],": ",["macro",126]],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - Mobile App Download"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1040
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":"promotion impression",
      "vtp_eventLabel":["macro",71],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - EE - Promotion Impression"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1041
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":"promotion click",
      "vtp_eventLabel":["template",["macro",127],":",["macro",128]],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - EE - Promotion Click"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1042
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"cta link click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",69],
      "vtp_eventAction":["template","page: ",["macro",103]],
      "vtp_eventLabel":["template",["macro",129],": ",["macro",130]],
      "vtp_dimension":["list",["map","index","59","dimension",["macro",130]],["map","index","60","dimension",["macro",112]],["map","index","7","dimension","GA - Event - CTA Button Clicks"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1043
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","10","metric",["macro",131]]],
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":"submission",
      "vtp_eventLabel":["template",["macro",132],": submit ",["macro",133]],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - Form Submission"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1044
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"user acquisition",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","17","metric",["macro",134]]],
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":"newsletter subscription",
      "vtp_eventLabel":["macro",71],
      "vtp_dimension":["list",["map","index","7","dimension","GA - Event - Newsletter Subscription"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1045
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search-Filter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":["template",["macro",135],": ",["macro",136]],
      "vtp_eventLabel":["macro",137],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1051
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Search-Unfilter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",107],
      "vtp_eventAction":["template",["macro",135],": ",["macro",136]],
      "vtp_eventLabel":["macro",137],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1055
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Outbound Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",69],
      "vtp_eventAction":["macro",112],
      "vtp_eventLabel":["macro",34],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1056
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".js-travel-widget",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2557567_868",
      "tag_id":1057
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".js-travel-widget--nav",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2557567_874",
      "tag_id":1058
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"20, 40, 60, 80, 95",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2557567_1012",
      "tag_id":1059
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2557567_1022",
      "tag_id":1060
    },{
      "function":"__cl",
      "tag_id":1061
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2557567_1946",
      "tag_id":1062
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2557567_1948",
      "tag_id":1063
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2557567_1949",
      "tag_id":1064
    },{
      "function":"__hl",
      "tag_id":1065
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2557567_2044",
      "tag_id":1066
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/www.google-analytics.com\/analytics.js\",\"ga\");ga(\"create\",\"UA-11222786-2\",\"auto\");ga(\"require\",\"ec\");ga(\"set\",\"transport\",\"beacon\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n jQuery v3.1.1 | (c) jQuery Foundation | jquery.org\/license *\/\nvar $gtm=function(Vc,Ra){!function(p,wa){\"object\"==typeof module\u0026\u0026\"object\"==typeof module.exports?module.exports=p.document?wa(p,!0):function(p){if(!p.document)throw Error(\"jQuery requires a window with a document\");return wa(p)}:wa(p)}(\"undefined\"!=typeof window?window:this,function(p,wa){function eb(a,b){b=b||q;var d=b.createElement(\"script\");d.text=a;b.head.appendChild(d).parentNode.removeChild(d)}function Sa(a){var b=!!a\u0026\u0026\"length\"in a\u0026\u0026a.length,d=c.type(a);return\"function\"!==d\u0026\u0026!c.isWindow(a)\u0026\u0026\n(\"array\"===d||0===b||\"number\"==typeof b\u0026\u00260\u003Cb\u0026\u0026b-1 in a)}function Ta(a,b,d){return c.isFunction(b)?c.grep(a,function(a,c){return!!b.call(a,c,a)!==d}):b.nodeType?c.grep(a,function(a){return a===b!==d}):\"string\"!=typeof b?c.grep(a,function(a){return-1\u003Cda.call(b,a)!==d}):Xb.test(b)?c.filter(b,a,d):(b=c.filter(b,a),c.grep(a,function(a){return-1\u003Cda.call(b,a)!==d\u0026\u00261===a.nodeType}))}function fb(a,b){for(;(a=a[b])\u0026\u00261!==a.nodeType;);return a}function Yb(a){var b={};return c.each(a.match(M)||[],function(a,c){b[c]=\n!0}),b}function ea(a){return a}function xa(a){throw a;}function gb(a,b,d){var e;try{a\u0026\u0026c.isFunction(e=a.promise)?e.call(a).done(b).fail(d):a\u0026\u0026c.isFunction(e=a.then)?e.call(a,b,d):b.call(void 0,a)}catch(f){d.call(void 0,f)}}function ya(){q.removeEventListener(\"DOMContentLoaded\",ya);p.removeEventListener(\"load\",ya);c.ready()}function za(){this.expando=c.expando+za.uid++}function hb(a,b,d){var c;if(void 0===d\u0026\u00261===a.nodeType)if(c=\"data-\"+b.replace(Zb,\"-$\\x26\").toLowerCase(),d=a.getAttribute(c),\"string\"==\ntypeof d){try{c=d,d=\"true\"===c||\"false\"!==c\u0026\u0026(\"null\"===c?null:c===+c+\"\"?+c:$b.test(c)?JSON.parse(c):c)}catch(f){}E.set(a,b,d)}else d=void 0;return d}function ib(a,b,d,e){var f,g=1,h=20,k=e?function(){return e.cur()}:function(){return c.css(a,b,\"\")},l=k(),n=d\u0026\u0026d[3]||(c.cssNumber[b]?\"\":\"px\"),m=(c.cssNumber[b]||\"px\"!==n\u0026\u0026+l)\u0026\u0026Aa.exec(c.css(a,b));if(m\u0026\u0026m[3]!==n){n=n||m[3];d=d||[];m=+l||1;do g=g||\".5\",m\/=g,c.style(a,b,m+n);while(g!==(g=k()\/l)\u0026\u00261!==g\u0026\u0026--h)}return d\u0026\u0026(m=+m||+l||0,f=d[1]?m+(d[1]+1)*d[2]:\n+d[2],e\u0026\u0026(e.unit=n,e.start=m,e.end=f)),f}function oa(a,b){for(var d,e,f=[],g=0,h=a.length;g\u003Ch;g++)if(e=a[g],e.style)if(d=e.style.display,b){if(\"none\"===d\u0026\u0026(f[g]=r.get(e,\"display\")||null,f[g]||(e.style.display=\"\")),\"\"===e.style.display\u0026\u0026Fa(e)){d=g;var k=void 0;var l=e.ownerDocument;var n=e.nodeName;l=(e=jb[n])?e:(k=l.body.appendChild(l.createElement(n)),e=c.css(k,\"display\"),k.parentNode.removeChild(k),\"none\"===e\u0026\u0026(e=\"block\"),jb[n]=e,e);f[d]=l}}else\"none\"!==d\u0026\u0026(f[g]=\"none\",r.set(e,\"display\",d));for(g=\n0;g\u003Ch;g++)null!=f[g]\u0026\u0026(a[g].style.display=f[g]);return a}function B(a,b){var d;return d=\"undefined\"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||\"*\"):\"undefined\"!=typeof a.querySelectorAll?a.querySelectorAll(b||\"*\"):[],void 0===b||b\u0026\u0026c.nodeName(a,b)?c.merge([a],d):d}function Ua(a,b){for(var d=0,c=a.length;d\u003Cc;d++)r.set(a[d],\"globalEval\",!b||r.get(b[d],\"globalEval\"))}function kb(a,b,d,e,f){for(var g,h,k,l,n=b.createDocumentFragment(),m=[],y=0,I=a.length;y\u003CI;y++)if(g=a[y],g||0===g)if(\"object\"===\nc.type(g))c.merge(m,g.nodeType?[g]:g);else if(ac.test(g)){h=h||n.appendChild(b.createElement(\"div\"));k=(lb.exec(g)||[\"\",\"\"])[1].toLowerCase();k=F[k]||F._default;h.innerHTML=k[1]+c.htmlPrefilter(g)+k[2];for(k=k[0];k--;)h=h.lastChild;c.merge(m,h.childNodes);h=n.firstChild;h.textContent=\"\"}else m.push(b.createTextNode(g));n.textContent=\"\";for(y=0;g=m[y++];)if(e\u0026\u0026-1\u003Cc.inArray(g,e))f\u0026\u0026f.push(g);else if(l=c.contains(g.ownerDocument,g),h=B(n.appendChild(g),\"script\"),l\u0026\u0026Ua(h),d)for(k=0;g=h[k++];)mb.test(g.type||\n\"\")\u0026\u0026d.push(g);return n}function Ga(){return!0}function Z(){return!1}function nb(){try{return q.activeElement}catch(a){}}function Va(a,b,d,e,f,g){var h,k;if(\"object\"==typeof b){\"string\"!=typeof d\u0026\u0026(e=e||d,d=void 0);for(k in b)Va(a,k,d,e,b[k],g);return a}if(null==e\u0026\u0026null==f?(f=d,e=d=void 0):null==f\u0026\u0026(\"string\"==typeof d?(f=e,e=void 0):(f=e,e=d,d=void 0)),!1===f)f=Z;else if(!f)return a;return 1===g\u0026\u0026(h=f,f=function(a){return c().off(a),h.apply(this,arguments)},f.guid=h.guid||(h.guid=c.guid++)),a.each(function(){c.event.add(this,\nb,f,e,d)})}function ob(a,b){return c.nodeName(a,\"table\")\u0026\u0026c.nodeName(11!==b.nodeType?b:b.firstChild,\"tr\")?a.getElementsByTagName(\"tbody\")[0]||a:a}function bc(a){return a.type=(null!==a.getAttribute(\"type\"))+\"\/\"+a.type,a}function cc(a){var b=dc.exec(a.type);return b?a.type=b[1]:a.removeAttribute(\"type\"),a}function pb(a,b){var d,e,f,g,h,k;if(1===b.nodeType){if(r.hasData(a)\u0026\u0026(d=r.access(a),e=r.set(b,d),k=d.events))for(f in delete e.handle,e.events={},k)for(d=0,e=k[f].length;d\u003Ce;d++)c.event.add(b,f,k[f][d]);\nE.hasData(a)\u0026\u0026(g=E.access(a),h=c.extend({},g),E.set(b,h))}}function pa(a,b,d,e){b=qb.apply([],b);var f,g,h,k=0,l=a.length,n=l-1,m=b[0],y=c.isFunction(m);if(y||1\u003Cl\u0026\u0026\"string\"==typeof m\u0026\u0026!t.checkClone\u0026\u0026ec.test(m))return a.each(function(c){var f=a.eq(c);y\u0026\u0026(b[0]=m.call(this,c,f.html()));pa(f,b,d,e)});if(l\u0026\u0026(f=kb(b,a[0].ownerDocument,!1,a,e),g=f.firstChild,1===f.childNodes.length\u0026\u0026(f=g),g||e)){g=c.map(B(f,\"script\"),bc);for(h=g.length;k\u003Cl;k++){var I=f;k!==n\u0026\u0026(I=c.clone(I,!0,!0),h\u0026\u0026c.merge(g,B(I,\"script\")));\nd.call(a[k],I,k)}if(h)for(f=g[g.length-1].ownerDocument,c.map(g,cc),k=0;k\u003Ch;k++)I=g[k],mb.test(I.type||\"\")\u0026\u0026!r.access(I,\"globalEval\")\u0026\u0026c.contains(f,I)\u0026\u0026(I.src?c._evalUrl\u0026\u0026c._evalUrl(I.src):eb(I.textContent.replace(fc,\"\"),f))}return a}function rb(a,b,d){for(var e=b?c.filter(b,a):a,f=0;null!=(b=e[f]);f++)d||1!==b.nodeType||c.cleanData(B(b)),b.parentNode\u0026\u0026(d\u0026\u0026c.contains(b.ownerDocument,b)\u0026\u0026Ua(B(b,\"script\")),b.parentNode.removeChild(b));return a}function aa(a,b,d){var e,f,g,h,k=a.style;return d=d||qa(a),\nd\u0026\u0026(h=d.getPropertyValue(b)||d[b],\"\"!==h||c.contains(a.ownerDocument,a)||(h=c.style(a,b)),!t.pixelMarginRight()\u0026\u0026Wa.test(h)\u0026\u0026sb.test(b)\u0026\u0026(e=k.width,f=k.minWidth,g=k.maxWidth,k.minWidth=k.maxWidth=k.width=h,h=d.width,k.width=e,k.minWidth=f,k.maxWidth=g)),void 0!==h?h+\"\":h}function tb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function ub(a){if(a in vb)return a;for(var b=a[0].toUpperCase()+a.slice(1),d=wb.length;d--;)if(a=wb[d]+b,a in vb)return a}\nfunction xb(a,b,d){return(a=Aa.exec(b))?Math.max(0,a[2]-(d||0))+(a[3]||\"px\"):b}function yb(a,b,d,e,f){var g=0;for(b=d===(e?\"border\":\"content\")?4:\"width\"===b?1:0;4\u003Eb;b+=2)\"margin\"===d\u0026\u0026(g+=c.css(a,d+ia[b],!0,f)),e?(\"content\"===d\u0026\u0026(g-=c.css(a,\"padding\"+ia[b],!0,f)),\"margin\"!==d\u0026\u0026(g-=c.css(a,\"border\"+ia[b]+\"Width\",!0,f))):(g+=c.css(a,\"padding\"+ia[b],!0,f),\"padding\"!==d\u0026\u0026(g+=c.css(a,\"border\"+ia[b]+\"Width\",!0,f)));return g}function zb(a,b,d){var e,f=!0,g=qa(a),h=\"border-box\"===c.css(a,\"boxSizing\",!1,g);\nif(a.getClientRects().length\u0026\u0026(e=a.getBoundingClientRect()[b]),0\u003E=e||null==e){if(e=aa(a,b,g),(0\u003Ee||null==e)\u0026\u0026(e=a.style[b]),Wa.test(e))return e;f=h\u0026\u0026(t.boxSizingReliable()||e===a.style[b]);e=parseFloat(e)||0}return e+yb(a,b,d||(h?\"border\":\"content\"),f,g)+\"px\"}function L(a,b,d,c,f){return new L.prototype.init(a,b,d,c,f)}function Ab(){ra\u0026\u0026(p.requestAnimationFrame(Ab),c.fx.tick())}function Bb(){return p.setTimeout(function(){sa=void 0}),sa=c.now()}function ja(a,b){var d=0,c={height:a};for(b=b?1:0;4\u003E\nd;d+=2-b){var f=ia[d];c[\"margin\"+f]=c[\"padding\"+f]=a}return b\u0026\u0026(c.opacity=c.width=a),c}function Cb(a,b,d){for(var c,f=(K.tweeners[b]||[]).concat(K.tweeners[\"*\"]),g=0,h=f.length;g\u003Ch;g++)if(c=f[g].call(d,b,a))return c}function gc(a,b,d){var e,f,g,h,k,l,n,m,y=\"width\"in b||\"height\"in b,I=this,p={},w=a.style,q=a.nodeType\u0026\u0026Fa(a),u=r.get(a,\"fxshow\");d.queue||(h=c._queueHooks(a,\"fx\"),null==h.unqueued\u0026\u0026(h.unqueued=0,k=h.empty.fire,h.empty.fire=function(){h.unqueued||k()}),h.unqueued++,I.always(function(){I.always(function(){h.unqueued--;\nc.queue(a,\"fx\").length||h.empty.fire()})}));for(e in b)if(f=b[e],hc.test(f)){if(delete b[e],g=g||\"toggle\"===f,f===(q?\"hide\":\"show\")){if(\"show\"!==f||!u||void 0===u[e])continue;q=!0}p[e]=u\u0026\u0026u[e]||c.style(a,e)}if(l=!c.isEmptyObject(b),l||!c.isEmptyObject(p))for(e in y\u0026\u00261===a.nodeType\u0026\u0026(d.overflow=[w.overflow,w.overflowX,w.overflowY],n=u\u0026\u0026u.display,null==n\u0026\u0026(n=r.get(a,\"display\")),m=c.css(a,\"display\"),\"none\"===m\u0026\u0026(n?m=n:(oa([a],!0),n=a.style.display||n,m=c.css(a,\"display\"),oa([a]))),(\"inline\"===m||\"inline-block\"===\nm\u0026\u0026null!=n)\u0026\u0026\"none\"===c.css(a,\"float\")\u0026\u0026(l||(I.done(function(){w.display=n}),null==n\u0026\u0026(m=w.display,n=\"none\"===m?\"\":m)),w.display=\"inline-block\")),d.overflow\u0026\u0026(w.overflow=\"hidden\",I.always(function(){w.overflow=d.overflow[0];w.overflowX=d.overflow[1];w.overflowY=d.overflow[2]})),l=!1,p)l||(u?\"hidden\"in u\u0026\u0026(q=u.hidden):u=r.access(a,\"fxshow\",{display:n}),g\u0026\u0026(u.hidden=!q),q\u0026\u0026oa([a],!0),I.done(function(){q||oa([a]);r.remove(a,\"fxshow\");for(e in p)c.style(a,e,p[e])})),l=Cb(q?u[e]:0,e,I),e in u||(u[e]=l.start,\nq\u0026\u0026(l.end=l.start,l.start=0))}function ic(a,b){var d,e,f,g,h;for(d in a)if(e=c.camelCase(d),f=b[e],g=a[d],c.isArray(g)\u0026\u0026(f=g[1],g=a[d]=g[0]),d!==e\u0026\u0026(a[e]=g,delete a[d]),h=c.cssHooks[e],h\u0026\u0026\"expand\"in h)for(d in g=h.expand(g),delete a[e],g)d in a||(a[d]=g[d],b[d]=f);else b[e]=f}function K(a,b,d){var e,f=0,g=K.prefilters.length,h=c.Deferred().always(function(){delete k.elem}),k=function(){if(e)return!1;var b=sa||Bb();b=Math.max(0,l.startTime+l.duration-b);var d=b\/l.duration||0;d=1-d;for(var c=0,f=l.tweens.length;c\u003C\nf;c++)l.tweens[c].run(d);return h.notifyWith(a,[l,d,b]),1\u003Ed\u0026\u0026f?b:(h.resolveWith(a,[l]),!1)},l=h.promise({elem:a,props:c.extend({},b),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},d),originalProperties:b,originalOptions:d,startTime:sa||Bb(),duration:d.duration,tweens:[],createTween:function(b,d){var e=c.Tween(a,l.opts,b,d,l.opts.specialEasing[b]||l.opts.easing);return l.tweens.push(e),e},stop:function(b){var d=0,c=b?l.tweens.length:0;if(e)return this;for(e=!0;d\u003Cc;d++)l.tweens[d].run(1);\nreturn b?(h.notifyWith(a,[l,1,0]),h.resolveWith(a,[l,b])):h.rejectWith(a,[l,b]),this}});d=l.props;for(ic(d,l.opts.specialEasing);f\u003Cg;f++)if(b=K.prefilters[f].call(l,a,d,l.opts))return c.isFunction(b.stop)\u0026\u0026(c._queueHooks(l.elem,l.opts.queue).stop=c.proxy(b.stop,b)),b;return c.map(d,Cb,l),c.isFunction(l.opts.start)\u0026\u0026l.opts.start.call(a,l),c.fx.timer(c.extend(k,{elem:a,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}\nfunction fa(a){a=a.match(M)||[];return a.join(\" \")}function O(a){return a.getAttribute\u0026\u0026a.getAttribute(\"class\")||\"\"}function Xa(a,b,d,e){var f;if(c.isArray(b))c.each(b,function(b,c){d||jc.test(a)?e(a,c):Xa(a+\"[\"+(\"object\"==typeof c\u0026\u0026null!=c?b:\"\")+\"]\",c,d,e)});else if(d||\"object\"!==c.type(b))e(a,b);else for(f in b)Xa(a+\"[\"+f+\"]\",b[f],d,e)}function Db(a){return function(b,d){\"string\"!=typeof b\u0026\u0026(d=b,b=\"*\");var e,f=0,g=b.toLowerCase().match(M)||[];if(c.isFunction(d))for(;e=g[f++];)\"+\"===e[0]?(e=e.slice(1)||\n\"*\",(a[e]=a[e]||[]).unshift(d)):(a[e]=a[e]||[]).push(d)}}function Eb(a,b,d,e){function f(k){var l;return g[k]=!0,c.each(a[k]||[],function(a,c){var k=c(b,d,e);return\"string\"!=typeof k||h||g[k]?h?!(l=k):void 0:(b.dataTypes.unshift(k),f(k),!1)}),l}var g={},h=a===Ya;return f(b.dataTypes[0])||!g[\"*\"]\u0026\u0026f(\"*\")}function Za(a,b){var d,e,f=c.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]\u0026\u0026((f[d]?a:e||(e={}))[d]=b[d]);return e\u0026\u0026c.extend(!0,a,e),a}function Fb(a){return c.isWindow(a)?a:9===a.nodeType\u0026\u0026\na.defaultView}var ba=[],q=p.document,kc=Object.getPrototypeOf,U=ba.slice,qb=ba.concat,$a=ba.push,da=ba.indexOf,La={},Gb=La.toString,Ma=La.hasOwnProperty,Hb=Ma.toString,lc=Hb.call(Object),t={},Ib=\"3.1.1\",c=function(a,b){return new c.fn.init(a,b)},mc=\/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$\/g,nc=\/^-ms-\/,oc=\/-([a-z])\/g,pc=function(a,b){return b.toUpperCase()};c.fn=c.prototype={jquery:Ib,constructor:c,length:0,toArray:function(){return U.call(this)},get:function(a){return null==a?U.call(this):0\u003Ea?this[a+this.length]:\nthis[a]},pushStack:function(a){a=c.merge(this.constructor(),a);return a.prevObject=this,a},each:function(a){return c.each(this,a)},map:function(a){return this.pushStack(c.map(this,function(b,d){return a.call(b,d,b)}))},slice:function(){return this.pushStack(U.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length;a=+a+(0\u003Ea?b:0);return this.pushStack(0\u003C=a\u0026\u0026a\u003Cb?[this[a]]:[])},end:function(){return this.prevObject||this.constructor()},\npush:$a,sort:ba.sort,splice:ba.splice};c.extend=c.fn.extend=function(){var a,b,d,e,f=arguments[0]||{},g=1,h=arguments.length,k=!1;\"boolean\"==typeof f\u0026\u0026(k=f,f=arguments[g]||{},g++);\"object\"==typeof f||c.isFunction(f)||(f={});for(g===h\u0026\u0026(f=this,g--);g\u003Ch;g++)if(null!=(a=arguments[g]))for(b in a){var l=f[b];var n=a[b];f!==n\u0026\u0026(k\u0026\u0026n\u0026\u0026(c.isPlainObject(n)||(d=c.isArray(n)))?(d?(d=!1,e=l\u0026\u0026c.isArray(l)?l:[]):e=l\u0026\u0026c.isPlainObject(l)?l:{},f[b]=c.extend(k,e,n)):void 0!==n\u0026\u0026(f[b]=n))}return f};c.extend({expando:\"jQuery\"+\n(Ib+Math.random()).replace(\/\\D\/g,\"\"),isReady:!0,error:function(a){throw Error(a);},noop:function(){},isFunction:function(a){return\"function\"===c.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a\u0026\u0026a===a.window},isNumeric:function(a){var b=c.type(a);return(\"number\"===b||\"string\"===b)\u0026\u0026!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,d;return!(!a||\"[object Object]\"!==Gb.call(a))\u0026\u0026(!(b=kc(a))||(d=Ma.call(b,\"constructor\")\u0026\u0026b.constructor,\"function\"==typeof d\u0026\u0026Hb.call(d)===lc))},\nisEmptyObject:function(a){for(var b in a)return!1;return!0},type:function(a){return null==a?a+\"\":\"object\"==typeof a||\"function\"==typeof a?La[Gb.call(a)]||\"object\":typeof a},globalEval:function(a){eb(a)},camelCase:function(a){return a.replace(nc,\"ms-\").replace(oc,pc)},nodeName:function(a,b){return a.nodeName\u0026\u0026a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var d,c=0;if(Sa(a))for(d=a.length;c\u003Cd\u0026\u0026!1!==b.call(a[c],c,a[c]);c++);else for(c in a)if(!1===b.call(a[c],c,a[c]))break;return a},\ntrim:function(a){return null==a?\"\":(a+\"\").replace(mc,\"\")},makeArray:function(a,b){var d=b||[];return null!=a\u0026\u0026(Sa(Object(a))?c.merge(d,\"string\"==typeof a?[a]:a):$a.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:da.call(b,a,c)},merge:function(a,b){for(var c=+b.length,e=0,f=a.length;e\u003Cc;e++)a[f++]=b[e];return a.length=f,a},grep:function(a,b,c){for(var d=[],f=0,g=a.length,h=!c;f\u003Cg;f++)c=!b(a[f],f),c!==h\u0026\u0026d.push(a[f]);return d},map:function(a,b,c){var d,f=0,g=[];if(Sa(a))for(d=a.length;f\u003Cd;f++){var h=\nb(a[f],f,c);null!=h\u0026\u0026g.push(h)}else for(f in a)h=b(a[f],f,c),null!=h\u0026\u0026g.push(h);return qb.apply([],g)},guid:1,proxy:function(a,b){var d,e,f;if(\"string\"==typeof b\u0026\u0026(d=a[b],b=a,a=d),c.isFunction(a))return e=U.call(arguments,2),f=function(){return a.apply(b||this,e.concat(U.call(arguments)))},f.guid=a.guid=a.guid||c.guid++,f},now:Date.now,support:t});\"function\"==typeof Symbol\u0026\u0026(c.fn[Symbol.iterator]=ba[Symbol.iterator]);c.each(\"Boolean Number String Function Array Date RegExp Object Error Symbol\".split(\" \"),\nfunction(a,b){La[\"[object \"+b+\"]\"]=b.toLowerCase()});var ha=function(a){function b(a,b,c,d){var e,f,g,v,h=b\u0026\u0026b.ownerDocument,C=b?b.nodeType:9;if(c=c||[],\"string\"!=typeof a||!a||1!==C\u0026\u00269!==C\u0026\u002611!==C)return c;if(!d\u0026\u0026((b?b.ownerDocument||b:G)!==x\u0026\u0026Ba(b),b=b||x,W)){if(11!==C\u0026\u0026(v=Ea.exec(a)))if(e=v[1])if(9===C){if(!(f=b.getElementById(e)))return c;if(f.id===e)return c.push(f),c}else{if(h\u0026\u0026(f=h.getElementById(e))\u0026\u0026H(b,f)\u0026\u0026f.id===e)return c.push(f),c}else{if(v[2])return ta.apply(c,b.getElementsByTagName(a)),\nc;if((e=v[3])\u0026\u0026N.getElementsByClassName\u0026\u0026b.getElementsByClassName)return ta.apply(c,b.getElementsByClassName(e)),c}if(!(!N.qsa||Na[a+\" \"]||S\u0026\u0026S.test(a))){if(1!==C){h=b;var k=a}else if(\"object\"!==b.nodeName.toLowerCase()){(g=b.getAttribute(\"id\"))?g=g.replace(va,xa):b.setAttribute(\"id\",g=z);f=ja(a);for(e=f.length;e--;)f[e]=\"#\"+g+\" \"+q(f[e]);k=f.join(\",\");h=na.test(a)\u0026\u0026y(b.parentNode)||b}if(k)try{return ta.apply(c,h.querySelectorAll(k)),c}catch(Wc){}finally{g===z\u0026\u0026b.removeAttribute(\"id\")}}}return B(a.replace(Z,\n\"$1\"),b,c,d)}function c(){function a(c,d){return b.push(c+\" \")\u003ED.cacheLength\u0026\u0026delete a[b.shift()],a[c+\" \"]=d}var b=[];return a}function e(a){return a[z]=!0,a}function f(a){var b=x.createElement(\"fieldset\");try{return!!a(b)}catch(R){return!1}finally{b.parentNode\u0026\u0026b.parentNode.removeChild(b)}}function g(a,b){for(var c=a.split(\"|\"),d=c.length;d--;)D.attrHandle[c[d]]=b}function h(a,b){var c=b\u0026\u0026a,d=c\u0026\u00261===a.nodeType\u0026\u00261===b.nodeType\u0026\u0026a.sourceIndex-b.sourceIndex;if(d)return d;if(c)for(;c=c.nextSibling;)if(c===\nb)return-1;return a?1:-1}function k(a){return function(b){var c=b.nodeName.toLowerCase();return\"input\"===c\u0026\u0026b.type===a}}function l(a){return function(b){var c=b.nodeName.toLowerCase();return(\"input\"===c||\"button\"===c)\u0026\u0026b.type===a}}function n(a){return function(b){return\"form\"in b?b.parentNode\u0026\u0026!1===b.disabled?\"label\"in b?\"label\"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a\u0026\u0026Fa(b)===a:b.disabled===a:\"label\"in b\u0026\u0026b.disabled===a}}function m(a){return e(function(b){return b=\n+b,e(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]\u0026\u0026(c[e]=!(d[e]=c[e]))})})}function y(a){return a\u0026\u0026\"undefined\"!=typeof a.getElementsByTagName\u0026\u0026a}function p(){}function q(a){for(var b=0,c=a.length,d=\"\";b\u003Cc;b++)d+=a[b].value;return d}function w(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c\u0026\u0026\"parentNode\"===f,h=L++;return b.first?function(b,c,e){for(;b=b[d];)if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,v){var k,l,m,C=[ka,h];if(v)for(;b=b[d];){if((1===b.nodeType||g)\u0026\u0026a(b,\nc,v))return!0}else for(;b=b[d];)if(1===b.nodeType||g)if(m=b[z]||(b[z]={}),l=m[b.uniqueID]||(m[b.uniqueID]={}),e\u0026\u0026e===b.nodeName.toLowerCase())b=b[d]||b;else{if((k=l[f])\u0026\u0026k[0]===ka\u0026\u0026k[1]===h)return C[2]=k[2];if(l[f]=C,C[2]=a(b,c,v))return!0}return!1}}function r(a){return 1\u003Ca.length?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function u(a,b,c,d,e){for(var f,g=[],h=0,v=a.length,k=null!=b;h\u003Cv;h++)(f=a[h])\u0026\u0026(c\u0026\u0026!c(f,d,e)||(g.push(f),k\u0026\u0026b.push(h)));return g}function t(a,\nc,d,f,g,h){return f\u0026\u0026!f[z]\u0026\u0026(f=t(f)),g\u0026\u0026!g[z]\u0026\u0026(g=t(g,h)),e(function(e,h,v,k){var l,m=[],C=[],R=h.length,P;if(!(P=e)){P=c||\"*\";for(var n=v.nodeType?[v]:v,Ka=[],Ha=0,y=n.length;Ha\u003Cy;Ha++)b(P,n[Ha],Ka);P=Ka}P=!a||!e\u0026\u0026c?P:u(P,m,a,v,k);n=d?g||(e?a:R||f)?[]:h:P;if(d\u0026\u0026d(P,n,v,k),f){var V=u(n,C);f(V,[],v,k);for(v=V.length;v--;)(l=V[v])\u0026\u0026(n[C[v]]=!(P[C[v]]=l))}if(e){if(g||a){if(g){V=[];for(v=n.length;v--;)(l=n[v])\u0026\u0026V.push(P[v]=l);g(null,n=[],V,k)}for(v=n.length;v--;)(l=n[v])\u0026\u0026-1\u003C(V=g?O(e,l):m[v])\u0026\u0026(e[V]=\n!(h[V]=l))}}else n=u(n===h?n.splice(R,n.length):n),g?g(null,h,n,k):ta.apply(h,n)})}function Ia(a){var b,c,d=a.length,e=D.relative[a[0].type];var f=e||D.relative[\" \"];for(var g=e?1:0,h=w(function(a){return a===b},f,!0),v=w(function(a){return-1\u003CO(b,a)},f,!0),k=[function(a,c,d){a=!e\u0026\u0026(d||c!==Q)||((b=c).nodeType?h(a,c,d):v(a,c,d));return b=null,a}];g\u003Cd;g++)if(f=D.relative[a[g].type])k=[w(r(k),f)];else{if(f=D.filter[a[g].type].apply(null,a[g].matches),f[z]){for(c=++g;c\u003Cd\u0026\u0026!D.relative[a[c].type];c++);return t(1\u003C\ng\u0026\u0026r(k),1\u003Cg\u0026\u0026q(a.slice(0,g-1).concat({value:\" \"===a[g-2].type?\"*\":\"\"})).replace(Z,\"$1\"),f,g\u003Cc\u0026\u0026Ia(a.slice(g,c)),c\u003Cd\u0026\u0026Ia(a=a.slice(c)),c\u003Cd\u0026\u0026q(a))}k.push(f)}return r(k)}function A(a,c){var d=0\u003Cc.length,f=0\u003Ca.length,g=function(e,g,h,v,k){var l,m,C=0,P=\"0\",R=e\u0026\u0026[],n=[],Ha=Q,Ka=e||f\u0026\u0026D.find.TAG(\"*\",k),y=ka+=null==Ha?1:Math.random()||.1,p=Ka.length;for(k\u0026\u0026(Q=g===x||g||k);P!==p\u0026\u0026null!=(l=Ka[P]);P++){if(f\u0026\u0026l){var V=0;for(g||l.ownerDocument===x||(Ba(l),h=!W);m=a[V++];)if(m(l,g||x,h)){v.push(l);break}k\u0026\u0026(ka=\ny)}d\u0026\u0026((l=!m\u0026\u0026l)\u0026\u0026C--,e\u0026\u0026R.push(l))}if(C+=P,d\u0026\u0026P!==C){for(V=0;m=c[V++];)m(R,n,g,h);if(e){if(0\u003CC)for(;P--;)R[P]||n[P]||(n[P]=ca.call(v));n=u(n)}ta.apply(v,n);k\u0026\u0026!e\u0026\u00260\u003Cn.length\u0026\u00261\u003CC+c.length\u0026\u0026b.uniqueSort(v)}return k\u0026\u0026(ka=y,Q=Ha),R};return d?e(g):g}var E,T,B,Q,X,Ja,x,Y,W,S,Ca,Oa,H,z=\"sizzle\"+1*new Date,G=a.document,ka=0,L=0,M=c(),F=c(),Na=c(),K=function(a,b){return a===b\u0026\u0026(Ja=!0),0},rc={}.hasOwnProperty,Da=[],ca=Da.pop,ia=Da.push,ta=Da.push,fa=Da.slice,O=function(a,b){for(var c=0,d=a.length;c\u003Cd;c++)if(a[c]===\nb)return c;return-1},ba=\"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped\",J=\"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",U=\"(?:\\\\\\\\.|[\\\\w-]|[^\\x00-\\\\xa0])+\",ha=\"\\\\[\"+J+\"*(\"+U+\")(?:\"+J+\"*([*^$|!~]?\\x3d)\"+J+\"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\"|(\"+U+\"))|)\"+J+\"*\\\\]\",ea=\":(\"+U+\")(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\"+ha+\")*)|.*)\\\\)|)\",oa=new RegExp(J+\"+\",\"g\"),Z=new RegExp(\"^\"+J+\"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\"+\nJ+\"+$\",\"g\"),pa=new RegExp(\"^\"+J+\"*,\"+J+\"*\"),ra=new RegExp(\"^\"+J+\"*([\\x3e+~]|\"+J+\")\"+J+\"*\"),sa=new RegExp(\"\\x3d\"+J+\"*([^\\\\]'\\\"]*?)\"+J+\"*\\\\]\",\"g\"),ua=new RegExp(ea),wa=new RegExp(\"^\"+U+\"$\"),da={ID:new RegExp(\"^#(\"+U+\")\"),CLASS:new RegExp(\"^\\\\.(\"+U+\")\"),TAG:new RegExp(\"^(\"+U+\"|[*])\"),ATTR:new RegExp(\"^\"+ha),PSEUDO:new RegExp(\"^\"+ea),CHILD:new RegExp(\"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\"+J+\"*(even|odd|(([+-]|)(\\\\d*)n|)\"+J+\"*(?:([+-]|)\"+J+\"*(\\\\d+)|))\"+J+\"*\\\\)|)\",\"i\"),bool:new RegExp(\"^(?:\"+\nba+\")$\",\"i\"),needsContext:new RegExp(\"^\"+J+\"*[\\x3e+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\"+J+\"*((?:-\\\\d)?\\\\d*)\"+J+\"*\\\\)|)(?\\x3d[^-]|$)\",\"i\")},za=\/^(?:input|select|textarea|button)$\/i,Aa=\/^h\\d$\/i,aa=\/^[^{]+\\{\\s*\\[native \\w\/,Ea=\/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$\/,na=\/[+~]\/,la=new RegExp(\"\\\\\\\\([\\\\da-f]{1,6}\"+J+\"?|(\"+J+\")|.)\",\"ig\"),ma=function(a,b,c){a=\"0x\"+b-65536;return a!==a||c?b:0\u003Ea?String.fromCharCode(a+65536):String.fromCharCode(a\u003E\u003E10|55296,1023\u0026a|56320)},va=\/([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\0-\\x1f\\x7f-\\uFFFF\\w-]\/g,\nxa=function(a,b){return b?\"\\x00\"===a?\"\\ufffd\":a.slice(0,-1)+\"\\\\\"+a.charCodeAt(a.length-1).toString(16)+\" \":\"\\\\\"+a},ya=function(){Ba()},Fa=w(function(a){return!0===a.disabled\u0026\u0026(\"form\"in a||\"label\"in a)},{dir:\"parentNode\",next:\"legend\"});try{ta.apply(Da=fa.call(G.childNodes),G.childNodes),Da[G.childNodes.length].nodeType}catch(v){ta={apply:Da.length?function(a,b){ia.apply(a,fa.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}var N=b.support={};var Ga=b.isXML=function(a){a=\na\u0026\u0026(a.ownerDocument||a).documentElement;return!!a\u0026\u0026\"HTML\"!==a.nodeName};var Ba=b.setDocument=function(a){var b,c;a=a?a.ownerDocument||a:G;return a!==x\u0026\u00269===a.nodeType\u0026\u0026a.documentElement?(x=a,Y=x.documentElement,W=!Ga(x),G!==x\u0026\u0026(c=x.defaultView)\u0026\u0026c.top!==c\u0026\u0026(c.addEventListener?c.addEventListener(\"unload\",ya,!1):c.attachEvent\u0026\u0026c.attachEvent(\"onunload\",ya)),N.attributes=f(function(a){return a.className=\"i\",!a.getAttribute(\"className\")}),N.getElementsByTagName=f(function(a){return a.appendChild(x.createComment(\"\")),\n!a.getElementsByTagName(\"*\").length}),N.getElementsByClassName=aa.test(x.getElementsByClassName),N.getById=f(function(a){return Y.appendChild(a).id=z,!x.getElementsByName||!x.getElementsByName(z).length}),N.getById?(D.filter.ID=function(a){var b=a.replace(la,ma);return function(a){return a.getAttribute(\"id\")===b}},D.find.ID=function(a,b){if(\"undefined\"!=typeof b.getElementById\u0026\u0026W){var c=b.getElementById(a);return c?[c]:[]}}):(D.filter.ID=function(a){var b=a.replace(la,ma);return function(a){return(a=\n\"undefined\"!=typeof a.getAttributeNode\u0026\u0026a.getAttributeNode(\"id\"))\u0026\u0026a.value===b}},D.find.ID=function(a,b){if(\"undefined\"!=typeof b.getElementById\u0026\u0026W){var c,d,e=b.getElementById(a);if(e){if(c=e.getAttributeNode(\"id\"),c\u0026\u0026c.value===a)return[e];var f=b.getElementsByName(a);for(d=0;e=f[d++];)if(c=e.getAttributeNode(\"id\"),c\u0026\u0026c.value===a)return[e]}return[]}}),D.find.TAG=N.getElementsByTagName?function(a,b){return\"undefined\"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):N.qsa?b.querySelectorAll(a):\nvoid 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if(\"*\"===a){for(;c=f[e++];)1===c.nodeType\u0026\u0026d.push(c);return d}return f},D.find.CLASS=N.getElementsByClassName\u0026\u0026function(a,b){if(\"undefined\"!=typeof b.getElementsByClassName\u0026\u0026W)return b.getElementsByClassName(a)},Ca=[],S=[],(N.qsa=aa.test(x.querySelectorAll))\u0026\u0026(f(function(a){Y.appendChild(a).innerHTML=\"\\x3ca id\\x3d'\"+z+\"'\\x3e\\x3c\/a\\x3e\\x3cselect id\\x3d'\"+z+\"-\\r\\\\' msallowcapture\\x3d''\\x3e\\x3coption selected\\x3d''\\x3e\\x3c\/option\\x3e\\x3c\/select\\x3e\";\na.querySelectorAll(\"[msallowcapture^\\x3d'']\").length\u0026\u0026S.push(\"[*^$]\\x3d\"+J+\"*(?:''|\\\"\\\")\");a.querySelectorAll(\"[selected]\").length||S.push(\"\\\\[\"+J+\"*(?:value|\"+ba+\")\");a.querySelectorAll(\"[id~\\x3d\"+z+\"-]\").length||S.push(\"~\\x3d\");a.querySelectorAll(\":checked\").length||S.push(\":checked\");a.querySelectorAll(\"a#\"+z+\"+*\").length||S.push(\".#.+[+~]\")}),f(function(a){a.innerHTML=\"\\x3ca href\\x3d'' disabled\\x3d'disabled'\\x3e\\x3c\/a\\x3e\\x3cselect disabled\\x3d'disabled'\\x3e\\x3coption\/\\x3e\\x3c\/select\\x3e\";var b=\nx.createElement(\"input\");b.setAttribute(\"type\",\"hidden\");a.appendChild(b).setAttribute(\"name\",\"D\");a.querySelectorAll(\"[name\\x3dd]\").length\u0026\u0026S.push(\"name\"+J+\"*[*^$|!~]?\\x3d\");2!==a.querySelectorAll(\":enabled\").length\u0026\u0026S.push(\":enabled\",\":disabled\");Y.appendChild(a).disabled=!0;2!==a.querySelectorAll(\":disabled\").length\u0026\u0026S.push(\":enabled\",\":disabled\");a.querySelectorAll(\"*,:x\");S.push(\",.*:\")})),(N.matchesSelector=aa.test(Oa=Y.matches||Y.webkitMatchesSelector||Y.mozMatchesSelector||Y.oMatchesSelector||\nY.msMatchesSelector))\u0026\u0026f(function(a){N.disconnectedMatch=Oa.call(a,\"*\");Oa.call(a,\"[s!\\x3d'']:x\");Ca.push(\"!\\x3d\",ea)}),S=S.length\u0026\u0026new RegExp(S.join(\"|\")),Ca=Ca.length\u0026\u0026new RegExp(Ca.join(\"|\")),b=aa.test(Y.compareDocumentPosition),H=b||aa.test(Y.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b\u0026\u0026b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition\u0026\u002616\u0026a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===\na)return!0;return!1},K=b?function(a,b){if(a===b)return Ja=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1\u0026c||!N.sortDetached\u0026\u0026b.compareDocumentPosition(a)===c?a===x||a.ownerDocument===G\u0026\u0026H(G,a)?-1:b===x||b.ownerDocument===G\u0026\u0026H(G,b)?1:X?O(X,a)-O(X,b):0:4\u0026c?-1:1)}:function(a,b){if(a===b)return Ja=!0,0;var c=0;var d=a.parentNode;var e=b.parentNode,f=[a],g=[b];if(!d||!e)return a===x?-1:b===x?1:\nd?-1:e?1:X?O(X,a)-O(X,b):0;if(d===e)return h(a,b);for(d=a;d=d.parentNode;)f.unshift(d);for(d=b;d=d.parentNode;)g.unshift(d);for(;f[c]===g[c];)c++;return c?h(f[c],g[c]):f[c]===G?-1:g[c]===G?1:0},x):x};b.matches=function(a,c){return b(a,null,null,c)};b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==x\u0026\u0026Ba(a),c=c.replace(sa,\"\\x3d'$1']\"),!(!N.matchesSelector||!W||Na[c+\" \"]||Ca\u0026\u0026Ca.test(c)||S\u0026\u0026S.test(c)))try{var d=Oa.call(a,c);if(d||N.disconnectedMatch||a.document\u0026\u002611!==a.document.nodeType)return d}catch(P){}return 0\u003C\nb(c,x,null,[a]).length};b.contains=function(a,b){return(a.ownerDocument||a)!==x\u0026\u0026Ba(a),H(a,b)};b.attr=function(a,b){(a.ownerDocument||a)!==x\u0026\u0026Ba(a);var c=D.attrHandle[b.toLowerCase()];c=c\u0026\u0026rc.call(D.attrHandle,b.toLowerCase())?c(a,b,!W):void 0;return void 0!==c?c:N.attributes||!W?a.getAttribute(b):(c=a.getAttributeNode(b))\u0026\u0026c.specified?c.value:null};b.escape=function(a){return(a+\"\").replace(va,xa)};b.error=function(a){throw Error(\"Syntax error, unrecognized expression: \"+a);};b.uniqueSort=function(a){var b,\nc=[],d=0,e=0;if(Ja=!N.detectDuplicates,X=!N.sortStable\u0026\u0026a.slice(0),a.sort(K),Ja){for(;b=a[e++];)b===a[e]\u0026\u0026(d=c.push(e));for(;d--;)a.splice(c[d],1)}return X=null,a};var qa=b.getText=function(a){var b,c=\"\",d=0;if(b=a.nodeType)if(1===b||9===b||11===b){if(\"string\"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=qa(a)}else{if(3===b||4===b)return a.nodeValue}else for(;b=a[d++];)c+=qa(b);return c};var D=b.selectors={cacheLength:50,createPseudo:e,match:da,attrHandle:{},\nfind:{},relative:{\"\\x3e\":{dir:\"parentNode\",first:!0},\" \":{dir:\"parentNode\"},\"+\":{dir:\"previousSibling\",first:!0},\"~\":{dir:\"previousSibling\"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(la,ma),a[3]=(a[3]||a[4]||a[5]||\"\").replace(la,ma),\"~\\x3d\"===a[2]\u0026\u0026(a[3]=\" \"+a[3]+\" \"),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),\"nth\"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*(\"even\"===a[3]||\"odd\"===a[3])),a[5]=+(a[7]+a[8]||\"odd\"===a[3])):a[3]\u0026\u0026b.error(a[0]),\na},PSEUDO:function(a){var b,c=!a[6]\u0026\u0026a[2];return da.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||\"\":c\u0026\u0026ua.test(c)\u0026\u0026(b=ja(c,!0))\u0026\u0026(b=c.indexOf(\")\",c.length-b)-c.length)\u0026\u0026(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(la,ma).toLowerCase();return\"*\"===a?function(){return!0}:function(a){return a.nodeName\u0026\u0026a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=M[a+\" \"];return b||(b=new RegExp(\"(^|\"+J+\")\"+a+\"(\"+J+\"|$)\"),M(a,function(a){return b.test(\"string\"==\ntypeof a.className\u0026\u0026a.className||\"undefined\"!=typeof a.getAttribute\u0026\u0026a.getAttribute(\"class\")||\"\")}))},ATTR:function(a,c,d){return function(e){e=b.attr(e,a);return null==e?\"!\\x3d\"===c:!c||(e+=\"\",\"\\x3d\"===c?e===d:\"!\\x3d\"===c?e!==d:\"^\\x3d\"===c?d\u0026\u00260===e.indexOf(d):\"*\\x3d\"===c?d\u0026\u0026-1\u003Ce.indexOf(d):\"$\\x3d\"===c?d\u0026\u0026e.slice(-d.length)===d:\"~\\x3d\"===c?-1\u003C(\" \"+e.replace(oa,\" \")+\" \").indexOf(d):\"|\\x3d\"===c\u0026\u0026(e===d||e.slice(0,d.length+1)===d+\"-\"))}},CHILD:function(a,b,c,d,e){var f=\"nth\"!==a.slice(0,3),g=\"last\"!==\na.slice(-4),h=\"of-type\"===b;return 1===d\u0026\u00260===e?function(a){return!!a.parentNode}:function(b,c,k){var l,m;c=f!==g?\"nextSibling\":\"previousSibling\";var v=b.parentNode,n=h\u0026\u0026b.nodeName.toLowerCase();k=!k\u0026\u0026!h;var C=!1;if(v){if(f){for(;c;){for(l=b;l=l[c];)if(h?l.nodeName.toLowerCase()===n:1===l.nodeType)return!1;var y=c=\"only\"===a\u0026\u0026!y\u0026\u0026\"nextSibling\"}return!0}if(y=[g?v.firstChild:v.lastChild],g\u0026\u0026k){l=v;var R=l[z]||(l[z]={});var p=R[l.uniqueID]||(R[l.uniqueID]={});var w=p[a]||[];C=(m=w[0]===ka\u0026\u0026w[1])\u0026\u0026w[2];\nfor(l=m\u0026\u0026v.childNodes[m];l=++m\u0026\u0026l\u0026\u0026l[c]||(C=m=0)||y.pop();)if(1===l.nodeType\u0026\u0026++C\u0026\u0026l===b){p[a]=[ka,m,C];break}}else if(k\u0026\u0026(l=b,R=l[z]||(l[z]={}),p=R[l.uniqueID]||(R[l.uniqueID]={}),w=p[a]||[],m=w[0]===ka\u0026\u0026w[1],C=m),!1===C)for(;(l=++m\u0026\u0026l\u0026\u0026l[c]||(C=m=0)||y.pop())\u0026\u0026((h?l.nodeName.toLowerCase()!==n:1!==l.nodeType)||!++C||(k\u0026\u0026(R=l[z]||(l[z]={}),p=R[l.uniqueID]||(R[l.uniqueID]={}),p[a]=[ka,C]),l!==b)););return C-=e,C===d||0===C%d\u0026\u00260\u003C=C\/d}}},PSEUDO:function(a,c){var d,f=D.pseudos[a]||D.setFilters[a.toLowerCase()]||\nb.error(\"unsupported pseudo: \"+a);return f[z]?f(c):1\u003Cf.length?(d=[a,a,\"\",c],D.setFilters.hasOwnProperty(a.toLowerCase())?e(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=O(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,d)}):f}},pseudos:{not:e(function(a){var b=[],c=[],d=T(a.replace(Z,\"$1\"));return d[z]?e(function(a,b,c,e){var f;c=d(a,null,e,[]);for(e=a.length;e--;)(f=c[e])\u0026\u0026(a[e]=!(b[e]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:e(function(a){return function(c){return 0\u003C\nb(a,c).length}}),contains:e(function(a){return a=a.replace(la,ma),function(b){return-1\u003C(b.textContent||b.innerText||qa(b)).indexOf(a)}}),lang:e(function(a){return wa.test(a||\"\")||b.error(\"unsupported lang: \"+a),a=a.replace(la,ma).toLowerCase(),function(b){var c;do if(c=W?b.lang:b.getAttribute(\"xml:lang\")||b.getAttribute(\"lang\"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+\"-\");while((b=b.parentNode)\u0026\u00261===b.nodeType);return!1}}),target:function(b){var c=a.location\u0026\u0026a.location.hash;return c\u0026\u0026c.slice(1)===\nb.id},root:function(a){return a===Y},focus:function(a){return a===x.activeElement\u0026\u0026(!x.hasFocus||x.hasFocus())\u0026\u0026!!(a.type||a.href||~a.tabIndex)},enabled:n(!1),disabled:n(!0),checked:function(a){var b=a.nodeName.toLowerCase();return\"input\"===b\u0026\u0026!!a.checked||\"option\"===b\u0026\u0026!!a.selected},selected:function(a){return a.parentNode\u0026\u0026a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(6\u003Ea.nodeType)return!1;return!0},parent:function(a){return!D.pseudos.empty(a)},\nheader:function(a){return Aa.test(a.nodeName)},input:function(a){return za.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return\"input\"===b\u0026\u0026\"button\"===a.type||\"button\"===b},text:function(a){var b;return\"input\"===a.nodeName.toLowerCase()\u0026\u0026\"text\"===a.type\u0026\u0026(null==(b=a.getAttribute(\"type\"))||\"text\"===b.toLowerCase())},first:m(function(){return[0]}),last:m(function(a,b){return[b-1]}),eq:m(function(a,b,c){return[0\u003Ec?c+b:c]}),even:m(function(a,b){for(var c=0;c\u003Cb;c+=2)a.push(c);return a}),\nodd:m(function(a,b){for(var c=1;c\u003Cb;c+=2)a.push(c);return a}),lt:m(function(a,b,c){for(b=0\u003Ec?c+b:c;0\u003C=--b;)a.push(b);return a}),gt:m(function(a,b,c){for(c=0\u003Ec?c+b:c;++c\u003Cb;)a.push(c);return a})}};D.pseudos.nth=D.pseudos.eq;for(E in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})D.pseudos[E]=k(E);for(E in{submit:!0,reset:!0})D.pseudos[E]=l(E);p.prototype=D.filters=D.pseudos;D.setFilters=new p;var ja=b.tokenize=function(a,c){var d,e,f,g,h;if(g=F[a+\" \"])return c?0:g.slice(0);g=a;var k=[];for(h=D.preFilter;g;){l\u0026\u0026\n!(d=pa.exec(g))||(d\u0026\u0026(g=g.slice(d[0].length)||g),k.push(e=[]));var l=!1;(d=ra.exec(g))\u0026\u0026(l=d.shift(),e.push({value:l,type:d[0].replace(Z,\" \")}),g=g.slice(l.length));for(f in D.filter)!(d=da[f].exec(g))||h[f]\u0026\u0026!(d=h[f](d))||(l=d.shift(),e.push({value:l,type:f,matches:d}),g=g.slice(l.length));if(!l)break}return c?g.length:g?b.error(a):F(a,k).slice(0)};return T=b.compile=function(a,b){var c,d=[],e=[],f=Na[a+\" \"];if(!f){b||(b=ja(a));for(c=b.length;c--;)f=Ia(b[c]),f[z]?d.push(f):e.push(f);f=Na(a,A(e,d));\nf.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,k,l=\"function\"==typeof a\u0026\u0026a,m=!d\u0026\u0026ja(a=l.selector||a);if(c=c||[],1===m.length){if(f=m[0]=m[0].slice(0),2\u003Cf.length\u0026\u0026\"ID\"===(g=f[0]).type\u0026\u00269===b.nodeType\u0026\u0026W\u0026\u0026D.relative[f[1].type]){if(b=(D.find.ID(g.matches[0].replace(la,ma),b)||[])[0],!b)return c;l\u0026\u0026(b=b.parentNode);a=a.slice(f.shift().value.length)}for(e=da.needsContext.test(a)?0:f.length;e--\u0026\u0026(g=f[e],!D.relative[h=g.type]);)if((k=D.find[h])\u0026\u0026(d=k(g.matches[0].replace(la,ma),na.test(f[0].type)\u0026\u0026\ny(b.parentNode)||b))){if(f.splice(e,1),a=d.length\u0026\u0026q(f),!a)return ta.apply(c,d),c;break}}return(l||T(a,m))(d,b,!W,c,!b||na.test(a)\u0026\u0026y(b.parentNode)||b),c},N.sortStable=z.split(\"\").sort(K).join(\"\")===z,N.detectDuplicates=!!Ja,Ba(),N.sortDetached=f(function(a){return 1\u0026a.compareDocumentPosition(x.createElement(\"fieldset\"))}),f(function(a){return a.innerHTML=\"\\x3ca href\\x3d'#'\\x3e\\x3c\/a\\x3e\",\"#\"===a.firstChild.getAttribute(\"href\")})||g(\"type|href|height|width\",function(a,b,c){if(!c)return a.getAttribute(b,\n\"type\"===b.toLowerCase()?1:2)}),N.attributes\u0026\u0026f(function(a){return a.innerHTML=\"\\x3cinput\/\\x3e\",a.firstChild.setAttribute(\"value\",\"\"),\"\"===a.firstChild.getAttribute(\"value\")})||g(\"value\",function(a,b,c){if(!c\u0026\u0026\"input\"===a.nodeName.toLowerCase())return a.defaultValue}),f(function(a){return null==a.getAttribute(\"disabled\")})||g(ba,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))\u0026\u0026d.specified?d.value:null}),b}(p);c.find=ha;c.expr=ha.selectors;c.expr[\":\"]=c.expr.pseudos;\nc.uniqueSort=c.unique=ha.uniqueSort;c.text=ha.getText;c.isXMLDoc=ha.isXML;c.contains=ha.contains;c.escapeSelector=ha.escape;var ua=function(a,b,d){for(var e=[],f=void 0!==d;(a=a[b])\u0026\u00269!==a.nodeType;)if(1===a.nodeType){if(f\u0026\u0026c(a).is(d))break;e.push(a)}return e},Jb=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType\u0026\u0026a!==b\u0026\u0026c.push(a);return c},Kb=c.expr.match.needsContext,Lb=\/^\u003C([a-z][^\\\/\\0\u003E:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\\/?\u003E(?:\u003C\\\/\\1\u003E|)$\/i,Xb=\/^.[^:#\\[\\.,]*$\/;c.filter=function(a,b,d){var e=\nb[0];return d\u0026\u0026(a=\":not(\"+a+\")\"),1===b.length\u0026\u00261===e.nodeType?c.find.matchesSelector(e,a)?[e]:[]:c.find.matches(a,c.grep(b,function(a){return 1===a.nodeType}))};c.fn.extend({find:function(a){var b,d=this.length,e=this;if(\"string\"!=typeof a)return this.pushStack(c(a).filter(function(){for(b=0;b\u003Cd;b++)if(c.contains(e[b],this))return!0}));var f=this.pushStack([]);for(b=0;b\u003Cd;b++)c.find(a,e[b],f);return 1\u003Cd?c.uniqueSort(f):f},filter:function(a){return this.pushStack(Ta(this,a||[],!1))},not:function(a){return this.pushStack(Ta(this,\na||[],!0))},is:function(a){return!!Ta(this,\"string\"==typeof a\u0026\u0026Kb.test(a)?c(a):a||[],!1).length}});var sc=\/^(?:\\s*(\u003C[\\w\\W]+\u003E)[^\u003E]*|#([\\w-]+))$\/,uc=c.fn.init=function(a,b,d){var e,f;if(!a)return this;if(d=d||tc,\"string\"==typeof a){if(e=\"\\x3c\"===a[0]\u0026\u0026\"\\x3e\"===a[a.length-1]\u0026\u00263\u003C=a.length?[null,a,null]:sc.exec(a),!e||!e[1]\u0026\u0026b)return!b||b.jquery?(b||d).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof c?b[0]:b,c.merge(this,c.parseHTML(e[1],b\u0026\u0026b.nodeType?b.ownerDocument||b:q,!0)),Lb.test(e[1])\u0026\u0026\nc.isPlainObject(b))for(e in b)c.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=q.getElementById(e[2]),f\u0026\u0026(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):c.isFunction(a)?void 0!==d.ready?d.ready(a):a(c):c.makeArray(a,this)};uc.prototype=c.fn;var tc=c(q);var vc=\/^(?:parents|prev(?:Until|All))\/,wc={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(a){var b=c(a,this),d=b.length;return this.filter(function(){for(var a=0;a\u003Cd;a++)if(c.contains(this,\nb[a]))return!0})},closest:function(a,b){var d,e=0,f=this.length,g=[],h=\"string\"!=typeof a\u0026\u0026c(a);if(!Kb.test(a))for(;e\u003Cf;e++)for(d=this[e];d\u0026\u0026d!==b;d=d.parentNode)if(11\u003Ed.nodeType\u0026\u0026(h?-1\u003Ch.index(d):1===d.nodeType\u0026\u0026c.find.matchesSelector(d,a))){g.push(d);break}return this.pushStack(1\u003Cg.length?c.uniqueSort(g):g)},index:function(a){return a?\"string\"==typeof a?da.call(c(a),this[0]):da.call(this,a.jquery?a[0]:a):this[0]\u0026\u0026this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(c.uniqueSort(c.merge(this.get(),\nc(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});c.each({parent:function(a){return(a=a.parentNode)\u0026\u002611!==a.nodeType?a:null},parents:function(a){return ua(a,\"parentNode\")},parentsUntil:function(a,b,c){return ua(a,\"parentNode\",c)},next:function(a){return fb(a,\"nextSibling\")},prev:function(a){return fb(a,\"previousSibling\")},nextAll:function(a){return ua(a,\"nextSibling\")},prevAll:function(a){return ua(a,\"previousSibling\")},nextUntil:function(a,b,c){return ua(a,\n\"nextSibling\",c)},prevUntil:function(a,b,c){return ua(a,\"previousSibling\",c)},siblings:function(a){return Jb((a.parentNode||{}).firstChild,a)},children:function(a){return Jb(a.firstChild)},contents:function(a){return a.contentDocument||c.merge([],a.childNodes)}},function(a,b){c.fn[a]=function(d,e){var f=c.map(this,b,d);return\"Until\"!==a.slice(-5)\u0026\u0026(e=d),e\u0026\u0026\"string\"==typeof e\u0026\u0026(f=c.filter(e,f)),1\u003Cthis.length\u0026\u0026(wc[a]||c.uniqueSort(f),vc.test(a)\u0026\u0026f.reverse()),this.pushStack(f)}});var M=\/[^\\x20\\t\\r\\n\\f]+\/g;\nc.Callbacks=function(a){a=\"string\"==typeof a?Yb(a):c.extend({},a);var b,d,e,f,g=[],h=[],k=-1,l=function(){f=a.once;for(e=b=!0;h.length;k=-1)for(d=h.shift();++k\u003Cg.length;)!1===g[k].apply(d[0],d[1])\u0026\u0026a.stopOnFalse\u0026\u0026(k=g.length,d=!1);a.memory||(d=!1);b=!1;f\u0026\u0026(g=d?[]:\"\")},n={add:function(){return g\u0026\u0026(d\u0026\u0026!b\u0026\u0026(k=g.length-1,h.push(d)),function I(b){c.each(b,function(b,d){c.isFunction(d)?a.unique\u0026\u0026n.has(d)||g.push(d):d\u0026\u0026d.length\u0026\u0026\"string\"!==c.type(d)\u0026\u0026I(d)})}(arguments),d\u0026\u0026!b\u0026\u0026l()),this},remove:function(){return c.each(arguments,\nfunction(a,b){for(var d;-1\u003C(d=c.inArray(b,g,d));)g.splice(d,1),d\u003C=k\u0026\u0026k--}),this},has:function(a){return a?-1\u003Cc.inArray(a,g):0\u003Cg.length},empty:function(){return g\u0026\u0026(g=[]),this},disable:function(){return f=h=[],g=d=\"\",this},disabled:function(){return!g},lock:function(){return f=h=[],d||b||(g=d=\"\"),this},locked:function(){return!!f},fireWith:function(a,c){return f||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||l()),this},fire:function(){return n.fireWith(this,arguments),this},fired:function(){return!!e}};\nreturn n};c.extend({Deferred:function(a){var b=[[\"notify\",\"progress\",c.Callbacks(\"memory\"),c.Callbacks(\"memory\"),2],[\"resolve\",\"done\",c.Callbacks(\"once memory\"),c.Callbacks(\"once memory\"),0,\"resolved\"],[\"reject\",\"fail\",c.Callbacks(\"once memory\"),c.Callbacks(\"once memory\"),1,\"rejected\"]],d=\"pending\",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},\"catch\":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return c.Deferred(function(d){c.each(b,\nfunction(b,e){var g=c.isFunction(a[e[4]])\u0026\u0026a[e[4]];f[e[1]](function(){var a=g\u0026\u0026g.apply(this,arguments);a\u0026\u0026c.isFunction(a.promise)?a.promise().progress(d.notify).done(d.resolve).fail(d.reject):d[e[0]+\"With\"](this,g?[a]:arguments)})});a=null}).promise()},then:function(a,d,e){function f(a,b,d,e){return function(){var h=this,k=arguments,l=function(){var l;if(!(a\u003Cg)){if(l=d.apply(h,k),l===b.promise())throw new TypeError(\"Thenable self-resolution\");var m=l\u0026\u0026(\"object\"==typeof l||\"function\"==typeof l)\u0026\u0026l.then;\nc.isFunction(m)?e?m.call(l,f(g,b,ea,e),f(g,b,xa,e)):(g++,m.call(l,f(g,b,ea,e),f(g,b,xa,e),f(g,b,ea,b.notifyWith))):(d!==ea\u0026\u0026(h=void 0,k=[l]),(e||b.resolveWith)(h,k))}},m=e?l:function(){try{l()}catch(Ia){c.Deferred.exceptionHook\u0026\u0026c.Deferred.exceptionHook(Ia,m.stackTrace),a+1\u003E=g\u0026\u0026(d!==xa\u0026\u0026(h=void 0,k=[Ia]),b.rejectWith(h,k))}};a?m():(c.Deferred.getStackHook\u0026\u0026(m.stackTrace=c.Deferred.getStackHook()),p.setTimeout(m))}}var g=0;return c.Deferred(function(g){b[0][3].add(f(0,g,c.isFunction(e)?e:ea,g.notifyWith));\nb[1][3].add(f(0,g,c.isFunction(a)?a:ea));b[2][3].add(f(0,g,c.isFunction(d)?d:xa))}).promise()},promise:function(a){return null!=a?c.extend(a,e):e}},f={};return c.each(b,function(a,c){var g=c[2],h=c[5];e[c[1]]=g.add;h\u0026\u0026g.add(function(){d=h},b[3-a][2].disable,b[0][2].lock);g.add(c[3].fire);f[c[0]]=function(){return f[c[0]+\"With\"](this===f?void 0:this,arguments),this};f[c[0]+\"With\"]=g.fireWith}),e.promise(f),a\u0026\u0026a.call(f,f),f},when:function(a){var b=arguments.length,d=b,e=Array(d),f=U.call(arguments),\ng=c.Deferred(),h=function(a){return function(c){e[a]=this;f[a]=1\u003Carguments.length?U.call(arguments):c;--b||g.resolveWith(e,f)}};if(1\u003E=b\u0026\u0026(gb(a,g.done(h(d)).resolve,g.reject),\"pending\"===g.state()||c.isFunction(f[d]\u0026\u0026f[d].then)))return g.then();for(;d--;)gb(f[d],h(d),g.reject);return g.promise()}});var xc=\/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$\/;c.Deferred.exceptionHook=function(a,b){p.console\u0026\u0026p.console.warn\u0026\u0026a\u0026\u0026xc.test(a.name)\u0026\u0026p.console.warn(\"jQuery.Deferred exception: \"+a.message,\na.stack,b)};c.readyException=function(a){p.setTimeout(function(){throw a;})};var ab=c.Deferred();c.fn.ready=function(a){return ab.then(a)[\"catch\"](function(a){c.readyException(a)}),this};c.extend({isReady:!1,readyWait:1,holdReady:function(a){a?c.readyWait++:c.ready(!0)},ready:function(a){(!0===a?--c.readyWait:c.isReady)||(c.isReady=!0,!0!==a\u0026\u00260\u003C--c.readyWait||ab.resolveWith(q,[c]))}});c.ready.then=ab.then;\"complete\"===q.readyState||\"loading\"!==q.readyState\u0026\u0026!q.documentElement.doScroll?p.setTimeout(c.ready):\n(q.addEventListener(\"DOMContentLoaded\",ya),p.addEventListener(\"load\",ya));var ca=function(a,b,d,e,f,g,h){var k=0,l=a.length,n=null==d;if(\"object\"===c.type(d))for(k in f=!0,d)ca(a,b,k,d[k],!0,g,h);else if(void 0!==e\u0026\u0026(f=!0,c.isFunction(e)||(h=!0),n\u0026\u0026(h?(b.call(a,e),b=null):(n=b,b=function(a,b,d){return n.call(c(a),d)})),b))for(;k\u003Cl;k++)b(a[k],d,h?e:e.call(a[k],k,b(a[k],d)));return f?a:n?b.call(a):l?b(a[0],d):g},Pa=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};za.uid=1;za.prototype=\n{cache:function(a){var b=a[this.expando];return b||(b={},Pa(a)\u0026\u0026(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,d){var e;a=this.cache(a);if(\"string\"==typeof b)a[c.camelCase(b)]=d;else for(e in b)a[c.camelCase(e)]=b[e];return a},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]\u0026\u0026a[this.expando][c.camelCase(b)]},access:function(a,b,c){return void 0===b||b\u0026\u0026\"string\"==typeof b\u0026\u0026void 0===c?this.get(a,b):(this.set(a,b,c),\nvoid 0!==c?c:b)},remove:function(a,b){var d,e=a[this.expando];if(void 0!==e){if(void 0!==b)for(c.isArray(b)?b=b.map(c.camelCase):(b=c.camelCase(b),b=b in e?[b]:b.match(M)||[]),d=b.length;d--;)delete e[b[d]];(void 0===b||c.isEmptyObject(e))\u0026\u0026(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){a=a[this.expando];return void 0!==a\u0026\u0026!c.isEmptyObject(a)}};var r=new za,E=new za,$b=\/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$\/,Zb=\/[A-Z]\/g;c.extend({hasData:function(a){return E.hasData(a)||\nr.hasData(a)},data:function(a,b,c){return E.access(a,b,c)},removeData:function(a,b){E.remove(a,b)},_data:function(a,b,c){return r.access(a,b,c)},_removeData:function(a,b){r.remove(a,b)}});c.fn.extend({data:function(a,b){var d,e,f,g=this[0],h=g\u0026\u0026g.attributes;if(void 0===a){if(this.length\u0026\u0026(f=E.get(g),1===g.nodeType\u0026\u0026!r.get(g,\"hasDataAttrs\"))){for(d=h.length;d--;)h[d]\u0026\u0026(e=h[d].name,0===e.indexOf(\"data-\")\u0026\u0026(e=c.camelCase(e.slice(5)),hb(g,e,f[e])));r.set(g,\"hasDataAttrs\",!0)}return f}return\"object\"==\ntypeof a?this.each(function(){E.set(this,a)}):ca(this,function(b){var c;if(g\u0026\u0026void 0===b){if((c=E.get(g,a),void 0!==c)||(c=hb(g,a),void 0!==c))return c}else this.each(function(){E.set(this,a,b)})},null,b,1\u003Carguments.length,null,!0)},removeData:function(a){return this.each(function(){E.remove(this,a)})}});c.extend({queue:function(a,b,d){var e;if(a)return b=(b||\"fx\")+\"queue\",e=r.get(a,b),d\u0026\u0026(!e||c.isArray(d)?e=r.access(a,b,c.makeArray(d)):e.push(d)),e||[]},dequeue:function(a,b){b=b||\"fx\";var d=c.queue(a,\nb),e=d.length,f=d.shift(),g=c._queueHooks(a,b),h=function(){c.dequeue(a,b)};\"inprogress\"===f\u0026\u0026(f=d.shift(),e--);f\u0026\u0026(\"fx\"===b\u0026\u0026d.unshift(\"inprogress\"),delete g.stop,f.call(a,h,g));!e\u0026\u0026g\u0026\u0026g.empty.fire()},_queueHooks:function(a,b){var d=b+\"queueHooks\";return r.get(a,d)||r.access(a,d,{empty:c.Callbacks(\"once memory\").add(function(){r.remove(a,[b+\"queue\",d])})})}});c.fn.extend({queue:function(a,b){var d=2;return\"string\"!=typeof a\u0026\u0026(b=a,a=\"fx\",d--),arguments.length\u003Cd?c.queue(this[0],a):void 0===b?this:\nthis.each(function(){var d=c.queue(this,a,b);c._queueHooks(this,a);\"fx\"===a\u0026\u0026\"inprogress\"!==d[0]\u0026\u0026c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||\"fx\",[])},promise:function(a,b){var d,e=1,f=c.Deferred(),g=this,h=this.length,k=function(){--e||f.resolveWith(g,[g])};\"string\"!=typeof a\u0026\u0026(b=a,a=void 0);for(a=a||\"fx\";h--;)(d=r.get(g[h],a+\"queueHooks\"))\u0026\u0026d.empty\u0026\u0026(e++,d.empty.add(k));return k(),f.promise(b)}});var Mb=\/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)\/.source,\nAa=new RegExp(\"^(?:([+-])\\x3d|)(\"+Mb+\")([a-z%]*)$\",\"i\"),ia=[\"Top\",\"Right\",\"Bottom\",\"Left\"],Fa=function(a,b){return a=b||a,\"none\"===a.style.display||\"\"===a.style.display\u0026\u0026c.contains(a.ownerDocument,a)\u0026\u0026\"none\"===c.css(a,\"display\")},Nb=function(a,b,c,e){var d,g={};for(d in b)g[d]=a.style[d],a.style[d]=b[d];c=c.apply(a,e||[]);for(d in b)a.style[d]=g[d];return c},jb={};c.fn.extend({show:function(){return oa(this,!0)},hide:function(){return oa(this)},toggle:function(a){return\"boolean\"==typeof a?a?this.show():\nthis.hide():this.each(function(){Fa(this)?c(this).show():c(this).hide()})}});var Ob=\/^(?:checkbox|radio)$\/i,lb=\/\u003C([a-z][^\\\/\\0\u003E\\x20\\t\\r\\n\\f]+)\/i,mb=\/^$|\\\/(?:java|ecma)script\/i,F={option:[1,\"\\x3cselect multiple\\x3d'multiple'\\x3e\",\"\\x3c\/select\\x3e\"],thead:[1,\"\\x3ctable\\x3e\",\"\\x3c\/table\\x3e\"],col:[2,\"\\x3ctable\\x3e\\x3ccolgroup\\x3e\",\"\\x3c\/colgroup\\x3e\\x3c\/table\\x3e\"],tr:[2,\"\\x3ctable\\x3e\\x3ctbody\\x3e\",\"\\x3c\/tbody\\x3e\\x3c\/table\\x3e\"],td:[3,\"\\x3ctable\\x3e\\x3ctbody\\x3e\\x3ctr\\x3e\",\"\\x3c\/tr\\x3e\\x3c\/tbody\\x3e\\x3c\/table\\x3e\"],\n_default:[0,\"\",\"\"]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;var ac=\/\u003C|\u0026#?\\w+;\/;!function(){var a=q.createDocumentFragment();a=a.appendChild(q.createElement(\"div\"));var b=q.createElement(\"input\");b.setAttribute(\"type\",\"radio\");b.setAttribute(\"checked\",\"checked\");b.setAttribute(\"name\",\"t\");a.appendChild(b);t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked;a.innerHTML=\"\\x3ctextarea\\x3ex\\x3c\/textarea\\x3e\";t.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue}();\nvar Qa=q.documentElement,yc=\/^key\/,zc=\/^(?:mouse|pointer|contextmenu|drag|drop)|click\/,Pb=\/^([^.]*)(?:\\.(.+)|)\/;c.event={global:{},add:function(a,b,d,e,f){var g,h,k,l,n,m,p,q;if(l=r.get(a))for(d.handler\u0026\u0026(g=d,d=g.handler,f=g.selector),f\u0026\u0026c.find.matchesSelector(Qa,f),d.guid||(d.guid=c.guid++),(k=l.events)||(k=l.events={}),(h=l.handle)||(h=l.handle=function(b){return\"undefined\"!=typeof c\u0026\u0026c.event.triggered!==b.type?c.event.dispatch.apply(a,arguments):void 0}),b=(b||\"\").match(M)||[\"\"],l=b.length;l--;){var t=\nPb.exec(b[l])||[];var w=q=t[1];t=(t[2]||\"\").split(\".\").sort();w\u0026\u0026(m=c.event.special[w]||{},w=(f?m.delegateType:m.bindType)||w,m=c.event.special[w]||{},n=c.extend({type:w,origType:q,data:e,handler:d,guid:d.guid,selector:f,needsContext:f\u0026\u0026c.expr.match.needsContext.test(f),namespace:t.join(\".\")},g),(p=k[w])||(p=k[w]=[],p.delegateCount=0,m.setup\u0026\u0026!1!==m.setup.call(a,e,t,h)||a.addEventListener\u0026\u0026a.addEventListener(w,h)),m.add\u0026\u0026(m.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?p.splice(p.delegateCount++,\n0,n):p.push(n),c.event.global[w]=!0)}},remove:function(a,b,d,e,f){var g,h,k,l,n,m,p,q,t=r.hasData(a)\u0026\u0026r.get(a);if(t\u0026\u0026(l=t.events)){b=(b||\"\").match(M)||[\"\"];for(n=b.length;n--;)if(k=Pb.exec(b[n])||[],m=q=k[1],p=(k[2]||\"\").split(\".\").sort(),m){var w=c.event.special[m]||{};m=(e?w.delegateType:w.bindType)||m;var E=l[m]||[];k=k[2]\u0026\u0026new RegExp(\"(^|\\\\.)\"+p.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\");for(h=g=E.length;g--;){var u=E[g];!f\u0026\u0026q!==u.origType||d\u0026\u0026d.guid!==u.guid||k\u0026\u0026!k.test(u.namespace)||e\u0026\u0026e!==u.selector\u0026\u0026\n(\"**\"!==e||!u.selector)||(E.splice(g,1),u.selector\u0026\u0026E.delegateCount--,w.remove\u0026\u0026w.remove.call(a,u))}h\u0026\u0026!E.length\u0026\u0026(w.teardown\u0026\u0026!1!==w.teardown.call(a,p,t.handle)||c.removeEvent(a,m,t.handle),delete l[m])}else for(m in l)c.event.remove(a,m+b[n],d,e,!0);c.isEmptyObject(l)\u0026\u0026r.remove(a,\"handle events\")}},dispatch:function(a){var b=c.event.fix(a),d,e,f,g,h=Array(arguments.length);var k=(r.get(this,\"events\")||{})[b.type]||[];var l=c.event.special[b.type]||{};h[0]=b;for(d=1;d\u003Carguments.length;d++)h[d]=arguments[d];\nif(b.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,b)){var n=c.event.handlers.call(this,b,k);for(d=0;(f=n[d++])\u0026\u0026!b.isPropagationStopped();)for(b.currentTarget=f.elem,k=0;(g=f.handlers[k++])\u0026\u0026!b.isImmediatePropagationStopped();)b.rnamespace\u0026\u0026!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((c.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,h),void 0!==e\u0026\u0026!1===(b.result=e)\u0026\u0026(b.preventDefault(),b.stopPropagation()));return l.postDispatch\u0026\u0026l.postDispatch.call(this,\nb),b.result}},handlers:function(a,b){var d,e=[],f=b.delegateCount,g=a.target;if(f\u0026\u0026g.nodeType\u0026\u0026!(\"click\"===a.type\u0026\u00261\u003C=a.button))for(;g!==this;g=g.parentNode||this)if(1===g.nodeType\u0026\u0026(\"click\"!==a.type||!0!==g.disabled)){var h=[];var k={};for(d=0;d\u003Cf;d++){var l=b[d];var n=l.selector+\" \";void 0===k[n]\u0026\u0026(k[n]=l.needsContext?-1\u003Cc(n,this).index(g):c.find(n,this,null,[g]).length);k[n]\u0026\u0026h.push(l)}h.length\u0026\u0026e.push({elem:g,handlers:h})}return g=this,f\u003Cb.length\u0026\u0026e.push({elem:g,handlers:b.slice(f)}),e},addProp:function(a,\nb){Object.defineProperty(c.Event.prototype,a,{enumerable:!0,configurable:!0,get:c.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[c.expando]?a:new c.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==nb()\u0026\u0026this.focus)return this.focus(),!1},delegateType:\"focusin\"},\nblur:{trigger:function(){if(this===nb()\u0026\u0026this.blur)return this.blur(),!1},delegateType:\"focusout\"},click:{trigger:function(){if(\"checkbox\"===this.type\u0026\u0026this.click\u0026\u0026c.nodeName(this,\"input\"))return this.click(),!1},_default:function(a){return c.nodeName(a.target,\"a\")}},beforeunload:{postDispatch:function(a){void 0!==a.result\u0026\u0026a.originalEvent\u0026\u0026(a.originalEvent.returnValue=a.result)}}}};c.removeEvent=function(a,b,c){a.removeEventListener\u0026\u0026a.removeEventListener(b,c)};c.Event=function(a,b){return this instanceof\nc.Event?(a\u0026\u0026a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented\u0026\u0026!1===a.returnValue?Ga:Z,this.target=a.target\u0026\u00263===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b\u0026\u0026c.extend(this,b),this.timeStamp=a\u0026\u0026a.timeStamp||c.now(),void(this[c.expando]=!0)):new c.Event(a,b)};c.Event.prototype={constructor:c.Event,isDefaultPrevented:Z,isPropagationStopped:Z,isImmediatePropagationStopped:Z,\nisSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Ga;a\u0026\u0026!this.isSimulated\u0026\u0026a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Ga;a\u0026\u0026!this.isSimulated\u0026\u0026a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Ga;a\u0026\u0026!this.isSimulated\u0026\u0026a.stopImmediatePropagation();this.stopPropagation()}};c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,\ndetail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,\"char\":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which\u0026\u0026yc.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which\u0026\u0026void 0!==b\u0026\u0026zc.test(a.type)?1\u0026b?1:2\u0026b?3:4\u0026b?2:0:a.which}},c.event.addProp);c.each({mouseenter:\"mouseover\",mouseleave:\"mouseout\",\npointerenter:\"pointerover\",pointerleave:\"pointerout\"},function(a,b){c.event.special[a]={delegateType:b,bindType:b,handle:function(a){var d,f=this,g=a.relatedTarget,h=a.handleObj;return g\u0026\u0026(g===f||c.contains(f,g))||(a.type=h.origType,d=h.handler.apply(this,arguments),a.type=b),d}}});c.fn.extend({on:function(a,b,c,e){return Va(this,a,b,c,e)},one:function(a,b,c,e){return Va(this,a,b,c,e,1)},off:function(a,b,d){var e,f;if(a\u0026\u0026a.preventDefault\u0026\u0026a.handleObj)return e=a.handleObj,c(a.delegateTarget).off(e.namespace?\ne.origType+\".\"+e.namespace:e.origType,e.selector,e.handler),this;if(\"object\"==typeof a){for(f in a)this.off(f,b,a[f]);return this}return!1!==b\u0026\u0026\"function\"!=typeof b||(d=b,b=void 0),!1===d\u0026\u0026(d=Z),this.each(function(){c.event.remove(this,a,d,b)})}});var Ac=\/\u003C(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\\\/\\0\u003E\\x20\\t\\r\\n\\f]*)[^\u003E]*)\\\/\u003E\/gi,Bc=\/\u003Cscript|\u003Cstyle|\u003Clink\/i,ec=\/checked\\s*(?:[^=]|=\\s*.checked.)\/i,dc=\/^true\\\/(.*)\/,fc=\/^\\s*\u003C!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)\u003E\\s*$\/g;c.extend({htmlPrefilter:function(a){return a.replace(Ac,\n\"\\x3c$1\\x3e\\x3c\/$2\\x3e\")},clone:function(a,b,d){var e,f=a.cloneNode(!0),g=c.contains(a.ownerDocument,a);if(!(t.noCloneChecked||1!==a.nodeType\u0026\u002611!==a.nodeType||c.isXMLDoc(a))){var h=B(f);var k=B(a);var l=0;for(e=k.length;l\u003Ce;l++){var n=k[l],m=h[l],p=m.nodeName.toLowerCase();\"input\"===p\u0026\u0026Ob.test(n.type)?m.checked=n.checked:\"input\"!==p\u0026\u0026\"textarea\"!==p||(m.defaultValue=n.defaultValue)}}if(b)if(d)for(k=k||B(a),h=h||B(f),l=0,e=k.length;l\u003Ce;l++)pb(k[l],h[l]);else pb(a,f);return h=B(f,\"script\"),0\u003Ch.length\u0026\u0026\nUa(h,!g\u0026\u0026B(a,\"script\")),f},cleanData:function(a){for(var b,d,e,f=c.event.special,g=0;void 0!==(d=a[g]);g++)if(Pa(d)){if(b=d[r.expando]){if(b.events)for(e in b.events)f[e]?c.event.remove(d,e):c.removeEvent(d,e,b.handle);d[r.expando]=void 0}d[E.expando]\u0026\u0026(d[E.expando]=void 0)}}});c.fn.extend({detach:function(a){return rb(this,a,!0)},remove:function(a){return rb(this,a)},text:function(a){return ca(this,function(a){return void 0===a?c.text(this):this.empty().each(function(){1!==this.nodeType\u0026\u002611!==this.nodeType\u0026\u0026\n9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return pa(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ob(this,a);b.appendChild(a)}})},prepend:function(){return pa(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ob(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return pa(this,arguments,function(a){this.parentNode\u0026\u0026this.parentNode.insertBefore(a,this)})},\nafter:function(){return pa(this,arguments,function(a){this.parentNode\u0026\u0026this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType\u0026\u0026(c.cleanData(B(a,!1)),a.textContent=\"\");return this},clone:function(a,b){return a=null!=a\u0026\u0026a,b=null==b?a:b,this.map(function(){return c.clone(this,a,b)})},html:function(a){return ca(this,function(a){var b=this[0]||{},e=0,f=this.length;if(void 0===a\u0026\u00261===b.nodeType)return b.innerHTML;if(\"string\"==typeof a\u0026\u0026!Bc.test(a)\u0026\u0026\n!F[(lb.exec(a)||[\"\",\"\"])[1].toLowerCase()]){a=c.htmlPrefilter(a);try{for(;e\u003Cf;e++)b=this[e]||{},1===b.nodeType\u0026\u0026(c.cleanData(B(b,!1)),b.innerHTML=a);b=0}catch(g){}}b\u0026\u0026this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return pa(this,arguments,function(b){var d=this.parentNode;0\u003Ec.inArray(this,a)\u0026\u0026(c.cleanData(B(this)),d\u0026\u0026d.replaceChild(b,this))},a)}});c.each({appendTo:\"append\",prependTo:\"prepend\",insertBefore:\"before\",insertAfter:\"after\",replaceAll:\"replaceWith\"},function(a,\nb){c.fn[a]=function(a){for(var d=[],f=c(a),g=f.length-1,h=0;h\u003C=g;h++)a=h===g?this:this.clone(!0),c(f[h])[b](a),$a.apply(d,a.get());return this.pushStack(d)}});var sb=\/^margin\/,Wa=new RegExp(\"^(\"+Mb+\")(?!px)[a-z%]+$\",\"i\"),qa=function(a){var b=a.ownerDocument.defaultView;return b\u0026\u0026b.opener||(b=p),b.getComputedStyle(a)};!function(){function a(){if(h){h.style.cssText=\"box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%\";h.innerHTML=\"\";Qa.appendChild(g);\nvar a=p.getComputedStyle(h);b=\"1%\"!==a.top;f=\"2px\"===a.marginLeft;d=\"4px\"===a.width;h.style.marginRight=\"50%\";e=\"4px\"===a.marginRight;Qa.removeChild(g);h=null}}var b,d,e,f,g=q.createElement(\"div\"),h=q.createElement(\"div\");h.style\u0026\u0026(h.style.backgroundClip=\"content-box\",h.cloneNode(!0).style.backgroundClip=\"\",t.clearCloneStyle=\"content-box\"===h.style.backgroundClip,g.style.cssText=\"border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute\",g.appendChild(h),c.extend(t,\n{pixelPosition:function(){return a(),b},boxSizingReliable:function(){return a(),d},pixelMarginRight:function(){return a(),e},reliableMarginLeft:function(){return a(),f}}))}();var Cc=\/^(none|table(?!-c[ea]).+)\/,Dc={position:\"absolute\",visibility:\"hidden\",display:\"block\"},Qb={letterSpacing:\"0\",fontWeight:\"400\"},wb=[\"Webkit\",\"Moz\",\"ms\"],vb=q.createElement(\"div\").style;c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=aa(a,\"opacity\");return\"\"===c?\"1\":c}}}},cssNumber:{animationIterationCount:!0,\ncolumnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{\"float\":\"cssFloat\"},style:function(a,b,d,e){if(a\u0026\u00263!==a.nodeType\u0026\u00268!==a.nodeType\u0026\u0026a.style){var f,g,h,k=c.camelCase(b),l=a.style;return b=c.cssProps[k]||(c.cssProps[k]=ub(k)||k),h=c.cssHooks[b]||c.cssHooks[k],void 0===d?h\u0026\u0026\"get\"in h\u0026\u0026void 0!==(f=h.get(a,!1,e))?f:l[b]:(g=typeof d,\"string\"===g\u0026\u0026(f=Aa.exec(d))\u0026\u0026f[1]\u0026\u0026(d=ib(a,b,f),g=\"number\"),null!=d\u0026\u0026\nd===d\u0026\u0026(\"number\"===g\u0026\u0026(d+=f\u0026\u0026f[3]||(c.cssNumber[k]?\"\":\"px\")),t.clearCloneStyle||\"\"!==d||0!==b.indexOf(\"background\")||(l[b]=\"inherit\"),h\u0026\u0026\"set\"in h\u0026\u0026void 0===(d=h.set(a,d,e))||(l[b]=d)),void 0)}},css:function(a,b,d,e){var f,g,h,k=c.camelCase(b);return b=c.cssProps[k]||(c.cssProps[k]=ub(k)||k),h=c.cssHooks[b]||c.cssHooks[k],h\u0026\u0026\"get\"in h\u0026\u0026(f=h.get(a,!0,d)),void 0===f\u0026\u0026(f=aa(a,b,e)),\"normal\"===f\u0026\u0026b in Qb\u0026\u0026(f=Qb[b]),\"\"===d||d?(g=parseFloat(f),!0===d||isFinite(g)?g||0:f):f}});c.each([\"height\",\"width\"],\nfunction(a,b){c.cssHooks[b]={get:function(a,e,f){if(e)return!Cc.test(c.css(a,\"display\"))||a.getClientRects().length\u0026\u0026a.getBoundingClientRect().width?zb(a,b,f):Nb(a,Dc,function(){return zb(a,b,f)})},set:function(a,e,f){var d,h=f\u0026\u0026qa(a);f=f\u0026\u0026yb(a,b,f,\"border-box\"===c.css(a,\"boxSizing\",!1,h),h);return f\u0026\u0026(d=Aa.exec(e))\u0026\u0026\"px\"!==(d[3]||\"px\")\u0026\u0026(a.style[b]=e,e=c.css(a,b)),xb(a,e,f)}}});c.cssHooks.marginLeft=tb(t.reliableMarginLeft,function(a,b){if(b)return(parseFloat(aa(a,\"marginLeft\"))||a.getBoundingClientRect().left-\nNb(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+\"px\"});c.each({margin:\"\",padding:\"\",border:\"Width\"},function(a,b){c.cssHooks[a+b]={expand:function(c){var d=0,f={};for(c=\"string\"==typeof c?c.split(\" \"):[c];4\u003Ed;d++)f[a+ia[d]+b]=c[d]||c[d-2]||c[0];return f}};sb.test(a)||(c.cssHooks[a+b].set=xb)});c.fn.extend({css:function(a,b){return ca(this,function(a,b,f){var d,e={},k=0;if(c.isArray(b)){f=qa(a);for(d=b.length;k\u003Cd;k++)e[b[k]]=c.css(a,b[k],!1,f);return e}return void 0!==f?c.style(a,\nb,f):c.css(a,b)},a,b,1\u003Carguments.length)}});c.Tween=L;L.prototype={constructor:L,init:function(a,b,d,e,f,g){this.elem=a;this.prop=d;this.easing=f||c.easing._default;this.options=b;this.start=this.now=this.cur();this.end=e;this.unit=g||(c.cssNumber[d]?\"\":\"px\")},cur:function(){var a=L.propHooks[this.prop];return a\u0026\u0026a.get?a.get(this):L.propHooks._default.get(this)},run:function(a){var b,d=L.propHooks[this.prop];return this.options.duration?this.pos=b=c.easing[this.easing](a,this.options.duration*a,0,\n1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step\u0026\u0026this.options.step.call(this.elem,this.now,this),d\u0026\u0026d.set?d.set(this):L.propHooks._default.set(this),this}};L.prototype.init.prototype=L.prototype;L.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]\u0026\u0026null==a.elem.style[a.prop]?a.elem[a.prop]:(b=c.css(a.elem,a.prop,\"\"),b\u0026\u0026\"auto\"!==b?b:0)},set:function(a){c.fx.step[a.prop]?c.fx.step[a.prop](a):1!==a.elem.nodeType||\nnull==a.elem.style[c.cssProps[a.prop]]\u0026\u0026!c.cssHooks[a.prop]?a.elem[a.prop]=a.now:c.style(a.elem,a.prop,a.now+a.unit)}}};L.propHooks.scrollTop=L.propHooks.scrollLeft={set:function(a){a.elem.nodeType\u0026\u0026a.elem.parentNode\u0026\u0026(a.elem[a.prop]=a.now)}};c.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)\/2},_default:\"swing\"};c.fx=L.prototype.init;c.fx.step={};var sa,ra,hc=\/^(?:toggle|show|hide)$\/,Ec=\/queueHooks$\/;c.Animation=c.extend(K,{tweeners:{\"*\":[function(a,b){var c=this.createTween(a,\nb);return ib(c.elem,a,Aa.exec(b),c),c}]},tweener:function(a,b){c.isFunction(a)?(b=a,a=[\"*\"]):a=a.match(M);for(var d,e=0,f=a.length;e\u003Cf;e++)d=a[e],K.tweeners[d]=K.tweeners[d]||[],K.tweeners[d].unshift(b)},prefilters:[gc],prefilter:function(a,b){b?K.prefilters.unshift(a):K.prefilters.push(a)}});c.speed=function(a,b,d){var e=a\u0026\u0026\"object\"==typeof a?c.extend({},a):{complete:d||!d\u0026\u0026b||c.isFunction(a)\u0026\u0026a,duration:a,easing:d\u0026\u0026b||b\u0026\u0026!c.isFunction(b)\u0026\u0026b};return c.fx.off||q.hidden?e.duration=0:\"number\"!=typeof e.duration\u0026\u0026\n(e.duration in c.fx.speeds?e.duration=c.fx.speeds[e.duration]:e.duration=c.fx.speeds._default),null!=e.queue\u0026\u0026!0!==e.queue||(e.queue=\"fx\"),e.old=e.complete,e.complete=function(){c.isFunction(e.old)\u0026\u0026e.old.call(this);e.queue\u0026\u0026c.dequeue(this,e.queue)},e};c.fn.extend({fadeTo:function(a,b,c,e){return this.filter(Fa).css(\"opacity\",0).show().end().animate({opacity:b},a,c,e)},animate:function(a,b,d,e){var f=c.isEmptyObject(a),g=c.speed(b,d,e);b=function(){var b=K(this,c.extend({},a),g);(f||r.get(this,\"finish\"))\u0026\u0026\nb.stop(!0)};return b.finish=b,f||!1===g.queue?this.each(b):this.queue(g.queue,b)},stop:function(a,b,d){var e=function(a){var b=a.stop;delete a.stop;b(d)};return\"string\"!=typeof a\u0026\u0026(d=b,b=a,a=void 0),b\u0026\u0026!1!==a\u0026\u0026this.queue(a||\"fx\",[]),this.each(function(){var b=!0,g=null!=a\u0026\u0026a+\"queueHooks\",h=c.timers,k=r.get(this);if(g)k[g]\u0026\u0026k[g].stop\u0026\u0026e(k[g]);else for(g in k)k[g]\u0026\u0026k[g].stop\u0026\u0026Ec.test(g)\u0026\u0026e(k[g]);for(g=h.length;g--;)h[g].elem!==this||null!=a\u0026\u0026h[g].queue!==a||(h[g].anim.stop(d),b=!1,h.splice(g,1));!b\u0026\u0026\nd||c.dequeue(this,a)})},finish:function(a){return!1!==a\u0026\u0026(a=a||\"fx\"),this.each(function(){var b=r.get(this),d=b[a+\"queue\"];var e=b[a+\"queueHooks\"];var f=c.timers,g=d?d.length:0;b.finish=!0;c.queue(this,a,[]);e\u0026\u0026e.stop\u0026\u0026e.stop.call(this,!0);for(e=f.length;e--;)f[e].elem===this\u0026\u0026f[e].queue===a\u0026\u0026(f[e].anim.stop(!0),f.splice(e,1));for(e=0;e\u003Cg;e++)d[e]\u0026\u0026d[e].finish\u0026\u0026d[e].finish.call(this);delete b.finish})}});c.each([\"toggle\",\"show\",\"hide\"],function(a,b){var d=c.fn[b];c.fn[b]=function(a,c,g){return null==\na||\"boolean\"==typeof a?d.apply(this,arguments):this.animate(ja(b,!0),a,c,g)}});c.each({slideDown:ja(\"show\"),slideUp:ja(\"hide\"),slideToggle:ja(\"toggle\"),fadeIn:{opacity:\"show\"},fadeOut:{opacity:\"hide\"},fadeToggle:{opacity:\"toggle\"}},function(a,b){c.fn[a]=function(a,c,f){return this.animate(b,a,c,f)}});c.timers=[];c.fx.tick=function(){var a=0,b=c.timers;for(sa=c.now();a\u003Cb.length;a++){var d=b[a];d()||b[a]!==d||b.splice(a--,1)}b.length||c.fx.stop();sa=void 0};c.fx.timer=function(a){c.timers.push(a);a()?\nc.fx.start():c.timers.pop()};c.fx.interval=13;c.fx.start=function(){ra||(ra=p.requestAnimationFrame?p.requestAnimationFrame(Ab):p.setInterval(c.fx.tick,c.fx.interval))};c.fx.stop=function(){p.cancelAnimationFrame?p.cancelAnimationFrame(ra):p.clearInterval(ra);ra=null};c.fx.speeds={slow:600,fast:200,_default:400};c.fn.delay=function(a,b){return a=c.fx?c.fx.speeds[a]||a:a,b=b||\"fx\",this.queue(b,function(b,c){var d=p.setTimeout(b,a);c.stop=function(){p.clearTimeout(d)}})};(function(){var a=q.createElement(\"input\"),\nb=q.createElement(\"select\");b=b.appendChild(q.createElement(\"option\"));a.type=\"checkbox\";t.checkOn=\"\"!==a.value;t.optSelected=b.selected;a=q.createElement(\"input\");a.value=\"t\";a.type=\"radio\";t.radioValue=\"t\"===a.value})();var Ea=c.expr.attrHandle;c.fn.extend({attr:function(a,b){return ca(this,c.attr,a,b,1\u003Carguments.length)},removeAttr:function(a){return this.each(function(){c.removeAttr(this,a)})}});c.extend({attr:function(a,b,d){var e,f,g=a.nodeType;if(3!==g\u0026\u00268!==g\u0026\u00262!==g)return\"undefined\"==typeof a.getAttribute?\nc.prop(a,b,d):(1===g\u0026\u0026c.isXMLDoc(a)||(f=c.attrHooks[b.toLowerCase()]||(c.expr.match.bool.test(b)?Fc:void 0)),void 0!==d?null===d?void c.removeAttr(a,b):f\u0026\u0026\"set\"in f\u0026\u0026void 0!==(e=f.set(a,d,b))?e:(a.setAttribute(b,d+\"\"),d):f\u0026\u0026\"get\"in f\u0026\u0026null!==(e=f.get(a,b))?e:(e=c.find.attr(a,b),null==e?void 0:e))},attrHooks:{type:{set:function(a,b){if(!t.radioValue\u0026\u0026\"radio\"===b\u0026\u0026c.nodeName(a,\"input\")){var d=a.value;return a.setAttribute(\"type\",b),d\u0026\u0026(a.value=d),b}}}},removeAttr:function(a,b){var c,e=0,f=b\u0026\u0026b.match(M);\nif(f\u0026\u00261===a.nodeType)for(;c=f[e++];)a.removeAttribute(c)}});var Fc={set:function(a,b,d){return!1===b?c.removeAttr(a,d):a.setAttribute(d,d),d}};c.each(c.expr.match.bool.source.match(\/\\w+\/g),function(a,b){var d=Ea[b]||c.find.attr;Ea[b]=function(a,b,c){var e,f,g=b.toLowerCase();return c||(f=Ea[g],Ea[g]=e,e=null!=d(a,b,c)?g:null,Ea[g]=f),e}});var Gc=\/^(?:input|select|textarea|button)$\/i,Hc=\/^(?:a|area)$\/i;c.fn.extend({prop:function(a,b){return ca(this,c.prop,a,b,1\u003Carguments.length)},removeProp:function(a){return this.each(function(){delete this[c.propFix[a]||\na]})}});c.extend({prop:function(a,b,d){var e,f,g=a.nodeType;if(3!==g\u0026\u00268!==g\u0026\u00262!==g)return 1===g\u0026\u0026c.isXMLDoc(a)||(b=c.propFix[b]||b,f=c.propHooks[b]),void 0!==d?f\u0026\u0026\"set\"in f\u0026\u0026void 0!==(e=f.set(a,d,b))?e:a[b]=d:f\u0026\u0026\"get\"in f\u0026\u0026null!==(e=f.get(a,b))?e:a[b]},propHooks:{tabIndex:{get:function(a){var b=c.find.attr(a,\"tabindex\");return b?parseInt(b,10):Gc.test(a.nodeName)||Hc.test(a.nodeName)\u0026\u0026a.href?0:-1}}},propFix:{\"for\":\"htmlFor\",\"class\":\"className\"}});t.optSelected||(c.propHooks.selected={get:function(a){a=\na.parentNode;return a\u0026\u0026a.parentNode\u0026\u0026a.parentNode.selectedIndex,null},set:function(a){a=a.parentNode;a\u0026\u0026(a.selectedIndex,a.parentNode\u0026\u0026a.parentNode.selectedIndex)}});c.each(\"tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable\".split(\" \"),function(){c.propFix[this.toLowerCase()]=this});c.fn.extend({addClass:function(a){var b,d,e,f,g,h,k=0;if(c.isFunction(a))return this.each(function(b){c(this).addClass(a.call(this,b,O(this)))});if(\"string\"==typeof a\u0026\u0026\na)for(b=a.match(M)||[];d=this[k++];)if(f=O(d),e=1===d.nodeType\u0026\u0026\" \"+fa(f)+\" \"){for(h=0;g=b[h++];)0\u003Ee.indexOf(\" \"+g+\" \")\u0026\u0026(e+=g+\" \");e=fa(e);f!==e\u0026\u0026d.setAttribute(\"class\",e)}return this},removeClass:function(a){var b,d,e,f,g,h,k=0;if(c.isFunction(a))return this.each(function(b){c(this).removeClass(a.call(this,b,O(this)))});if(!arguments.length)return this.attr(\"class\",\"\");if(\"string\"==typeof a\u0026\u0026a)for(b=a.match(M)||[];d=this[k++];)if(f=O(d),e=1===d.nodeType\u0026\u0026\" \"+fa(f)+\" \"){for(h=0;g=b[h++];)for(;-1\u003C\ne.indexOf(\" \"+g+\" \");)e=e.replace(\" \"+g+\" \",\" \");e=fa(e);f!==e\u0026\u0026d.setAttribute(\"class\",e)}return this},toggleClass:function(a,b){var d=typeof a;return\"boolean\"==typeof b\u0026\u0026\"string\"===d?b?this.addClass(a):this.removeClass(a):c.isFunction(a)?this.each(function(d){c(this).toggleClass(a.call(this,d,O(this),b),b)}):this.each(function(){var b,f;if(\"string\"===d){var g=0;var h=c(this);for(f=a.match(M)||[];b=f[g++];)h.hasClass(b)?h.removeClass(b):h.addClass(b)}else void 0!==a\u0026\u0026\"boolean\"!==d||(b=O(this),b\u0026\u0026\nr.set(this,\"__className__\",b),this.setAttribute\u0026\u0026this.setAttribute(\"class\",b||!1===a?\"\":r.get(this,\"__className__\")||\"\"))})},hasClass:function(a){var b,c=0;for(a=\" \"+a+\" \";b=this[c++];)if(1===b.nodeType\u0026\u0026-1\u003C(\" \"+fa(O(b))+\" \").indexOf(a))return!0;return!1}});var Ic=\/\\r\/g;c.fn.extend({val:function(a){var b,d,e,f=this[0];if(arguments.length)return e=c.isFunction(a),this.each(function(d){var f;1===this.nodeType\u0026\u0026(f=e?a.call(this,d,c(this).val()):a,null==f?f=\"\":\"number\"==typeof f?f+=\"\":c.isArray(f)\u0026\u0026(f=\nc.map(f,function(a){return null==a?\"\":a+\"\"})),b=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],b\u0026\u0026\"set\"in b\u0026\u0026void 0!==b.set(this,f,\"value\")||(this.value=f))});if(f)return b=c.valHooks[f.type]||c.valHooks[f.nodeName.toLowerCase()],b\u0026\u0026\"get\"in b\u0026\u0026void 0!==(d=b.get(f,\"value\"))?d:(d=f.value,\"string\"==typeof d?d.replace(Ic,\"\"):null==d?\"\":d)}});c.extend({valHooks:{option:{get:function(a){var b=c.find.attr(a,\"value\");return null!=b?b:fa(c.text(a))}},select:{get:function(a){var b,d,e=a.options,\nf=a.selectedIndex,g=\"select-one\"===a.type,h=g?null:[],k=g?f+1:e.length;for(d=0\u003Ef?k:g?f:0;d\u003Ck;d++)if(b=e[d],!(!b.selected\u0026\u0026d!==f||b.disabled||b.parentNode.disabled\u0026\u0026c.nodeName(b.parentNode,\"optgroup\"))){if(a=c(b).val(),g)return a;h.push(a)}return h},set:function(a,b){for(var d,e,f=a.options,g=c.makeArray(b),h=f.length;h--;)e=f[h],(e.selected=-1\u003Cc.inArray(c.valHooks.option.get(e),g))\u0026\u0026(d=!0);return d||(a.selectedIndex=-1),g}}}});c.each([\"radio\",\"checkbox\"],function(){c.valHooks[this]={set:function(a,\nb){if(c.isArray(b))return a.checked=-1\u003Cc.inArray(c(a).val(),b)}};t.checkOn||(c.valHooks[this].get=function(a){return null===a.getAttribute(\"value\")?\"on\":a.value})});var Rb=\/^(?:focusinfocus|focusoutblur)$\/;c.extend(c.event,{trigger:function(a,b,d,e){var f,g,h,k,l,n=[d||q],m=Ma.call(a,\"type\")?a.type:a;var y=Ma.call(a,\"namespace\")?a.namespace.split(\".\"):[];if(f=g=d=d||q,3!==d.nodeType\u0026\u00268!==d.nodeType\u0026\u0026!Rb.test(m+c.event.triggered)\u0026\u0026(-1\u003Cm.indexOf(\".\")\u0026\u0026(y=m.split(\".\"),m=y.shift(),y.sort()),h=0\u003Em.indexOf(\":\")\u0026\u0026\n\"on\"+m,a=a[c.expando]?a:new c.Event(m,\"object\"==typeof a\u0026\u0026a),a.isTrigger=e?2:3,a.namespace=y.join(\".\"),a.rnamespace=a.namespace?new RegExp(\"(^|\\\\.)\"+y.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"):null,a.result=void 0,a.target||(a.target=d),b=null==b?[a]:c.makeArray(b,[a]),l=c.event.special[m]||{},e||!l.trigger||!1!==l.trigger.apply(d,b))){if(!e\u0026\u0026!l.noBubble\u0026\u0026!c.isWindow(d)){var t=l.delegateType||m;for(Rb.test(t+m)||(f=f.parentNode);f;f=f.parentNode)n.push(f),g=f;g===(d.ownerDocument||q)\u0026\u0026n.push(g.defaultView||\ng.parentWindow||p)}for(y=0;(f=n[y++])\u0026\u0026!a.isPropagationStopped();)a.type=1\u003Cy?t:l.bindType||m,(k=(r.get(f,\"events\")||{})[a.type]\u0026\u0026r.get(f,\"handle\"))\u0026\u0026k.apply(f,b),(k=h\u0026\u0026f[h])\u0026\u0026k.apply\u0026\u0026Pa(f)\u0026\u0026(a.result=k.apply(f,b),!1===a.result\u0026\u0026a.preventDefault());return a.type=m,e||a.isDefaultPrevented()||l._default\u0026\u0026!1!==l._default.apply(n.pop(),b)||!Pa(d)||h\u0026\u0026c.isFunction(d[m])\u0026\u0026!c.isWindow(d)\u0026\u0026(g=d[h],g\u0026\u0026(d[h]=null),c.event.triggered=m,d[m](),c.event.triggered=void 0,g\u0026\u0026(d[h]=g)),a.result}},simulate:function(a,\nb,d){a=c.extend(new c.Event,d,{type:a,isSimulated:!0});c.event.trigger(a,null,b)}});c.fn.extend({trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){var d=this[0];if(d)return c.event.trigger(a,b,d,!0)}});c.each(\"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu\".split(\" \"),function(a,b){c.fn[b]=function(a,c){return 0\u003C\narguments.length?this.on(b,null,a,c):this.trigger(b)}});c.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});t.focusin=\"onfocusin\"in p;t.focusin||c.each({focus:\"focusin\",blur:\"focusout\"},function(a,b){var d=function(a){c.event.simulate(b,a.target,c.event.fix(a))};c.event.special[b]={setup:function(){var c=this.ownerDocument||this,f=r.access(c,b);f||c.addEventListener(a,d,!0);r.access(c,b,(f||0)+1)},teardown:function(){var c=this.ownerDocument||this,f=r.access(c,b)-1;f?r.access(c,\nb,f):(c.removeEventListener(a,d,!0),r.remove(c,b))}}});var na=p.location,Sb=c.now(),bb=\/\\?\/;c.parseXML=function(a){if(!a||\"string\"!=typeof a)return null;try{var b=(new p.DOMParser).parseFromString(a,\"text\/xml\")}catch(d){b=void 0}return b\u0026\u0026!b.getElementsByTagName(\"parsererror\").length||c.error(\"Invalid XML: \"+a),b};var jc=\/\\[\\]$\/,Tb=\/\\r?\\n\/g,Jc=\/^(?:submit|button|image|reset|file)$\/i,Kc=\/^(?:input|select|textarea|keygen)\/i;c.param=function(a,b){var d,e=[],f=function(a,b){var d=c.isFunction(b)?b():\nb;e[e.length]=encodeURIComponent(a)+\"\\x3d\"+encodeURIComponent(null==d?\"\":d)};if(c.isArray(a)||a.jquery\u0026\u0026!c.isPlainObject(a))c.each(a,function(){f(this.name,this.value)});else for(d in a)Xa(d,a[d],b,f);return e.join(\"\\x26\")};c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=c.prop(this,\"elements\");return a?c.makeArray(a):this}).filter(function(){var a=this.type;return this.name\u0026\u0026!c(this).is(\":disabled\")\u0026\u0026Kc.test(this.nodeName)\u0026\u0026\n!Jc.test(a)\u0026\u0026(this.checked||!Ob.test(a))}).map(function(a,b){var d=c(this).val();return null==d?null:c.isArray(d)?c.map(d,function(a){return{name:b.name,value:a.replace(Tb,\"\\r\\n\")}}):{name:b.name,value:d.replace(Tb,\"\\r\\n\")}}).get()}});var Lc=\/%20\/g,Mc=\/#.*$\/,Nc=\/([?\u0026])_=[^\u0026]*\/,Oc=\/^(.*?):[ \\t]*([^\\r\\n]*)$\/gm,Pc=\/^(?:about|app|app-storage|.+-extension|file|res|widget):$\/,Qc=\/^(?:GET|HEAD)$\/,Rc=\/^\\\/\\\/\/,Ub={},Ya={},Vb=\"*\/\".concat(\"*\"),cb=q.createElement(\"a\");cb.href=na.href;c.extend({active:0,lastModified:{},\netag:{},ajaxSettings:{url:na.href,type:\"GET\",isLocal:Pc.test(na.protocol),global:!0,processData:!0,async:!0,contentType:\"application\/x-www-form-urlencoded; charset\\x3dUTF-8\",accepts:{\"*\":Vb,text:\"text\/plain\",html:\"text\/html\",xml:\"application\/xml, text\/xml\",json:\"application\/json, text\/javascript\"},contents:{xml:\/\\bxml\\b\/,html:\/\\bhtml\/,json:\/\\bjson\\b\/},responseFields:{xml:\"responseXML\",text:\"responseText\",json:\"responseJSON\"},converters:{\"* text\":String,\"text html\":!0,\"text json\":JSON.parse,\"text xml\":c.parseXML},\nflatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Za(Za(a,c.ajaxSettings),b):Za(c.ajaxSettings,a)},ajaxPrefilter:Db(Ub),ajaxTransport:Db(Ya),ajax:function(a,b){function d(a,b,d,g){var l,n,q,x=b;if(!K){K=!0;h\u0026\u0026p.clearTimeout(h);e=void 0;f=g||\"\";A.readyState=0\u003Ca?4:0;g=200\u003C=a\u0026\u0026300\u003Ea||304===a;if(d){var u;var H=m;for(var z=A,G,Q,I,X=H.contents,F=H.dataTypes;\"*\"===F[0];)F.shift(),void 0===u\u0026\u0026(u=H.mimeType||z.getResponseHeader(\"Content-Type\"));if(u)for(G in X)if(X[G]\u0026\u0026X[G].test(u)){F.unshift(G);\nbreak}if(F[0]in d)Q=F[0];else{for(G in d){if(!F[0]||H.converters[G+\" \"+F[0]]){Q=G;break}I||(I=G)}Q=Q||I}u=Q?(Q!==F[0]\u0026\u0026F.unshift(Q),d[Q]):void 0;H=u}a:{u=m;G=H;Q=A;I=g;var B,L,M;z={};d=u.dataTypes.slice();if(d[1])for(B in u.converters)z[B.toLowerCase()]=u.converters[B];for(H=d.shift();H;)if(u.responseFields[H]\u0026\u0026(Q[u.responseFields[H]]=G),!M\u0026\u0026I\u0026\u0026u.dataFilter\u0026\u0026(G=u.dataFilter(G,u.dataType)),M=H,H=d.shift())if(\"*\"===H)H=M;else if(\"*\"!==M\u0026\u0026M!==H){if(B=z[M+\" \"+H]||z[\"* \"+H],!B)for(O in z)if(L=O.split(\" \"),\nL[1]===H\u0026\u0026(B=z[M+\" \"+L[0]]||z[\"* \"+L[0]])){!0===B?B=z[O]:!0!==z[O]\u0026\u0026(H=L[0],d.unshift(L[1]));break}if(!0!==B)if(B\u0026\u0026u[\"throws\"])G=B(G);else try{G=B(G)}catch(qc){var O={state:\"parsererror\",error:B?qc:\"No conversion from \"+M+\" to \"+H};break a}}O={state:\"success\",data:G}}H=O;g?(m.ifModified\u0026\u0026(q=A.getResponseHeader(\"Last-Modified\"),q\u0026\u0026(c.lastModified[T]=q),q=A.getResponseHeader(\"etag\"),q\u0026\u0026(c.etag[T]=q)),204===a||\"HEAD\"===m.type?x=\"nocontent\":304===a?x=\"notmodified\":(x=H.state,l=H.data,n=H.error,g=!n)):\n(n=x,!a\u0026\u0026x||(x=\"error\",0\u003Ea\u0026\u0026(a=0)));A.status=a;A.statusText=(b||x)+\"\";g?t.resolveWith(y,[l,x,A]):t.rejectWith(y,[A,x,n]);A.statusCode(E);E=void 0;k\u0026\u0026r.trigger(g?\"ajaxSuccess\":\"ajaxError\",[A,m,g?l:n]);w.fireWith(y,[A,x]);k\u0026\u0026(r.trigger(\"ajaxComplete\",[A,m]),--c.active||c.event.trigger(\"ajaxStop\"))}}\"object\"==typeof a\u0026\u0026(b=a,a=void 0);b=b||{};var e,f,g,h,k,l,n,m=c.ajaxSetup({},b),y=m.context||m,r=m.context\u0026\u0026(y.nodeType||y.jquery)?c(y):c.event,t=c.Deferred(),w=c.Callbacks(\"once memory\"),E=m.statusCode||\n{},u={},B={},L=\"canceled\",A={readyState:0,getResponseHeader:function(a){var b;if(K){if(!g)for(g={};b=Oc.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return K?f:null},setRequestHeader:function(a,b){return null==K\u0026\u0026(a=B[a.toLowerCase()]=B[a.toLowerCase()]||a,u[a]=b),this},overrideMimeType:function(a){return null==K\u0026\u0026(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(K)A.always(a[A.status]);else for(b in a)E[b]=[E[b],a[b]];return this},\nabort:function(a){a=a||L;return e\u0026\u0026e.abort(a),d(0,a),this}};if(t.promise(A),m.url=((a||m.url||na.href)+\"\").replace(Rc,na.protocol+\"\/\/\"),m.type=b.method||b.type||m.method||m.type,m.dataTypes=(m.dataType||\"*\").toLowerCase().match(M)||[\"\"],null==m.crossDomain){var F=q.createElement(\"a\");try{F.href=m.url,F.href=F.href,m.crossDomain=cb.protocol+\"\/\/\"+cb.host!=F.protocol+\"\/\/\"+F.host}catch(Q){m.crossDomain=!0}}if(m.data\u0026\u0026m.processData\u0026\u0026\"string\"!=typeof m.data\u0026\u0026(m.data=c.param(m.data,m.traditional)),Eb(Ub,\nm,b,A),K)return A;(k=c.event\u0026\u0026m.global)\u0026\u00260===c.active++\u0026\u0026c.event.trigger(\"ajaxStart\");m.type=m.type.toUpperCase();m.hasContent=!Qc.test(m.type);var T=m.url.replace(Mc,\"\");m.hasContent?m.data\u0026\u0026m.processData\u0026\u00260===(m.contentType||\"\").indexOf(\"application\/x-www-form-urlencoded\")\u0026\u0026(m.data=m.data.replace(Lc,\"+\")):(n=m.url.slice(T.length),m.data\u0026\u0026(T+=(bb.test(T)?\"\\x26\":\"?\")+m.data,delete m.data),!1===m.cache\u0026\u0026(T=T.replace(Nc,\"$1\"),n=(bb.test(T)?\"\\x26\":\"?\")+\"_\\x3d\"+Sb++ +n),m.url=T+n);m.ifModified\u0026\u0026(c.lastModified[T]\u0026\u0026\nA.setRequestHeader(\"If-Modified-Since\",c.lastModified[T]),c.etag[T]\u0026\u0026A.setRequestHeader(\"If-None-Match\",c.etag[T]));(m.data\u0026\u0026m.hasContent\u0026\u0026!1!==m.contentType||b.contentType)\u0026\u0026A.setRequestHeader(\"Content-Type\",m.contentType);A.setRequestHeader(\"Accept\",m.dataTypes[0]\u0026\u0026m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+(\"*\"!==m.dataTypes[0]?\", \"+Vb+\"; q\\x3d0.01\":\"\"):m.accepts[\"*\"]);for(l in m.headers)A.setRequestHeader(l,m.headers[l]);if(m.beforeSend\u0026\u0026(!1===m.beforeSend.call(y,A,m)||K))return A.abort();\nif(L=\"abort\",w.add(m.complete),A.done(m.success),A.fail(m.error),e=Eb(Ya,m,b,A)){if(A.readyState=1,k\u0026\u0026r.trigger(\"ajaxSend\",[A,m]),K)return A;m.async\u0026\u00260\u003Cm.timeout\u0026\u0026(h=p.setTimeout(function(){A.abort(\"timeout\")},m.timeout));try{var K=!1;e.send(u,d)}catch(Q){if(K)throw Q;d(-1,Q)}}else d(-1,\"No Transport\");return A},getJSON:function(a,b,d){return c.get(a,b,d,\"json\")},getScript:function(a,b){return c.get(a,void 0,b,\"script\")}});c.each([\"get\",\"post\"],function(a,b){c[b]=function(a,e,f,g){return c.isFunction(e)\u0026\u0026\n(g=g||f,f=e,e=void 0),c.ajax(c.extend({url:a,type:b,dataType:g,data:e,success:f},c.isPlainObject(a)\u0026\u0026a))}});c._evalUrl=function(a){return c.ajax({url:a,type:\"GET\",dataType:\"script\",cache:!0,async:!1,global:!1,\"throws\":!0})};c.fn.extend({wrapAll:function(a){var b;return this[0]\u0026\u0026(c.isFunction(a)\u0026\u0026(a=a.call(this[0])),b=c(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode\u0026\u0026b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),\nthis},wrapInner:function(a){return c.isFunction(a)?this.each(function(b){c(this).wrapInner(a.call(this,b))}):this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){var b=c.isFunction(a);return this.each(function(d){c(this).wrapAll(b?a.call(this,d):a)})},unwrap:function(a){return this.parent(a).not(\"body\").each(function(){c(this).replaceWith(this.childNodes)}),this}});c.expr.pseudos.hidden=function(a){return!c.expr.pseudos.visible(a)};c.expr.pseudos.visible=\nfunction(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)};c.ajaxSettings.xhr=function(){try{return new p.XMLHttpRequest}catch(a){}};var Sc={0:200,1223:204},va=c.ajaxSettings.xhr();t.cors=!!va\u0026\u0026\"withCredentials\"in va;t.ajax=va=!!va;c.ajaxTransport(function(a){var b,c;if(t.cors||va\u0026\u0026!a.crossDomain)return{send:function(d,f){var e,h=a.xhr();if(h.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)h[e]=a.xhrFields[e];a.mimeType\u0026\u0026h.overrideMimeType\u0026\u0026h.overrideMimeType(a.mimeType);\na.crossDomain||d[\"X-Requested-With\"]||(d[\"X-Requested-With\"]=\"XMLHttpRequest\");for(e in d)h.setRequestHeader(e,d[e]);b=function(a){return function(){b\u0026\u0026(b=c=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,\"abort\"===a?h.abort():\"error\"===a?\"number\"!=typeof h.status?f(0,\"error\"):f(h.status,h.statusText):f(Sc[h.status]||h.status,h.statusText,\"text\"!==(h.responseType||\"text\")||\"string\"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}};h.onload=b();c=\nh.onerror=b(\"error\");void 0!==h.onabort?h.onabort=c:h.onreadystatechange=function(){4===h.readyState\u0026\u0026p.setTimeout(function(){b\u0026\u0026c()})};b=b(\"abort\");try{h.send(a.hasContent\u0026\u0026a.data||null)}catch(k){if(b)throw k;}},abort:function(){b\u0026\u0026b()}}});c.ajaxPrefilter(function(a){a.crossDomain\u0026\u0026(a.contents.script=!1)});c.ajaxSetup({accepts:{script:\"text\/javascript, application\/javascript, application\/ecmascript, application\/x-ecmascript\"},contents:{script:\/\\b(?:java|ecma)script\\b\/},converters:{\"text script\":function(a){return c.globalEval(a),\na}}});c.ajaxPrefilter(\"script\",function(a){void 0===a.cache\u0026\u0026(a.cache=!1);a.crossDomain\u0026\u0026(a.type=\"GET\")});c.ajaxTransport(\"script\",function(a){if(a.crossDomain){var b,d;return{send:function(e,f){b=c(\"\\x3cscript\\x3e\").prop({charset:a.scriptCharset,src:a.url}).on(\"load error\",d=function(a){b.remove();d=null;a\u0026\u0026f(\"error\"===a.type?404:200,a.type)});q.head.appendChild(b[0])},abort:function(){d\u0026\u0026d()}}}});var Wb=[],db=\/(=)\\?(?=\u0026|$)|\\?\\?\/;c.ajaxSetup({jsonp:\"callback\",jsonpCallback:function(){var a=Wb.pop()||\nc.expando+\"_\"+Sb++;return this[a]=!0,a}});c.ajaxPrefilter(\"json jsonp\",function(a,b,d){var e,f,g,h=!1!==a.jsonp\u0026\u0026(db.test(a.url)?\"url\":\"string\"==typeof a.data\u0026\u00260===(a.contentType||\"\").indexOf(\"application\/x-www-form-urlencoded\")\u0026\u0026db.test(a.data)\u0026\u0026\"data\");if(h||\"jsonp\"===a.dataTypes[0])return e=a.jsonpCallback=c.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,h?a[h]=a[h].replace(db,\"$1\"+e):!1!==a.jsonp\u0026\u0026(a.url+=(bb.test(a.url)?\"\\x26\":\"?\")+a.jsonp+\"\\x3d\"+e),a.converters[\"script json\"]=\nfunction(){return g||c.error(e+\" was not called\"),g[0]},a.dataTypes[0]=\"json\",f=p[e],p[e]=function(){g=arguments},d.always(function(){void 0===f?c(p).removeProp(e):p[e]=f;a[e]\u0026\u0026(a.jsonpCallback=b.jsonpCallback,Wb.push(e));g\u0026\u0026c.isFunction(f)\u0026\u0026f(g[0]);g=f=void 0}),\"script\"});t.createHTMLDocument=function(){var a=q.implementation.createHTMLDocument(\"\").body;return a.innerHTML=\"\\x3cform\\x3e\\x3c\/form\\x3e\\x3cform\\x3e\\x3c\/form\\x3e\",2===a.childNodes.length}();c.parseHTML=function(a,b,d){if(\"string\"!=typeof a)return[];\n\"boolean\"==typeof b\u0026\u0026(d=b,b=!1);var e,f,g;return b||(t.createHTMLDocument?(b=q.implementation.createHTMLDocument(\"\"),e=b.createElement(\"base\"),e.href=q.location.href,b.head.appendChild(e)):b=q),f=Lb.exec(a),g=!d\u0026\u0026[],f?[b.createElement(f[1])]:(f=kb([a],b,g),g\u0026\u0026g.length\u0026\u0026c(g).remove(),c.merge([],f.childNodes))};c.fn.load=function(a,b,d){var e,f,g,h=this,k=a.indexOf(\" \");return-1\u003Ck\u0026\u0026(e=fa(a.slice(k)),a=a.slice(0,k)),c.isFunction(b)?(d=b,b=void 0):b\u0026\u0026\"object\"==typeof b\u0026\u0026(f=\"POST\"),0\u003Ch.length\u0026\u0026c.ajax({url:a,\ntype:f||\"GET\",dataType:\"html\",data:b}).done(function(a){g=arguments;h.html(e?c(\"\\x3cdiv\\x3e\").append(c.parseHTML(a)).find(e):a)}).always(d\u0026\u0026function(a,b){h.each(function(){d.apply(this,g||[a.responseText,b,a])})}),this};c.each(\"ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend\".split(\" \"),function(a,b){c.fn[b]=function(a){return this.on(b,a)}});c.expr.pseudos.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.offset={setOffset:function(a,b,d){var e,\nf,g;var h=c.css(a,\"position\");var k=c(a),l={};\"static\"===h\u0026\u0026(a.style.position=\"relative\");var n=k.offset();var m=c.css(a,\"top\");var p=c.css(a,\"left\");(h=(\"absolute\"===h||\"fixed\"===h)\u0026\u0026-1\u003C(m+p).indexOf(\"auto\"))?(e=k.position(),g=e.top,f=e.left):(g=parseFloat(m)||0,f=parseFloat(p)||0);c.isFunction(b)\u0026\u0026(b=b.call(a,d,c.extend({},n)));null!=b.top\u0026\u0026(l.top=b.top-n.top+g);null!=b.left\u0026\u0026(l.left=b.left-n.left+f);\"using\"in b?b.using.call(a,l):k.css(l)}};c.fn.extend({offset:function(a){if(arguments.length)return void 0===\na?this:this.each(function(b){c.offset.setOffset(this,a,b)});var b,d,e,f,g=this[0];if(g)return g.getClientRects().length?(e=g.getBoundingClientRect(),e.width||e.height?(f=g.ownerDocument,d=Fb(f),b=f.documentElement,{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft}):e):{top:0,left:0}},position:function(){if(this[0]){var a,b,d=this[0],e={top:0,left:0};return\"fixed\"===c.css(d,\"position\")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),c.nodeName(a[0],\"html\")||\n(e=a.offset()),e={top:e.top+c.css(a[0],\"borderTopWidth\",!0),left:e.left+c.css(a[0],\"borderLeftWidth\",!0)}),{top:b.top-e.top-c.css(d,\"marginTop\",!0),left:b.left-e.left-c.css(d,\"marginLeft\",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a\u0026\u0026\"static\"===c.css(a,\"position\");)a=a.offsetParent;return a||Qa})}});c.each({scrollLeft:\"pageXOffset\",scrollTop:\"pageYOffset\"},function(a,b){var d=\"pageYOffset\"===b;c.fn[a]=function(c){return ca(this,function(a,c,e){var f=Fb(a);\nreturn void 0===e?f?f[b]:a[c]:void(f?f.scrollTo(d?f.pageXOffset:e,d?e:f.pageYOffset):a[c]=e)},a,c,arguments.length)}});c.each([\"top\",\"left\"],function(a,b){c.cssHooks[b]=tb(t.pixelPosition,function(a,e){if(e)return e=aa(a,b),Wa.test(e)?c(a).position()[b]+\"px\":e})});c.each({Height:\"height\",Width:\"width\"},function(a,b){c.each({padding:\"inner\"+a,content:b,\"\":\"outer\"+a},function(d,e){c.fn[e]=function(f,g){var h=arguments.length\u0026\u0026(d||\"boolean\"!=typeof f),k=d||(!0===f||!0===g?\"margin\":\"border\");return ca(this,\nfunction(b,d,f){var g;return c.isWindow(b)?0===e.indexOf(\"outer\")?b[\"inner\"+a]:b.document.documentElement[\"client\"+a]:9===b.nodeType?(g=b.documentElement,Math.max(b.body[\"scroll\"+a],g[\"scroll\"+a],b.body[\"offset\"+a],g[\"offset\"+a],g[\"client\"+a])):void 0===f?c.css(b,d,k):c.style(b,d,f,k)},b,h?f:void 0,h)}})});c.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,e){return this.on(b,a,c,e)},undelegate:function(a,b,c){return 1===\narguments.length?this.off(a,\"**\"):this.off(b,a||\"**\",c)}});c.parseJSON=JSON.parse;\"function\"==typeof Ra\u0026\u0026Ra.amd\u0026\u0026Ra(\"jquery\",[],function(){return c});var Tc=p.jQuery,Uc=p.$;return c.noConflict=function(a){return p.$===c\u0026\u0026(p.$=Uc),a\u0026\u0026p.jQuery===c\u0026\u0026(p.jQuery=Tc),c},wa||(p.jQuery=p.$=c),c});return jQuery.noConflict(!0)}(window,void 0);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(document).on(\"click\",\".Booking-button, .Availability-button\",function(){try{var c=$gtm(\"#elemId\").length?$gtm(\".Price-amount\").text().replace(\/\\D\/g,\"\"):0,a=window.lp.analytics.dataLayer[\"0\"].cd28_PartnerName?window.lp.analytics.dataLayer[\"0\"].cd28_PartnerName.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",d=window.lp.analytics.dataLayer[\"0\"].cd27_PartnerOfferingKind?window.lp.analytics.dataLayer[\"0\"].cd27_PartnerOfferingKind.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",b=window.lp.analytics.dataLayer[\"0\"].cd26_PartnerOfferingDetails?\nwindow.lp.analytics.dataLayer[\"0\"].cd26_PartnerOfferingDetails.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",e=a+\"|\"+d+\"|\"+b;ga(\"send\",\"event\",\"partner\",\"click\",e,c,{page:window.location.pathname,dimension1:window.lp.analytics.dataLayer[\"0\"].cd1_Continent?window.lp.analytics.dataLayer[\"0\"].cd1_Continent.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension2:window.lp.analytics.dataLayer[\"0\"].cd2_Country?window.lp.analytics.dataLayer[\"0\"].cd2_Country.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension3:window.lp.analytics.dataLayer[\"0\"].cd3_City?\nwindow.lp.analytics.dataLayer[\"0\"].cd3_City.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension4:window.lp.analytics.dataLayer[\"0\"].cd4_Neighborhood?window.lp.analytics.dataLayer[\"0\"].cd4_Neighbourhood.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension5:window.lp.analytics.dataLayer[\"0\"].cd5_Region?window.lp.analytics.dataLayer[\"0\"].cd5_Region.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension6:window.lp.analytics.dataLayer[\"0\"].cd6_SiteSection?window.lp.analytics.dataLayer[\"0\"].cd6_SiteSection.replace(\/[^\\w\\s]\/gi,\n\"\").toLowerCase():\"--\",dimension7:window.lp.analytics.dataLayer[\"0\"].cd7_Topic?window.lp.analytics.dataLayer[\"0\"].cd7_Topic.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension8:window.lp.analytics.dataLayer[\"0\"].cd8_BookingType?window.lp.analytics.dataLayer[\"0\"].cd8_BookingType.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension9:",["escape",["macro",51],8,16],",dimension21:window.lp.analytics.dataLayer[\"0\"].cd21_AtlasDestination?window.lp.analytics.dataLayer[\"0\"].cd21_AtlasDestination.replace(\/[^\\w\\s]\/gi,\n\"\").toLowerCase():\"--\",dimension22:window.lp.analytics.dataLayer[\"0\"].cd22_ApplicationName?window.lp.analytics.dataLayer[\"0\"].cd22_ApplicationName.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension25:window.lp.analytics.dataLayer[\"0\"].cd25_Bookable?window.lp.analytics.dataLayer[\"0\"].cd25_Bookable.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension26:b,dimension27:d,dimension28:a,dimension34:window.lp.analytics.dataLayer[\"0\"].poiType?window.lp.analytics.dataLayer[\"0\"].poiType.replace(\/[^\\w\\s]\/gi,\n\"\").toLowerCase():\"--\",dimension35:window.lp.analytics.dataLayer[\"0\"].page_type?window.lp.analytics.dataLayer[\"0\"].page_type.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension36:window.lp.analytics.dataLayer[\"0\"].resource?window.lp.analytics.dataLayer[\"0\"].resource.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension37:window.lp.analytics.dataLayer[\"0\"].kind?window.lp.analytics.dataLayer[\"0\"].kind.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension38:window.lp.analytics.dataLayer[\"0\"].subtypes?\nwindow.lp.analytics.dataLayer[\"0\"].subtypes.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension39:window.lp.analytics.dataLayer[\"0\"].poiName?window.lp.analytics.dataLayer[\"0\"].poiName.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension57:",["escape",["macro",15],8,16],",contentGroup1:window.lp.analytics.dataLayer[\"0\"].content_group_1?window.lp.analytics.dataLayer[\"0\"].content_group_1.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",contentGroup2:window.lp.analytics.dataLayer[\"0\"].content_group_2?window.lp.analytics.dataLayer[\"0\"].content_group_2.replace(\/[^\\w\\s]\/gi,\n\"\").toLowerCase():\"--\",contentGroup3:window.lp.analytics.dataLayer[0].content_group_3?window.lp.analytics.dataLayer[0].content_group_3.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",metric5:c})}catch(f){console.error(\"GTM Partner Click \"+f)}});\n$gtm(document).on(\"click\",\"a.continue\",function(){try{for(var c=$gtm(\"#elemId\").length?$gtm(\".Price-amount\").text().replace(\/\\D\/g,\"\"):0,a=document.getElementById(\"selected-destinations\").getElementsByTagName(\"li\"),d=[],b=0;b\u003Ca.length;b++)a[b].innerText.length\u0026\u0026d.push(a[b].innerText.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase().trim());var e=\"worldnomads|insurance|\"+d.join(\",\");ga(\"send\",\"event\",\"partner\",\"click\",e,c,{page:window.location.pathname,dimension1:window.lp.analytics.dataLayer[\"0\"].cd1_Continent?\nwindow.lp.analytics.dataLayer[\"0\"].cd1_Continent.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension2:window.lp.analytics.dataLayer[\"0\"].cd2_Country?window.lp.analytics.dataLayer[\"0\"].cd2_Country.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension3:window.lp.analytics.dataLayer[\"0\"].cd3_City?window.lp.analytics.dataLayer[\"0\"].cd3_City.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension4:window.lp.analytics.dataLayer[\"0\"].cd4_Neighborhood?window.lp.analytics.dataLayer[\"0\"].cd4_Neighbourhood.replace(\/[^\\w\\s]\/gi,\n\"\").toLowerCase():\"--\",dimension5:window.lp.analytics.dataLayer[\"0\"].cd5_Region?window.lp.analytics.dataLayer[\"0\"].cd5_Region.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension6:window.lp.analytics.dataLayer[\"0\"].cd6_SiteSection?window.lp.analytics.dataLayer[\"0\"].cd6_SiteSection.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension7:window.lp.analytics.dataLayer[\"0\"].cd7_Topic?window.lp.analytics.dataLayer[\"0\"].cd7_Topic.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension8:window.lp.analytics.dataLayer[\"0\"].cd8_BookingType?\nwindow.lp.analytics.dataLayer[\"0\"].cd8_BookingType.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension9:",["escape",["macro",51],8,16],",dimension21:window.lp.analytics.dataLayer[\"0\"].cd21_AtlasDestination?window.lp.analytics.dataLayer[\"0\"].cd21_AtlasDestination.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension22:window.lp.analytics.dataLayer[\"0\"].cd22_ApplicationName?window.lp.analytics.dataLayer[\"0\"].cd22_ApplicationName.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension25:window.lp.analytics.dataLayer[\"0\"].cd25_Bookable?\nwindow.lp.analytics.dataLayer[\"0\"].cd25_Bookable.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension26:window.lp.analytics.dataLayer[\"0\"].cd26_PartnerOfferingDetails?window.lp.analytics.dataLayer[\"0\"].cd26_PartnerOfferingDetails.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension27:\"insurance\",dimension28:\"worldnomads\",dimension34:window.lp.analytics.dataLayer[\"0\"].poiType?window.lp.analytics.dataLayer[\"0\"].poiType.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension35:window.lp.analytics.dataLayer[\"0\"].page_type?\nwindow.lp.analytics.dataLayer[\"0\"].page_type.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension36:window.lp.analytics.dataLayer[\"0\"].resource?window.lp.analytics.dataLayer[\"0\"].resource.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension37:window.lp.analytics.dataLayer[\"0\"].kind?window.lp.analytics.dataLayer[\"0\"].kind.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension38:window.lp.analytics.dataLayer[\"0\"].subtypes?window.lp.analytics.dataLayer[\"0\"].subtypes.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\n\"--\",dimension39:window.lp.analytics.dataLayer[\"0\"].poiName?window.lp.analytics.dataLayer[\"0\"].poiName.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",dimension57:",["escape",["macro",15],8,16],",contentGroup1:window.lp.analytics.dataLayer[\"0\"].content_group_1?window.lp.analytics.dataLayer[\"0\"].content_group_1.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",contentGroup2:window.lp.analytics.dataLayer[\"0\"].content_group_2?window.lp.analytics.dataLayer[\"0\"].content_group_2.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",contentGroup3:window.lp.analytics.dataLayer[0].content_group_3?\nwindow.lp.analytics.dataLayer[0].content_group_3.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\",metric5:c})}catch(f){console.error(\"GTM Partner Click \"+f)}});\n$gtm(document).on(\"click\",\"#js-flights-submit\",function(){try{var c=\"\"!==document.getElementById(\"js-from-city\").value?document.getElementById(\"js-from-city\").value.toLowerCase():\"--\",a=\"\"!==document.getElementById(\"js-to-city\").value?document.getElementById(\"js-to-city\").value.toLowerCase():\"--\",d=\"\"!==document.getElementById(\"flight-depart-date\").value?document.getElementById(\"flight-depart-date\").value.toLowerCase():\"--\",b=\"\"!==document.getElementById(\"flight-return-date\").value?document.getElementById(\"flight-return-date\").value.toLowerCase():\n\"--\",e=\"\"!==document.getElementById(\"flight-currency\").value?document.getElementById(\"flight-currency\").value.toLowerCase():\"--\",f=\"\"!==document.getElementById(\"adult-num\").value?document.getElementById(\"adult-num\").value:\"0\",g=\"\"!==document.getElementById(\"child-num\").value?document.getElementById(\"child-num\").value:\"0\",h=\"\"!==document.getElementById(\"baby-num\").value?document.getElementById(\"baby-num\").value:\"0\",k=\"skyscanner|flight|\"+a;ga(\"send\",\"event\",\"partner\",\"click\",k,{page:window.location.pathname,\ndimension1:window.lp.analytics.dataLayer[\"0\"].cd1_Continent?window.lp.analytics.dataLayer[\"0\"].cd1_Continent.toLowerCase():\"--\",dimension2:window.lp.analytics.dataLayer[\"0\"].cd2_Country?window.lp.analytics.dataLayer[\"0\"].cd2_Country.toLowerCase():\"--\",dimension3:window.lp.analytics.dataLayer[\"0\"].cd3_City?window.lp.analytics.dataLayer[\"0\"].cd3_City.toLowerCase():\"--\",dimension4:window.lp.analytics.dataLayer[\"0\"].cd4_Neighborhood?window.lp.analytics.dataLayer[\"0\"].cd4_Neighbourhood.toLowerCase():\"--\",\ndimension5:window.lp.analytics.dataLayer[\"0\"].cd5_Region?window.lp.analytics.dataLayer[\"0\"].cd5_Region.toLowerCase():\"--\",dimension6:window.lp.analytics.dataLayer[\"0\"].cd6_SiteSection?window.lp.analytics.dataLayer[\"0\"].cd6_SiteSection.toLowerCase():\"--\",dimension7:window.lp.analytics.dataLayer[\"0\"].cd7_Topic?window.lp.analytics.dataLayer[\"0\"].cd7_Topic.toLowerCase():\"--\",dimension8:window.lp.analytics.dataLayer[\"0\"].cd8_BookingType?window.lp.analytics.dataLayer[\"0\"].cd8_BookingType.toLowerCase():\n\"--\",dimension9:",["escape",["macro",51],8,16],",dimension21:window.lp.analytics.dataLayer[\"0\"].cd21_AtlasDestination?window.lp.analytics.dataLayer[\"0\"].cd21_AtlasDestination.toLowerCase():\"--\",dimension22:window.lp.analytics.dataLayer[\"0\"].cd22_ApplicationName?window.lp.analytics.dataLayer[\"0\"].cd22_ApplicationName.toLowerCase():\"--\",dimension25:window.lp.analytics.dataLayer[\"0\"].cd25_Bookable?window.lp.analytics.dataLayer[\"0\"].cd25_Bookable.toLowerCase():\"--\",dimension26:window.lp.analytics.dataLayer[\"0\"].cd26_PartnerOfferingDetails?\nwindow.lp.analytics.dataLayer[\"0\"].cd26_PartnerOfferingDetails.toLowerCase():\"--\",dimension27:\"flights\",dimension28:\"skyscanner\",dimension34:window.lp.analytics.dataLayer[\"0\"].poiType?window.lp.analytics.dataLayer[\"0\"].poiType.toLowerCase():\"--\",dimension35:window.lp.analytics.dataLayer[\"0\"].page_type?window.lp.analytics.dataLayer[\"0\"].page_type.toLowerCase():\"--\",dimension36:window.lp.analytics.dataLayer[\"0\"].resource?window.lp.analytics.dataLayer[\"0\"].resource.toLowerCase():\"--\",dimension37:window.lp.analytics.dataLayer[\"0\"].kind?\nwindow.lp.analytics.dataLayer[\"0\"].kind.toLowerCase():\"--\",dimension38:window.lp.analytics.dataLayer[\"0\"].subtypes?window.lp.analytics.dataLayer[\"0\"].subtypes.toLowerCase():\"--\",dimension39:window.lp.analytics.dataLayer[\"0\"].poiName?window.lp.analytics.dataLayer[\"0\"].poiName.toLowerCase():\"--\",dimension57:",["escape",["macro",15],8,16],",contentGroup1:window.lp.analytics.dataLayer[\"0\"].content_group_1?window.lp.analytics.dataLayer[\"0\"].content_group_1.toLowerCase():\"--\",contentGroup2:window.lp.analytics.dataLayer[\"0\"].content_group_2?\nwindow.lp.analytics.dataLayer[\"0\"].content_group_2.toLowerCase():\"--\",contentGroup3:window.lp.analytics.dataLayer[0].content_group_3?window.lp.analytics.dataLayer[0].content_group_3.toLowerCase():\"--\",dimension41:c,dimension40:a,dimension42:d,dimension43:b,dimension45:e,metric6:f,metric7:g,metric8:h})}catch(l){console.error(\"GTM Partner Click \"+l)}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"form\").submit(function(){window.lp.analytics.gaSendAJAXEvent(\"Newsletter\",\"click\",\"Weekly Newsletter Signup Page\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "setup_tags":["list",["tag",80,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dataLayer=window.lp.analytics.dataLayer||[];window.lp.analytics.dataLayer.dmp=window.lp.analytics.dataLayer.dmp||{};\nwindow.lp.analytics.comscore=function(){var a=a||[];a.push({c1:\"2\",c2:\"18074138\"});a=document.createElement(\"script\");var c=document.getElementsByTagName(\"script\")[0];a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\")+\".scorecardresearch.com\/beacon.js\";c.parentNode.insertBefore(a,c)};\nwindow.lp.analytics.send=function(a,c){try{if(-1!==a.indexOf(\"rendered\")){ga(\"set\",\"page\",window.location.pathname);window.lp.analytics.gaSendAJAXPageview();window.lp.analytics.comscore();if(-1!==a.indexOf(\"list\"))try{window.lp.analytics.lotameList(),\"undefined\"!==typeof window._cc9900\u0026\u0026_cc9900.bcp()}catch(b){console.log(\"AJAX Lotame List Error : \"+b)}if(-1!==a.indexOf(\"poi\"))try{window.lp.analytics.lotamePOI(),\"undefined\"!==typeof window._cc9900\u0026\u0026_cc9900.bcp()}catch(b){console.log(\"AJAX Lotame POI Error : \"+\nb)}if(-1!==a.indexOf(\"video.home\"))try{window.lp.analytics.dfp.video.home()}catch(b){console.log(\"AJAX Video Home Error : \"+b)}if(-1!==a.indexOf(\"video.detail\"))try{window.lp.analytics.dfp.video.detail()}catch(b){console.log(\"AJAX Video Detail Error : \"+b)}if(-1!==a.indexOf(\"video.channel\"))try{window.lp.analytics.dfp.video.channel()}catch(b){console.log(\"AJAX Video Channel Error : \"+b)}}else\"infinitescroll.appended\"==a?(window.lp.analytics.dfp.articles(),window.lp.analytics.gaSendAJAXPageview()):\nconsole.log(\"GTM LP AJAX ERROR else\",a)}catch(b){console.error(\"GTM LP AJAX ERROR: \",b)}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(document).on(\"click\",\"button[value\\x3d'add_to_cart']\",function(e){function g(){function b(a,b){b=b||e.target;b.closest||(Element.prototype.closest=function(a){var b,c=this;for([\"matches\",\"webkitMatchesSelector\",\"mozMatchesSelector\",\"msMatchesSelector\",\"oMatchesSelector\"].some(function(a){return\"function\"==typeof document.body[a]?(b=a,!0):!1});null!==c.parentNode;){if(c\u0026\u00261===c.nodeType\u0026\u0026c[b](a))return c;c=c.parentNode}});return b.closest(a)}var a=e.target;return b(\".book-variants__variant.book-variants__variant--physical\",\na)?(a=b(\".book-variants__variant.book-variants__variant--physical\",a),a=a.querySelector(\".book-variants__price\").querySelector(\"span\").innerText,a.split(\"$\")[1].split(\" \")[0]):b(\".book-variants__variant.book-variants__variant--ebook\",a)?(a=b(\".book-variants__variant.book-variants__variant--ebook\",a),a=a.querySelector(\".book-variants__price\").querySelector(\"span\").innerText,a.split(\"$\")[1].split(\" \")[0]):b(\".book-variants__chapters\",a)?(a=b(\".book-variants__chapters\",a),a=a.querySelector(\".book-variants__price\").querySelector(\"span\").innerText,\na.split(\"$\")[1].split(\" \")[0]):b(\".book-variants__variant.book-variants__variant--combo\",a)?(a=b(\".book-variants__variant.book-variants__variant--combo\",a),a=a.querySelector(\".book-variants__price\").querySelector(\"span\").innerText,console.log(\"Price:\",a),a.split(\"$\")[1].split(\" \")[0]):0}try{var f=$gtm(\"div.book-variants \\x3e div \\x3e div \\x3e div:nth-child(2) \\x3e div \\x3e p \\x3e meta:nth-child(1)\").attr(\"content\");ga(\"set\",\"currencyCode\",f);try{var d=g()}catch(b){console.log(b),d=0}ga(\"ec:addProduct\",\n{id:lp.analytics.dataLayer[0].detail.product_ids[0],name:lp.analytics.dataLayer[0].detail.product_names[0],category:lp.analytics.dataLayer[0].detail.product_categories[0],price:d,quantity:1});ga(\"ec:setAction\",\"add\");ga(\"send\",\"event\",\"UX\",\"click\",\"add to cart\");fbq(\"track\",\"AddToCart\",{value:d,currency:f,content_name:lp.analytics.dataLayer[0].detail.product_names[0],content_type:lp.analytics.dataLayer[0].detail.product_categories[0],content_ids:lp.analytics.dataLayer[0].detail.product_ids[0]})}catch(b){console.log(\"book:\"+\nb)}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/s.ntv.io\/serve\/load.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var browserType=-1\u003Cnavigator.userAgent.toLowerCase().indexOf(\"android\")?\"android\":\"ios\",places=\"Abu Dhabi;Addis Ababa;Adelaide;Agra;Akureyri;Alghero;Amman;Amsterdam;Ankara;Antalya;Antigua;Antwerp;Astana;Athens;Atlanta;Auckland;Austin;Avignon;Baltimore;Banff Town;Bangkok;Barcelona;Beijing;Beirut;Belfast;Belgrade;Belize City;Bengaluru;Berlin;Bilbao;Bishkek;Bogota;Bologna;Bordeaux;Boston;Bratislava;Brisbane;Bruges;Brussels;Bucharest;Budapest;Buenos Aires;Busan;Byron Bay;Cagliari;Cairns;Cairo;Calgary;Canberra;Cape Town;Cardiff;Catania;Cebu City;Chandigarh;Charleston;Chengdu;Chiang Mai;Chicago;Chisinau;Cincinnati;Cluj-Napoca;Coimbra;Colombo;Copenhagen;Dakar;Darjeeling;Darwin;Delhi;Denver;Dhaka;Dubai;Dublin;Dubrovnik;Dundee;Edinburgh;Edmonton;Evora;Fez;Florence;Frankfurt am Main;Fremantle;Fukuoka;Geneva;Genoa;George Town;Ghent;Glasgow;Goreme;Granada;Graz;Guatemala City;Haifa;Halifax;Hamburg;Hangzhou;Hanoi;Havana;Helsinki;Hilo;Hiroshima;Ho Chi Minh City;Hobart;Hong Kong;Honolulu;Hyderabad;Innsbruck;Istanbul;Izmir;Jaipur;Jaisalmer;Jakarta;Jerusalem;Johannesburg;Kaohsiung;Kathmandu;Kochi (Cochin);Kolkata;Krakow;Kuala Lumpur;Kuta \\x26 Legian;Kyiv;Kyoto;Lahaina;Las Vegas;Leh;Lihue;Lima;Lisbon;Liverpool;Ljubljana;London;Los Angeles;Luang Prabang;Luxor;Madrid;Managua;Manila;Maputo;Marrakesh;Marseille;Melaka City;Melbourne;Mexico City;Miami;Milan;Minneapolis;Montreal;Moscow;Mumbai;Munich;Muscat;Nagasaki;Naples;Nashville;New Orleans;New York City;Nice;Novi Sad;Osaka;Oslo;Ottawa;Palermo;Palma de Mallorca;Panama City;Paris;Perth;Perugia;Philadelphia;Phnom Penh;Pittsburgh;Portland;Porto;Prague;Puerto Vallarta;Quebec City;Reykjavik;Richmond;Riga;Rio de Janeiro;Rome;Salzburg;San Diego;San Francisco;San Jose;San Salvador;San Sebastian;Santa Barbara;Santiago;Sarajevo;Savannah;Seattle;Seoul;Seville;Shanghai;Shenzhen;Siem Reap;Siena;Singapore;Sofia;Sorrento;Split;St Petersburg;Stockholm;Strasbourg;Suva;Sydney;Syracuse;Tainan;Taipei;Tallinn;Tangier;Tashkent;Tehran;Tel Aviv;Tirana;Tokyo;Toronto;Trieste;Turin;Ulaanbaatar;Valencia;Valletta;Vancouver;Varanasi;Venice;Victoria;Vienna;Vientiane;Vilnius;Warsaw;Washington, DC;Wellington;Xi'an;Yangon;Yerevan;Zagreb;Z\\u00fcrich\".split(\";\");\n-1!==places.indexOf(\"",["escape",["macro",45],7],"\")\u0026\u0026(function(a,b,f,d,l,g,h,k,c,e){if(!a[d]||!a[d]._q){for(;k\u003Ch.length;)l(g,h[k++]);c=b.createElement(f);c.async=1;c.src=\"https:\/\/cdn.branch.io\/branch-latest.min.js\";e=b.getElementsByTagName(f)[0];e.parentNode.insertBefore(c,e);a[d]=g}}(window,document,\"script\",\"branch\",function(a,b){a[b]=function(){a._q.push([b,arguments])}},{_q:[],_v:1},\"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setIdentity track validateCode\".split(\" \"),\n0),branch.init(\"key_live_dckT9zRaAlqVE0teVXgMPancBtdih1oo\"),branch.banner({icon:\"\/\/assets.staticlp.com\/assets\/smart_banner\/guides_icon@2x-\"+browserType+\".png\",title:\"Guides\",description:\"Get this city and 200+ more in our app\",downloadAppButtonText:\"Download\",showDesktop:!1,mobileSticky:!1,customCSS:\"#branch-banner .button {display: inline-block;color: #fff;background: #297cbc;margin-top: 0px;margin-left: 5px;padding: 9px 12px;border: none;border-radius: 25px;font-size: 10px;font-weight: 700;font-family: Benton Sans, Helvetica Neue, Helvetica, Arial, sans-serif;text-decoration: none;text-transform: uppercase;}\"},\n{data:{atlas_id:\"",["escape",["macro",12],7],"\",city:\"",["escape",["macro",45],7],"\"}}))}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1841556109191193\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1841556109191193\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{$gtm(\"#js-adventure-tours-submit\").on(\"click\",function(){fbq(\"track\",\"Search\",{content_type:\"destination\",content_ids:$gtm(\"#js-row--content \\x3e div.row.row--hero.row__hero--adventure \\x3e div \\x3e div \\x3e div.widget--container.col--one-half \\x3e div \\x3e div \\x3e form \\x3e div \\x3e div \\x3e div \\x3e div:nth-child(3) \\x3e label\").text(),country:$gtm(\"#js-country-label\").text()})})}catch(a){console.log(\"FB Pixel Adventure Tours Error \"+a)}\ntry{$gtm(\"#js-sightseeing-tours-submit\").on(\"click\",function(){fbq(\"track\",\"Search\",{content_type:\"destination\",content_ids:$gtm(\"#js-sightseeing-tours-options\").val(),country:$gtm(\"#js-country\").val()})})}catch(a){console.log(\"FB Pixel Sightseeing Tours Error \"+a)}\ntry{$gtm(\"#js-airport-transfers-submit\").on(\"click\",function(){fbq(\"track\",\"Search\",{content_type:\"destination\",content_ids:\"airport transfers\",city:$gtm(\"#transfers-search\").val()})})}catch(a){console.log(\"FB Pixel Airport Transfers Error \"+a)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dataLayer=window.lp.analytics.dataLayer||{};window.lp.analytics.dataLayer.dmp=window.lp.analytics.dataLayer.dmp||{};window.lp.analytics.dataLayer.dmp.continent=window.lp.analytics.dataLayer[0].cd1_Continent?window.lp.analytics.dataLayer[0].cd1_Continent.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\";\nwindow.lp.analytics.dataLayer.dmp.country=window.lp.analytics.dataLayer[0].cd2_Country?window.lp.analytics.dataLayer[0].cd2_Country.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.city=window.lp.analytics.dataLayer[0].cd3_City?window.lp.analytics.dataLayer[0].cd3_City.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.region=window.lp.ads.destination?window.lp.ads.destination.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\";\nwindow.lp.analytics.dataLayer.dmp.pagetype=window.lp.analytics.dataLayer[0].content_group_2.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase()||\"--\";var keywords=\"--\",key;for(key in window.lp.analytics.dataLayer.dmp){var obj=window.lp.analytics.dataLayer.dmp[key];\"--\"!=obj\u0026\u0026(keywords=\"--\"==keywords?obj:keywords+\",\"+obj)}var headers=document.querySelectorAll(\"#interests \\x3e div:nth-child(1)\");\nfor(key in headers)void 0!=headers[key].textContent\u0026\u0026null!=headers[key].textContent\u0026\u0026null!=headers[key].textContent\u0026\u0026(keywords=\"--\"==keywords?headers[key].textContent:keywords+\",\"+headers[key].textContent);window.lp.analytics.dataLayer.dmp.keywords=keywords||\"--\";try{window.lp.analytics.dataLayer.dmp.keywords=window.lp.analytics.dataLayer.dmp.keywords+\",\"+window.lp.ads.interest}catch(a){};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/tags.crwdcntrl.net\/c\/9900\/cc.js?ns=_cc9900\" id=\"LOTCC_9900\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003E\"undefined\"!==typeof window._cc9900\u0026\u0026_cc9900.bcp();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dataLayer=window.lp.analytics.dataLayer||{};window.lp.analytics.dataLayer.dmp=window.lp.analytics.dataLayer.dmp||{};window.lp.analytics.dataLayer.dmp.continent=window.lp.analytics.dataLayer[0].cd1_Continent?window.lp.analytics.dataLayer[0].cd1_Continent.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\";\nwindow.lp.analytics.dataLayer.dmp.country=window.lp.analytics.dataLayer[0].cd2_Country?window.lp.analytics.dataLayer[0].cd2_Country.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.city=window.lp.analytics.dataLayer[0].cd3_City?window.lp.analytics.dataLayer[0].cd3_City.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.region=window.lp.ads.destination?window.lp.ads.destination.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\";\nwindow.lp.analytics.dataLayer.dmp.pagetype=window.lp.analytics.dataLayer[0].content_group_2.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase()||\"--\";var keywords=\"--\",key;for(key in window.lp.analytics.dataLayer.dmp){var obj=window.lp.analytics.dataLayer.dmp[key];\"--\"!=obj\u0026\u0026(keywords=\"--\"==keywords?obj:keywords+\",\"+obj)}var headers=document.querySelectorAll(\"h3\");\nfor(key in headers)void 0!=headers[key].textContent\u0026\u0026null!=headers[key].textContent\u0026\u0026null!=headers[key].textContent\u0026\u0026(keywords=\"--\"==keywords?headers[key].textContent:keywords+\",\"+headers[key].textContent);window.lp.analytics.dataLayer.dmp.keywords=keywords||\"--\";try{window.lp.analytics.dataLayer.dmp.keywords=window.lp.analytics.dataLayer.dmp.keywords+\",\"+window.lp.ads.interest}catch(a){};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/tags.crwdcntrl.net\/c\/9900\/cc.js?ns=_cc9900\" id=\"LOTCC_9900\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003E\"undefined\"!==typeof window._cc9900\u0026\u0026_cc9900.bcp();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dataLayer=window.lp.analytics.dataLayer||{};window.lp.analytics.dataLayer.dmp=window.lp.analytics.dataLayer.dmp||{};window.lp.analytics.dataLayer.dmp.pagetype=\"homepage\";window.lp.analytics.dataLayer.dmp.keywords=\"travel advice,travel tips,travel inspiration,guidebooks,trip planning,holidays,vacations,travel content,trip ideas,travel information\";\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/tags.crwdcntrl.net\/c\/9900\/cc.js?ns=_cc9900\" id=\"LOTCC_9900\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003E\"undefined\"!==typeof window._cc9900\u0026\u0026_cc9900.bcp();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"form\").submit(function(){window.lp.analytics.gaSendEvent(\"Travel News Daily Newsletter\",\"click\",\"Travel News Daily Newsletter Signup\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dataLayer=window.lp.analytics.dataLayer||{};window.lp.analytics.dataLayer.dmp=window.lp.analytics.dataLayer.dmp||{};window.lp.analytics.dataLayer.dmp.pagetype=window.lp.analytics.dataLayer[\"0\"].site_section?window.lp.analytics.dataLayer[\"0\"].site_section.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\";\nwindow.lp.analytics.dataLayer.dmp.keywords=window.lp.ads.interest?window.lp.ads.interest.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase():\"--\";\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/tags.crwdcntrl.net\/c\/9900\/cc.js?ns=_cc9900\" id=\"LOTCC_9900\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003E\"undefined\"!==typeof window._cc9900\u0026\u0026_cc9900.bcp();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"form.newsletter-footer.js-newsletter-form_footer\").submit(function(){window.lp.analytics.gaSendEvent(\"newsletter\",\"signup\",\"LP Kids Newsletter Signup\")});$gtm(\"#carbon_twitterfeed-2 \\x3e div.socials-footer \\x3e ul \\x3e li:nth-child(1) \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendSocialInteraction(\"Twitter\",\"Follow in Footer\",window.location.href)});\n$gtm(\"#carbon_twitterfeed-2 \\x3e div.socials-footer \\x3e ul \\x3e li:nth-child(2) \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendSocialInteraction(\"Facebook\",\"Follow in Footer\",window.location.href)});$gtm(\"body \\x3e div \\x3e header \\x3e div \\x3e div \\x3e div.socials \\x3e ul \\x3e li:nth-child(1)\").on(\"click\",function(){window.lp.analytics.gaSendSocialInteraction(\"Facebook\",\"follow\",window.location.href)});\n$gtm(\"body \\x3e div \\x3e header \\x3e div \\x3e div \\x3e div.socials \\x3e ul \\x3e li:nth-child(2)\").on(\"click\",function(){window.lp.analytics.gaSendSocialInteraction(\"Twitter\",\"follow\",window.location.href)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"form.newsletter-footer.js-newsletter-form\").submit(function(){window.lp.analytics.gaSendEvent(\"newsletter\",\"signup\",\"LP Kids Newsletter Page Signup\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"body \\x3e div \\x3e section.section-boxes \\x3e div \\x3e ul \\x3e li \\x3e a\").click(function(){var a=$gtm(this).attr(\"download\");window.lp.analytics.gaSendEvent(\"LP Kids Posters\",\"download\",a)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"body \\x3e div \\x3e div.slider \\x3e div \\x3e ul \\x3e div \\x3e div \\x3e li \\x3e div \\x3e div \\x3e a\").click(function(){var a=$gtm(this).attr(\"href\");window.lp.analytics.gaSendEvent(\"LP Kids Homepage Carousel\",\"click\",a)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"body \\x3e div \\x3e div.slider \\x3e div \\x3e ul \\x3e div \\x3e div \\x3e li \\x3e div \\x3e div \\x3e a\").click(function(){var a=$gtm(this).attr(\"href\");window.lp.analytics.gaSendEvent(\"LP Kids Books Carousel\",\"click\",a)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"body \\x3e div \\x3e section \\x3e div \\x3e div.col-container \\x3e div \\x3e a\").click(function(){window.lp.analytics.gaSendAJAXEvent(\"LP Kids First Words Book List\",\"click\",$gtm(this).attr(\"href\"))});$gtm(\"body \\x3e div \\x3e div.tabs \\x3e div.tabs-body \\x3e div \\x3e div \\x3e ul \\x3e li\").click(function(){window.lp.analytics.gaSendAJAXEvent(\"LP Kids Books\",\"click\",$gtm(this).find(\"h5\").text())});\n$gtm(\"#js-social \\x3e div \\x3e div \\x3e a.social__item.social__item--facebook.js-facebook-share \\x3e span.social__icon.icon--facebook.icon--white\").on(\"click\",function(){window.lp.analytics.gaSendSocialInteraction(\"Facebook\",\"share\",window.location.href)});$gtm(\"#js-social \\x3e div \\x3e div \\x3e a.social__item.social__item--twitter.js-twitter-share \\x3e span.social__icon.icon--twitter.icon--white\").on(\"click\",function(){window.lp.analytics.gaSendSocialInteraction(\"Twitter\",\"share\",window.location.href)});\n$gtm(\"body \\x3e div \\x3e div.row.row--social.interest__social \\x3e div \\x3e div \\x3e div.mv--block.split--right \\x3e div \\x3e div \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendSocialInteraction(\"Email\",\"share\",window.location.href)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",61,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/tags.crwdcntrl.net\/c\/9900\/cc.js?ns=_cc9900\" id=\"LOTCC_9900\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dataLayer=window.lp.analytics.dataLayer||{};window.lp.analytics.dataLayer.dmp=window.lp.analytics.dataLayer.dmp||{};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003Ewindow.lp.analytics.lotamePOI=function(){window.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dataLayer=window.lp.analytics.dataLayer||{};window.lp.analytics.dataLayer.dmp=window.lp.analytics.dataLayer.dmp||{};window.lp.analytics.dataLayer.dmp.continent=window.lp.analytics.dataLayer[0].cd1_Continent?window.lp.analytics.dataLayer[0].cd1_Continent.toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.country=window.lp.analytics.dataLayer[0].cd2_Country?window.lp.analytics.dataLayer[0].cd2_Country.toLowerCase():\n\"--\";window.lp.analytics.dataLayer.dmp.city=window.lp.analytics.dataLayer[0].cd3_City?window.lp.analytics.dataLayer[0].cd3_City.toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.region=window.lp.ads.destination?window.lp.ads.destination.toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.pagetype=window.lp.analytics.dataLayer[0].content_group_2?window.lp.analytics.dataLayer[0].content_group_2.toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.keywords=window.lp.analytics.dataLayer[0].cd26_PartnerOfferingDetails?\nwindow.lp.analytics.dataLayer[0].cd26_PartnerOfferingDetails.toLowerCase():\"--\";\"--\"==window.lp.analytics.dataLayer.dmp.keywords\u0026\u0026(window.lp.analytics.dataLayer.dmp.keywords=window.lp.analytics.dataLayer[0].subtypes?window.lp.analytics.dataLayer[0].subtypes.toLowerCase():\"--\");window.lp.analytics.dataLayer.dmp.poisubtype=window.lp.analytics.dataLayer[0].resource?window.lp.analytics.dataLayer[0].resource.toLowerCase():\"--\";var a=lp.analytics.dataLayer[0].cd27_PartnerOfferingKind\u0026\u0026\"tour\"==lp.analytics.dataLayer[0].cd27_PartnerOfferingKind\u0026\u0026\n0\u003C$gtm(\".Availability-price \\x3e .Price.clearfix \\x3e .Price-amount\").text()?$gtm(\".Availability-price \\x3e .Price.clearfix \\x3e .Price-amount\").text().replace(\/\\D\/g,\"\"):0\u003C$gtm(\".Booking-price \\x3e .Price.clearfix \\x3e .Price-amount\").text().replace(\/\\D\/g,\"\")?$gtm(\".Booking-price \\x3e .Price.clearfix \\x3e .Price-amount\").text().replace(\/\\D\/g,\"\"):0;window.lp.analytics.dataLayer.dmp.poiprice=a};\nwindow.lp.analytics.lotameList=function(){window.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dataLayer=window.lp.analytics.dataLayer||{};window.lp.analytics.dataLayer.dmp=window.lp.analytics.dataLayer.dmp||{};window.lp.analytics.dataLayer.dmp.continent=window.lp.analytics.dataLayer[0].cd1_Continent?window.lp.analytics.dataLayer[0].cd1_Continent.toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.country=window.lp.analytics.dataLayer[0].cd2_Country?window.lp.analytics.dataLayer[0].cd2_Country.toLowerCase():\n\"--\";window.lp.analytics.dataLayer.dmp.city=window.lp.analytics.dataLayer[0].cd3_City?window.lp.analytics.dataLayer[0].cd3_City.toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.region=window.lp.ads.destination?window.lp.ads.destination.toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.pagetype=window.lp.analytics.dataLayer[0].content_group_2?window.lp.analytics.dataLayer[0].content_group_2.toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.keywords=window.lp.analytics.dataLayer[0].cd7_Topic?\nwindow.lp.analytics.dataLayer[0].cd7_Topic.toLowerCase():\"--\";window.lp.analytics.dataLayer.dmp.poisubtype=window.lp.analytics.dataLayer[0].poiType?window.lp.analytics.dataLayer[0].poiType.toLowerCase():\"--\"};\ntry{lp.analytics.dataLayer\u0026\u0026lp.analytics.dataLayer[0]\u0026\u0026lp.analytics.dataLayer[0].content_group_2\u0026\u0026\"lists\"==lp.analytics.dataLayer[0].content_group_2\u0026\u0026setTimeout(function(){window.lp.analytics.lotameList();console.log(\"list\");\"undefined\"!==typeof window._cc9900\u0026\u0026_cc9900.bcp()},2E3),lp.analytics.dataLayer\u0026\u0026lp.analytics.dataLayer[0]\u0026\u0026lp.analytics.dataLayer[0].content_group_2\u0026\u0026\"pois\"==lp.analytics.dataLayer[0].content_group_2\u0026\u0026setTimeout(function(){window.lp.analytics.lotamePOI();console.log(\"poi\");\"undefined\"!==\ntypeof window._cc9900\u0026\u0026_cc9900.bcp()},2E3)}catch(a){console.error(\"lotame list-poi error \"+a)};\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];googletag.cmd.push(function(){try{googletag.pubads().enableAsyncRendering(),googletag.pubads().collapseEmptyDivs(),googletag.enableServices()}catch(b){window.trackJs\u0026\u0026window.trackJs.console.log(b)}});\ngoogletag.cmd.push(function(){var b=function(a){return a\u0026\u0026a.toLowerCase().replace(\/\\s\/g,\"-\")};try{var a=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Special\",[1,1],\"ad-page-top\");a.addService(googletag.pubads());a.defineSizeMapping(googletag.sizeMapping().addSize([0,0],[[1,1]]).build()).setCollapseEmptyDiv(!0,!0);a.setTargeting(\"position\",\"hero\");window.lp\u0026\u0026window.lp.ads\u0026\u0026window.lp.ads.tnm\u0026\u0026a.setTargeting(\"tnm\",window.lp.ads.tnm.replace(\/\\s\/g,\"\"));var e=window.lp.analytics.dataLayer[0];var c=window.lp\u0026\u0026\nwindow.lp.ads\u0026\u0026window.lp.ads.destination;e\u0026\u0026c\u0026\u0026(a.setTargeting(\"dest\",b(c)),a.setTargeting(\"ctt\",b(",["escape",["macro",43],8,16],")),a.setTargeting(\"cnty\",b(",["escape",["macro",44],8,16],")),a.setTargeting(\"state\",b(",["escape",["macro",47],8,16],")),a.setTargeting(\"interest\",window.lp.ads.interest),a.setTargeting(\"url\",",["escape",["macro",31],8,16],"),a.setTargeting(\"topic\",b(",["escape",["macro",49],8,16],")),a.setTargeting(\"continent\",b(",["escape",["macro",43],8,16],")),a.setTargeting(\"country\",b(",["escape",["macro",44],8,16],")),a.setTargeting(\"city\",b(",["escape",["macro",45],8,16],")),\na.setTargeting(\"template\",b(",["escape",["macro",98],8,16],")));googletag.display(\"ad-page-top\");googletag.pubads().refresh([a])}catch(d){console.log(\"Error loading ad-page-top\"),console.log(d)}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"#articleColumn \\x3e div.Newsletter \\x3e div \\x3e div \\x3e form \\x3e div:nth-child(1) \\x3e button\").click(function(){window.lp.analytics.gaSendAJAXEvent(\"Newsletter\",\"signup\",\"Weekly Newsletter Signup on Homepage\")});$gtm(\".newsletter-register__button\").click(function(){window.lp.analytics.gaSendAJAXEvent(\"Newsletter\",\"signup\",\"Weekly Newsletter Signup on Homepage Footer\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp.analytics.gaSendNonInterEvent=function(a,b,c){try{ga(\"send\",\"event\",a,b,c,{nonInteraction:!0,page:window.location.pathname,dimension1:",["escape",["macro",43],8,16],",dimension2:",["escape",["macro",44],8,16],",dimension3:",["escape",["macro",45],8,16],",dimension4:",["escape",["macro",46],8,16],",dimension5:",["escape",["macro",47],8,16],",dimension6:",["escape",["macro",48],8,16],",dimension7:",["escape",["macro",49],8,16],",dimension8:",["escape",["macro",50],8,16],",dimension9:",["escape",["macro",51],8,16],",dimension10:",["escape",["macro",52],8,16],",dimension11:",["escape",["macro",53],8,16],",dimension12:",["escape",["macro",54],8,16],",\ndimension13:",["escape",["macro",55],8,16],",dimension14:",["escape",["macro",56],8,16],",dimension21:",["escape",["macro",57],8,16],",dimension22:",["escape",["macro",58],8,16],",dimension24:",["escape",["macro",2],8,16],",dimension25:",["escape",["macro",59],8,16],",dimension26:",["escape",["macro",60],8,16],",dimension27:",["escape",["macro",61],8,16],",dimension28:",["escape",["macro",62],8,16],",dimension29:",["escape",["macro",1],8,16],",dimension30:",["escape",["macro",3],8,16],",dimension32:",["escape",["macro",7],8,16],",dimension33:",["escape",["macro",6],8,16],",dimension34:",["escape",["macro",63],8,16],",dimension35:",["escape",["macro",0],8,16],",\ndimension36:",["escape",["macro",64],8,16],",dimension37:",["escape",["macro",65],8,16],",dimension38:",["escape",["macro",5],8,16],",dimension39:",["escape",["macro",66],8,16],",dimension46:",["escape",["macro",67],8,16],",dimension47:",["escape",["macro",68],8,16],",dimension51:",["escape",["macro",13],8,16],",dimension52:",["escape",["macro",14],8,16],",dimension57:",["escape",["macro",15],8,16],",contentGroup1:",["escape",["macro",40],8,16],",contentGroup2:",["escape",["macro",41],8,16],",contentGroup3:",["escape",["macro",42],8,16],"})}catch(d){console.error(\"gaSendNonInterEvent \"+d)}};\nwindow.lp.analytics.gaSendEvent=function(a,b,c){try{ga(\"send\",\"event\",a,b,c,{page:window.location.pathname,dimension1:",["escape",["macro",43],8,16],",dimension2:",["escape",["macro",44],8,16],",dimension3:",["escape",["macro",45],8,16],",dimension4:",["escape",["macro",46],8,16],",dimension5:",["escape",["macro",47],8,16],",dimension6:",["escape",["macro",48],8,16],",dimension7:",["escape",["macro",49],8,16],",dimension8:",["escape",["macro",50],8,16],",dimension9:",["escape",["macro",51],8,16],",dimension10:",["escape",["macro",52],8,16],",dimension11:",["escape",["macro",53],8,16],",dimension12:",["escape",["macro",54],8,16],",\ndimension13:",["escape",["macro",55],8,16],",dimension14:",["escape",["macro",56],8,16],",dimension21:",["escape",["macro",57],8,16],",dimension22:",["escape",["macro",58],8,16],",dimension24:",["escape",["macro",2],8,16],",dimension25:",["escape",["macro",59],8,16],",dimension26:",["escape",["macro",60],8,16],",dimension27:",["escape",["macro",61],8,16],",dimension28:",["escape",["macro",62],8,16],",dimension29:",["escape",["macro",1],8,16],",dimension30:",["escape",["macro",3],8,16],",dimension32:",["escape",["macro",7],8,16],",dimension33:",["escape",["macro",6],8,16],",dimension34:",["escape",["macro",63],8,16],",dimension35:",["escape",["macro",0],8,16],",\ndimension36:",["escape",["macro",64],8,16],",dimension37:",["escape",["macro",65],8,16],",dimension38:",["escape",["macro",5],8,16],",dimension39:",["escape",["macro",66],8,16],",dimension46:",["escape",["macro",67],8,16],",dimension47:",["escape",["macro",68],8,16],",dimension51:",["escape",["macro",13],8,16],",dimension52:",["escape",["macro",14],8,16],",dimension57:",["escape",["macro",15],8,16],",contentGroup1:",["escape",["macro",40],8,16],",contentGroup2:",["escape",["macro",41],8,16],",contentGroup3:",["escape",["macro",42],8,16],"})}catch(d){console.error(\"gaSendEvent \"+d)}};\nwindow.lp.analytics.gaSendAJAXEvent=function(a,b,c){try{ga(\"send\",\"event\",a,b,c,{page:window.location.pathname,dimension1:window.lp.analytics.dataLayer[0].cd1_Continent?window.lp.analytics.dataLayer[0].cd1_Continent.toLowerCase():\"--\",dimension2:window.lp.analytics.dataLayer[0].cd2_Country?window.lp.analytics.dataLayer[0].cd2_Country.toLowerCase():\"--\",dimension3:window.lp.analytics.dataLayer[0].cd3_City?window.lp.analytics.dataLayer[0].cd3_City.toLowerCase():\"--\",dimension4:window.lp.analytics.dataLayer[0].cd4_Neighborhood?\nwindow.lp.analytics.dataLayer[0].cd4_Neighborhood.toLowerCase():\"--\",dimension5:window.lp.analytics.dataLayer[0].cd5_Region?window.lp.analytics.dataLayer[0].cd5_Region.toLowerCase():\"--\",dimension6:window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection.toLowerCase():\"--\",dimension7:window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic.toLowerCase():\"--\",dimension8:window.lp.analytics.dataLayer[0].cd8_BookingType?window.lp.analytics.dataLayer[0].cd8_BookingType.toLowerCase():\n\"--\",dimension9:",["escape",["macro",51],8,16],",dimension10:window.lp.analytics.dataLayer[0].cd10_ArticleName?window.lp.analytics.dataLayer[0].cd10_ArticleName.toLowerCase():\"--\",dimension11:window.lp.analytics.dataLayer[0].cd11_ForumCategory?window.lp.analytics.dataLayer[0].cd11_ForumCategory.toLowerCase():\"--\",dimension12:window.lp.analytics.dataLayer[0].cd12_ForumContinent?window.lp.analytics.dataLayer[0].cd12_ForumContinent.toLowerCase():\"--\",dimension13:window.lp.analytics.dataLayer[0].cd13_ForumCountry?\nwindow.lp.analytics.dataLayer[0].cd13_ForumCountry.toLowerCase():\"--\",dimension14:window.lp.analytics.dataLayer[0].cd14_ForumPostTitle?window.lp.analytics.dataLayer[0].cd14_ForumPostTitle.toLowerCase():\"--\",dimension21:window.lp.analytics.dataLayer[0].cd21_AtlasDestination?window.lp.analytics.dataLayer[0].cd21_AtlasDestination.toLowerCase():\"--\",dimension22:window.lp.analytics.dataLayer[0].cd22_ApplicationName?window.lp.analytics.dataLayer[0].cd22_ApplicationName.toLowerCase():\"--\",dimension25:window.lp.analytics.dataLayer[0].cd25_Bookable?\nwindow.lp.analytics.dataLayer[0].cd25_Bookable.toLowerCase():\"--\",dimension26:window.lp.analytics.dataLayer[0].cd26_PartnerOfferingDetails?window.lp.analytics.dataLayer[0].cd26_PartnerOfferingDetails.toLowerCase():\"--\",dimension27:window.lp.analytics.dataLayer[0].cd27_PartnerOfferingKind?window.lp.analytics.dataLayer[0].cd27_PartnerOfferingKind.toLowerCase():\"--\",dimension28:window.lp.analytics.dataLayer[0].cd28_PartnerName?window.lp.analytics.dataLayer[0].cd28_PartnerName.toLowerCase():\"--\",dimension29:window.lp.analytics.dataLayer[0].lp_luna_uuid?\nwindow.lp.analytics.dataLayer[0].lp_luna_uuid.toLowerCase():\"--\",dimension30:\"--\",dimension32:\"--\",dimension33:\"--\",dimension34:window.lp.analytics.dataLayer[\"0\"].poiType?window.lp.analytics.dataLayer[\"0\"].poiType.toLowerCase():\"--\",dimension35:window.lp.analytics.dataLayer[\"0\"].page_type?window.lp.analytics.dataLayer[\"0\"].page_type.toLowerCase():\"--\",dimension36:window.lp.analytics.dataLayer[\"0\"].resource?window.lp.analytics.dataLayer[\"0\"].resource.toLowerCase():\"--\",dimension37:window.lp.analytics.dataLayer[\"0\"].kind?\nwindow.lp.analytics.dataLayer[\"0\"].kind.toLowerCase():\"--\",dimension38:window.lp.analytics.dataLayer[\"0\"].subtypes?window.lp.analytics.dataLayer[\"0\"].subtypes.toLowerCase():\"--\",dimension39:window.lp.analytics.dataLayer[\"0\"].poiName?window.lp.analytics.dataLayer[\"0\"].poiName.toLowerCase():\"--\",dimension46:window.lp.analytics.dataLayer[\"0\"].channel?window.lp.analytics.dataLayer[\"0\"].channel.join(\"|\").toLowerCase():\"--\",dimension47:window.lp.analytics.dataLayer[\"0\"].interest?window.lp.analytics.dataLayer[\"0\"].interest.join(\"|\").toLowerCase():\n\"--\",dimension51:location.protocol?location.protocol:\"--\",dimension52:-1!=window.location.hash.indexOf(\"#\")?window.location.hash.substring(window.location.hash.indexOf(\"#\")+1):\"--\",dimension57:",["escape",["macro",15],8,16],",contentGroup1:window.lp.analytics.dataLayer[0].content_group_1?window.lp.analytics.dataLayer[0].content_group_1.toLowerCase():\"--\",contentGroup2:window.lp.analytics.dataLayer[0].content_group_2?window.lp.analytics.dataLayer[0].content_group_2.toLowerCase():\"--\",contentGroup3:window.lp.analytics.dataLayer[0].content_group_3?\nwindow.lp.analytics.dataLayer[0].content_group_3.toLowerCase():\"--\"})}catch(d){console.error(\"gaSendAJAXEvent \"+d)}};\nwindow.lp.analytics.gaSendAJAXPageview=function(){try{ga(\"send\",\"pageview\",{page:window.location.pathname,dimension1:window.lp.analytics.dataLayer[0].cd1_Continent?window.lp.analytics.dataLayer[0].cd1_Continent.toLowerCase():\"--\",dimension2:window.lp.analytics.dataLayer[0].cd2_Country?window.lp.analytics.dataLayer[0].cd2_Country.toLowerCase():\"--\",dimension3:window.lp.analytics.dataLayer[0].cd3_City?window.lp.analytics.dataLayer[0].cd3_City.toLowerCase():\"--\",dimension4:window.lp.analytics.dataLayer[0].cd4_Neighborhood?\nwindow.lp.analytics.dataLayer[0].cd4_Neighborhood.toLowerCase():\"--\",dimension5:window.lp.analytics.dataLayer[0].cd5_Region?window.lp.analytics.dataLayer[0].cd5_Region.toLowerCase():\"--\",dimension6:window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection.toLowerCase():\"--\",dimension7:window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic.toLowerCase():\"--\",dimension8:window.lp.analytics.dataLayer[0].cd8_BookingType?window.lp.analytics.dataLayer[0].cd8_BookingType.toLowerCase():\n\"--\",dimension9:",["escape",["macro",51],8,16],",dimension10:window.lp.analytics.dataLayer[0].cd10_ArticleName?window.lp.analytics.dataLayer[0].cd10_ArticleName.toLowerCase():\"--\",dimension11:window.lp.analytics.dataLayer[0].cd11_ForumCategory?window.lp.analytics.dataLayer[0].cd11_ForumCategory.toLowerCase():\"--\",dimension12:window.lp.analytics.dataLayer[0].cd12_ForumContinent?window.lp.analytics.dataLayer[0].cd12_ForumContinent.toLowerCase():\"--\",dimension13:window.lp.analytics.dataLayer[0].cd13_ForumCountry?\nwindow.lp.analytics.dataLayer[0].cd13_ForumCountry.toLowerCase():\"--\",dimension14:window.lp.analytics.dataLayer[0].cd14_ForumPostTitle?window.lp.analytics.dataLayer[0].cd14_ForumPostTitle.toLowerCase():\"--\",dimension21:window.lp.analytics.dataLayer[0].cd21_AtlasDestination?window.lp.analytics.dataLayer[0].cd21_AtlasDestination.toLowerCase():\"--\",dimension22:window.lp.analytics.dataLayer[0].cd22_ApplicationName?window.lp.analytics.dataLayer[0].cd22_ApplicationName.toLowerCase():\"--\",dimension25:window.lp.analytics.dataLayer[0].cd25_Bookable?\nwindow.lp.analytics.dataLayer[0].cd25_Bookable.toLowerCase():\"--\",dimension26:window.lp.analytics.dataLayer[0].cd26_PartnerOfferingDetails?window.lp.analytics.dataLayer[0].cd26_PartnerOfferingDetails.toLowerCase():\"--\",dimension27:window.lp.analytics.dataLayer[0].cd27_PartnerOfferingKind?window.lp.analytics.dataLayer[0].cd27_PartnerOfferingKind.toLowerCase():\"--\",dimension28:window.lp.analytics.dataLayer[0].cd28_PartnerName?window.lp.analytics.dataLayer[0].cd28_PartnerName.toLowerCase():\"--\",dimension29:window.lp.analytics.dataLayer[0].lp_luna_uuid?\nwindow.lp.analytics.dataLayer[0].lp_luna_uuid.toLowerCase():\"--\",dimension30:\"--\",dimension32:\"--\",dimension33:\"--\",dimension34:window.lp.analytics.dataLayer[\"0\"].poiType?window.lp.analytics.dataLayer[\"0\"].poiType.toLowerCase():\"--\",dimension35:window.lp.analytics.dataLayer[\"0\"].page_type?window.lp.analytics.dataLayer[\"0\"].page_type.toLowerCase():\"--\",dimension36:window.lp.analytics.dataLayer[\"0\"].resource?window.lp.analytics.dataLayer[\"0\"].resource.toLowerCase():\"--\",dimension37:window.lp.analytics.dataLayer[\"0\"].kind?\nwindow.lp.analytics.dataLayer[\"0\"].kind.toLowerCase():\"--\",dimension38:window.lp.analytics.dataLayer[\"0\"].subtypes?window.lp.analytics.dataLayer[\"0\"].subtypes.toLowerCase():\"--\",dimension39:window.lp.analytics.dataLayer[\"0\"].poiName?window.lp.analytics.dataLayer[\"0\"].poiName.toLowerCase():\"--\",dimension46:window.lp.analytics.dataLayer[\"0\"].channel?window.lp.analytics.dataLayer[\"0\"].channel.join(\"|\").toLowerCase():\"--\",dimension47:window.lp.analytics.dataLayer[\"0\"].interest?window.lp.analytics.dataLayer[\"0\"].interest.join(\"|\").toLowerCase():\n\"--\",dimension51:location.protocol?location.protocol:\"--\",dimension52:-1!=window.location.hash.indexOf(\"#\")?window.location.hash.substring(window.location.hash.indexOf(\"#\")+1):\"--\",dimension57:",["escape",["macro",15],8,16],",contentGroup1:window.lp.analytics.dataLayer[0].content_group_1?window.lp.analytics.dataLayer[0].content_group_1.toLowerCase():\"--\",contentGroup2:window.lp.analytics.dataLayer[0].content_group_2?window.lp.analytics.dataLayer[0].content_group_2.toLowerCase():\"--\",contentGroup3:window.lp.analytics.dataLayer[0].content_group_3?\nwindow.lp.analytics.dataLayer[0].content_group_3.toLowerCase():\"--\"})}catch(a){console.error(\"gaSendAJAXPageview \"+a)}};\nwindow.lp.analytics.gaSendSocialInteraction=function(a,b,c){try{ga(\"send\",\"social\",a,b,c,{page:window.location.pathname,dimension1:window.lp.analytics.dataLayer[0].cd1_Continent?window.lp.analytics.dataLayer[0].cd1_Continent.toLowerCase():\"--\",dimension2:window.lp.analytics.dataLayer[0].cd2_Country?window.lp.analytics.dataLayer[0].cd2_Country.toLowerCase():\"--\",dimension3:window.lp.analytics.dataLayer[0].cd3_City?window.lp.analytics.dataLayer[0].cd3_City.toLowerCase():\"--\",dimension4:window.lp.analytics.dataLayer[0].cd4_Neighborhood?\nwindow.lp.analytics.dataLayer[0].cd4_Neighborhood.toLowerCase():\"--\",dimension5:window.lp.analytics.dataLayer[0].cd5_Region?window.lp.analytics.dataLayer[0].cd5_Region.toLowerCase():\"--\",dimension6:window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection.toLowerCase():\"--\",dimension7:window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic.toLowerCase():\"--\",dimension8:window.lp.analytics.dataLayer[0].cd8_BookingType?window.lp.analytics.dataLayer[0].cd8_BookingType.toLowerCase():\n\"--\",dimension9:",["escape",["macro",51],8,16],",dimension10:window.lp.analytics.dataLayer[0].cd10_ArticleName?window.lp.analytics.dataLayer[0].cd10_ArticleName.toLowerCase():\"--\",dimension11:window.lp.analytics.dataLayer[0].cd11_ForumCategory?window.lp.analytics.dataLayer[0].cd11_ForumCategory.toLowerCase():\"--\",dimension12:window.lp.analytics.dataLayer[0].cd12_ForumContinent?window.lp.analytics.dataLayer[0].cd12_ForumContinent.toLowerCase():\"--\",dimension13:window.lp.analytics.dataLayer[0].cd13_ForumCountry?\nwindow.lp.analytics.dataLayer[0].cd13_ForumCountry.toLowerCase():\"--\",dimension14:window.lp.analytics.dataLayer[0].cd14_ForumPostTitle?window.lp.analytics.dataLayer[0].cd14_ForumPostTitle.toLowerCase():\"--\",dimension21:window.lp.analytics.dataLayer[0].cd21_AtlasDestination?window.lp.analytics.dataLayer[0].cd21_AtlasDestination.toLowerCase():\"--\",dimension22:window.lp.analytics.dataLayer[0].cd22_ApplicationName?window.lp.analytics.dataLayer[0].cd22_ApplicationName.toLowerCase():\"--\",dimension25:window.lp.analytics.dataLayer[0].cd25_Bookable?\nwindow.lp.analytics.dataLayer[0].cd25_Bookable.toLowerCase():\"--\",dimension26:window.lp.analytics.dataLayer[0].cd26_PartnerOfferingDetails?window.lp.analytics.dataLayer[0].cd26_PartnerOfferingDetails.toLowerCase():\"--\",dimension27:window.lp.analytics.dataLayer[0].cd27_PartnerOfferingKind?window.lp.analytics.dataLayer[0].cd27_PartnerOfferingKind.toLowerCase():\"--\",dimension28:window.lp.analytics.dataLayer[0].cd28_PartnerName?window.lp.analytics.dataLayer[0].cd28_PartnerName.toLowerCase():\"--\",dimension29:window.lp.analytics.dataLayer[0].lp_luna_uuid?\nwindow.lp.analytics.dataLayer[0].lp_luna_uuid.toLowerCase():\"--\",dimension30:\"--\",dimension32:\"--\",dimension33:\"--\",dimension34:window.lp.analytics.dataLayer[\"0\"].poiType?window.lp.analytics.dataLayer[\"0\"].poiType.toLowerCase():\"--\",dimension35:window.lp.analytics.dataLayer[\"0\"].page_type?window.lp.analytics.dataLayer[\"0\"].page_type.toLowerCase():\"--\",dimension36:window.lp.analytics.dataLayer[\"0\"].resource?window.lp.analytics.dataLayer[\"0\"].resource.toLowerCase():\"--\",dimension37:window.lp.analytics.dataLayer[\"0\"].kind?\nwindow.lp.analytics.dataLayer[\"0\"].kind.toLowerCase():\"--\",dimension38:window.lp.analytics.dataLayer[\"0\"].subtypes?window.lp.analytics.dataLayer[\"0\"].subtypes.toLowerCase():\"--\",dimension39:window.lp.analytics.dataLayer[\"0\"].poiName?window.lp.analytics.dataLayer[\"0\"].poiName.toLowerCase():\"--\",dimension46:window.lp.analytics.dataLayer[\"0\"].channel?window.lp.analytics.dataLayer[\"0\"].channel.join(\"|\").toLowerCase():\"--\",dimension47:window.lp.analytics.dataLayer[\"0\"].interest?window.lp.analytics.dataLayer[\"0\"].interest.join(\"|\").toLowerCase():\n\"--\",dimension51:location.protocol?location.protocol:\"--\",dimension52:-1!=window.location.hash.indexOf(\"#\")?window.location.hash.substring(window.location.hash.indexOf(\"#\")+1):\"--\",dimension57:",["escape",["macro",15],8,16],",contentGroup1:window.lp.analytics.dataLayer[0].content_group_1?window.lp.analytics.dataLayer[0].content_group_1.toLowerCase():\"--\",contentGroup2:window.lp.analytics.dataLayer[0].content_group_2?window.lp.analytics.dataLayer[0].content_group_2.toLowerCase():\"--\",contentGroup3:window.lp.analytics.dataLayer[0].content_group_3?\nwindow.lp.analytics.dataLayer[0].content_group_3.toLowerCase():\"--\"})}catch(d){console.error(\"gaSendSocialInteraction \"+d)}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript async=\"async\" data-gtmsrc=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=googletag||{};googletag.cmd=googletag.cmd||[];\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Egoogletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[1,2]).build();googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/News\/home\/native\",[[1,2],[1,1]],\"ad-home-native\").defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",",["escape",["macro",31],8,16],").setTargeting(\"ctt\",",["escape",["macro",43],8,16],").setTargeting(\"cnty\",",["escape",["macro",44],8,16],").setTargeting(\"state\",",["escape",["macro",47],8,16],").setTargeting(\"neighborhood\",",["escape",["macro",46],8,16],").setTargeting(\"topic\",",["escape",["macro",49],8,16],").setTargeting(\"site_section\",\n",["escape",["macro",48],8,16],").setTargeting(\"dfpkey\",",["escape",["macro",10],8,16],").setTargeting(\"position\",\"native\").addService(googletag.pubads());googletag.enableServices();googletag.display(\"ad-home-native\")});\u003C\/script\u003E\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Egoogletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[]).addSize([320,0],[[1600,600],[300,250],[1,1]]).addSize([768,0],[[728,90],[1,1]]).addSize([970,0],[[970,250],[728,90],[1,1]]).addSize([1600,0],[[1600,600],[970,250],[728,90],[1,1]]).build();googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/News\/home\/superzone\",[[1,1],[300,250],[1600,600],[970,250]],\"ad-home-superzone\").defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",",["escape",["macro",31],8,16],").setTargeting(\"ctt\",\n",["escape",["macro",43],8,16],").setTargeting(\"cnty\",",["escape",["macro",44],8,16],").setTargeting(\"state\",",["escape",["macro",47],8,16],").setTargeting(\"neighborhood\",",["escape",["macro",46],8,16],").setTargeting(\"topic\",",["escape",["macro",49],8,16],").setTargeting(\"site_section\",",["escape",["macro",48],8,16],").setTargeting(\"dfpkey\",",["escape",["macro",10],8,16],").setTargeting(\"position\",\"superzone\").addService(googletag.pubads());googletag.enableServices();googletag.display(\"ad-home-superzone\")});\u003C\/script\u003E\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Egoogletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[]).addSize([0,250],[[300,250]]).addSize([0,600],[[300,600],[300,250]]).build();googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/News\/home\/right-rail\",[[300,250],[300,600]],\"ad-home-right-rail\").defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",",["escape",["macro",31],8,16],").setTargeting(\"ctt\",",["escape",["macro",43],8,16],").setTargeting(\"cnty\",",["escape",["macro",44],8,16],").setTargeting(\"state\",",["escape",["macro",47],8,16],").setTargeting(\"neighborhood\",\n",["escape",["macro",46],8,16],").setTargeting(\"topic\",",["escape",["macro",49],8,16],").setTargeting(\"site_section\",",["escape",["macro",48],8,16],").setTargeting(\"dfpkey\",",["escape",["macro",10],8,16],").setTargeting(\"position\",\"right-rail\").addService(googletag.pubads());googletag.enableServices();googletag.display(\"ad-home-right-rail\")});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript async=\"async\" data-gtmsrc=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=googletag||{};googletag.cmd=googletag.cmd||[];\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Egoogletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[]).addSize([0,250],[[300,250]]).addSize([0,600],[[300,600],[300,250]]).build();googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/News\/list\/right-rail\",[[300,250],[300,600]],\"ad-list-right-rail\").defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",",["escape",["macro",31],8,16],").setTargeting(\"ctt\",",["escape",["macro",43],8,16],").setTargeting(\"cnty\",",["escape",["macro",44],8,16],").setTargeting(\"state\",",["escape",["macro",47],8,16],").setTargeting(\"neighborhood\",\n",["escape",["macro",46],8,16],").setTargeting(\"topic\",",["escape",["macro",49],8,16],").setTargeting(\"site_section\",",["escape",["macro",48],8,16],").setTargeting(\"dfpkey\",",["escape",["macro",10],8,16],").setTargeting(\"position\",\"right-rail\").addService(googletag.pubads());googletag.enableServices();googletag.display(\"ad-list-right-rail\")});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript async=\"async\" data-gtmsrc=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=googletag||{};googletag.cmd=googletag.cmd||[];\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Egoogletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[]).addSize([0,250],[[300,250]]).addSize([0,600],[[300,600],[300,250]]).build();googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/News\/story\/right-rail\",[[300,250],[300,600]],\"ad-news-right-rail\").defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",",["escape",["macro",31],8,16],").setTargeting(\"ctt\",",["escape",["macro",43],8,16],").setTargeting(\"cnty\",",["escape",["macro",44],8,16],").setTargeting(\"state\",",["escape",["macro",47],8,16],").setTargeting(\"neighborhood\",\n",["escape",["macro",46],8,16],").setTargeting(\"topic\",",["escape",["macro",49],8,16],").setTargeting(\"site_section\",",["escape",["macro",48],8,16],").setTargeting(\"dfpkey\",",["escape",["macro",10],8,16],").setTargeting(\"position\",\"right-rail\").addService(googletag.pubads());googletag.enableServices();googletag.display(\"ad-news-right-rail\")});\u003C\/script\u003E\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Egoogletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[1,2]).build();googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/News\/story\/native\",[[1,2],[1,1]],\"ad-news-native\").defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",",["escape",["macro",31],8,16],").setTargeting(\"ctt\",",["escape",["macro",43],8,16],").setTargeting(\"cnty\",",["escape",["macro",44],8,16],").setTargeting(\"state\",",["escape",["macro",47],8,16],").setTargeting(\"neighborhood\",",["escape",["macro",46],8,16],").setTargeting(\"topic\",",["escape",["macro",49],8,16],").setTargeting(\"site_section\",\n",["escape",["macro",48],8,16],").setTargeting(\"dfpkey\",",["escape",["macro",10],8,16],").setTargeting(\"position\",\"native\").addService(googletag.pubads());googletag.enableServices();googletag.display(\"ad-news-native\")});\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Egoogletag.cmd.push(function(){googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/News\/story\/in-article\",[[1600,600],[300,250],[1,1]],\"ad-news-in-article\").setCollapseEmptyDiv(!0).setTargeting(\"url\",",["escape",["macro",31],8,16],").setTargeting(\"ctt\",",["escape",["macro",43],8,16],").setTargeting(\"cnty\",",["escape",["macro",44],8,16],").setTargeting(\"state\",",["escape",["macro",47],8,16],").setTargeting(\"neighborhood\",",["escape",["macro",46],8,16],").setTargeting(\"topic\",",["escape",["macro",49],8,16],").setTargeting(\"site_section\",",["escape",["macro",48],8,16],").setTargeting(\"dfpkey\",\n",["escape",["macro",10],8,16],").setTargeting(\"position\",\"in-article\").addService(googletag.pubads());googletag.enableServices();googletag.display(\"ad-news-in-article\")});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async=\"async\" data-gtmsrc=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=googletag||{};googletag.cmd=googletag.cmd||[];\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dfp=window.lp.analytics.dfp||{};window.lp.analytics.dfp.video=window.lp.analytics.dfp.video||{};\nwindow.lp.analytics.dfp.video.home=function(){var f=1E3;setTimeout(function(){try{var c=document.querySelectorAll('*[id^\\x3d\"video-home-sponsor-advert\"]');c[c.length-1].setAttribute(\"id\",c[c.length-1].id+\"-dup\");c[0].setAttribute(\"id\",c[0].id+\"-dup\");for(var b=0;b\u003Cc.length;b++){var a=c[b].getAttribute(\"id\");c[b].innerHTML=\"\";window[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[a]])});googletag.cmd.push(function(){window[a]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Video\/home\/logo-title-card\",\n[1,1],a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",a).addService(googletag.pubads());googletag.enableServices();googletag.display(a);googletag.pubads().refresh([window[a]])})}}catch(g){}try{for(c=\ndocument.querySelectorAll('*[id^\\x3d\"ad-logo-channel-shelf\"]'),b=0;b\u003Cc.length;b++){a=c[b].getAttribute(\"id\");var d=a.substr(a.lastIndexOf(\"shelf-\")+1);c[b].innerHTML=\"\";window[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[a]])});googletag.cmd.push(function(){window[a]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Video\/home\/logo-channel-shelf\",[1,1],a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",window.lp.analytics.dataLayer[0].cd6_SiteSection?\nwindow.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic:\"--\").setTargeting(\"div_id\",a).setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",\"channelshelf\"+d).addService(googletag.pubads());googletag.enableServices();googletag.display(a);googletag.pubads().refresh([window[a]])})}}catch(g){}try{var e=document.getElementById(\"ad-logo-series-spotlight\");a=e.getAttribute(\"id\");\ne.innerHTML=\"\";window[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[a]])});googletag.cmd.push(function(){window[a]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Video\/home\/logo-series-spotlight\",[1,1],a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic:\n\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",\"logo-series-spotlight\").addService(googletag.pubads());googletag.enableServices();googletag.display(a);googletag.pubads().refresh([window[a]])})}catch(g){}try{e=document.getElementById(\"ad-video-home-superzone\"),a=e.getAttribute(\"id\"),e.innerHTML=\"\",window[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[a]])}),googletag.cmd.push(function(){var b=googletag.sizeMapping().addSize([0,0],[]).addSize([320,0],[[300,\n250],[1,1]]).addSize([970,250],[[970,250],[1,1]]).addSize([1600,0],[[1600,600],[970,250],[1,1]]).build();window[a]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Video\/home\/superzone\",[1,1],a).defineSizeMapping(b).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic:\n\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",\"superzone\").addService(googletag.pubads());googletag.enableServices();googletag.display(a);googletag.pubads().refresh([window[a]])})}catch(g){}},f)};\nwindow.lp.analytics.dfp.video.detail=function(){var f=1E3;setTimeout(function(){try{var c=document.getElementById(\"ad-logo\"),b=c.getAttribute(\"id\");c.innerHTML=\"\";window[b]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[b]])});googletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[]).addSize([320,0],[[1,1]]).addSize([970,250],[[1,1]]).addSize([1600,0],[[1,1]]).build();window[b]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Video\/player\/logo\",[1,1],b).defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",\nwindow.location.href.split(\"?\")[0]).setTargeting(\"brightcoveTitle\",window.lp.analytics.dataLayer[0].brightcoveTitle?window.lp.analytics.dataLayer[0].brightcoveTitle:\"--\").setTargeting(\"brightcoveDescription\",window.lp.analytics.dataLayer[0].brightcoveDescription?window.lp.analytics.dataLayer[0].brightcoveDescription:\"--\").setTargeting(\"atlas_id\",window.lp.analytics.dataLayer[0].atlas_id?window.lp.analytics.dataLayer[0].atlas_id:\"--\").setTargeting(\"brightcoveID\",window.lp.analytics.dataLayer[0].brightcoveID?\nwindow.lp.analytics.dataLayer[0].brightcoveID:\"--\").setTargeting(\"topic\",window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"interest\",window.lp.analytics.dataLayer[0].interest.join()).setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",\"logo\").addService(googletag.pubads());googletag.enableServices();\ngoogletag.display(b);googletag.pubads().refresh([window[b]])})}catch(a){}try{c=document.getElementById(\"ad-superzone\"),b=c.getAttribute(\"id\"),c.innerHTML=\"\",window[b]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[b]])}),googletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[]).addSize([320,0],[[300,250],[1,1]]).addSize([970,250],[[970,250],[1,1]]).addSize([1600,0],[[1600,600],[970,250],[1,1]]).build();window[b]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Video\/player\/superzone\",\n[1,1],b).defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"brightcoveTitle\",window.lp.analytics.dataLayer[0].brightcoveTitle?window.lp.analytics.dataLayer[0].brightcoveTitle:\"--\").setTargeting(\"brightcoveDescription\",window.lp.analytics.dataLayer[0].brightcoveDescription?window.lp.analytics.dataLayer[0].brightcoveDescription:\"--\").setTargeting(\"atlas_id\",window.lp.analytics.dataLayer[0].atlas_id?window.lp.analytics.dataLayer[0].atlas_id:\n\"--\").setTargeting(\"brightcoveID\",window.lp.analytics.dataLayer[0].brightcoveID?window.lp.analytics.dataLayer[0].brightcoveID:\"--\").setTargeting(\"topic\",window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic:\"--\").setTargeting(\"interest\",window.lp.analytics.dataLayer[0].interest.join()).setTargeting(\"dfpkey\",\"LP DFPkey\").setTargeting(\"position\",\n\"superzone\").addService(googletag.pubads());googletag.enableServices();googletag.display(b);googletag.pubads().refresh([window[b]])})}catch(a){}},f)};\nwindow.lp.analytics.dfp.video.channel=function(){var f=1E3;setTimeout(function(){var c=window.lp.analytics.dataLayer[0].cd7_Topic\u0026\u0026\"art-and-culture\"===window.lp.analytics.dataLayer[0].cd7_Topic?\"arts-and-culture\":window.lp.analytics.dataLayer[0].cd7_Topic\u0026\u0026\"adventure\"===window.lp.analytics.dataLayer[0].cd7_Topic?\"adventure\":window.lp.analytics.dataLayer[0].cd7_Topic\u0026\u0026\"beaches\"===window.lp.analytics.dataLayer[0].cd7_Topic?\"beaches\":window.lp.analytics.dataLayer[0].cd7_Topic\u0026\u0026\"food-and-drink\"===window.lp.analytics.dataLayer[0].cd7_Topic?\n\"food-and-drink\":\"miscellaneous\";try{for(var b=document.querySelectorAll('*[id^\\x3d\"video-channel-sponsor-advert\"]'),a=0;a\u003Cb.length;a++){var d=b[a].getAttribute(\"id\");b[a].innerHTML=\"\";window[d]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[d]])});googletag.cmd.push(function(){window[d]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Video\/Channels\/\"+c+\"\/logo-title-card\",[1,1],d).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",window.lp.analytics.dataLayer[0].cd6_SiteSection?\nwindow.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic:\"--\").setTargeting(\"interest\",window.lp.analytics.dataLayer[0].interest.join()).setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",d).addService(googletag.pubads());googletag.enableServices();googletag.display(d);googletag.pubads().refresh([window[d]])})}}catch(g){}try{var e=document.getElementById(\"ad-video-channel-superzone\");\nd=e.getAttribute(\"id\");e.innerHTML=\"\";window[d]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[d]])});googletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[]).addSize([320,0],[[300,250],[1,1]]).addSize([970,250],[[970,250],[1,1]]).addSize([1600,0],[[1600,600],[970,250],[1,1]]).build();window[d]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Video\/Channels\/\"+c+\"\/superzone\",[1,1],d).defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"brightcoveTitle\",\nwindow.lp.analytics.dataLayer[0].brightcoveTitle?window.lp.analytics.dataLayer[0].brightcoveTitle:\"--\").setTargeting(\"brightcoveDescription\",window.lp.analytics.dataLayer[0].brightcoveDescription?window.lp.analytics.dataLayer[0].brightcoveDescription:\"--\").setTargeting(\"atlas_id\",window.lp.analytics.dataLayer[0].atlas_id?window.lp.analytics.dataLayer[0].atlas_id:\"--\").setTargeting(\"brightcoveID\",window.lp.analytics.dataLayer[0].brightcoveID?window.lp.analytics.dataLayer[0].brightcoveID:\"--\").setTargeting(\"topic\",\nwindow.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic:\"--\").setTargeting(\"interest\",window.lp.analytics.dataLayer[0].interest.join()).setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",\"superzone\").addService(googletag.pubads());googletag.enableServices();googletag.display(d);googletag.pubads().refresh([window[d]])})}catch(g){}},\nf)};\"video home\"===",["escape",["macro",41],8,16],"\u0026\u0026window.lp.analytics.dfp.video.home();\"player\"===",["escape",["macro",41],8,16],"\u0026\u0026window.lp.analytics.dfp.video.detail();\"channel\"===",["escape",["macro",41],8,16],"\u0026\u0026window.lp.analytics.dfp.video.channel();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":97
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{$gtm(document).on(\"click\",\".Callout\",function(){try{var a=$gtm(this).find(\"h2\").text().trim();window.lp.analytics.gaSendAJAXEvent(\"related activity\",\"click\",[\"viator|activity\",a].join(\"|\"))}catch(b){console.error(\"activity:\"+b.message)}}),$gtm(document).on(\"click\",\".RelatedTour\",function(){try{var a=$gtm(this).find(\"h3\").text().trim();var b=$gtm(this).find(\".Heading a\");var c=-1\u003Cb.attr(\"href\").indexOf(\"v-\")?\"viator\":\"g-adventures\";window.lp.analytics.gaSendAJAXEvent(\"related tour\",\"click\",[c,\n\"tour\",a].join(\"|\"))}catch(d){console.error(\"activity:\"+d.message)}})}catch(a){console.log(\"activity\"+a)};\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(document).on(\"click\",\".lp-search-item__name\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"search bar\",\"select\",$gtm(this).text())}catch(a){console.log(\"activity:\"+a)}});$gtm(document).on(\"click\",\".js-gtm-bookmark-button-add\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"lists\",\"add\",document.title)}catch(a){console.log(\"list add poi:\"+a)}});\n$gtm(document).on(\"click\",\".js-gtm-bookmark-button-remove\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"lists\",\"remove\",document.title)}catch(a){console.log(\"list add poi:\"+a)}});$gtm(document).on(\"click\",\"div.AuthSocialButtons \\x3e button:nth-child(1)\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"sign-in\",\"click\",\"facebook\")}catch(a){console.log(\"auth facebook:\"+a)}});\n$gtm(document).on(\"click\",\"div.AuthSocialButtons \\x3e button:nth-child(2)\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"sign-in\",\"click\",\"twitter\")}catch(a){console.log(\"auth twitter:\"+a)}});$gtm(document).on(\"click\",\"div.AuthSocialButtons \\x3e button:nth-child(3)\",function(){try{window.lp.analytics.gaSendEvent(\"sign-in\",\"click\",\"google-plus\")}catch(a){console.log(\"auth google+:\"+a)}});\n$gtm(document).on(\"click\",\"div.AuthContainer \\x3e div \\x3e button.MoreLink\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"sign-in\",\"click\",\"email\")}catch(a){console.log(\"auth email:\"+a)}});$gtm(document).on(\"click\",\"div.DisclaimerText \\x3e a[href$\\x3d'users\/sign_in']\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"sign-in\",\"click\",\"password\")}catch(a){console.log(\"auth email:\"+a)}});\n$gtm(document).on(\"click\",\"div.DisclaimerText \\x3e a[href$\\x3d'legal\/cookies\/']\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"sign-in\",\"click\",\"cookie policy\")}catch(a){console.log(\"auth email:\"+a)}});$gtm(document).on(\"click\",\"div.DisclaimerText \\x3e a[href$\\x3d'Account-administration']\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"sign-in\",\"click\",\"account help\")}catch(a){console.log(\"auth email:\"+a)}});\n$gtm(\"div.Toast \\x3e div \\x3e div:nth-child(2)\").length\u0026\u0026(alert1=$gtm(\"div.Toast \\x3e div \\x3e div:nth-child(1)\").html(),alert2=$gtm(\"div.Toast \\x3e div \\x3e div:nth-child(2)\").html(),\"\"!=alert2\u0026\u0026\"undefined\"!=alert2\u0026\u0026\"unknown\"!=alert2\u0026\u0026window.lp.analytics.gaSendNonInterEvent(\"sign-in\",\"alert\",alert1+\" \"+alert2));$gtm(document).on(\"click\",\"a[href\\x3d'#login']\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"sign-in\",\"click\",\"login icon\")}catch(a){console.log(\"auth email:\"+a)}});\n$gtm(document).on(\"click\",\"a[href$\\x3d'connect.lonelyplanet.com\/users\/sign_out']\",function(){try{window.lp.analytics.gaSendAJAXEvent(\"sign-out\",window.location.href)}catch(a){console.log(\"auth email:\"+a)}});var waitForThingsToLoad=2E3;setTimeout(function(){\"undefined\"!==typeof window.CoinHive\u0026\u0026window.lp.analytics.gaSendAJAXEvent(\"lp security\",\"malware:coinhive\",window.location.href)},waitForThingsToLoad);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"li.js-nav-item:nth-child(3) \\x3e div:nth-child(2) \\x3e a:nth-child(1)\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"best in travel 2018\",\"click\",\"homepage global nav feature\")});$gtm(\"li.js-nav-item:nth-child(2) \\x3e div:nth-child(2) \\x3e ul:nth-child(2) \\x3e li\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"homepage global nav click\",\"click\",$gtm(this).find(\"a\").text().trim())});\n$gtm(\"div.PromotionItem:nth-child(2)\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"homepage masthead clicks\",\"click\",\"left marketing pod\")});$gtm(\"div.PromotionItem:nth-child(3)\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"homepage masthead clicks\",\"click\",\"right marketing pod\")});var delayMillis=2E3;\nsetTimeout(function(){$gtm(document.body).on(\"click\",\"header \\x3e div \\x3e div.slick-initialized.slick-slider \\x3e div \\x3e div \\x3e div.slick-slide \\x3e div \\x3e div.container \\x3e div \\x3e div \\x3e h1 \\x3e a\",function(){window.lp.analytics.gaSendEvent(\"homepage masthead clicks\",\"click\",$gtm(this).html())})},delayMillis);\ntry{$gtm(\"div.IconCallout\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"prepare for your trip homepage tiles\",\"click\",$gtm(this).find(\"a \\x3e h3\").text())}),$(\"#app \\x3e div \\x3e div.Insurance \\x3e div \\x3e div \\x3e div:nth-child(1) \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"Link on Homepage\",\"click\",\"Get a Quote Link\")})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":114
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async=\"async\" data-gtmsrc=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=googletag||{};googletag.cmd=googletag.cmd||[];\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E$gtm.fn.isOnScreen=function(){var c=500;var a=$gtm(window).scrollTop();var b=a+$gtm(window).height()+c;a=a\u003Cc?0:a-c;c=this.offset().top;var d=c+this.outerHeight();return c\u003C=b\u0026\u0026d\u003E=a};var articleRail=!1,sightsRail=!1,hero=!1,pageTop=!1;\n$gtm(window).scroll(function(c){try{if($gtm(\"#ad-destinations-article-rail\").isOnScreen()\u0026\u00260==articleRail){var a=document.getElementById(\"ad-destinations-article-rail\"),b=a.getAttribute(\"id\");a.innerHTML=\"\";window[b]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[b]])});googletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[]).addSize([300,0],[[300,250],[300,600]]).build();window[b]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Destinations\/right-rail-articles\",\n[[300,600],[300,250]],b).defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",window.lp.ads.topic?window.lp.ads.topic:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"theme\",window.lp.ads.theme?window.lp.ads.theme:\"--\").setTargeting(\"template\",window.lp.ads.template?window.lp.ads.template:\"--\").setTargeting(\"thm\",window.lp.ads.adThm?\nwindow.lp.ads.adThm:\"--\").setTargeting(\"ctt\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"continent\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"cnty\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"country\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"city\",window.lp.ads.city?window.lp.ads.city:\"--\").setTargeting(\"dest\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"destination\",window.lp.ads.destination?\nwindow.lp.ads.destination:\"--\").setTargeting(\"state\",window.lp.ads.state?window.lp.ads.state:\"--\").setTargeting(\"interest\",window.lp.ads.interest?window.lp.ads.interest:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",\"superzone\").addService(googletag.pubads());googletag.enableServices();googletag.display(b)});articleRail=!0}else $gtm(\"#ad-destinations-article-rail\").isOnScreen()||1!=articleRail||(articleRail=!1)}catch(d){}});\n$gtm(window).scroll(function(c){try{if($gtm(\"#ad-destinations-sights-rail\").isOnScreen()\u0026\u00260==sightsRail){var a=document.getElementById(\"ad-destinations-sights-rail\"),b=a.getAttribute(\"id\");a.innerHTML=\"\";window[b]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[b]])});googletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[]).addSize([300,0],[[300,250],[300,600]]).build();window[b]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Destinations\/right-rail-sights\",[[300,\n600],[300,250]],b).defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",window.lp.ads.topic?window.lp.ads.topic:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"theme\",window.lp.ads.theme?window.lp.ads.theme:\"--\").setTargeting(\"template\",window.lp.ads.template?window.lp.ads.template:\"--\").setTargeting(\"thm\",window.lp.ads.adThm?window.lp.ads.adThm:\n\"--\").setTargeting(\"ctt\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"continent\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"cnty\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"country\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"city\",window.lp.ads.city?window.lp.ads.city:\"--\").setTargeting(\"dest\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"destination\",window.lp.ads.destination?window.lp.ads.destination:\n\"--\").setTargeting(\"state\",window.lp.ads.state?window.lp.ads.state:\"--\").setTargeting(\"interest\",window.lp.ads.interest?window.lp.ads.interest:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",\"superzone\").addService(googletag.pubads());googletag.enableServices();googletag.display(b)});sightsRail=!0}else $gtm(\"#ad-destinations-sights-rail\").isOnScreen()||1!=sightsRail||(sightsRail=!1)}catch(d){}});\n$gtm(window).scroll(function(c){try{if($gtm(\"#ad-destinations-hero\").isOnScreen()\u0026\u00260==hero){var a=document.getElementById(\"ad-destinations-hero\"),b=a.getAttribute(\"id\");a.innerHTML=\"\";window[b]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[b]])});googletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([0,0],[]).addSize([320,0],[[300,250],[1,1]]).addSize([728,0],[[728,90],[1,1]]).addSize([970,0],[[970,250],[728,90],[1,1]]).addSize([1600,0],[[1600,400],[970,250],[728,90],\n[1,1]]).build();window[b]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Destinations\/superzone\",[[728,90],[1,1],[1600,400],[970,250],[300,250]],b).defineSizeMapping(a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",window.lp.ads.topic?window.lp.ads.topic:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"theme\",window.lp.ads.theme?window.lp.ads.theme:\n\"--\").setTargeting(\"template\",window.lp.ads.template?window.lp.ads.template:\"--\").setTargeting(\"thm\",window.lp.ads.adThm?window.lp.ads.adThm:\"--\").setTargeting(\"ctt\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"continent\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"cnty\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"country\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"city\",window.lp.ads.city?window.lp.ads.city:\"--\").setTargeting(\"dest\",\nwindow.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"destination\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"state\",window.lp.ads.state?window.lp.ads.state:\"--\").setTargeting(\"interest\",window.lp.ads.interest?window.lp.ads.interest:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",\"superzone\").addService(googletag.pubads());googletag.enableServices();googletag.display(b)});hero=!0}else $gtm(\"#ad-destinations-hero\").isOnScreen()||\n1!=hero||(hero=!1)}catch(d){}});var adunit=document.getElementById(\"ad-destinations-page-top\"),divID=adunit.getAttribute(\"id\");adunit.innerHTML=\"\";window[divID]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[divID]])});\ngoogletag.cmd.push(function(){var c=googletag.sizeMapping().addSize([0,0],[]).addSize([320,0],[[300,250],[1,1]]).addSize([728,0],[[728,90],[1,1]]).addSize([970,0],[[970,250],[728,90],[1,1]]).addSize([1600,0],[[1600,400],[970,250],[728,90],[1,1]]).build();window[divID]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Destinations\/hero\",[[1600,400],[970,250],[1,1],[300,250],[728,90]],divID).defineSizeMapping(c).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"topic\",\nwindow.lp.ads.topic?window.lp.ads.topic:\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"theme\",window.lp.ads.theme?window.lp.ads.theme:\"--\").setTargeting(\"template\",window.lp.ads.template?window.lp.ads.template:\"--\").setTargeting(\"thm\",window.lp.ads.adThm?window.lp.ads.adThm:\"--\").setTargeting(\"ctt\",window.lp.ads.continent?window.lp.ads.continent:\"--\").setTargeting(\"continent\",window.lp.ads.continent?\nwindow.lp.ads.continent:\"--\").setTargeting(\"cnty\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"country\",window.lp.ads.country?window.lp.ads.country:\"--\").setTargeting(\"city\",window.lp.ads.city?window.lp.ads.city:\"--\").setTargeting(\"dest\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"destination\",window.lp.ads.destination?window.lp.ads.destination:\"--\").setTargeting(\"state\",window.lp.ads.state?window.lp.ads.state:\"--\").setTargeting(\"interest\",window.lp.ads.interest?\nwindow.lp.ads.interest:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"position\",\"hero\").addService(googletag.pubads());googletag.enableServices();googletag.display(divID)});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":115
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EDFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/lpkids\/superzone\",\"lpkids-superzone\",\"superzone\");DFPpushLeader(\"\/9885583\/LonelyPlanet.com\/lpkids\/leaderboard\",\"lpkids-leaderboard\",\"leaderboard\");DFPpushRail(\"\/9885583\/LonelyPlanet.com\/lpkids\/right-rail\",\"lpkids-right-rail\",\"right-rail\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":118
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar delayMillis=3E3;\nsetTimeout(function(){function m(){try{if($gtm(\"#ad-articles-page-top\").isOnScreen()\u0026\u00260==f){var b=document.getElementById(\"ad-articles-page-top\"),a=b.getAttribute(\"id\");b.innerHTML=\"\";window.dfpSlots[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window.dfpSlots[a]])});DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Special\",a,\"hero\");f=!0}else $gtm(\"#ad-articles-page-top\").isOnScreen()||1!=f||(f=!1)}catch(c){console.log(\"page-top ad error: \"+c)}}function r(){try{if($gtm(\"#ad-articles-sponsor-logo\").isOnScreen()\u0026\u00260==\ng){var b=document.getElementById(\"ad-articles-sponsor-logo\"),a=b.getAttribute(\"id\");b.innerHTML=\"\";window.dfpSlots[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window.dfpSlots[a]])});DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Articles\/article-logo-masthead\",a,\"header\");g=!0}else $gtm(\"#ad-articles-sponsor-logo\").isOnScreen()||1!=g||(g=!1)}catch(c){console.log(\"ad-articles-sponsor-logo: \"+c)}}function t(){try{var b=document.getElementById(\"ad-articles-sponsor\"),a=b.getAttribute(\"id\");b.innerHTML=\n\"\";DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Articles\/article-logo-attribution\",a,\"article-attribution\")}catch(c){console.log(\"ad-articles-sponsor: \"+c)}}function n(){try{if($gtm(\"#ad-articles-yieldmo\").isOnScreen()\u0026\u00260==h){var b=document.getElementById(\"ad-articles-yieldmo\"),a=b.getAttribute(\"id\");b.innerHTML=\"\";window.dfpSlots[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window.dfpSlots[a]])});DFPpushYieldMo(\"\/9885583\/LonelyPlanet.com\/Yieldmo\",a,a);h=!0}else $gtm(\"#ad-articles-yieldmo\").isOnScreen()||\n1!=h||(h=!1)}catch(c){}}function p(){try{for(var b=0;b\u003Cd.length;b++){var a=d[b].getAttribute(\"id\"),c=\"#\"+a;$gtm(c).isOnScreen()\u0026\u00260==e[a]?(d[b].innerHTML=\"\",window.dfpSlots[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window.dfpSlots[a]])}),DFPpushInArticle(\"\/9885583\/LonelyPlanet.com\/Articles\/in-content\",a,\"superzone\"),e[a]=!0):$gtm(c).isOnScreen()||1!=e[a]||(e[a]=!1)}}catch(u){console.log(\"ad-articles-article: \"+u)}}function q(){try{if($gtm(\"#ad-articles-leaderboard\").isOnScreen()\u0026\u00260==\nk){var b=document.getElementById(\"ad-articles-leaderboard\"),a=b.getAttribute(\"id\");b.innerHTML=\"\";window.dfpSlots[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window.dfpSlots[a]])});DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Articles\",a,\"superzone\");k=!0}else $gtm(\"#ad-articles-leaderboard\").isOnScreen()||1!=k||(k=!1)}catch(c){console.log(\"ad-articles-leaderboard: \"+c)}}for(var f=!1,g=!1,h=!1,e=[],d=document.querySelectorAll('*[id^\\x3d\"ad-articles-in-article\"]'),l=0;l\u003Cd.length;l++)e[d[l].getAttribute(\"id\")]=\n!1;var k=!1;window.googletag\u0026\u0026googletag.pubadsReady?(m(),r(),t(),n(),p(),q(),$gtm(window).scroll(function(b){m();n();p();q()})):console.error(\"articles dfp pubads not ready\")},delayMillis);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(document).on(\"click\",\"a\",function(){try{\"HERE\"==$gtm(this).text()\u0026\u00260\u003C=$gtm(this).attr(\"href\").indexOf(\".pdf\")\u0026\u0026window.lp.analytics.gaSendAJAXEvent(\"shop\",\"download\",$gtm(this).attr(\"data-lpa-label\"))}catch(a){}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"div.article__container \\x3e div.article__content \\x3e footer \\x3e div.social-share.in-article-footer.js-action-sheet.lp-component \\x3e div \\x3e button\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"travel tips and articles\",\"click\",\"article share button click\")});\n$gtm(\"#social-share-menu \\x3e div.social-share__menu__inner \\x3e ul \\x3e li:nth-child(1) \\x3e button\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",window.location.href,{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension9:lp.analytics.dataLayer[\"0\"].cd9_TestExperience,dimension10:lp.analytics.dataLayer[\"0\"].cd10_ArticleName,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName,contentGroup2:lp.analytics.dataLayer[\"0\"].content_group_2})});\n$gtm(\"#social-share-menu \\x3e div.social-share__menu__inner \\x3e ul \\x3e li:nth-child(2) \\x3e button\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",window.location.href,{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension9:lp.analytics.dataLayer[\"0\"].cd9_TestExperience,dimension10:lp.analytics.dataLayer[\"0\"].cd10_ArticleName,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName,contentGroup2:lp.analytics.dataLayer[\"0\"].content_group_2})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":130
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dfp=window.lp.analytics.dfp||{};window.lp.analytics.dfp.video=window.lp.analytics.dfp.video||{};\nwindow.lp.analytics.dfp.video.lowerThird=function(d,a){try{for(var c=document.querySelectorAll(\"#\"+a),b=0;b\u003Cc.length;b++)c[b].innerHTML=\"\",window[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window[a]])}),googletag.cmd.push(function(){window[a]=googletag.defineSlot(\"\/9885583\/LonelyPlanet.com\/Video\/Player\/Lower-third\",[1,1],a).setCollapseEmptyDiv(!0).setTargeting(\"url\",window.location.href.split(\"?\")[0]).setTargeting(\"brightcoveTitle\",window.lp.analytics.dataLayer[0].brightcoveTitle?window.lp.analytics.dataLayer[0].brightcoveTitle:\n\"--\").setTargeting(\"brightcoveDescription\",window.lp.analytics.dataLayer[0].brightcoveDescription?window.lp.analytics.dataLayer[0].brightcoveDescription:\"--\").setTargeting(\"atlas_id\",window.lp.analytics.dataLayer[0].atlas_id?window.lp.analytics.dataLayer[0].atlas_id:\"--\").setTargeting(\"brightcoveID\",window.lp.analytics.dataLayer[0].brightcoveID?window.lp.analytics.dataLayer[0].brightcoveID:\"--\").setTargeting(\"videoID\",window.lp.analytics.dataLayer[0].videoID?window.lp.analytics.dataLayer[0].videoID:\n\"--\").setTargeting(\"topic\",window.lp.analytics.dataLayer[0].cd6_SiteSection?window.lp.analytics.dataLayer[0].cd6_SiteSection:\"--\").setTargeting(\"interest\",window.lp.analytics.dataLayer[0].interest?window.lp.analytics.dataLayer[0].interest.join():\"--\").setTargeting(\"site_section\",window.lp.analytics.dataLayer[0].cd7_Topic?window.lp.analytics.dataLayer[0].cd7_Topic:\"--\").setTargeting(\"dfpkey\",",["escape",["macro",11],8,16],").setTargeting(\"cuepoint\",d).setTargeting(\"position\",\"lowerthird\").addService(googletag.pubads());\ngoogletag.enableServices();googletag.display(a);googletag.pubads().refresh([window[a]])})}catch(e){console.log(\"LowerThird Ad Error: \"+e)}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"#main \\x3e section.marketing-section.lp-component \\x3e div.social-share.social-share--centered.js-action-sheet.lp-component \\x3e ul \\x3e li:nth-child(1) \\x3e button\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia 2017 page\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#main \\x3e section.marketing-section.lp-component \\x3e div.social-share.social-share--centered.js-action-sheet.lp-component \\x3e ul \\x3e li:nth-child(2) \\x3e button\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia 2017 page\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#main \\x3e section.marketing-section.lp-component \\x3e div.social-share.social-share--centered.js-action-sheet.lp-component \\x3e ul \\x3e li:nth-child(3) \\x3e button\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia 2017 page\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#1 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(2) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia: gansu, china\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#1 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(3) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia: gansu, china\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#1 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(4) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia: gansu, china\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#2 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(2) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia: south of tokyo, japan\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#2 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(3) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia: south of tokyo, japan\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#2 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(4) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia: south of tokyo, japan\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#3 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(2) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia: northern kerala, india\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#3 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(3) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia: northern kerala, india\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#3 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(4) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia: northern kerala, india\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#4 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(2) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia: keong saik road, singapore\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#4 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(3) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia: keong saik road, singapore\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#4 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(4) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia: keong saik road, singapore\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#5 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(2) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia: astana, kazakhstan\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#5 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(3) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia: astana, kazakhstan\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#5 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(4) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia: astana, kazakhstan\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#6 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(2) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia: takayama, japan\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#6 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(3) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia: takayama, japan\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#6 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(4) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia: takayama, japan\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#7 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(2) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia: xi'an, china\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#7 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(3) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia: xi'an, china\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#7 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(4) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia: xi'an, china\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#8 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(2) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia: sri lanka's hill country\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#8 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(3) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia: sri lanka's hill country\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#8 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(4) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia: sri lanka's hill country\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#9 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(2) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia: melaka city, malaysia\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#9 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(3) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia: melaka city, malaysia\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#9 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(4) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia: melaka city, malaysia\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#10 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(2) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"best in asia: raja ampat, indonesia\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#10 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(3) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"best in asia: raja ampat, indonesia\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#10 \\x3e div:nth-child(2) \\x3e div:nth-child(6) \\x3e ul:nth-child(1) \\x3e li:nth-child(4) \\x3e button:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"best in asia: raja ampat, indonesia\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#1 \\x3e div \\x3e div.marketing-article__footer \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: gansu, china\")});$gtm(\"#2 \\x3e div \\x3e div.marketing-article__footer \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: south of tokyo, japan\")});$gtm(\"#3 \\x3e div \\x3e div.marketing-article__footer \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: northern kerala, india\")});\n$gtm(\"#4 \\x3e div \\x3e div.marketing-article__footer \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: keong saik road, singapore\")});$gtm(\"#5 \\x3e div \\x3e div.marketing-article__footer \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: astana, kazakhstan\")});\n$gtm(\"#6 \\x3e div \\x3e div.marketing-article__footer \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: takayama, japan\")});$gtm(\"#7 \\x3e div \\x3e div.marketing-article__footer \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: xi'an, china\")});$gtm(\"#8 \\x3e div \\x3e div.marketing-article__footer \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: sri lanka's hill country\")});\n$gtm(\"#9 \\x3e div \\x3e div.marketing-article__footer \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: melaka city, malaysia\")});$gtm(\"#10 \\x3e div \\x3e div.marketing-article__footer \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: raja ampat, indonesia\")});$gtm(\"body \\x3e div.articles__button-container \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"article: best in asia 2016\")});\n$gtm(\"#main \\x3e section.alert.is-visible \\x3e div \\x3e div \\x3e p \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"enter competition - top bar\")});$gtm(\"#main \\x3e section.marketing-section.lp-component \\x3e div.marketing-section__buttons \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"enter competition - top section\")});\n$gtm(\"div.marketing-section__buttons:nth-child(9) \\x3e a:nth-child(1)\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"see more video\")});$gtm(\"#main \\x3e section.marketing-section.lp-component \\x3e div.marketing-internal__ad_center.marketing-internal__ad--background \\x3e div.marketing-internal__ad--wrapper \\x3e div \\x3e div \\x3e div \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"enter competition - mid page\")});\n$gtm(\".guidebook__button\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"shop now\")});$gtm(\"body \\x3e section \\x3e div \\x3e div \\x3e p \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"enter competition - bottom bar\")});$gtm(\".marketing-internal__ad--button--bottom\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"click\",\"asia click for more button\")});\n$gtm(document).submit(\"input[value\\x3d'ENTER COMPETITION']\",function(){window.lp.analytics.gaSendEvent(\"best in asia 2017\",\"signup\",\"asian adventure competition\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"#main \\x3e section \\x3e div.header.container \\x3e div.trips-app__navigation-position--right \\x3e a:nth-child(2)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"trips app\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#main \\x3e section \\x3e div.header.container \\x3e div.trips-app__navigation-position--right \\x3e a:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"trips app\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#main \\x3e section \\x3e div.wrapper__trips-app.maintext \\x3e div:nth-child(4) \\x3e div:nth-child(6) \\x3e div \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"trips app\",\"click\",\"learn more\")});$gtm(\"#main \\x3e section \\x3e div.header.container \\x3e div.trips-app__navigation-position--left \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"trips app\",\"click\",\"apple store download\")});\n$gtm(\"#main \\x3e section \\x3e div.wrapper__trips-app.maintext \\x3e div:nth-child(4) \\x3e div:nth-child(3) \\x3e div \\x3e div\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"trips app\",\"click\",\"video\")});$gtm(\".trips__support-links\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"trips app\",\"click\",$gtm(this).text())});\n$gtm(\"#main \\x3e section \\x3e div.wrapper__trips-app.maintext \\x3e div:nth-child(4) \\x3e div:nth-child(4) \\x3e div \\x3e a:nth-child(2)\").on(\"click\",function(){ga(\"send\",\"social\",\"twitter\",\"share\",\"trips by lonely planet - our newest travel app video\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#main \\x3e section \\x3e div.wrapper__trips-app.maintext \\x3e div:nth-child(4) \\x3e div:nth-child(4) \\x3e div \\x3e a:nth-child(3)\").on(\"click\",function(){ga(\"send\",\"social\",\"facebook\",\"share\",\"trips by lonely planet - our newest travel app video\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\n$gtm(\"#main \\x3e section \\x3e div.wrapper__trips-app.maintext \\x3e div:nth-child(4) \\x3e div:nth-child(4) \\x3e div \\x3e a:nth-child(1)\").on(\"click\",function(){ga(\"send\",\"social\",\"email\",\"share\",\"trips by lonely planet - our newest travel app video\",{dimension6:lp.analytics.dataLayer[\"0\"].cd6_SiteSection,dimension7:lp.analytics.dataLayer[\"0\"].cd7_Topic,dimension22:lp.analytics.dataLayer[\"0\"].cd22_ApplicationName})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/0369c55dc873.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"form\").submit(function(){window.lp.analytics.gaSendAJAXEvent(\"south australia starter kit\",\"signup\",\"south australia trip contest\")});$gtm(\"#root \\x3e main \\x3e section.ebookdownload \\x3e div \\x3e div \\x3e div.ebookdownload__content \\x3e p \\x3e a\").click(function(){window.lp.analytics.gaSendAJAXEvent(\"south australia starter kit\",\"click\",\"south australia ebook guide download\")});\n$gtm(\"div.content-section__content \\x3e article.content-section__content__item.content-section__content__item--viator \\x3e a\").click(function(){window.lp.analytics.gaSendAJAXEvent(\"south australia starter kit\",\"click\",\"book a tour\")});$gtm(\"article \\x3e div \\x3e div \\x3e p \\x3e a\").click(function(){window.lp.analytics.gaSendAJAXEvent(\"south australia starter kit\",\"click\",\"book a tour - footer\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":153
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"button.Button:nth-child(2)\").click(function(){window.lp.analytics.gaSendAJAXEvent(\"newsletter\",\"signup\",\"lp video weekly newsletter signup\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":173
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp=window.lp||{};window.lp.analytics=window.lp.analytics||{};window.lp.analytics.dataLayer=window.lp.analytics.dataLayer||{};window.lp.analytics.dataLayer.dmp=window.lp.analytics.dataLayer.dmp||{};window.lp.analytics.dataLayer.dmp.pagetype=window.lp.analytics.dataLayer[0].cd7_Topic.replace(\/[^\\w\\s]\/gi,\"\").toLowerCase()||\"--\";var __slice=Array.prototype.slice,opts=__slice.call(document.querySelectorAll(\"a.Tag\")),keywords=opts.map(function(a){return a.textContent}).join(\",\");\nwindow.lp.analytics.dataLayer.dmp.keywords=keywords.toLowerCase()||\"--\";\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/tags.crwdcntrl.net\/c\/9900\/cc.js?ns=_cc9900\" id=\"LOTCC_9900\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003E\"undefined\"!==typeof window._cc9900\u0026\u0026_cc9900.bcp();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":177
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar delayMillis=3E3;\nsetTimeout(function(){for(var f=!1,d=[],e=document.querySelectorAll('*[id^\\x3d\"ad-expansion-in-content\"]'),h=0;h\u003Ce.length;h++)d[e[h].getAttribute(\"id\")]=!1;var g=!1;if(window.googletag\u0026\u0026googletag.pubadsReady){var k=function(){try{if($gtm(\"#ad-expansion-footer\").isOnScreen()\u0026\u00260==g){var b=document.getElementById(\"ad-expansion-footer\"),a=b.getAttribute(\"id\");b.innerHTML=\"\";window.dfpSlots[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window.dfpSlots[a]])});DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Destinations\/Detail\/Footer\",a,\n\"superzone\");g=!0}else $gtm(\"#ad-expansion-footer\").isOnScreen()||1!=g||(g=!1)}catch(c){console.log(\"ad-expansion-footer: \"+c)}},l=function(){try{for(var b=0;b\u003Ce.length;b++){var a=e[b].getAttribute(\"id\"),c=\"#\"+a;$gtm(c).isOnScreen()\u0026\u00260==d[a]?(e[b].innerHTML=\"\",window.dfpSlots[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window.dfpSlots[a]])}),DFPpushInArticle(\"\/9885583\/LonelyPlanet.com\/Destinations\/Detail\/in-content\",a,\"superzone\"),d[a]=!0):$gtm(c).isOnScreen()||1!=d[a]||(d[a]=!1)}}catch(n){console.log(\"ad-in-content: \"+\nn)}},m=function(){try{if($gtm(\"#ad-expansion-hero\").isOnScreen()\u0026\u00260==f){var b=document.getElementById(\"ad-expansion-hero\"),a=b.getAttribute(\"id\");b.innerHTML=\"\";window.dfpSlots[a]\u0026\u0026googletag.cmd.push(function(){googletag.destroySlots([window.dfpSlots[a]])});DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Destinations\/Detail\/hero\",a,\"hero\");f=!0}else $gtm(\"#ad-expansion-hero\").isOnScreen()||1!=f||(f=!1)}catch(c){console.log(\"hero ad error: \"+c)}};m();l();k();$gtm(window).scroll(function(b){m();l();k()})}else console.error(\"content expansion dfp pubads not ready\")},\ndelayMillis);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar delayMillis=0;setTimeout(function(){try{window.lp=window.lp||{},window.lp.ads=window.lp.ads||{},window.lp.ads.interest=\"Turkey1495\",DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Special\",\"sponsor-logo-masthead\",\"HPlogo\"),DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Special\",\"ad-post-superzone\",\"superzone\")}catch(a){console.log(\"error ads : \"+a)}},delayMillis);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":187
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar delayMillis=0;setTimeout(function(){try{window.lp=window.lp||{},window.lp.ads=window.lp.ads||{},window.lp.ads.interest=\"Turkey1495\",DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Special\",\"sponsor-logo-masthead\",\"ArticleLogo\"),DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Special\",\"ad-post-superzone\",\"superzone\")}catch(a){console.log(\"error ads : \"+a)}},delayMillis);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"form\").submit(function(){window.lp.analytics.gaSendAJAXEvent(\"journey through turkey campaign\",\"download\",\"free ebook download\")});$gtm(\"body \\x3e header \\x3e div \\x3e div \\x3e div.lp-global-header__inner__right \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"journey through turkey campaign\",\"click\",\"how to enter photo competition\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":190
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar delayMillis=0;setTimeout(function(){try{window.lp=window.lp||{},window.lp.ads=window.lp.ads||{},window.lp.ads.interest=\"AbuDhabi2425\",DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-masthead\",\"HPlogo\"),DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-header\",\"HPlogo\"),DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Microsites\/superzone\",\"ad-post-superzone\",\"superzone\")}catch(a){console.log(\"error ads : \"+a)}},delayMillis);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar delayMillis=0;setTimeout(function(){try{window.lp=window.lp||{},window.lp.ads=window.lp.ads||{},window.lp.ads.interest=\"AbuDhabi2425\",DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-header\",\"articlelogo\"),DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Microsites\/superzone\",\"ad-post-superzone\",\"superzone\")}catch(a){console.log(\"error ads : \"+a)}},delayMillis);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"a:contains(newsletter)\").click(function(){window.lp.analytics.gaSendAJAXEvent(\"newsletter\",\"click\",\"article page weekly newsletter link\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":194
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar delayMillis=5E3;window.lp.ads.interest=\"ExploreEveryDay2018\";setTimeout(function(){DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"eed-sponsor-ad\",\"logo\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Microsites\/superzone\",\"eed-superzone-ad\",\"superzone\");DFPpushRail(\"\/9885583\/LonelyPlanet.com\/Microsites\/right-rail-top\",\"eed-articles-ad\",\"right-rail\")},delayMillis);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"#app \\x3e div \\x3e div.SignUpCallout \\x3e div \\x3e button\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"explore every day 2018: competition\",\"click\",\"top section\")});$gtm(document).submit(\"input[value\\x3d'ENTER COMPETITION']\",function(){window.lp.analytics.gaSendEvent(\"explore every day 2018\",\"signup\",\"discover india's golden triangle competition\")});\n$gtm(\"#introduction \\x3e div \\x3e div \\x3e a:nth-child(1)\").on(\"click\",function(){window.lp.analytics.gaSendSocialInteraction(\"twitter\",\"share\",\"explore every day 2018\")});$gtm(\"#introduction \\x3e div \\x3e div \\x3e a:nth-child(2)\").on(\"click\",function(){window.lp.analytics.gaSendSocialInteraction(\"facebook\",\"share\",\"explore every day 2018\")});$gtm(\"#introduction \\x3e div \\x3e div \\x3e a:nth-child(3)\").on(\"click\",function(){window.lp.analytics.gaSendSocialInteraction(\"pinterest\",\"share\",\"explore every day 2018\")});\n$gtm(\"#articleColumn \\x3e div \\x3e div\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"explore every day 2018: article tiles\",\"click\",$gtm(this).find(\"div \\x3e div \\x3e h3\").text())});$gtm(\"#promotions \\x3e div \\x3e div \\x3e div\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"explore every day 2018: promotions\",\"click\",$gtm(this).find(\"a \\x3e h2\").text())});\n$gtm(\"#competition \\x3e div \\x3e div \\x3e button\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"explore every day 2018: competition\",\"click\",\"bottom section\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1011360\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1011360\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":207
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp.ads.interest=\"BestInUs\";DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-US\/superzone\",\"superzone_top\",\"Superzone\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-US\/superzone\",\"superzone_house_ad\",\"House\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-US\/superzone\",\"superzone_bottom\",\"Superzone\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":208
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"lpjs-gpt\" async=\"async\" data-gtmsrc=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EDFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Destinations\/POIs\",\"js-crowdriff\",\"enhancedlogo\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Destinations\/POIs\",\"js-book-promo\",\"ebook\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":211
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){$gtm(\"#flights-widget \\x3e div \\x3e div \\x3e div \\x3e div \\x3e button\").on(\"click\",function(){window.lp.analytics.gaSendAJAXEvent(\"tourism ireland\",\"click\",\"See flights\")})},3E3);$gtm(\"#articles \\x3e div \\x3e div \\x3e div \\x3e div:nth-child(4) \\x3e div.rmq-9e1170e8 \\x3e div \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"tourism ireland\",\"click\",$gtm(this).find(\"div \\x3e div \\x3e h3 \\x3e div \\x3e div\").text())});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":213
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(document).submit(\"input[value\\x3d'SIGN UP NOW']\",function(){window.lp.analytics.gaSendEvent(\"best in the us 2018\",\"click\",\"competition entry\")});$gtm(\"#main \\x3e section.marketing-section.lp-component \\x3e nav \\x3e ul \\x3e div.owl-wrapper-outer \\x3e div \\x3e div\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in the us 2018: carousel tile clicks\",\"click\",$gtm(this).find(\"li \\x3e a \\x3e span\").text())});\n$gtm(document).on(\"click\",\"[data-lpa-action]\",function(){var a=$gtm(this).attr(\"data-lpa-action\"),b=$gtm(this).attr(\"data-lpa-label\");\"CTA Click\"==a\u0026\u0026window.lp.analytics.gaSendEvent(\"best in the us 2018: cta button\",a,b)});$gtm(\".guidebook__button\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in the us 2018: shop\",\"click\",\"shop now button\")});$gtm(\".guidebook__pictures\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in the us 2018: shop\",\"click\",\"guidebook image\")});\n$gtm(document).on(\"click\",\"button[data-network\\x3d'twitter']\",function(){try{var a=$gtm(this).parents().eq(3).prev().find(\"h1\").text()}catch(b){console.error(\"Best in the US Social Tracking ERROR:\"+b)}window.lp.analytics.gaSendSocialInteraction(\"twitter\",\"share\",a)});\n$gtm(document).on(\"click\",\"button[data-network\\x3d'facebook']\",function(){try{var a=$gtm(this).parents().eq(3).prev().find(\"h1\").text()}catch(b){console.error(\"Best in the US Social Tracking ERROR:\"+b)}window.lp.analytics.gaSendSocialInteraction(\"facebook\",\"share\",a)});$gtm(document).on(\"click\",\"button[data-network\\x3d'email']\",function(){var a=$gtm(this).attr(\"data-msg\");window.lp.analytics.gaSendSocialInteraction(\"email\",\"share\",a)});\n$gtm(\"#bestinus \\x3e div \\x3e div \\x3e div \\x3e a\").on(\"click\",function(){var a=$gtm(this).attr(\"data-network\");window.lp.analytics.gaSendSocialInteraction(a,\"share\",\"best in the us 2018\")});$gtm(\"div.marketing-article__body \\x3e div.marketing-article__footer\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in the us 2018: article links\",\"click\",$gtm(this).find(\"a\").text())});\n$gtm(\"#main \\x3e section.marketing-section.lp-component \\x3e div.articles__button-container \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in the us 2018: previous list\",\"click\",$gtm(this).text())});$gtm(\"div.marketing-image-map \\x3e a\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in the us 2018: map\",\"click\",$gtm(this).attr(\"href\"))});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Edocument.write('\\x3cscript src\\x3d\"\/\/load.sumome.com\/\" data-sumo-site-id\\x3d\"b703dae845a0d4675d8ec15960d990866086cad1aa1d85b478ae27e00d74dd81\" async\\x3d\"async\" data-sumo-platform\\x3d\"gtm\"\\x3e\\x3c\/script\\x3e');\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":215
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp.ads.interest=\"2698TommyBahamaArticle\";DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Inspiration\",\"interest-sponsor-advert\",\"logo\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-header\",\"articlelogo\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Microsites\/superzone\",\"post-ad-superzone\",\"superzone\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Microsites\/superzone\",\"ad-post-superzone\",\"superzone\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar delayMillis=1E3;\nsetTimeout(function(){try{window.lp=window.lp||{},window.lp.ads=window.lp.ads||{},window.lp.ads.interest=\"2698TommyBahama\",DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-masthead\",\"sponsor-logo\"),DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-header\",\"articlelogo\"),DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Microsites\/superzone\",\"ad-post-superzone\",\"superzone\"),DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Articles\/article-logo-attribution\",\"ad-article-attribution\",\n\"attribution\"),DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Homepage\/logo-masthead\",\"sponsor-logo-header\",\"red\"),DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-tip\",\"tips\")}catch(a){console.log(\"error ads : \"+a)}},delayMillis);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":221
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(document).on(\"click\",\"a\",function(){var a=$(this).attr(\"href\");window.lp.analytics.gaSendAJAXEvent(\"Tommy Bahama Campaign\",\"click\",a)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":223
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/10de07101232.js\");\u003C\/script\u003E\n ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":226
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EDFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Destinations\/POIs\",\"sponsor-logo-masthead\",\"masthead\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Destinations\/POIs\",\"destinations-book-ad-masthead\",\"masthead-cities\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Destinations\/POIs\",\"best-in-badge-masthead\",\"masthead-best-in\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Destinations\/POIs\",\"sponsor-logo-love-letter\",\"love-letter\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Destinations\/POIs\",\"js-crowdriff\",\"enhancedlogo\");\nDFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Destinations\/POIs\",\"js-flight-ad\",\"superzone\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":229
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"div.js-action-sheet:nth-child(2) \\x3e div:nth-child(1) \\x3e button\").on(\"click\",function(){var a=$gtm(this).attr(\"data-network\");window.lp.analytics.gaSendSocialInteraction(a,\"share\",\"articles - top\")});$gtm(\"div.js-action-sheet:nth-child(1) \\x3e div:nth-child(1) \\x3e button\").on(\"click\",function(){var a=$gtm(this).attr(\"data-network\");window.lp.analytics.gaSendSocialInteraction(a,\"share\",\"articles - bottom\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EDFPpushLeader(\"\/9885583\/LonelyPlanet.com\/Best-in-Europe\/hero\",\"ad_superzone_hero\",\"Superzone\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-Europe\/superzone\",\"ad_superzone_one\",\"hero\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Best-in-Europe\/logo\",\"ad_superzone_two\",\"header\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-Europe\/superzone\",\"ad_superzone_three\",\"Superzone\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-Europe\/superzone\",\"ad_superzone_four\",\"superzone2\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":239
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EDFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/blog\/superzone\",\"ad-home-superzone\",\"Superzone\");DFPpushRail(\"\/9885583\/LonelyPlanet.com\/blog\/right-rail\",\"ad-home-right-rail\",\"right-rail\");DFPpushRail(\"\/9885583\/LonelyPlanet.com\/blog\/right-rail\",\"ad-list-right-rail\",\"right-rail\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":240
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EDFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/blog\/superzone\",\"ad-superzone-top\",\"superzone\");DFPpushRail(\"\/9885583\/LonelyPlanet.com\/blog\/right-rail\",\"ad-article-right-rail\",\"right-rail\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/blog\/superzone\",\"ad-superzone-bottom\",\"superzone\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":241
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/06b3f9007969.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":248
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"div.SignUpCallout:nth-child(1) \\x3e div:nth-child(1) \\x3e button:nth-child(3)\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"click\",\"enter competition - top\")});$gtm(\"div.SignUpCallout:nth-child(17) \\x3e div:nth-child(1) \\x3e button:nth-child(3)\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"click\",\"enter competition - bottom\")});\n$gtm(document).submit(\"input[name\\x3d'newsletter[BIE_2018]']\",function(){window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"submit\",\"competition entry\")});$gtm(document).on(\"click\",\"a[data-network\\x3d'twitter']\",function(){window.lp.analytics.gaSendSocialInteraction(\"twitter\",\"share\",\"best in europe 2018\")});$gtm(document).on(\"click\",\"a[data-network\\x3d'facebook']\",function(){window.lp.analytics.gaSendSocialInteraction(\"facebook\",\"share\",\"best in europe 2018\")});\n$gtm(document).on(\"click\",\"a[data-network\\x3d'pinterest']\",function(){window.lp.analytics.gaSendSocialInteraction(\"pinterest\",\"share\",\"best in europe 2018\")});$gtm(document).on(\"click\",\"a[data-network\\x3d'whatsapp']\",function(){window.lp.analytics.gaSendSocialInteraction(\"whatsapp\",\"share\",\"best in europe 2018\")});$gtm(\".mapContainer \\x3e div:nth-child(1) \\x3e a:nth-child(1)\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"click\",$gtm(this).attr(\"href\"))});\n$gtm(\"div:nth-child(3) \\x3e div:nth-child(2) \\x3e div:nth-child(1) \\x3e a:nth-child(1)\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"click\",$gtm(this).attr(\"href\"))});$gtm(\".firstPlaceButton \\x3e a:nth-child(1)\").on(\"click\",function(){var a=$gtm(this).text();window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"click\",a.toLowerCase())});\n$gtm(\"div:nth-child(3) \\x3e div:nth-child(1) \\x3e div:nth-child(3) \\x3e a:nth-child(1)\").on(\"click\",function(){var a=$gtm(this).text();window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"click\",a.toLowerCase())});\nsetTimeout(function(){$gtm(\"div.placeContainer:nth-child(4) \\x3e div:nth-child(1) \\x3e span:nth-child(1) \\x3e div:nth-child(1) \\x3e div:nth-child(3) \\x3e button:nth-child(2)\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"click\",\"flights to emilia-romagna, italy\")})},3E3);\nsetTimeout(function(){$gtm(\"div:nth-child(3) \\x3e div:nth-child(2) \\x3e div:nth-child(2) \\x3e div:nth-child(1) \\x3e span:nth-child(1) \\x3e div:nth-child(1) \\x3e div:nth-child(3) \\x3e button:nth-child(2)\").on(\"click\",function(){try{var a=$gtm(this).parent().parent().find(\"h2\").text()}catch(b){console.error(\"Best in Europe Flight Widget ERROR:\"+b)}window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"click\",a.toLowerCase())})},3E3);\n$gtm(\".previousCampaign \\x3e a:nth-child(1)\").on(\"click\",function(){var a=$gtm(this).text();window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"click\",a.toLowerCase())});$gtm(\".rmq-e8d096e6\").on(\"click\",function(){window.lp.analytics.gaSendEvent(\"best in europe 2018\",\"click\",\"discover more of europe\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":251
    },{
      "function":"__html",
      "setup_tags":["list",["tag",65,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_name:",["escape",["macro",140],8,16],",content_category:",["escape",["macro",35],8,16],",content_ids:",["escape",["macro",21],8,16],",content_type:",["escape",["macro",36],8,16],",value:",["escape",["macro",17],8,16],",currency:",["escape",["macro",20],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":256
    },{
      "function":"__html",
      "setup_tags":["list",["tag",65,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(\"#footer_email_signup_form \\x3e div.newsletter-signup__button \\x3e button\").on(\"click\",function(){fbq(\"track\",\"CompleteRegistration\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":257
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"19000038\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":258
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"19000036\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":259
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"19000039\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"19000041\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":261
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"19000040\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":262
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"19000042\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":263
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"19000043\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":264
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp.ads.interest=\"2841BlackForrestWhite\";DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-header\",\"header\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-masthead\",\"header\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Microsites\/superzone\",\"ad-post-superzone\",\"superzone\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Microsites\/superzone\",\"post-ad-superzone\",\"superzone\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":265
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar delayMillis=1E3;setTimeout(function(){try{window.lp=window.lp||{},window.lp.ads=window.lp.ads||{},window.lp.ads.interest=\"2841BlackForrestTransparent\",DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-masthead\",\"header\"),DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Microsites\/superzone\",\"post-ad-superzone\",\"superzone\")}catch(a){console.log(\"error ads : \"+a)}},delayMillis);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":266
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"182223609102548\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=182223609102548\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(document).on(\"click\",\"a\",function(){var a=$(this).attr(\"href\");window.lp.analytics.gaSendAJAXEvent(\"Black Forest Campaign\",\"click\",a)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":272
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar delayMillis=1E3;setTimeout(function(){try{window.lp=window.lp||{},window.lp.ads=window.lp.ads||{},window.lp.ads.interest=\"2734CroatiaTransparent\",DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-masthead\",\"sponsor-logo\"),DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo-header\",\"sponsor-logo\")}catch(a){console.log(\"error ads : \"+a)}},delayMillis);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":274
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EDFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Best-in-Asia\/logo\",\"sponsored-logo-0\",\"logo\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Best-in-Asia\/logo\",\"sponsored-logo-1\",\"logo\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Best-in-Asia\/logo\",\"sponsored-logo-2\",\"logo\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-Asia\/superzone\",\"ad_superzone_hero\",\"superzone\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-Asia\/superzone\",\"ad_superzone_one\",\"superzone\");\nDFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-Asia\/superzone\",\"ad_superzone_two\",\"superzone\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-Asia\/superzone\",\"ad_superzone_three\",\"superzone\");DFPpushSuperZone(\"\/9885583\/LonelyPlanet.com\/Best-in-Asia\/superzone\",\"ad_superzone_four\",\"superzone\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":279
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$gtm(document).on(\"click\",\"[data-campaign-tracking]\",function(a){a=$gtm(this);a=a.data(\"lpTrackLabel\");ga(\"send\",\"event\",\"campaign tracking\",\"click\",a)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":280
    },{
      "function":"__html",
      "setup_tags":["list",["tag",65,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_type:\"product\",content_name:",["escape",["macro",140],8,16],",content_category:",["escape",["macro",35],8,16],",content_ids:",["escape",["macro",21],8,16],",content_type:",["escape",["macro",36],8,16],",value:",["escape",["macro",23],8,16],",currency:",["escape",["macro",20],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":281
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lp.ads.interest=\"2835Michigan\";DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo\",\"Logo-top\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo\",\"Logo-video\");DFPpush1x1(\"\/9885583\/LonelyPlanet.com\/Microsites\/logo\",\"sponsor-logo\",\"Logo-map\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":282
    },{
      "function":"__html",
      "setup_tags":["list",["tag",65,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\",{content_name:",["escape",["macro",140],8,16],",content_category:",["escape",["macro",35],8,16],",content_ids:",["escape",["macro",21],8,16],",content_type:",["escape",["macro",36],8,16],",value:",["escape",["macro",17],8,16],",currency:",["escape",["macro",20],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":288
    },{
      "function":"__html",
      "setup_tags":["list",["tag",65,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\",{content_name:",["escape",["macro",4],8,16],",content_category:",["escape",["macro",35],8,16],",content_ids:",["escape",["macro",21],8,16],",content_type:",["escape",["macro",36],8,16],",value:",["escape",["macro",17],8,16],",currency:",["escape",["macro",20],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":289
    },{
      "function":"__html",
      "setup_tags":["list",["tag",65,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\",{content_name:",["escape",["macro",140],8,16],",value:",["escape",["macro",17],8,16],",currency:",["escape",["macro",20],8,16],"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":293
    },{
      "function":"__html",
      "setup_tags":["list",["tag",65,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{content_name:",["escape",["macro",140],8,16],",content_category:",["escape",["macro",35],8,16],",value:",["escape",["macro",17],8,16],",currency:",["escape",["macro",20],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":294
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.crwdcntrl.net\/c\/9900\/cc.js?ns=_cc9900\" id=\"LOTCC_9900\"\u003E\u003C\/script\u003E \n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003E_cc9900.bcp();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":296
    },{
      "function":"__html",
      "setup_tags":["list",["tag",65,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_type:\"product\",content_name:",["escape",["macro",4],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":299
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-810993683\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-810993683\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":302
    },{
      "function":"__html",
      "setup_tags":["list",["tag",150,0]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"page_view\",{send_to:\"AW-123456789\",ecomm_prodid:\"",["escape",["macro",21],7],"\",ecomm_pagetype:\"",["escape",["macro",36],7],"\",ecomm_totalvalue:\"",["escape",["macro",17],7],"\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":313
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"728534977223092\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=728534977223092\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":314
    },{
      "function":"__html",
      "vtp_html":" \u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=document.createElement(\"script\");a.src=\"\/\/survey.survicate.com\/workspaces\/e8ae0d9daea7a136c81dde58730dc517\/web_surveys.js\";a.async=!0;var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(window);\u003C\/script\u003E ",
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":315
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window._uxa=window._uxa||[];try{if(\"undefined\"!==typeof dataLayer){\"undefined\"!==typeof dataLayer.dmp\u0026\u0026(\"undefined\"!==typeof dataLayer.dmp.pagetype\u0026\u0026window._uxa.push([\"setCustomVariable\",1,\"pagetype\",dataLayer.dmp.pagetype,3]),\"undefined\"!==typeof dataLayer.dmp.continent\u0026\u0026window._uxa.push([\"setCustomVariable\",2,\"continent\",dataLayer.dmp.continent,3]),\"undefined\"!==typeof dataLayer.dmp.country\u0026\u0026window._uxa.push([\"setCustomVariable\",3,\"country\",dataLayer.dmp.country,3]),\"undefined\"!==typeof dataLayer.dmp.city\u0026\u0026\nwindow._uxa.push([\"setCustomVariable\",4,\"city\",dataLayer.dmp.city,3]),\"undefined\"!==typeof dataLayer.dmp.region\u0026\u0026window._uxa.push([\"setCustomVariable\",9,\"region\",dataLayer.dmp.region,3]));for(var a=0;a\u003CdataLayer.length;a++)\"undefined\"!==typeof dataLayer[a].cd6_SiteSection\u0026\u0026window._uxa.push([\"setCustomVariable\",5,\"Site_section\",dataLayer[a].cd6_SiteSection,3]),\"undefined\"!==typeof dataLayer[a].cd7_Topic\u0026\u0026window._uxa.push([\"setCustomVariable\",6,\"Topic\",dataLayer[a].cd7_Topic,3]),\"undefined\"!==typeof dataLayer[a].content_group_1\u0026\u0026\nwindow._uxa.push([\"setCustomVariable\",7,\"content_group_1\",dataLayer[a].content_group_1,3]),\"undefined\"!==typeof dataLayer[a].content_group_2\u0026\u0026window._uxa.push([\"setCustomVariable\",8,\"content_group_2\",dataLayer[a].content_group_2,3]),\"undefined\"!==typeof dataLayer[a].articleType\u0026\u0026window._uxa.push([\"setCustomVariable\",10,\"article_type\",dataLayer[a].articleType,3]),\"undefined\"!==typeof dataLayer[a].interests\u0026\u0026window._uxa.push([\"setCustomVariable\",11,\"interests\",dataLayer[a].interests,3]),\"undefined\"!==\ntypeof dataLayer[a].hasVideo\u0026\u0026window._uxa.push([\"setCustomVariable\",12,\"has_video\",dataLayer[a].hasVideo,3]),\"undefined\"!==typeof dataLayer[a].loggedIn\u0026\u0026window._uxa.push([\"setCustomVariable\",13,\"logged_in\",dataLayer[a].loggedIn,3]),\"undefined\"!==typeof dataLayer[a].poiType\u0026\u0026window._uxa.push([\"setCustomVariable\",14,\"poi_type\",dataLayer[a].poiType,3]),\"undefined\"!==typeof dataLayer[a].resource\u0026\u0026window._uxa.push([\"setCustomVariable\",15,\"resource\",dataLayer[a].resource,3]),\"undefined\"!==typeof dataLayer[a].cd28_PartnerName\u0026\u0026\nwindow._uxa.push([\"setCustomVariable\",16,\"partner_name\",dataLayer[a].cd28_PartnerName,3]),\"undefined\"!==typeof dataLayer[a].cd26_PartnerOfferingDetails\u0026\u0026window._uxa.push([\"setCustomVariable\",17,\"partner_offering\",dataLayer[a].cd26_PartnerOfferingDetails,3]),\"undefined\"!==typeof dataLayer[a].kind\u0026\u0026window._uxa.push([\"setCustomVariable\",18,\"kind\",dataLayer[a].kind,3])}}catch(b){}\"undefined\"===typeof CS_CONF?(window._uxa.push([\"setPath\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")]),\na=document.createElement(\"script\"),a.type=\"text\/javascript\",a.async=!0,a.src=\"\/\/t.contentsquare.net\/uxa\/4bbecd5513335.js\",document.getElementsByTagName(\"head\")[0].appendChild(a)):window._uxa.push([\"trackPageview\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")])})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1048
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa=window._uxa||[];window._uxa.push([\"ecommerce:addTransaction\",{id:\"",["escape",["macro",16],7],"\",revenue:\"",["escape",["macro",17],7],"\",shipping:\"",["escape",["macro",26],7],"\",tax:\"",["escape",["macro",27],7],"\"}]);window._uxa.push([\"ecommerce:send\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1049
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"utag"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"best-in-asia-2017$|best-in-asia$"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"ireland-a-tale-of-four-cities\/40625c8c-8a11-5710-a052-1479d2768f59|beyond-the-giants-causeway-exploring-northern-irelands-dramatic-causeway-coast\/40625c8c-8a11-5710-a052-1479d2768930",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"checkout\/confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"shop.lonelyplanet.com|shop.lpstaging.com"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"https:\/\/shop.lonelyplanet.com\/checkout\/confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"US"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"AU"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"https:\/\/shop.lonelyplanet.com\/checkout\/confirmation"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"GB"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"CA"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"AL|AD|AT|BE|BA|BG|BY|HR|CY|CZ|CS|DK|EE|FO|FI|FR|DE|GI|GR|HU|IS|IE|IT|LV|LI|LT|LU|MT|MD|MC|NL|NO|PL|PT|RO|RU|SM|SK|ES|SJ|SE|TR|UA"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"AF|AM|AZ|BD|BN|BT|CC|CN|CY|GE|HK|ID|IN|IO|JP|KG|KH|KP|KR|KZ|LA|LK|MM|MN|MO|MV|MY|NP|NZ|PH|PK|SG|TH|TJ|TL|TM|TW|UZ|VN"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"BH|EG|LY|IR|IQ|IL|JO|KW|LB|OM|PS|QA|SA|SY|AE|YE"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/thorntree\/"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)2557567_868($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)2557567_874($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"thorn tree insurance widget conversion"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"optimize.activate"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"pois"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"ultimate-eats"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"shop.lonelyplanet.com"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"video-engagement"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"\\.(abr|docx?|epub|gif|jpb|jpg|js|mp3|pdf|png|pptx?|psd|txt|vcf|wav|xlsx?|zip)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)2557567_1946($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"partner-click"
    },{
      "function":"_cn",
      "arg0":["macro",112],
      "arg1":"javascript"
    },{
      "function":"_cn",
      "arg0":["macro",112],
      "arg1":"lonelyplanet"
    },{
      "function":"_cn",
      "arg0":["macro",112],
      "arg1":"mailto"
    },{
      "function":"_sw",
      "arg0":["macro",112],
      "arg1":"#"
    },{
      "function":"_cn",
      "arg0":["macro",112],
      "arg1":"linkedin|flipboard|facebook|twitter"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"(.+)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)2557567_1948($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":".*lonelyplanet.com*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"facebook|pinterest|twitter|flipboard",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",112],
      "arg1":"intent"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)2557567_1949($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"social-share"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"account-registration"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"app-download"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"promotion-impression"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"promotion-click"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"button-click"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"form-submission"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"newsletter-subscribe"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"filter-search-results-by-tag"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"unfilter-search-results-by-tag"
    },{
      "function":"_cn",
      "arg0":["macro",112],
      "arg1":"https:\/\/shop.lonelyplanet.com\/"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)2557567_2044($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"unknown-nevada"
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"split-15-stable"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"homepage"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"interest"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"Forbidden - Lonely Planet|Lost - Lonely Planet"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/newsletter"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"destinations articles"
    },{
      "function":"_eq",
      "arg0":["macro",138],
      "arg1":"homepage"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"shop.lpstaging.com|shop.lonelyplanet.com"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"(40625c8c-8a11-5710-a052-1479d2757b76|40625c8c-8a11-5710-a052-1479d275666b|40625c8c-8a11-5710-a052-1479d2756670|40625c8c-8a11-5710-a052-1479d275667d|40625c8c-8a11-5710-a052-1479d2756689|40625c8c-8a11-5710-a052-1479d2756730|40625c8c-8a11-5710-a052-1479d27564dd|40625c8c-8a11-5710-a052-1479d27562f9|40625c8c-8a11-5710-a052-1479d2755cbb|40625c8c-8a11-5710-a052-1479d2756532|a-taste-of-louisiana-signature-dishes-of-the-bayou-state|four-scenic-drives-in-the-balkans)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/thorntree\/dashboard"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/thorntree\/welcome"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/thorntree\/forums"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/thorntree\/categories"
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":"^(continents|countries|cities|regions|administrative regions)$"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"introduction"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"travel-tips-and-articles"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"http:\/\/www.lonelyplanet.com\/news\/newsletter"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"\/kids\/"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/kids\/newsletter\/"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/kids\/booksellers\/"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/kids\/"
    },{
      "function":"_sw",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/kids\/books\/"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/kids\/first-words\/"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"lists"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"\/news\/?$"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"\/news\/category\/|\/news\/gallery\/?$"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"\/news\/[0-9]{4}[\/]|\/news\/gallery\/[0-9]{4}[\/]"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",139],
      "arg1":"destinations"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"http:\/\/www.lonelyplanet.com\/trips$"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"www.lonelyplanet.com\/family-holidays"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/south-australia-starter-kit"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"explore every day"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"island-guide-2018\/|\/beyond-beaches-why-youll-love-the-cook-islands\/|\/taste-mauritius-food-lovers-guide\/|\/campaign\/island-guide-2018\/top-10-islands-for-2018\/|\/circling-big-island-pilgrimage-mother-nature\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"hidden-forest-hideaways\/?$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"best-in-asia-2018$|best-in-asia$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"content_expansion"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"journey-through-turkey$|journey-through-turkey\/$|journey-through-turkey\/\\?|journey-through-turkey\\?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"walking-the-lycian-way$|walking-the-lycian-way\/$|walking-the-lycian-way\/?|walking-the-lycian-way?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"road-tripping-anatolia$|road-tripping-anatolia\/$|road-tripping-anatolia\/?|road-tripping-anatolia?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"journey-through-turkey\/photo-competition$|journey-through-turkey\/photo-competition\/$|journey-through-turkey\/photo-competition\/?|journey-through-turkey\/photo-competition?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"cappadocia-ground-sky$|cappadocia-ground-sky\/$|cappadocia-ground-sky\/?|cappadocia-ground-sky?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"essential-places-to-soak-up-the-vibe-of-istanbuls-kadikoy-neighbourhood$|essential-places-to-soak-up-the-vibe-of-istanbuls-kadikoy-neighbourhood\/$|essential-places-to-soak-up-the-vibe-of-istanbuls-kadikoy-neighbourhood\/?|essential-places-to-soak-up-the-vibe-of-istanbuls-kadikoy-neighbourhood?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"eat-like-local-bodrum$|eat-like-local-bodrum\/$|eat-like-local-bodrum\/?|eat-like-local-bodrum?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"make-turkeys-turquoise-coast$|make-turkeys-turquoise-coast\/$|make-turkeys-turquoise-coast\/?|make-turkeys-turquoise-coast?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"discover-abu-dhabi$|discover-abu-dhabi\/$|discover-abu-dhabi\/\\?|discover-abu-dhabi\\?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"abu-dhabis-next-act",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"24-hours-abu-dhabi-day-long-stopover",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"locals-guide-abu-dhabi",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"abu-dhabis-alluring-islands",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"discover-abu-dhabi\\\/get-motor-runnin-empty-quarter",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"find-authentic-eats-abu-dhabi",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"best in us 2018"
    },{
      "function":"_eq",
      "arg0":["macro",58],
      "arg1":"dotcom-pois"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"highlights"
    },{
      "function":"_cn",
      "arg0":["macro",44],
      "arg1":"ireland"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"https:\/\/www.lonelyplanet.com\/ireland"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"travel news"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"\/best-in-"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"island-hoppers-guide-archipelagos-adventure",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"travel-trends-2018-private-islands",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"seven-islands-seven-adventures-sicilys-idyllic-aeolian-archipelago",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"beaches-coasts-and-islands",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"united-arab-emirates"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"best-in-europe"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"\/blog\/?$"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"blog\/category\/"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"blog\/2018|blog\/2017|blog\/2019"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"https:\/\/shop.lonelyplanet.com\/"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"GB"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"https:\/\/shop.lonelyplanet.com"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"hidden-forest-hideaways.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"\/campaign\/discover-croatia\/"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"explore-every-day"
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"client solutions campaign"
    },{
      "function":"_cn",
      "arg0":["macro",141],
      "arg1":"button button--primary book-variants__add-to-cart-button"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)2557567_1022($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"michigan-by-the-mile",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"https:\/\/shop.lonelyplanet.com\/checkout\/addresses"
    },{
      "function":"_eq",
      "arg0":["macro",142],
      "arg1":"USD"
    },{
      "function":"_sw",
      "arg0":["macro",31],
      "arg1":"https:\/\/shop.lonelyplanet.com\/products"
    },{
      "function":"_eq",
      "arg0":["macro",142],
      "arg1":"GBP"
    },{
      "function":"_eq",
      "arg0":["macro",142],
      "arg1":"AUD"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"https:\/\/shop.lonelyplanet.com\/search?"
    },{
      "function":"_cn",
      "arg0":["macro",143],
      "arg1":"newsletter"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"products"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"magazine"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"gtm.historyChange"
    }],
  "rules":[
    [["if",0,1],["add",1,3,57,59]],
    [["if",2],["add",2,7,8,9,10,11,12,13,30,58,61,64,65,78,80,85,92,108,118,128,150,151,154,6,153,47,48,49,50,51,52,53,54,55,56]],
    [["if",1,4],["add",4,93,0]],
    [["if",1,5],["add",5]],
    [["if",6,7],["add",14,15,126,146,155]],
    [["if",1,8],["add",16,62,90,114,127,148],["block",137]],
    [["if",1,9,10],["add",17,146,155]],
    [["if",1,9,11],["add",18,146,155]],
    [["if",1,12,13],["add",19,146,155]],
    [["if",1,9,14],["add",20,146,155]],
    [["if",1,9,15],["add",21,146,155]],
    [["if",1,9,16],["add",22,146,155]],
    [["if",1,9,17],["add",23,146,155]],
    [["if",18,19,20],["add",24]],
    [["if",18,19,21],["add",24]],
    [["if",22],["add",25]],
    [["if",23],["add",26]],
    [["if",1,24],["add",27,77,124]],
    [["if",1,25],["add",28]],
    [["if",1],["unless",26],["add",29]],
    [["if",27],["add",31]],
    [["if",28,29,30],["add",32]],
    [["if",31],["add",33]],
    [["if",29,37,38,39],["unless",32,33,34,35,36],["add",34]],
    [["if",29,37,41,43],["unless",32,40,42],["add",35]],
    [["if",45],["add",36]],
    [["if",44],["add",37],["block",35]],
    [["if",46],["add",38]],
    [["if",47],["add",39]],
    [["if",48],["add",40]],
    [["if",49],["add",41]],
    [["if",50],["add",42]],
    [["if",51],["add",43]],
    [["if",52],["add",44]],
    [["if",53],["add",45]],
    [["if",29,54,55],["add",46]],
    [["if",1,56],["add",57]],
    [["if",1,57,58],["add",57]],
    [["if",1,59],["add",57,70,114]],
    [["if",1,60],["add",57]],
    [["if",1,61],["add",60]],
    [["if",7,64,65],["add",62],["block",144,145]],
    [["if",2],["unless",66],["add",63]],
    [["if",1,71],["add",66]],
    [["if",1,73],["add",67,89,91,0,105,114,120,124]],
    [["if",1,63],["add",68,79,86],["block",61]],
    [["if",1,74],["add",69]],
    [["if",1,75],["add",71,88,114]],
    [["if",1,76],["add",72]],
    [["if",1,77],["add",73]],
    [["if",1,78],["add",74]],
    [["if",1,79],["add",75]],
    [["if",1,80],["add",76]],
    [["if",1,81],["add",77]],
    [["if",1,82],["add",81,98]],
    [["if",1,83],["add",82,98]],
    [["if",1,84],["add",83,98]],
    [["if",1,85],["add",84,97]],
    [["if",1,86],["add",87,124]],
    [["if",1,87],["add",94]],
    [["if",1,88],["add",95]],
    [["if",1,89],["add",96]],
    [["if",1,90],["add",0,106,107]],
    [["if",1,91],["add",0,116,117]],
    [["if",1,92],["add",0,136,137,138],["block",135]],
    [["if",1,93],["add",0,140]],
    [["if",1,94],["add",99]],
    [["if",1,95],["add",100,102]],
    [["if",1,96],["add",100,102]],
    [["if",1,97],["add",100,102]],
    [["if",1,98],["add",100,102]],
    [["if",1,99],["add",101,102]],
    [["if",1,100],["add",101,102]],
    [["if",1,101],["add",101,102]],
    [["if",1,102],["add",101,102]],
    [["if",1,103],["add",103]],
    [["if",1,104],["add",103]],
    [["if",1,105],["add",104]],
    [["if",1,106],["add",104]],
    [["if",1,107],["add",104]],
    [["if",1,108],["add",104]],
    [["if",1,109],["add",104]],
    [["if",1,110],["add",109,113]],
    [["if",1,111],["add",110]],
    [["if",1,112,113],["add",111]],
    [["if",1,114],["add",112]],
    [["if",1,115],["add",114]],
    [["if",1,116],["add",114]],
    [["if",1,117],["add",115,117]],
    [["if",1,118],["add",115,117]],
    [["if",1,119],["add",115,117]],
    [["if",1,120],["add",117]],
    [["if",1,121],["add",119]],
    [["if",1,122],["add",121,125]],
    [["if",1,123],["add",122]],
    [["if",1,124],["add",122]],
    [["if",1,125],["add",123]],
    [["if",1,11,128],["add",129]],
    [["if",1,10,128],["add",130]],
    [["if",1,14,128],["add",131]],
    [["if",1,15,128],["add",132]],
    [["if",1,16,128],["add",133]],
    [["if",1,17,128],["add",134]],
    [["if",1,129],["add",135,137,138]],
    [["if",1,130],["add",139]],
    [["if",1,132],["add",141]],
    [["if",29,133,134],["add",142]],
    [["if",1,135],["add",143]],
    [["if",1,136],["add",144]],
    [["if",1,141],["add",145]],
    [["if",142,143],["add",147]],
    [["if",1,144],["add",149]],
    [["if",1,127,128],["add",152]],
    [["if",1,145],["add",152]],
    [["if",146],["add",154]],
    [["if",1,3],["block",2,60,61,62,63,64]],
    [["if",1,62],["block",60,67]],
    [["if",1,67],["block",63]],
    [["if",1,68],["block",63]],
    [["if",1,69],["block",63]],
    [["if",1,70],["block",63]],
    [["if",1,72],["block",66]],
    [["if",1,126],["unless",127],["block",128]],
    [["if",1,131],["block",139]],
    [["if",1,137,138],["block",144,145]],
    [["if",1,138,139],["block",144,145]],
    [["if",1,138,140],["block",144,145]]]
},
"runtime":[
[],[]
]


};
var g,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,da=function(a){if(a){for(var b=ca,c=["String","prototype","startsWith"],d=0;d<c.length-1;d++){var e=c[d];e in b||(b[e]={});b=b[e]}var f=c[c.length-1],h=b[f],k=a(h);k!=h&&null!=k&&aa(b,f,{configurable:!0,writable:!0,value:k})}};
da(function(a){return a?a:function(a,c){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");b=this+"";a+="";for(var e=b.length,f=a.length,h=Math.max(0,Math.min(c|0,b.length)),k=0;k<f&&h<e;)if(b[h++]!=a[k++])return!1;return k>=f}});
var fa=this,la=function(){if(null===ha)a:{var a=fa.document,b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");if(c&&ka.test(c)){ha=c;break a}}ha=""}return ha},ka=/^[\w+/_-]+[=]{0,2}$/,ha=null,ma=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},na=function(a,b){function c(){}c.prototype=b.prototype;a.Mh=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.vh=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-
2]=arguments[e];return b.prototype[c].apply(a,d)}};var oa=function(a,b){this.I=a;this.Yf=b};oa.prototype.jg=function(){return this.I};oa.prototype.getData=function(){return this.Yf};oa.prototype.getData=oa.prototype.getData;oa.prototype.getType=oa.prototype.jg;var pa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},qa=function(){this.C={};this.mb=!1;this.Rc={}};qa.prototype.get=function(a){return this.C["dust."+a]};qa.prototype.set=function(a,b){this.mb||(a="dust."+a,this.Rc.hasOwnProperty(a)||(this.C[a]=b))};qa.prototype.has=function(a){return this.C.hasOwnProperty("dust."+a)};var sa=function(a){var b=[],c;for(c in a.C)a.C.hasOwnProperty(c)&&b.push(c.substr(5));return b};
qa.prototype.remove=function(a){a="dust."+a;this.mb||this.Rc.hasOwnProperty(a)||delete this.C[a]};qa.prototype.U=function(){this.mb=!0};var p=function(a){this.Sa=new qa;this.i=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(pa(b)?this.i[Number(b)]=a[Number(b)]:this.Sa.set(b,a[b]))};g=p.prototype;g.toString=function(){for(var a=[],b=0;b<this.i.length;b++){var c=this.i[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};g.set=function(a,b){if("length"==a){if(!pa(b))throw Error("RangeError: Length property must be a valid integer.");this.i.length=Number(b)}else pa(a)?this.i[Number(a)]=b:this.Sa.set(a,b)};
g.get=function(a){return"length"==a?this.length():pa(a)?this.i[Number(a)]:this.Sa.get(a)};g.length=function(){return this.i.length};g.na=function(){for(var a=sa(this.Sa),b=0;b<this.i.length;b++)a.push(b+"");return new p(a)};g.remove=function(a){pa(a)?delete this.i[Number(a)]:this.Sa.remove(a)};g.pop=function(){return this.i.pop()};g.push=function(a){return this.i.push.apply(this.i,Array.prototype.slice.call(arguments))};g.shift=function(){return this.i.shift()};
g.splice=function(a,b,c){return new p(this.i.splice.apply(this.i,arguments))};g.unshift=function(a){return this.i.unshift.apply(this.i,Array.prototype.slice.call(arguments))};g.has=function(a){return pa(a)&&this.i.hasOwnProperty(a)||this.Sa.has(a)};p.prototype.unshift=p.prototype.unshift;p.prototype.splice=p.prototype.splice;p.prototype.shift=p.prototype.shift;p.prototype.push=p.prototype.push;p.prototype.pop=p.prototype.pop;p.prototype.remove=p.prototype.remove;p.prototype.getKeys=p.prototype.na;
p.prototype.get=p.prototype.get;p.prototype.set=p.prototype.set;var ta=function(){function a(a,b){c[a]=b}function b(){c={};h=!1}var c={},d,e,f={},h=!1,k={add:a,Ud:function(a,b,c){f[a]||(f[a]={});f[a][b]=c},create:function(f){var k={add:a,assert:function(a,b){if(!h){var k=c[a]||d;k&&k.apply(f,Array.prototype.slice.call(arguments,0));e&&e.apply(f,Array.prototype.slice.call(arguments,0))}},reset:b};k.add=k.add;k.assert=k.assert;k.reset=k.reset;return k},se:function(a){return f[a]?(b(),c=f[a],!0):!1},Ta:function(a){d=a},Ua:function(a){e=a},reset:b,Ge:function(a){h=
a}};k.add=k.add;k.addToCache=k.Ud;k.loadFromCache=k.se;k.registerDefaultPermission=k.Ta;k.registerGlobalPermission=k.Ua;k.reset=k.reset;k.setPermitAllAsserts=k.Ge;return k};var ua=function(){function a(a,c){if(b[a]){if(b[a].Pb+c>b[a].max)throw Error("Quota exceeded");b[a].Pb+=c}}var b={},c=void 0,d=void 0,e={Fg:function(a){c=a},Xd:function(){c&&a(c,1)},Gg:function(a){d=a},ma:function(b){d&&a(d,b)},fh:function(a,c){b[a]=b[a]||{Pb:0};b[a].max=c},hg:function(a){return b[a]&&b[a].Pb||0},reset:function(){b={}},Sf:a};e.onFnConsume=e.Fg;e.consumeFn=e.Xd;e.onStorageConsume=e.Gg;e.consumeStorage=e.ma;e.setMax=e.fh;e.getConsumed=e.hg;e.reset=e.reset;e.consume=e.Sf;return e};var va=function(a,b,c){this.V=a;this.L=b;this.sa=c;this.i=new qa;this.Vb=void 0};va.prototype.add=function(a,b){wa(this,a,b,!1)};va.prototype.Gc=function(a,b){wa(this,a,b,!0)};var wa=function(a,b,c,d){if(!a.i.mb)if(a.V.ma(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.Rc["dust."+b]=!0}else a.i.set(b,c)};
va.prototype.set=function(a,b){this.i.mb||(this.sa&&this.sa.has(a)?this.sa.set(a,b):(this.V.ma(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};va.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.sa?this.sa.get(a):void 0};va.prototype.has=function(a){return!!this.i.has(a)||!(!this.sa||!this.sa.has(a))};var xa=function(a){var b=new va(a.V,a.L,a);a.Vb&&b.X(a.Vb);return b};va.prototype.P=function(){return this.V};
va.prototype.X=function(a){this.Vb=a};va.prototype.U=function(){this.i.U()};va.prototype.has=va.prototype.has;va.prototype.get=va.prototype.get;va.prototype.set=va.prototype.set;va.prototype.addImmutable=va.prototype.Gc;va.prototype.add=va.prototype.add;var ya=function(){},Aa=function(a){return"function"==typeof a},t=function(a){return"string"==typeof a},Ba=function(a){return"number"==typeof a&&!isNaN(a)},x=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ca=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ea=function(a,b){if(a&&x(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Fa=function(a,b){if(!Ba(a)||
!Ba(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ha=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ia=function(a){return Math.round(Number(a))||0},Ja=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ka=function(a){var b=[];if(x(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},La=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ma=function(){return(new Date).getTime()},Na=function(){this.prefix="gtm.";this.values=
{}};Na.prototype.set=function(a,b){this.values[this.prefix+a]=b};Na.prototype.get=function(a){return this.values[this.prefix+a]};Na.prototype.contains=function(a){return void 0!==this.get(a)};
var Oa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Pa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Qa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ra=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Sa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};var y=function(a,b){qa.call(this);this.te=a;this.dg=b};na(y,qa);var Ua=function(a,b){for(var c,d=0;d<b.length&&!(c=Ta(a,b[d]),c instanceof oa);d++);return c},Ta=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof y))throw Error("Attempting to execute non-function "+b[0]+".");return c.H.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.Vb;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};y.prototype.toString=function(){return this.te};y.prototype.getName=function(){return this.te};
y.prototype.getName=y.prototype.getName;y.prototype.na=function(){return new p(sa(this))};y.prototype.getKeys=y.prototype.na;y.prototype.H=function(a,b){var c,d={A:function(){return a},evaluate:function(b){var c=a;return x(b)?Ta(c,b):b},Nc:function(b){return Ua(a,b)},P:function(){return a.P()},w:function(){c||(c=a.L.create(d));return c}};a.P().Xd();return this.dg.apply(d,Array.prototype.slice.call(arguments,1))};y.prototype.invoke=y.prototype.H;
y.prototype.wa=function(a,b){try{return this.H.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};y.prototype.safeInvoke=y.prototype.wa;var Va=function(){qa.call(this)};na(Va,qa);Va.prototype.na=function(){return new p(sa(this))};Va.prototype.getKeys=Va.prototype.na;var Wa=/^([a-z]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,Xa={Fn:"function",Map:"Object",List:"Array"},Ya=function(a,b){for(var c=0;c<a.length;c++){var d=Wa.exec(a[c]);if(!d)throw Error("Internal Error");var e=d[1],f="!"===d[2],h=d[3],k=b[c],l=typeof k;if(null===k||"undefined"===l){if(f)throw Error("Required argument "+e+" not supplied.");}else if("*"!==h){var m=typeof k;k instanceof y?m="Fn":k instanceof p?m="List":k instanceof Va&&(m="Map");if(m!=h)throw Error("Argument "+e+" has type "+
m+", which does not match required type "+(Xa[h]||h)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Za=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,$a=function(a){if(null==a)return String(a);var b=Za.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ab=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},bb=function(a){if(!a||"object"!=$a(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ab(a,"constructor")&&!ab(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ab(a,b)},z=function(a,b){var c=b||("array"==$a(a)?[]:{}),d;for(d in a)if(ab(a,d)){var e=a[d];"array"==$a(e)?("array"!=$a(c[d])&&(c[d]=[]),c[d]=z(e,c[d])):bb(e)?(bb(c[d])||(c[d]={}),c[d]=z(e,c[d])):c[d]=e}return c};var cb=function(a){if(a instanceof p){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=cb(a.get(d)));return b}if(a instanceof Va){for(var e={},f=a.na(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=cb(a.get(f.get(k)));return e}return a instanceof y?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=db(b[c]);var d=new va(ua(),ta());return cb(a.H.apply(a,[d].concat(b)))}:a},db=function(a){if(x(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=db(a[c]));return new p(b)}if(bb(a)){var d=
new Va,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,db(a[e]));return d}if("function"===typeof a)return new y("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=cb(this.evaluate(c[d]));return db(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var eb={control:function(a,b){return new oa(a,this.evaluate(b))},fn:function(a,b,c){var d=this.A(),e=this.evaluate(b);if(!(e instanceof p))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.P().ma(a.length+f.length);return new y(a,function(){return function(a){for(var b=xa(d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof oa)return c[h];for(var n=e.get("length"),q=0;q<n;q++)q<
c.length?b.set(e.get(q),c[q]):b.set(e.get(q),void 0);b.set("arguments",new p(c));var r=Ua(b,f);if(r instanceof oa)return"return"===r.I?r.getData():r}}())},list:function(a){var b=this.P();b.ma(arguments.length);for(var c=new p,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.ma(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.P(),c=new Va,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),
h=e.length;h+="string"===typeof f?f.length:1;b.ma(h);c.set(e,f)}return c},undefined:function(){}};var fb=function(){this.V=ua();this.L=ta();this.Ma=new va(this.V,this.L)};g=fb.prototype;g.ka=function(a,b){var c=new y(a,b);c.U();this.Ma.set(a,c)};g.Td=function(a,b){eb.hasOwnProperty(a)&&this.ka(b||a,eb[a])};g.P=function(){return this.V};g.bc=function(){this.V=ua();this.Ma.V=this.V};g.Zg=function(){this.L=ta();this.Ma.L=this.L};g.X=function(a){this.Ma.X(a)};g.T=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.gd(c)};
g.gd=function(a){for(var b,c=0;c<arguments.length;c++){var d=Ta(this.Ma,arguments[c]);b=d instanceof oa||d instanceof y||d instanceof p||d instanceof Va||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};g.U=function(){this.Ma.U()};fb.prototype.makeImmutable=fb.prototype.U;fb.prototype.run=fb.prototype.gd;fb.prototype.execute=fb.prototype.T;fb.prototype.resetPermissions=fb.prototype.Zg;fb.prototype.resetQuota=fb.prototype.bc;
fb.prototype.getQuota=fb.prototype.P;fb.prototype.addNativeInstruction=fb.prototype.Td;fb.prototype.addInstruction=fb.prototype.ka;var gb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var hb={ih:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof p)for(var f=arguments[e],h=0;h<f.length();h++)c.push(f.get(h));else c.push(arguments[e]);return new p(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.H(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.H(a,this.get(e),e,this)&&d.push(this.get(e));return new p(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.H(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.H(a,this.get(e),e,this));return new p(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");var h;for(h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.H(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
var h;for(h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.H(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=gb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?
d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new p(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.H(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=gb(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.H(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var ib={ADD:0,AND:1,APPLY:2,ASSIGN:3,BLOCK:53,BREAK:4,CASE:5,CONST:52,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,FOR_IN_CONST:54,FOR_IN_LET:55,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,
POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42},kb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),lb=new oa("break"),mb=new oa("continue"),nb=function(a,b){return this.evaluate(a)+this.evaluate(b)},ob=function(a,b){return this.evaluate(a)&&this.evaluate(b)},
pb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof p))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ca(kb,b))return db(a[b].apply(a,gb(c)));throw Error("TypeError: "+b+" is not a function");
}if(a instanceof p){if(a.has(b)){var d=a.get(b);if(d instanceof y){var e=gb(c);e.unshift(this.A());return d.H.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ca(hb.ih,b)){var f=gb(c);f.unshift(this.A());return hb[b].apply(a,f)}}if(a instanceof y||a instanceof Va){if(a.has(b)){var h=a.get(b);if(h instanceof y){var k=gb(c);k.unshift(this.A());return h.H.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof y?a.getName():a.toString();if("hasOwnProperty"==
b)return a.has.apply(a,gb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},qb=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.A();if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.evaluate(b);c.set(a,d);return d},rb=function(a){var b=xa(this.A()),c=Ua(b,Array.prototype.slice.apply(arguments));if(c instanceof oa)return c},sb=function(){return lb},tb=function(a){for(var b=this.evaluate(a),
c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof oa)return d}},ub=function(a){for(var b=this.A(),c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"==typeof d){var e=this.evaluate(arguments[c+1]);b.Gc(d,e)}}},vb=function(){return mb},wb=function(a,b,c){var d=new p;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[ib.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.A().set(a,this.evaluate(f))},xb=function(a,b){return this.evaluate(a)/
this.evaluate(b)},yb=function(a,b){return this.evaluate(a)==this.evaluate(b)},zb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
function Ab(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=Ua(e,c);if(f instanceof oa){if("break"==f.I)break;if("return"==f.I)return f}}else if(b instanceof Va||b instanceof p||b instanceof y)for(var h=b.na(),k=h.length(),l=0;l<k;l++){var m=a(h.get(l)),n=Ua(m,c);if(n instanceof oa){if("break"==n.I)break;if("return"==n.I)return n}}}
var Bb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.A();return Ab(function(b){d.set(a,b);return d},b,c)},Cb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.A();return Ab(function(b){var c=xa(d);c.Gc(a,b);return c},b,c)},Db=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.A();return Ab(function(b){var c=xa(d);c.add(a,b);return c},b,c)},Eb=function(a){return this.A().get(this.evaluate(a))},
Fb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");a instanceof Va||a instanceof p||a instanceof y?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:pa(b)&&(c=a[b]));return c},Gb=function(a,b){return this.evaluate(a)>this.evaluate(b)},Hb=function(a,b){return this.evaluate(a)>=this.evaluate(b)},Ib=function(a,b){return this.evaluate(a)===this.evaluate(b)},Jb=function(a,b){return this.evaluate(a)!==this.evaluate(b)},
Kb=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.Nc(d);if(e instanceof oa)return e},Lb=function(a,b){return this.evaluate(a)<this.evaluate(b)},Mb=function(a,b){return this.evaluate(a)<=this.evaluate(b)},Nb=function(a,b){return this.evaluate(a)%this.evaluate(b)},Ob=function(a,b){return this.evaluate(a)*this.evaluate(b)},Pb=function(a){return-this.evaluate(a)},Qb=function(a){return!this.evaluate(a)},Rb=function(a,b){return this.evaluate(a)!=this.evaluate(b)},
Sb=function(){return null},Tb=function(a,b){return this.evaluate(a)||this.evaluate(b)},Ub=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c},Vb=function(a){return this.evaluate(a)},Wb=function(a){return Array.prototype.slice.apply(arguments)},Xb=function(a){return new oa("return",this.evaluate(a))},Yb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof y||a instanceof
p||a instanceof Va)&&a.set(b,c);return c},Zb=function(a,b){return this.evaluate(a)-this.evaluate(b)},$b=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!x(b)||!x(c))throw Error("Error: Malformed switch instruction.");for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof oa){var h=d.I;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof oa&&
("return"==d.I||"continue"==d.I)))return d},ac=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)},bc=function(a){a=this.evaluate(a);return a instanceof y?"function":typeof a},cc=function(a){for(var b=this.A(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},dc=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.Nc(f),e instanceof oa)){if("break"==e.I)return;if("return"==e.I)return e}for(;this.evaluate(a);){e=this.Nc(f);
if(e instanceof oa){if("break"==e.I)break;if("return"==e.I)return e}this.evaluate(b)}};var fc=function(){this.me=!1;this.F=new fb;ec(this);this.me=!0};fc.prototype.xg=function(){return this.me};fc.prototype.isInitialized=fc.prototype.xg;fc.prototype.T=function(a){this.F.L.se(String(a[0]))||(this.F.L.reset(),this.F.L.Ge(!0));return this.F.gd(a)};fc.prototype.execute=fc.prototype.T;fc.prototype.U=function(){this.F.U()};fc.prototype.makeImmutable=fc.prototype.U;
var ec=function(a){function b(a,b){e.F.Td(a,String(b))}function c(a,b){e.F.ka(String(d[a]),b)}var d=ib,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",nb);c("AND",ob);c("APPLY",pb);c("ASSIGN",qb);c("BLOCK",rb);c("BREAK",sb);c("CASE",tb);c("CONST",ub);c("CONTINUE",vb);c("DEFAULT",tb);c("DEFN",wb);c("DIVIDE",xb);c("EQUALS",yb);c("EXPRESSION_LIST",zb);c("FOR_IN",Bb);c("FOR_IN_CONST",Cb);c("FOR_IN_LET",Db);c("GET",Eb);c("GET_INDEX",
Fb);c("GET_PROPERTY",Fb);c("GREATER_THAN",Gb);c("GREATER_THAN_EQUALS",Hb);c("IDENTITY_EQUALS",Ib);c("IDENTITY_NOT_EQUALS",Jb);c("IF",Kb);c("LESS_THAN",Lb);c("LESS_THAN_EQUALS",Mb);c("MODULUS",Nb);c("MULTIPLY",Ob);c("NEGATE",Pb);c("NOT",Qb);c("NOT_EQUALS",Rb);c("NULL",Sb);c("OR",Tb);c("POST_DECREMENT",Ub);c("POST_INCREMENT",Ub);c("PRE_DECREMENT",Vb);c("PRE_INCREMENT",Vb);c("QUOTE",Wb);c("RETURN",Xb);c("SET_PROPERTY",Yb);c("SUBTRACT",Zb);c("SWITCH",$b);c("TERNARY",ac);c("TYPEOF",bc);c("VAR",cc);c("WHILE",
dc)};fc.prototype.ka=function(a,b){this.F.ka(a,b)};fc.prototype.addInstruction=fc.prototype.ka;fc.prototype.P=function(){return this.F.P()};fc.prototype.getQuota=fc.prototype.P;fc.prototype.bc=function(){this.F.bc()};fc.prototype.resetQuota=fc.prototype.bc;fc.prototype.Ta=function(a){this.F.L.Ta(a)};fc.prototype.Ua=function(a){this.F.L.Ua(a)};fc.prototype.Nb=function(a,b,c){this.F.L.Ud(a,b,c)};fc.prototype.X=function(a){this.F.X(a)};var gc=function(){this.Zb={}};gc.prototype.get=function(a){return this.Zb.hasOwnProperty(a)?this.Zb[a]:void 0};gc.prototype.add=function(a,b){if(this.Zb.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(!b)throw"Attempting to add an undefined function: "+a+".";var c=new y(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.U();this.Zb[a]=c};
gc.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var A=window,C=document,hc=navigator,ic=C.currentScript&&C.currentScript.src,jc=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},kc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},lc=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;kc(d,b);c&&(d.onerror=c);la()&&d.setAttribute("nonce",la());var e=C.getElementsByTagName("script")[0]||C.body||C.head;
e.parentNode.insertBefore(d,e);return d},mc=function(){if(ic){var a=ic.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},nc=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||C.body||C.head;d.parentNode.insertBefore(c,d);kc(c,b);void 0!==a&&(c.src=a);return c},G=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=
function(){d.onerror=null;c&&c()};d.src=a},oc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},pc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},H=function(a){A.setTimeout(a,0)},rc=function(a){var b=C.getElementById(a);if(b&&qc(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(qc(document.all[a][c],"id")==a)return document.all[a][c];return b},qc=function(a,b){return a&&b&&a.attributes&&
a.attributes[b]?a.attributes[b].value:null},sc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},tc=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},uc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null};var vc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var wc=/:[0-9]+$/,xc=function(a,b,c,d){for(var e=[],f=a.split("&"),h=0;h<f.length;h++){var k=f[h].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},I=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=yc(a.protocol)||yc(A.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
A.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||A.location.hostname).replace(wc,"").toLowerCase());return zc(a,b,c,d,e)},zc=function(a,b,c,d,e){var f,h=yc(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ac(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(wc,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
h?80:"https"==h?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ca(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=xc(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},yc=function(a){return a?a.replace(":","").toLowerCase():""},Ac=function(a){var b=
"";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},L=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(wc,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Bc=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Ec=function(a,b,c,d){var e=Cc(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Dc(e,function(a){return a.Sb},b);if(1===e.length)return e[0].id;e=Dc(e,function(a){return a.ob},c);return e[0]?e[0].id:void 0}};
function Fc(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Bc(b,e).indexOf(c)}
var Ic=function(a,b,c,d,e){var f;if(b){d&&(b=encodeURIComponent(b));var h=b;h&&1200<h.length&&(h=h.substring(0,1200));b=h;f=a+"="+b}else f=a+"=deleted; expires="+(new Date(0)).toUTCString();var k=void 0,l=void 0,m;for(m in c)if(c.hasOwnProperty(m)){var n=c[m];if(null!=n)switch(m){case "secure":n&&(f+="; secure");break;case "domain":k=n;break;default:"path"==m&&(l=n),"expires"==m&&n instanceof Date&&(n=n.toUTCString()),f+="; "+m+"="+n}}if("auto"===k){for(var q=Gc(),r=void 0,u=0,w=0;w<q.length;++w){var v=
"none"!=q[w]?q[w]:void 0;if(e){c.domain=v;try{e(a,c)}catch(B){r=B;continue}}u+=1;if(!Hc(v,l)&&Fc(f+(v?"; domain="+v:""),a,b))return!0}if(r&&!u)throw r;return!1}e&&e(a,c);k&&"none"!=k&&(f+="; domain="+k);return!Hc(k,l)&&Fc(f,a,b)},Jc=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);return Ic(a,b,h,f)};
function Dc(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Cc(a,b){for(var c=[],d=Bc(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Sb:1*k[0]||1,ob:1*k[1]||1}))}}return c}
var Kc=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Lc=/(^|\.)doubleclick\.net$/i,Hc=function(a,b){return Lc.test(document.location.hostname)||"/"===b&&Kc.test(a)},Gc=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};var Oc=function(){this.Qa=new fc;var a=new gc;a.addAll(Mc());Nc(this,function(b){return a.get(b)})},Mc=function(){return{callInWindow:Pc,callLater:Qc,copyFromWindow:Rc,createQueue:Sc,createArgumentsQueue:Tc,encodeURI:Uc,encodeURIComponent:Vc,getCookieValues:Wc,getQueryParameters:Xc,getReferrer:Yc,getReferrerQueryParameters:Zc,getReferrerUrl:$c,getUrl:ad,getUrlFragment:bd,isPlainObject:cd,injectHiddenIframe:dd,injectScript:ed,logToConsole:fd,queryPermission:gd,removeUrlFragment:hd,replaceAll:id,sendPixel:jd,
setCookie:kd,setInWindow:ld}};Oc.prototype.T=function(a){return this.Qa.T(a)};Oc.prototype.execute=Oc.prototype.T;var Nc=function(a,b){a.Qa.ka("require",b)};Oc.prototype.Ta=function(a){this.Qa.Ta(a)};Oc.prototype.Ua=function(a){this.Qa.Ua(a)};Oc.prototype.Nb=function(a,b,c){this.Qa.Nb(a,b,c)};Oc.prototype.X=function(a){this.Qa.X(a)};
function Pc(a,b){Ya(["path:!string"],[a]);for(var c=a.split("."),d=A,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==$a(e)){for(var h=[],k=1;k<arguments.length;k++)h.push(cb(arguments[k]));e.apply(d,h)}}function Qc(a){Ya(["fn:!Fn"],arguments);var b=this.A();H(function(){a instanceof y&&a.wa(b)})}
function Rc(a){Ya(["path:!string"],arguments);this.w().assert("access_globals","read",a);var b=a.split("."),c=A,d;for(d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c||null===c)return;return db(c[b[d]])}function Wc(a,b){Ya(["name:!string","decode:?boolean"],arguments);this.w().assert("get_cookies",a);return Bc(a,b)}function Yc(){return C.referrer}function $c(a){Ya(["component:?string"],arguments);this.w().assert("get_referrer",a);return zc(L(A.document.referrer),a)}
function ad(a){Ya(["component:?string"],arguments);this.w().assert("get_url",a);return I(L(A.location.href),a)}function Xc(a,b){Ya(["queryKey:!string","retrieveAll:?boolean"],arguments);this.w().assert("get_url","query",a);return md(A.location.href,a,b)}function Zc(a,b){Ya(["queryKey:!string","retrieveAll:?boolean"],arguments);this.w().assert("get_referrer","query",a);return md(A.document.referrer,a,b)}function md(a,b,c){var d=I(L(a),"query"),e=xc(d,b,c);return db(e)}
function bd(a){Ya(["url:!string"],arguments);return I(L(a),"fragment")}function cd(a){return a instanceof Va}function dd(a,b){Ya(["url:!string","onSuccess:?Fn"],arguments);this.w().assert("inject_hidden_iframe",a);var c=this.A();nc(a,function(){b instanceof y&&b.wa(c)})}var nd={};
function ed(a,b,c,d){Ya(["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);this.w().assert("inject_script",a);var e=this.A(),f=function(){b instanceof y&&b.wa(e)},h=function(){c instanceof y&&c.wa(e)};if(d){var k=d;nd[k]?(nd[k].onSuccess.push(f),nd[k].onFailure.push(h)):(nd[k]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=nd[k].onSuccess,b=0;b<a.length;b++)H(a[b]);a.push=function(a){H(a);return 0}},h=function(){for(var a=nd[k].onFailure,b=0;b<a.length;b++)H(a[b]);
nd[k]=null},lc(a,f,h))}else lc(a,f,h)}function fd(){try{this.w().assert("logging")}catch(c){return}for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=cb(a[b]);console.log.apply(console,a)}function hd(a){return Ac(L(a))}function id(a,b,c){Ya(["string:!string","regex:!string","replacement:!string"],arguments);return a.replace(new RegExp(b,"g"),c)}
function jd(a,b,c){Ya(["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);this.w().assert("send_pixel",a);var d=this.A();G(a,function(){b instanceof y&&b.wa(d)},function(){c instanceof y&&c.wa(d)})}function kd(a,b,c,d){var e=this;Ya(["name:!string","value:?string","options:?Map","encode:?boolean"],arguments);var f=c?cb(c):void 0;return Ic(a,b,f,d,function(a,b){return e.w().assert("set_cookies",a,b)})}
function ld(a,b,c){Ya(["path:!string","value:?*","overrideExisting:?boolean"],arguments);this.w().assert("access_globals","readwrite",a);var d=a.split("."),e=A,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=cb(b),!0):!1}
function Sc(a){Ya(["path:!string"],arguments);this.w().assert("access_globals","readwrite",a);var b=od(a),c=a.split(".").pop(),d=b[c];void 0===d&&(d=[],b[c]=d);return db(function(){if(!Aa(d.push))throw Error("Object at "+a+" in window is not an array.");pd(arguments);d.push.apply(d,Array.prototype.slice.call(arguments,0))})}
function Tc(a,b){Ya(["functionPath:!string","arrayPath:!string"],arguments);this.w().assert("access_globals","readwrite",a);this.w().assert("access_globals","readwrite",b);var c=od(a),d=a.split(".").pop(),e=c[d];if(e&&!Aa(e))return null;if(e){var f=e;e=function(){pd(arguments);f.apply(f,Array.prototype.slice.call(arguments,0))};return db(e)}var h;e=function(){if(!Aa(h.push))throw Error("Object at "+b+" in window is not an array.");h.push.call(h,arguments)};c[d]=e;var k=od(b),l=b.split(".").pop();
h=k[l];void 0===h&&(h=[],k[l]=h);return db(function(){pd(arguments);e.apply(e,Array.prototype.slice.call(arguments,0))})}function pd(a){for(var b=0;b<a.length;b++){var c=a[b];c&&ma(c)&&Object.defineProperty(c,"gtm",{value:{fromContainer:!0}})}}function od(a){for(var b=a.split("."),c=A,d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c)throw Error("Path "+a+" does not exist.");return c}
function gd(a,b){Ya(["permission:!string"],[a]);for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;++d)c[d]=cb(c[d]);try{return this.w().assert.apply(null,c),!0}catch(e){return!1}}function Uc(a){Ya(["uri:!string"],arguments);return encodeURI(a)}function Vc(a){Ya(["uri:!string"],arguments);return encodeURIComponent(a)};
var qd=[],rd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},sd=function(a){return rd[a]},td=/[\x00\x22\x26\x27\x3c\x3e]/g;var xd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,yd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},zd=function(a){return yd[a]};qd[7]=function(a){return String(a).replace(xd,zd)};
qd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(xd,zd)+"'"}};var Fd=/['()]/g,Gd=function(a){return"%"+a.charCodeAt(0).toString(16)};qd[12]=function(a){var b=
encodeURIComponent(String(a));Fd.lastIndex=0;return Fd.test(b)?b.replace(Fd,Gd):b};var Hd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Id={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Jd=function(a){return Id[a]};qd[16]=function(a){return a};var Ld,Md=[],Nd=[],Od=[],Pd=[],Qd=[],Rd={},Sd,Td,Ud,Vd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Wd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Rd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[d?f:f.substr(4)]=a[f]);return d?Rd[c](e):Ld(c,e,b)},Yd=function(a,b,c,d){c=c||[];d=d||ya;var e={},f;for(f in a)a.hasOwnProperty(f)&&(e[f]=Xd(a[f],b,c,d));
return e},Zd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Rd[b];return c?c.b||0:0},Xd=function(a,b,c,d){if(x(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var f=1;f<a.length;f++)e.push(Xd(a[f],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Md[h];if(!k||b(k))return;c[h]=!0;try{var l=Yd(k,b,c,d);e=Wd(l,d);Ud&&(e=Ud.Uf(e,l))}catch(F){d(F,h),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Xd(a[m],b,c,d)]=Xd(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,q=1;q<a.length;q++){var r=Xd(a[q],b,c,d);Td&&(n=n||r===Td.Hb);e.push(r)}return Td&&n?Td.Vf(e):e.join("");case "escape":e=Xd(a[1],b,c,d);if(Td&&x(a[1])&&"macro"===a[1][0]&&Td.yg(a))return Td.Og(e);e=String(e);for(var u=2;u<a.length;u++)qd[a[u]]&&(e=qd[a[u]](e));return e;case "tag":var w=a[1];if(!Pd[w])throw Error("Unable to resolve tag reference "+w+".");return e={ae:a[2],index:w};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};
v["function"]=a[1];var B=$d(v,b,c,d);a[4]&&(B=!B);return B;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},$d=function(a,b,c,d){try{return Sd(Yd(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var ae=null,de=function(a,b){function c(a){for(var b=0;b<a.length;b++)e[a[b]]=!0}var d=[],e=[];ae=be(a,b||function(){});for(var f=0;f<Nd.length;f++){var h=Nd[f],k=ce(h);if(k){for(var l=h.add||[],m=0;m<l.length;m++)d[l[m]]=!0;c(h.block||[])}else null===k&&c(h.block||[])}for(var n=[],q=0;q<Pd.length;q++)d[q]&&!e[q]&&(n[q]=!0);return n},ce=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ae(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],f=0;f<e.length;f++){var h=ae(e[f]);if(null===
h)return null;if(h)return!1}return!0},be=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=$d(Od[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ee,fe=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Ef&&(h["fix_"+k]=!0),h.be=h.be||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=q.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,J:b.J,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||f.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],J:d,tb:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},r=function(){for(var b in l)if(l[b].test(a)){var c=q[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.be&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.qe=function(){return this[this.length-1]};d.Xc=function(a){var b=this.qe();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.Tf=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.tb=b.test(a.tagName)||a.tb);return a},f=r,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.Xc("TABLE")?(a="<TBODY>"+a,m()):h.Ah&&c.test(e)&&d.Tf(e)?d.Xc(e)?k():(a="</"+b.tagName+">"+a,m()):b.tb||d.push(b)},endTag:function(a){d.qe()?h.cg&&!d.Xc(a.tagName)?k():d.pop():h.cg&&(f(),m())}},m=function(){var b=a,c=e(f());a=b;if(c&&
l[c.type])l[c.type](c)};r=function(){m();return e(f())}}();return{append:function(b){a+=b},Ug:r,Gh:function(a){for(var b;(b=r())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},Hh:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.Nh="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Jh=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Oh=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.J){var d=a.J[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.tb?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.zh=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Jf=a.Jf||!b[h]&&h;ee=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function f(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(u){var b=[];c(a,function(a){b.push(a)});return b}}var k={tf:a,uf:a,vf:a,wf:a,Ff:a,Gf:function(a){return a},done:a,error:function(a){throw a;},Yg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function f(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,ub:d.defaultView||d.parentWindow,Ka:d,ac:ee("",{Ef:!0}),Fc:[b],dd:"",ed:d.createElement(b.nodeName),sb:[],za:[]});a(this.ed,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.za,arguments);for(var a;!this.Rb&&this.za.length;)a=this.za.shift(),"function"===typeof a?this.Nf(a):this.sd(a)};f.prototype.Nf=function(a){var b={type:"function",value:a.name||a.toString()};this.ad(b);a.call(this.ub,this.Ka);this.we(b)};
f.prototype.sd=function(a){this.ac.append(a);for(var b,c=[],d,e;(b=this.ac.Ug())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.ph(c);d&&this.kg(b);e&&this.lg(b)};f.prototype.ph=function(a){var b=this.Kf(a);b.Sd&&(b.Qc=this.dd+b.Sd,this.dd+=b.Sg,this.ed.innerHTML=b.Qc,this.mh())};f.prototype.Kf=function(a){var b=this.Fc.length,d=[],e=[],f=[];c(a,function(a){d.push(a.text);if(a.J){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.J.id&&"ps-style"!==a.J.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.tb?" />":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{Ph:a,raw:d.join(""),Sd:e.join(""),Sg:f.join("")}};f.prototype.mh=function(){for(var c,d=[this.ed];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.Fc[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");
f&&this.Fc[f].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};f.prototype.kg=function(a){var b=this.ac.clear();b&&this.za.unshift(b);a.src=a.J.src||a.J.sh;a.src&&this.sb.length?this.Rb=a:this.ad(a);var c=this;this.oh(a,function(){c.we(a)})};f.prototype.lg=function(a){var b=this.ac.clear();b&&this.za.unshift(b);a.type=a.J.type||a.J.th||"text/css";this.qh(a);b&&this.write()};f.prototype.qh=function(a){var b=this.Mf(a);this.vg(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.Ka.createTextNode(a.content)))};f.prototype.Mf=function(a){var b=this.Ka.createElement(a.tagName);b.setAttribute("type",a.type);d(a.J,function(a,c){b.setAttribute(a,c)});return b};f.prototype.vg=function(a){this.sd('<span id="ps-style"/>');var b=this.Ka.getElementById("ps-style");b.parentNode.replaceChild(a,b)};f.prototype.ad=function(a){a.Ig=this.za;this.za=[];this.sb.unshift(a)};f.prototype.we=function(a){a!==this.sb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.sb.shift(),this.write.apply(this,a.Ig),!this.sb.length&&this.Rb&&(this.ad(this.Rb),this.Rb=null))};f.prototype.oh=function(a,b){var c=this.Lf(a),d=this.gh(c),e=this.options.tf;a.src&&(c.src=a.src,this.dh(c,d?e:function(){b();e()}));try{this.ug(c),a.src&&!d||b()}catch(D){this.options.error(D),b()}};f.prototype.Lf=function(a){var b=this.Ka.createElement(a.tagName);d(a.J,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};f.prototype.ug=function(a){this.sd('<span id="ps-script"/>');
var b=this.Ka.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.dh=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};f.prototype.gh=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.Yg&&a.src&&a.hasAttribute("async"))};
return f}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.uf(),a.stream=c.apply(null,a),b.vf())}function c(c,f,k){function l(a){a=k.Gf(a);v.write(a);k.wf(a)}v=new n(c,k);v.id=d++;v.name=k.name||v.id;var m=c.ownerDocument,q={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var r=v.ub.onerror||a;v.ub.onerror=function(a,b,c){k.error({Dh:a+
" - "+b+":"+c});r.apply(v.ub,arguments)};v.write(f,function(){e(m,q);v.ub.onerror=r;k.done();v=null;b()});return v}var d=0,m=[],v=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=f(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Bh?c[0]:c;var h=[c,d,e];c.Ng={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.Ff(h);m.push(h);v||b();return c.Ng},{streams:{},Fh:m,uh:n})}();fe=l.postscribe}})();var O={},ge=null,he=Math.random();O.m="GTM-P9V444";O.Lb="170";var ie="www.googletagmanager.com/gtm.js";var je=ie,ke=null,le=null,me=null,ne="//www.googletagmanager.com/a?id="+O.m+"&cv=921",oe={},pe={},qe=function(){var a=ge.sequence||0;ge.sequence=a+1;return a};var P=function(a,b,c,d){return(2===re()||d||"http:"!=A.location.protocol?a:b)+c},re=function(){var a=mc(),b;if(1===a)a:{var c=je;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var se=!1;var ue=function(){var a=function(a){return{toString:function(){return a}}};return{wd:a("convert_case_to"),xd:a("convert_false_to"),yd:a("convert_null_to"),zd:a("convert_true_to"),Ad:a("convert_undefined_to"),Ga:a("function"),ff:a("instance_name"),hf:a("live_only"),jf:a("malware_disabled"),kf:a("once_per_event"),Od:a("once_per_load"),Pd:a("setup_tags"),lf:a("tag_id"),Qd:a("teardown_tags")}}();var ve=new Na,we={},Be={set:function(a,b){z(ye(a,b),we)},get:function(a){return Ae(a,2)},reset:function(){ve=new Na;we={}}},Ae=function(a,b){return 2!=b?ve.get(a):Ce(a)},Ce=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Ee(d)},Ee=function(a){for(var b=
we,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var He=function(a,b){ve.set(a,b);z(ye(a,b),we)},ye=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Ie=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Je={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ke={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var Me=function(a){var b=Ae("gtm.whitelist");var c=b&&Sa(Ka(b),Je),d=Ae("gtm.blacklist")||Ae("tagTypeBlacklist")||[];
Le()&&(d=Ka(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Sa(Ka(d),Ke),f={};return function(h){var k=h&&h[ue.Ga];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=pe[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>Ca(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Ca(c,l[q])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var r=!1;if(d){var u;if(!(u=0<=Ca(e,k)))a:{for(var w=l||[],v=new Na,
B=0;B<e.length;B++)v.set(e[B],!0);for(var F=0;F<w.length;F++)if(v.get(w[F])){u=!0;break a}u=!1}r=u}return f[k]=!m||r}},Le=function(){return Ie.test(A.location&&A.location.hostname)};var Oe=function(a){return function(b,c){if(Ba(c))a(b,c);else{b instanceof Ne||(b=new Ne(b));var d=b;c&&d.Lc.push(c);throw d;}}},Ne=function(a){this.Hg=a;this.Lc=[]};na(Ne,Error);var Pe={Uf:function(a,b){b[ue.wd]&&"string"===typeof a&&(a=1==b[ue.wd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ue.yd)&&null===a&&(a=b[ue.yd]);b.hasOwnProperty(ue.Ad)&&void 0===a&&(a=b[ue.Ad]);b.hasOwnProperty(ue.zd)&&!0===a&&(a=b[ue.zd]);b.hasOwnProperty(ue.xd)&&!1===a&&(a=b[ue.xd]);return a}};var Qe=function(a,b,c){this.Mg=a;this.Jg=b;this.Dg=c};na(Qe,Error);Qe.prototype.getParameters=function(){return this.Jg};var Re={active:!0,isWhitelisted:function(){return!0}},Se=function(a){var b=ge.zones;!b&&a&&(b=ge.zones=a());return b};var Te=!1,Ue=0,Ve=[];function We(a){if(!Te){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Te=!0;for(var e=0;e<Ve.length;e++)H(Ve[e])}Ve.push=function(){for(var a=0;a<arguments.length;a++)H(arguments[a]);return 0}}}function Xe(){if(!Te&&140>Ue){Ue++;try{C.documentElement.doScroll("left"),We()}catch(a){A.setTimeout(Xe,50)}}}var Ye=function(a){Te?a():Ve.push(a)};var Ze=function(){function a(a){return!Ba(a)||0>a?0:a}if(!ge._li&&A.performance&&A.performance.timing){var b=A.performance.timing.navigationStart,c=Ba(Be.get("gtm.start"))?Be.get("gtm.start"):0;ge._li={cst:a(c-b),cbt:a(le-b)}}};var $e=!1,af=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]},bf=!1;var cf=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(!A[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);A[b]=c}Ze();return A[b]},df=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=af();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ff=function(){},ef=function(){return A.GoogleAnalyticsObject||"ga"},gf=!1;var of=function(a){};function nf(a,b,c){b.containerId=O.m;var d={type:a,value:b};c.length&&(d.trace=c);return d};
var pf=function(){return"&tc="+Pd.filter(function(a){return a}).length},yf=function(){qf&&(A.clearTimeout(qf),qf=void 0);void 0===rf||sf[rf]&&!tf||(uf[rf]||vf.zg()||0>=wf--?uf[rf]=!0:(vf.Wg(),G(xf()),sf[rf]=!0,tf=""))},xf=function(){var a=rf;return void 0===a?"":[zf,sf[a]?"":"&es=1",Af[a],pf(),tf,"&z=0"].join("")},Bf=function(){return[ne,"&v=3&t=t","&pid="+Fa(),"&rv="+O.Lb].join("")},Cf="0.005000">Math.random(),zf=Bf(),Df=function(){zf=Bf()},sf={},tf="",rf=void 0,Af={},uf={},qf=void 0,
vf=function(a,b){var c=0,d=0;return{zg:function(){if(c<a)return!1;Ma()-d>=b&&(c=0);return c>=a},Wg:function(){Ma()-d>=b&&(c=0);c++;d=Ma()}}}(2,1E3),wf=1E3,Ef=function(a,b){if(Cf&&!uf[a]&&rf!==a){yf();rf=a;tf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Af[a]="&e="+c+"&eid="+a;qf||(qf=A.setTimeout(yf,500))}},Ff=function(a,b,c){if(Cf&&!uf[a]&&b){a!==rf&&(yf(),rf=a);var d=c+String(b[ue.Ga]||"").replace(/_/g,"");tf=tf?tf+"."+d:"&tr="+d;qf||(qf=A.setTimeout(yf,500));2022<=xf().length&&yf()}};
function Gf(a,b,c,d,e,f){var h=Pd[a],k=Hf(a,b,c,d,e,f);if(!k)return null;var l=Xd(h[ue.Pd],f.qa,[],ya);if(l&&l.length){var m=l[0];k=Gf(m.index,b,k,1===m.ae?e:k,e,f)}return k}
function Hf(a,b,c,d,e,f){function h(){if(k[ue.jf])d();else{var b=Yd(k,f.qa,[],Oe(function(a){of(a)})),e=!1;b.vtp_gtmOnSuccess=function(){if(!e){e=!0;Ff(f.id,Pd[a],"5");c()}};b.vtp_gtmOnFailure=function(){if(!e){e=!0;Ff(f.id,Pd[a],"6");d()}};b.vtp_gtmTagId=k.tag_id;Ff(f.id,k,"1");var h=
!1,l=function(a,b){if(!h){a instanceof Ne||(a=new Ne(a));var c=a;b&&c.Lc.push(b);throw c;}of(a);Ff(f.id,k,"7");e||(e=!0,d())};try{Wd(b,l)}catch(J){try{h=!0,l(J)}catch(V){}}}}var k=Pd[a];if(f.qa(k))return null;var l=Xd(k[ue.Qd],f.qa,[],ya);if(l&&l.length){var m=l[0],n=Gf(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.ae?e:n}if(k[ue.Od]||k[ue.kf]){var q=k[ue.Od]?Qd:b,r=c,u=d;if(!q[a]){h=Pa(h);var w=If(a,q,h);c=w.ca;d=w.Na}return function(){q[a](r,
u)}}return h}function If(a,b,c){var d=[],e=[];b[a]=Jf(d,e,c);return{ca:function(){b[a]=Kf;for(var c=0;c<d.length;c++)d[c]()},Na:function(){b[a]=Lf;for(var c=0;c<e.length;c++)e[c]()}}}function Jf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Kf(a){a()}function Lf(a,b){b()};function Mf(a){var b=0,c=0,d=!1;return{add:function(){c++;return Pa(function(){b++;d&&b>=c&&a()})},Cf:function(){d=!0;b>=c&&a()}}}var Pf=function(a){for(var b=Mf(a.callback),c=[],d=[],e=0;e<Pd.length;e++)if(a.qb[e]){var f=Pd[e];var h=b.add();try{var k=Gf(e,c,h,h,h,a);k?d.push({Ie:e,b:Zd(f),T:k}):(Nf(e,a),h())}catch(m){h()}}b.Cf();d.sort(Of);for(var l=0;l<d.length;l++)d[l].T();return 0<d.length};
function Of(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ie,k=b.Ie;f=h>k?1:h<k?-1:0}return f}function Nf(a,b){if(!Cf)return;var c=function(a){var d=b.qa(Pd[a])?"3":"4",f=Xd(Pd[a][ue.Pd],b.qa,[],ya);f&&f.length&&c(f[0].index);Ff(b.id,Pd[a],d);var h=Xd(Pd[a][ue.Qd],b.qa,[],ya);h&&h.length&&c(h[0].index)};c(a);}
var Qf=!1,Rf=function(a,b,c,d){if("gtm.js"==b){if(Qf)return!1;Qf=!0}Ef(a,b);var e=Me(c),f={id:a,name:b,callback:d||ya,qa:e,qb:[]};f.qb=de(e,Oe(function(a){of(a)}));var h=Pf(f);"gtm.js"!==b&&"gtm.sync"!==b||ff();if(!h)return h;for(var k={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},l=0;l<f.qb.length;l++)if(f.qb[l]){var m=
Pd[l];if(m&&!k[m[ue.Ga]])return!0}return!1};var Q={oc:"event_callback",sc:"event_timeout"};var Tf={},Vf=function(a){var b=O.m;return function(){var c=arguments[0];if(c&&(Tf[c]||Tf.all)){var d=a.apply(void 0,Array.prototype.slice.call(arguments,0));Tf[c]&&Uf(b,c,Tf[c],d);Tf.all&&Uf(b,c,Tf.all,d)}}};
function Uf(a,b,c,d){for(var e=0;e<c.length;e++){var f=void 0,h="An in-page policy denied the permission request";try{f=c[e].call(void 0,a,b,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new Qe(b,{},h);}};var Wf=/[A-Z]+/,Xf=/\s/,Yf=function(a){if(t(a)&&(a=a.trim(),!Xf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Wf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],oa:d}}}}},$f=function(a){for(var b={},c=0;c<a.length;++c){var d=Yf(a[c]);d&&(b[d.id]=d)}Zf(b);var e=[];Ha(b,function(a,b){e.push(b)});return e};
function Zf(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.oa[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var ag=null,bg={},cg={},dg,eg=function(a,b){var c={event:a};b&&(c.eventModel=z(b),b[Q.oc]&&(c.eventCallback=b[Q.oc]),b[Q.sc]&&(c.eventTimeout=b[Q.sc]));return c};
var jg={config:function(a){},event:function(a){var b=a[1];if(t(b)&&!(3<a.length)){var c;if(2<a.length){if(!bb(a[2]))return;
c=a[2]}var d=eg(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];c&&ma(c)&&c.gtm&&c.gtm.fromContainer||(Tf[b]||(Tf[b]=[]),Tf[b].push(c))}},set:function(a){var b;2==a.length&&bb(a[1])?b=z(a[1]):3==a.length&&t(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=z(b),b.event="gtag.set",b._clear=!0,b}};var og=!1,pg=[];function qg(){if(!og){og=!0;for(var a=0;a<pg.length;a++)H(pg[a])}};var rg=[],sg=!1;function tg(a){var b=a.eventCallback,c=Pa(function(){Aa(b)&&H(function(){b(O.m)})}),d=a.eventTimeout;d&&A.setTimeout(c,Number(d));return c}
var ug=function(a){return A["dataLayer"].push(a)},wg=function(a){var b=a._clear;Ha(a,function(a,c){"_clear"!==a&&(b&&He(a,void 0),He(a,c))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=qe(),a["gtm.uniqueEventId"]=d,He("gtm.uniqueEventId",d));me=c;var e=vg(a);me=null;if(!ke){ke=a["gtm.start"];}return e};
function vg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=ge.zones;d=e?e.checkState(O.m,c):Re;if(!d.active)return!1;var f=tg(a);return Rf(c,b,d.isWhitelisted,f)?!0:!1}
var xg=function(){for(var a=!1;!sg&&0<rg.length;){sg=!0;delete we.eventModel;var b=rg.shift();if(Aa(b))try{b.call(Be)}catch(m){}else if(x(b)){var c=b;if(t(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Ae(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(m){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&t(b[0])){var l=jg[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){sg=!1;continue}}a=
wg(b)||a}sg=!1}return!a},yg=function(){var a=xg();try{var b=O.m,c=A["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(f){}return a},zg=function(){var a=jc("dataLayer",[]),b=jc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ve.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});pg.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});
var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(rg.push.apply(rg,b);300<this.length;)this.shift();return xg()};rg.push.apply(rg,a.slice(0));H(yg)};var Bg=function(a){return Ag?C.querySelectorAll(a):null},Cg=function(a,b){if(!Ag)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Dg=!1;if(C.querySelectorAll)try{var Eg=C.querySelectorAll(":root");Eg&&1==Eg.length&&Eg[0]==C.documentElement&&(Dg=!0)}catch(a){}var Ag=Dg;var Fg;var ch={};ch.Hb=new String("undefined");
var dh=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ch.Hb?b:a[d]);return c.join("")}};dh.prototype.toString=function(){return this.resolve("undefined")};dh.prototype.valueOf=dh.prototype.toString;ch.nf=dh;ch.Dc={};ch.Vf=function(a){return new dh(a)};var eh={};ch.Xg=function(a,b){var c=qe();eh[c]=[a,b];return c};ch.Yd=function(a){var b=a?0:1;return function(a){var c=eh[a];if(c&&"function"===typeof c[b])c[b]();eh[a]=void 0}};ch.yg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};ch.Og=function(a){if(a===ch.Hb)return a;var b=qe();ch.Dc[b]=a;return'google_tag_manager["'+O.m+'"].macro('+b+")"};ch.Cg=function(a,b,c){a instanceof ch.nf&&(a=a.resolve(ch.Xg(b,c)),b=ya);return{Qc:a,ca:b}};var fh=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||qc(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},gh=function(a){ge.hasOwnProperty("autoEventsSettings")||(ge.autoEventsSettings={});var b=ge.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
hh=function(a,b,c,d){var e=gh(a),f=Oa(e,b,d);e[b]=c(f)},ih=function(a,b,c){var d=gh(a);return Oa(d,b,c)};var jh=function(){for(var a=hc.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=A.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ma()/1E3)].join(".")},mh=function(a,b,c,d){var e=kh(b);return Ec(a,e,lh(c),d)},nh=function(a,b,c,d){var e=""+kh(c),f=lh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},kh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},lh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var oh=["1"],ph={},sh=function(a,b,c){var d=qh(a);if(!ph[d]&&!rh(d,b,c)){var e=jh(),f=nh(e,"1",b,c);Jc(d,f,c,b,new Date(Ma()+7776E6));rh(d,b,c)}};function rh(a,b,c){var d=mh(a,b,c,oh);d&&(ph[a]=d);return d}function qh(a){return(a||"_gcl")+"_au"};var th=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({md:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].md]||(f[a[h].md]=[]),f[a[h].md].push({timestamp:k[1],fg:k[2]}))}return f};function uh(){for(var a=vh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function wh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var vh,xh,yh=function(a){vh=vh||wh();xh=xh||uh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(vh[l],vh[m],vh[n],vh[q])}return b.join("")},zh=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=xh[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}vh=vh||wh();xh=xh||
uh();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ah;function Bh(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Ch=function(){var a=jc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Dh=/(.*?)\*(.*?)\*(.*)/,Eh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Fh=/^(?:www\.|m\.|amp\.)+/,Gh=/([^?#]+)(\?[^#]*)?(#.*)?/,Hh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Jh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(yh(String(d))))}var e=b.join("*");return["1",Ih(e),e].join("*")},Ih=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ah)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ah=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ah[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Lh=function(){return function(a){var b=L(A.location.href),c=b.search.replace("?",""),d=xc(c,"_gl",!1,!0)||"";a.query=Kh(d)||{};var e=I(b,"fragment").match(Hh);a.fragment=Kh(e&&e[3]||
"")||{}}},Kh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Dh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Ih(k,n)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=zh(r[u+1]);return q}}}}catch(w){}};
function Mh(a,b,c){function d(a){var b=a,c=Hh.exec(b),d=b;if(c){var e=c[2],f=c[4];d=c[1];f&&(d=d+e+f)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=Gh.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Nh(a,b,c){for(var d={},e={},f=Ch().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&Bh(k.domains,b)&&(k.fragment?Qa(e,k.callback()):Qa(d,k.callback()))}if(Ra(d)){var l=Jh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,r=0;r<n.length;r++){var u=n[r];if("_gl"===u.name){u.setAttribute("value",l);q=!0;break}}if(!q){var w=C.createElement("input");w.setAttribute("type","hidden");w.setAttribute("name","_gl");w.setAttribute("value",
l);a.appendChild(w)}}else if("post"===m){var v=Mh(l,a.action);vc.test(v)&&(a.action=v)}}}else Oh(l,a,!1)}if(!c&&Ra(e)){var B=Jh(e);Oh(B,a,!0)}}function Oh(a,b,c){if(b.href){var d=Mh(a,b.href,void 0===c?!1:c);vc.test(d)&&(b.href=d)}}
var Ph=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Nh(e,e.hostname,!1)}}catch(h){}},Qh=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=I(L(b.action),"host");Nh(b,c,!0)}}catch(d){}},Rh=function(a,b,c,d){var e=Ch();e.init||(oc(C,"mousedown",Ph),oc(C,"keyup",Ph),oc(C,"submit",Qh),e.init=!0);var f={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};Ch().decorators.push(f)},Sh=function(){var a=C.location.hostname,b=Eh.exec(C.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Fh,"")===e.replace(Fh,"")},Th=function(a,b){return!1===a?!1:a||b||Sh()};var Uh=/^\w+$/,Vh=/^[\w-]+$/,Wh=/^~?[\w-]+$/,Xh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"},Zh=function(a){var b=Bc(a,C.cookie),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return Yh(c)};function $h(a){return a&&"string"==typeof a&&a.match(Uh)?a:"_gcl"}
var ai=function(a){if(a){if("string"==typeof a){var b=$h(a);return{dc:b,aw:b,gf:b,ha:b}}if(a&&"object"==typeof a)return{dc:$h(a.dc),aw:$h(a.aw),gf:$h(a.gf),ha:$h(a.ha)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl",ha:"_gcl"}},ci=function(){var a=L(A.location.href),b=I(a,"query",!1,void 0,"gclid"),c=I(a,"query",!1,void 0,"gclsrc"),d=I(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||xc(e,"gclid",!1,void 0);c=c||xc(e,"gclsrc",!1,void 0)}return bi(b,c,d)};
function bi(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(Vh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function di(a,b){function c(a,b){var c=ei(a,d);c&&Jc(c,b,f,e,k,!0)}b=b||{};var d=ai(b.prefix),e=b.domain||"auto",f=b.path||"/",h=Ma(),k=new Date(h+7776E6),l=Math.round(h/1E3),m=function(a){return["GCL",l,a].join(".")};a.aw&&(!0===b.Rh?c("aw",m("~"+a.aw[0])):c("aw",m(a.aw[0])));a.dc&&c("dc",m(a.dc[0]));a.gf&&c("gf",m(a.gf[0]));a.ha&&c("ha",m(a.ha[0]))}
var ei=function(a,b){var c=Xh[a];if(void 0!==c){var d=b[a];if(void 0!==d)return d+c}},fi=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)},gi=function(a,b,c,d,e){if(x(b)){var f=ai(e);Rh(function(){for(var b={},c=0;c<a.length;++c){var d=ei(a[c],f);if(d){var e=Bc(d,C.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},Yh=function(a){return a.filter(function(a){return Wh.test(a)})};var hi=/^\d+\.fls\.doubleclick\.net$/;function ii(a){var b=L(A.location.href),c=I(b,"host",!1);if(c&&c.match(hi)){var d=I(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var ji=function(a){var b=ii("gclaw");if(b)return b.split(".");var c=ai(a);if("_gcl"==c.aw){var d=ci().aw||[];if(0<d.length)return d}var e=ei("aw",c);return e?Zh(e):[]},ki=function(a){var b=ii("gcldc");if(b)return b.split(".");var c=ai(a);if("_gcl"==c.dc){var d=ci().dc||[];if(0<d.length)return d}var e=ei("dc",c);return e?Zh(e):[]},li=function(a){var b=ai(a);if("_gcl"==b.ha){var c=ci().ha||[];if(0<c.length)return c}return Zh(b.ha+"_ha")},mi=function(){var a=ii("gac");if(a)return decodeURIComponent(a);
var b=th(),c=[];Ha(b,function(a,b){for(var d=[],e=0;e<b.length;e++)d.push(b[e].fg);d=Yh(d);d.length&&c.push(a+":"+d.join(","))});return c.join(";")},ni=function(a,b,c){sh(a,b,c);var d=ph[qh(a)],e=ci().dc||[];if(d&&0<e.length){var f=ge.joined_au=ge.joined_au||{},h=a||"_gcl";if(!f[h]){for(var k=!1,l=0;l<e.length;l++){var m="https://adservice.google.com/ddm/regclk",n=m+="?gclid="+e[l]+"&auiddc="+d;hc.sendBeacon&&hc.sendBeacon(n)||G(n);k=!0}if(k){var q=qh(a);if(ph[q]){var r=nh(ph[q],"1",b,c);Jc(q,r,c,b,new Date(Ma()+
7776E6))}f[h]=!0}}}};var oi=function(){return!1};var pi;if(3===O.Lb.length)pi="g";else{var qi="G";pi=qi}
var ri={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:pi},si=function(a){var b=O.m.split("-"),c=b[0].toUpperCase(),d=ri[c]||"i",e=a&&"GTM"===c?b[1]:"",f;if(3===O.Lb.length){var h=void 0;f="2"+(h||"w")}else f="";return f+d+O.Lb+e};
var ti=function(a){return!(void 0===a||null===a||0===(a+"").length)},ui=function(a,b){var c;if(2===b.O)return a("ord",Fa(1E11,1E13)),!0;if(3===b.O)return a("ord","1"),a("num",Fa(1E11,1E13)),!0;if(4===b.O)return ti(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.O)c="1";else if(6===b.O)c=b.Ae;else return!1;ti(c)&&a("qty",c);ti(b.Jc)&&a("cost",b.Jc);ti(b.od)&&a("ord",b.od);return!0},vi=encodeURIComponent,wi=function(a,b){function c(a,b,c){f.hasOwnProperty(a)||(b+="",e+=";"+a+"="+(c?b:vi(b)))}var d=a.Oc,
e=a.protocol;e+=a.cc?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+vi(d)+(";type="+vi(a.Pc))+(";cat="+vi(a.ib));var f=a.Xf||{};Ha(f,function(a,b){e+=";"+vi(a)+"="+vi(b+"")});if(ui(c,a)){ti(a.qd)&&c("u",a.qd);ti(a.tran)&&c("tran",a.tran);c("gtm",si());!1===a.xf&&c("npa","1");if(a.Ic){var h=ki(a.Ja);h&&h.length&&c("gcldc",h.join("."));var k=ji(a.Ja);k&&k.length&&c("gclaw",k.join("."));var l=mi();l&&c("gac",l);sh(a.Ja);var m=ph[qh(a.Ja)];m&&c("auiddc",m)}ti(a.bd)&&
c("prd",a.bd,!0);Ha(a.rd,function(a,b){c(a,b)});e+=b||"";ti(a.$b)&&c("~oref",a.$b);a.cc?nc(e+"?",a.ca):G(e+"?",a.ca,a.Na)}else H(a.Na)};var zi=!!A.MutationObserver,Ai=void 0,Bi=function(a){if(!Ai){var b=function(){var a=C.body;if(a)if(zi)(new MutationObserver(function(){for(var a=0;a<Ai.length;a++)H(Ai[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;oc(a,"DOMNodeInserted",function(){b||(b=!0,H(function(){b=!1;for(var a=0;a<Ai.length;a++)H(Ai[a])}))})}};Ai=[];C.body?b():H(b)}Ai.push(a)};
var Ii=function(){var a=C.body,b=C.documentElement||a&&a.parentElement,c,d;if(C.compatMode&&"BackCompat"!==C.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(a,b){return a&&b?Math.min(a,b):Math.max(a,b)};c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Ji=function(a){var b=Ii(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Ki=function(a){if(C.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!A.getComputedStyle)return!0;var c=A.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=A.getComputedStyle(d,null))}return!1};var Li=[],Mi=!(!A.IntersectionObserver||!A.IntersectionObserverEntry),Ni=function(a,b,c){for(var d=new A.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Li.length;f++)if(!Li[f])return Li[f]=d,f;return Li.push(d)-1},Oi=function(a,b,c){function d(b,c){var d={top:0,bottom:0,right:0,left:0,width:0,height:0},e={boundingClientRect:b.getBoundingClientRect(),
intersectionRatio:c,intersectionRect:d,isIntersecting:0<c,rootBounds:d,target:b,time:Ma()};H(function(){return a(e)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(a,b){return a-b});return function(){for(var a=0;a<b.length;a++){var h=Ji(b[a]);if(h>e[a])for(;f[a]<c.length-1&&h>=c[f[a]+1];)d(b[a],h),f[a]++;else if(h<e[a])for(;0<=f[a]&&h<=c[f[a]];)d(b[a],h),f[a]--;e[a]=h}}},Pi=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Mi){var e=!1;H(function(){e||
Oi(a,b,c)()});return Ni(function(b){e=!0;for(var c={Xa:0};c.Xa<b.length;c={Xa:c.Xa},c.Xa++)H(function(c){return function(){return a(b[c.Xa])}}(c))},b,c)}return A.setInterval(Oi(a,b,c),1E3)},Qi=function(a){Mi?0<=a&&a<Li.length&&Li[a]&&(Li[a].disconnect(),Li[a]=void 0):A.clearInterval(a)};var Si=A.clearTimeout,Ti=A.setTimeout,S=function(a,b,c){if(oi()){b&&H(b)}else return lc(a,b,c)},Ui=function(){return new Date},Vi=function(){return A.location.href},Wi=function(a){return I(L(a),"fragment")},U=function(a,b){return Ae(a,b||2)},Xi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return ug(a)},Yi=function(a,b){A[a]=b},W=function(a,b,c){b&&(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},Zi=
function(a,b,c){return Bc(a,b,void 0===c?!0:!!c)},$i=function(a,b,c){var d={prefix:a,path:b,domain:c},e=ci();di(e,d)},aj=function(a,b,c,d){var e=Lh(),f=Ch();f.data||(f.data={query:{},fragment:{}},e(f.data));var h={},k=f.data;k&&(Qa(h,k.query),Qa(h,k.fragment));for(var l=ai(b),m=0;m<a.length;++m){var n=a[m];if(void 0!==Xh[n]){var q=ei(n,l),r=h[q];if(r){var u=Math.min(fi(r),Ma()),w;b:{for(var v=u,B=Bc(q,C.cookie),F=0;F<B.length;++F)if(fi(B[F])>v){w=!0;break b}w=
!1}w||Jc(q,r,c,d,new Date(u+7776E6),!0)}}}var D={prefix:b,path:c,domain:d};di(bi(h.gclid,h.gclsrc),D);},bj=function(a,b,c,d,e){gi(a,b,c,d,e);},cj=function(){return Ag},dj=function(a,b){if(oi()){b&&H(b)}else nc(a,b)},ej=function(a){return!!ih(a,"init",!1)},fj=function(a){gh(a).init=!0},gj=function(a,
b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":je;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&Ha(b,function(a,b){b&&(d+="&"+a+"="+encodeURIComponent(b))});S(P("https://","http://",d))};
var ij=ch.Cg;var jj=new Na;function kj(a,b){function c(a){var b=L(a),c=I(b,"protocol"),d=I(b,"host",!0),e=I(b,"port"),f=I(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function lj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&x(c)){for(var d=0;d<c.length;d++)if(lj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=Ca(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var r=a.ignore_case?"i":void 0;try{var u=String(c)+r,w=jj.get(u);w||(w=new RegExp(c,r),jj.set(u,w));q=w.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return kj(b,c)}return!1};function mj(a,b){Ya(["key:!string","dataLayerVersion:?number"],arguments);this.w().assert("read_data_layer",a);return db(Ae(a,b||2))}function nj(){return(new Date).getTime()}function oj(a){return Ia(cb(a))}function pj(a){return null===a?"null":void 0===a?"undefined":a.toString()}function qj(a,b){Ya(["min:!number","max:!number"],arguments);return Fa(a,b)}
function rj(a,b,c){Ya(["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);for(var d=new Va,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof Va&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var sj=function(){var a=new gc,b=Mc();oi()&&(b.injectScript=ya,b.injectHiddenIframe=ya);a.addAll({callLater:b.callLater,copyFromDataLayer:mj,copyFromWindow:b.copyFromWindow,createQueue:b.createQueue,createArgumentsQueue:b.createArgumentsQueue,encodeUri:b.encodeURI,encodeUriComponent:b.encodeURIComponent,generateRandom:qj,getCookieValues:b.getCookieValues,getQueryParameters:b.getQueryParameters,getReferrerQueryParameters:b.getReferrerQueryParameters,getReferrerUrl:b.getReferrerUrl,getTimestamp:nj,
getUrl:b.getUrl,injectHiddenIframe:b.injectHiddenIframe,injectScript:b.injectScript,logToConsole:b.logToConsole,makeInteger:oj,makeString:pj,makeTableMap:rj,queryPermission:b.queryPermission,sendPixel:b.sendPixel,setCookie:b.setCookie,setInWindow:b.setInWindow});return function(b){return a.get(b)}};var tj;function uj(){var a=data.runtime||[],b=data.runtime_lines;tj=new Oc;Ld=function(a,b,c){vj(b);var d=new Va;Ha(b,function(a,b){d.set(a,db(b))});tj.X(c);var e=tj.T([a,d]);tj.X(void 0);e instanceof oa&&"return"===e.I&&(e=e.getData());return cb(e)};Nc(tj,sj());for(var c=0;c<a.length;c++){var d=a[c];if(!x(d)||3>d.length){if(0===d.length)continue;break}b&&wj(d,b[c]);tj.T(d)}}
function wj(a,b){if(x(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)wj(a[c],b[c])}}function vj(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Aa(b)&&(a.gtmOnSuccess=function(){H(b)});Aa(c)&&(a.gtmOnFailure=function(){H(c)})}
function xj(a){var b={},c=function(a){throw yj(a,{},"The requested permission is not configured.");};tj.Ta(c);tj.Ua(Vf(function(){var a=arguments[0];return a&&b[a]?b[a].apply(void 0,Array.prototype.slice.call(arguments,0)):{}}));Ha(a,function(a,e){var d=!1;Ha(e,function(c,e){d=!0;var f,h=Vd(c,e);h.vtp_permissionName=c;h.vtp_createPermissionError=yj;f=Wd(h);tj.Nb(a,c,f.assert);b[c]||(b[c]=f.R)});d||tj.Nb(a,"default",c)})}function yj(a,b,c){return new Qe(a,b,c)};var Aj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Bj=encodeURI,Y=encodeURIComponent,Cj=function(a,b){if(!a)return!1;var c=I(L(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};var Dj=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var nk=function(a,b,c){this.n=a;this.t=b;this.p=c},ok=function(){this.c=1;this.e=[];this.p=null};function pk(a){var b=ge,c=b.gss=b.gss||{};return c[a]=c[a]||new ok}var qk=function(a,b){pk(a).p=b},rk=function(a,b,c){var d=Math.floor(Ma()/1E3);pk(a).e.push(new nk(b,d,c))},sk=function(a){};var uk=function(){var a=A.gaGlobal=A.gaGlobal||{};a.hid=a.hid||Fa();return a.hid};var Jk=window,Kk=document,Lk=function(a){var b=Jk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Jk["ga-disable-"+a])return!0;try{var c=Jk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Bc("AMP_TOKEN",Kk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var Rk=function(a){if(1===pk(a).c){pk(a).c=2;var b=encodeURIComponent(a);lc(("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Tk=function(a,b){},Sk=function(a,b){};
var Z={a:{}};Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.b=0})(function(){return"921"})}();
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(a){for(var b=[],c=a.split(","),d=0;d<c.length;d++){var e=Number(c[d]);if(isNaN(e))return[];m.test(c[d])||b.push(e)}return b}function c(){var a=0,b=0;return function(){var c=Ii(),d=c.height;a=Math.max(w.scrollLeft+c.width,a);b=Math.max(w.scrollTop+d,b);return{Zf:a,$f:b}}}function d(){r=W("self");
u=r.document;w=u.scrollingElement||u.body&&u.body.parentNode;B=c()}function e(a,b,c,d){var e=l(b),f={},h;for(h in e){f.Aa=h;if(e.hasOwnProperty(f.Aa)){var k=Number(f.Aa);a<k||(Xi({event:"gtm.scrollDepth","gtm.scrollThreshold":k,"gtm.scrollUnits":c.toLowerCase(),"gtm.scrollDirection":d,"gtm.triggers":e[f.Aa].join(",")}),hh("sdl",b,function(a){return function(b){delete b[a.Aa];return b}}(f),{}))}f={Aa:f.Aa}}}function f(){var a=B(),b=a.Zf,c=a.$f,d=b/w.scrollWidth*100,f=c/w.scrollHeight*100;e(b,"horiz.pix",
n.Jb,q.Nd);e(d,"horiz.pct",n.Ib,q.Nd);e(c,"vert.pix",n.Jb,q.Rd);e(f,"vert.pct",n.Ib,q.Rd);gh("sdl").pending=!1}function h(){var b=250,c=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(b=50,c=!0);var d=0,e=!1,h=function(){e?d=Ti(h,b):(d=0,f(),ej("sdl")&&!a()&&(pc(r,"scroll",k),pc(r,"resize",k),gh("sdl").init=!1));e=!1},k=function(){c&&B();d?e=!0:(d=Ti(h,b),gh("sdl").pending=!0)};return k}function k(a,c,d){if(c){var e=b(String(a));hh("sdl",d,function(a){for(var b=0;b<e.length;b++){var d=
String(e[b]);a.hasOwnProperty(d)||(a[d]=[]);a[d].push(c)}return a},{})}}function l(a){return ih("sdl",a,{})}var m=/^\s*$/,n={Ib:"PERCENT",Jb:"PIXELS"},q={Rd:"vertical",Nd:"horizontal"},r,u,w,v=!1,B;(function(a){Z.__sdl=a;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.b=0})(function(b){H(b.vtp_gtmOnSuccess);var c=b.vtp_uniqueTriggerId,e=b.vtp_horizontalThresholdsPixels,l=b.vtp_horizontalThresholdsPercent,m=b.vtp_verticalThresholdUnits,q=b.vtp_verticalThresholdsPixels,u=b.vtp_verticalThresholdsPercent;switch(b.vtp_horizontalThresholdUnits){case n.Jb:k(e,
c,"horiz.pix");break;case n.Ib:k(l,c,"horiz.pct")}switch(m){case n.Jb:k(q,c,"vert.pix");break;case n.Ib:k(u,c,"vert.pct")}ej("sdl")?ih("sdl","pending")||(v||(d(),v=!0),H(function(){return f()})):(d(),v=!0,w&&(fj("sdl"),gh("sdl").pending=!0,H(function(){f();if(a()){var b=h();oc(r,"scroll",b);oc(r,"resize",b)}else gh("sdl").init=!1})))})}();
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;wi(a,c)}(function(a){Z.__flc=a;Z.__flc.g="flc";Z.__flc.h=!0;Z.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Dj(b.vtp_customVariable||[],"key","value")||{},e={ib:b.vtp_activityTag,Ic:c,Ja:b.vtp_conversionCookiePrefix||void 0,O:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Oc:b.vtp_advertiserId,Pc:b.vtp_groupTag,Na:b.vtp_gtmOnFailure,ca:b.vtp_gtmOnSuccess,$b:b.vtp_useImageTag?
void 0:b.vtp_url,protocol:"",cc:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,tran:b.vtp_transactionVariable,qd:b.vtp_userVariable,rd:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){S("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,W("google_attr").build([Dj(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Ze();S("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=W("google_trackConversion");if(Aa(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Dj(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:si()})||b()}else b()},b)})}();
Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.b=0})(function(a){return a.vtp_value})}();Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.b=0})(function(){return me})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.b=0})(function(a){var b=U("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?I(L(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ac(L(String(b))):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=fh(b,"gtm.click");Xi(d)}}(function(a){Z.__cl=a;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.b=0})(function(b){if(!ej("cl")){var c=W("document");oc(c,"click",a,!0);fj("cl")}H(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.b=0})(function(a){return Zi(a.vtp_name,U("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.fls=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;wi(a,c)}(function(a){Z.__fls=a;Z.__fls.g="fls";Z.__fls.h=!0;Z.__fls.b=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(a){a=a||[];for(var b=[],c=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],d=0;d<a.length;d++)for(var e=0;e<c.length;e++){var f=c[e],h=a[d][f[1]];void 0!==h&&b.push(f[0]+(d+1)+
":"+Y(h))}return b.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(U("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var h=e[f].split(":");h[1]=h[1]&&Y(h[1])||"";e[f]=h.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=Dj(b.vtp_customVariable||[],
"key","value")||{},m={ib:b.vtp_activityTag,Ic:k,Ja:b.vtp_conversionCookiePrefix||void 0,Jc:b.vtp_revenue,O:"ITEM_SOLD"===b.vtp_countingMethod?6:5,Oc:b.vtp_advertiserId,Pc:b.vtp_groupTag,Na:b.vtp_gtmOnFailure,ca:b.vtp_gtmOnSuccess,$b:b.vtp_useImageTag?void 0:b.vtp_url,bd:c,protocol:"",Ae:b.vtp_quantity,cc:!b.vtp_useImageTag,tran:b.vtp_transactionVariable,od:b.vtp_orderId,qd:b.vtp_userVariable,rd:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){S("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,W("google_attr").build([Dj(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.b=0})(function(a){return Fa(a.vtp_min,a.vtp_max)})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.g="u";Z.__u.h=!0;Z.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:U("gtm.url",1))||Vi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ac(L(String(c)));var e=L(String(c)),f;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=x(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=I(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){f=m;break a}}f=void 0}else f=I(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return f})}();Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},f={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;z(Dj(l.vtp_fieldsToSet,"fieldName","value"),e);z(Dj(l.vtp_contentGroup,"index","group"),f);z(Dj(l.vtp_dimension,"index","dimension"),h);z(Dj(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=z(l);b=z(b,m)}z(Dj(b.vtp_fieldsToSet,"fieldName","value"),e);z(Dj(b.vtp_contentGroup,
"index","group"),f);z(Dj(b.vtp_dimension,"index","dimension"),h);z(Dj(b.vtp_metric,"index","metric"),k);var n=cf(b.vtp_functionName);if(Aa(n)){var q="",r="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(r=b.vtp_trackerName,q=r+"."):(r="gtm"+qe(),q=r+".");var u={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];n.apply(window,b)},B=function(a,b){return void 0===b?b:a(b)},F=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&v("set",a+c,b[c])},D=function(){
var a=function(a,b,c){if(!bb(b))return!1;for(var d=Oa(Object(b),c,[]),e=0;d&&e<d.length;e++)v(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=U("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!bb(c))return;c=Object(c);var d=Oa(e,"currencyCode",c.currencyCode);void 0!==d&&v("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){v("ec:setAction","promo_click",c.promoClick.actionField);
return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<f.length;h++){var k=c[f[h]];if(k){a("ec:addProduct",k,"products");v("ec:setAction",f[h],k.actionField);break}}},J=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&u[e]||!c&&void 0===u[e])){var f=w[e]?Ja(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},V={name:r};J(e,V,!0);n("create",b.vtp_trackingId||
c.trackingId,V);v("set","&gtm",si(!0));b.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(a,c){void 0!==b[c]&&v("set",a,b[c])})("nonInteraction","vtp_nonInteraction");F("contentGroup",f);F("dimension",h);F("metric",k);var R={};J(e,R,!1)&&v("set",R);var E;b.vtp_enableLinkId&&v("require","linkid","linkid.js");
v("set","hitCallback",function(){var a=e&&e.hitCallback;Aa(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(v("require","ec","ec.js"),D());var ba={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:B(String,b.vtp_eventLabel||c.label),eventValue:B(Ia,b.vtp_eventValue||c.value)};J(E,ba,!1);v("send",ba);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(v("require","ec","ec.js"),D());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var Ga="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:Ga})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var T=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:T})}E?v("send","pageview",E):v("send","pageview");b.vtp_autoLinkDomains&&df(q,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var za=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(za="internal/"+za);a=!0;S(P("https:","http:","//www.google-analytics.com/"+za,e&&e.forceSSL),function(){var a=af();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}}else H(b.vtp_gtmOnFailure)};Z.__ua=b;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.b=0}();




Z.a.opt=["google"],function(){var a,b=function(b){var c={};if(b.vtp_gaSettings){var e=b.vtp_gaSettings;z(Dj(e.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=z(e);b=z(b,f)||{}}z(Dj(b.vtp_fieldsToSet,"fieldName","value"),c);var h=cf(b.vtp_functionName);if(Aa(h)){h.r=!0;var k="",l="";b.vtp_setTrackerName&&"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(l=b.vtp_trackerName,k=l+"."):(l="gtm"+qe(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(a,b,c){var d=0,e;for(e in a)if(a.hasOwnProperty(e)&&
(c&&m[e]||!c&&void 0===m[e])){var f=n[e]?Ja(a[e]):a[e];"anonymizeIp"!==e||f||(f=void 0);b[e]=f;d++}return d},r={name:l};q(c,r,!0);var u={"&gtm":si(!0)};q(c,u,!1);var w=encodeURI(P("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));h("create",b.vtp_trackingId,r);h(k+"set",u);h(k+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(b.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,S(w,function(){return af().loaded||
b.vtp_gtmOnFailure()},b.vtp_gtmOnFailure));var v=W("dataLayer"),B=v&&v.hide;B&&B.end&&(B[b.vtp_optimizeContainerId]=!0)}else H(b.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.g="opt";Z.__opt.h=!0;Z.__opt.b=0}();Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.b=0})(function(){return O.m})}();
Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=U(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Vi()),d;d=x(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],f=0;f<d.length;f++)if(d[f]instanceof RegExp){if(d[f].test(a))return!1}else{var h=d[f];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!Cj(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return I(L(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return U("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=U("gtm.element",1),m=U("event",1),u=Number(Ui());a===l&&b===m&&c>u-250?k=d:(d=k=l?sc(l):"",a=l,b=m);c=u;return k||e.vtp_defaultValue;case "URL":var w;a:{var v=String(U("gtm.elementUrl",1)||e.vtp_defaultValue||""),B=L(v);switch(e.vtp_component||"URL"){case "URL":w=v;break a;case "IS_OUTBOUND":w=h(v,e);break a;default:w=I(B,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return w;case "ATTRIBUTE":var F;if(void 0===e.vtp_attribute)F=
f(e);else{var D=U("gtm.element",1);F=qc(D,e.vtp_attribute)||e.vtp_defaultValue||""}return F;default:return f(e)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.b=0})(function(a){var b=z(a),c=b;c[ue.Ga]=null;c[ue.ff]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.cegg=["nonGoogleScripts"],function(){var a={};(function(a){Z.__cegg=a;Z.__cegg.g="cegg";Z.__cegg.h=!0;Z.__cegg.b=0})(function(b){try{var c=b.vtp_usersNumericId;if(c)if(a.hasOwnProperty(c)&&!0===a[c])b.vtp_gtmOnSuccess();else{b.vtp_snapshotName&&(A.CE_SNAPSHOT_NAME=b.vtp_snapshotName);for(var d=c.toString();8>d.length;)d="0"+d;var e=d.replace(/(\d+)(\d{4})$/,"/pages/scripts/$1/$2.js");S("//dnn506yrbagrg.cloudfront.net"+e+"?"+Math.floor((new Date).getTime()/36E5),b.vtp_gtmOnSuccess,b.vtp_gtmOnFailure);
a[c]=!0}else H(b.vtp_gtmOnFailure)}catch(f){H(b.vtp_gtmOnFailure)}})}();
Z.a.hl=["google"],function(){function a(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:Vi()}function b(b,c){oc(b,"hashchange",function(b){c({source:"hashchange",state:null,ya:Wi(a(b))})})}function c(b,c){oc(b,"popstate",function(b){c({source:"popstate",state:b.state,ya:Wi(a(b))})})}function d(a,b,c){var d=b.history,e=d[a];if(Aa(e))try{d[a]=function(b,f,h){e.apply(d,[].slice.call(arguments,0));c({source:a,state:b,ya:Wi(Vi())})}}catch(n){}}function e(){var a={source:null,
ya:Wi(Vi()),state:W("history").state||null};return function(b){var c=a,d={};d[c.source]=!0;d[b.source]=!0;if(!d.popstate||!d.hashchange||c.ya!=b.ya){var e={event:"gtm.historyChange","gtm.historyChangeSource":b.source,"gtm.oldUrlFragment":a.ya,"gtm.newUrlFragment":b.ya,"gtm.oldHistoryState":a.state,"gtm.newHistoryState":b.state};a=b;Xi(e)}}}(function(a){Z.__hl=a;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.b=0})(function(a){var f=W("self");if(!ej("hl")){var k=e();b(f,k);c(f,k);d("pushState",f,k);d("replaceState",
f,k);fj("hl")}H(a.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=W("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(c){Ze();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:si()},h=function(a){return function(b,e,f){var h="DATA_LAYER"==a?U(f):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&
(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,S("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.b=0}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.b=0})(function(a){var b=a.vtp_input,c=Dj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.b=0})(function(a){H(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,kc(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(r){H(h)}}}var b=function(a,b,c){Ye(function(){var d,e=ge;e.postscribe||(e.postscribe=fe);d=e.postscribe;var f={done:b},m=C.createElement("div");m.style.display="none";m.style.visibility="hidden";C.body.appendChild(m);try{d(m,a,f)}catch(n){H(c)}})};var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,f=ij(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Qc,k=f.ca;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,tc(h),k,e)()}else Ti(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.b=0}();
Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.g="dbg";Z.__dbg.h=!0;Z.__dbg.b=0})(function(){return!1})}();

Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.b=0})(function(a){var b=tc('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}G(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.lcl=[],function(){function a(){var a=W("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=uc(e,["a","area"],100);if(!e)return c.returnValue;var f=c.defaultPrevented||!1===c.returnValue,l=ih("lcl",f?"nv.mwt":"mwt",0),m;m=f?ih("lcl","nv.ids",[]):ih("lcl","ids",[]);if(m.length){var n=fh(e,"gtm.linkClick",m);if(b(c,e,a)&&!f&&l&&e.href){var q=W((e.target||"_self").substring(1)),r=!0;if(Xi(n,function(){r&&q&&(q.location.href=e.href)},l))r=
!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else Xi(n,function(){},l||2E3);return!0}}};oc(a,"click",e,!1);oc(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=Ac(L(b.href)),l=Ac(L(e.location));return k!==l}return!0}(function(a){Z.__lcl=a;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.b=0})(function(b){var c=void 0===b.vtp_waitForTags?
!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,f=Number(b.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(f,a)};hh("lcl","mwt",k,0);e||hh("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};hh("lcl","ids",l,[]);e||hh("lcl","nv.ids",l,[]);ej("lcl")||(a(),fj("lcl"));H(b.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(a,b){this.element=a;this.uid=b}function b(){var a=Number(U("gtm.start"))||0;return Ui().getTime()-a}function c(a,c,d,l){function f(){if(!Ki(a.target)){c.has(e.Kb)||c.set(e.Kb,""+b());c.has(e.Cc)||c.set(e.Cc,""+b());var f=0;c.has(e.Mb)&&(f=Number(c.get(e.Mb)));f+=100;c.set(e.Mb,""+f);if(f>=d){var h=fh(a.target,"gtm.elementVisibility",[c.uid]),k=Ji(a.target);h["gtm.visibleRatio"]=Math.round(1E3*k)/10;h["gtm.visibleTime"]=d;h["gtm.visibleFirstTime"]=Number(c.get(e.Cc));
h["gtm.visibleLastTime"]=Number(c.get(e.Kb));Xi(h);l()}}}if(!c.has(e.gb)&&(0==d&&f(),!c.has(e.Ha))){var h=W("self").setInterval(f,100);c.set(e.gb,h)}}function d(a){a.has(e.gb)&&(W("self").clearInterval(Number(a.get(e.gb))),a.remove(e.gb))}var e={gb:"polling-id-",Cc:"first-on-screen-",Kb:"recent-on-screen-",Mb:"total-visible-time-",Ha:"has-fired-"};a.prototype.has=function(a){return!!this.element.getAttribute("data-gtm-vis-"+a+this.uid)};a.prototype.get=function(a){return this.element.getAttribute("data-gtm-vis-"+
a+this.uid)};a.prototype.set=function(a,b){this.element.setAttribute("data-gtm-vis-"+a+this.uid,b)};a.prototype.remove=function(a){this.element.removeAttribute("data-gtm-vis-"+a+this.uid)};(function(a){Z.__evl=a;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.b=0})(function(b){function f(){var b=!1,c=null;if("CSS"===l){try{c=Bg(m)}catch(E){}b=!!c&&v.length!=c.length}else if("ID"===l){var e=rc(m);e&&(c=[e],b=1!=v.length||v[0]!==e)}c||(c=[],b=0<v.length);if(b){for(var f=0;f<v.length;f++)d(new a(v[f],u));v=[];
for(var h=0;h<c.length;h++)v.push(c[h]);0<=B&&Qi(B);0<v.length&&(B=Pi(k,v,[r]))}}function k(b){var h=new a(b.target,u);b.intersectionRatio>=r?h.has(e.Ha)||c(b,h,q,"ONCE"===w?function(){for(var b=0;b<v.length;b++){var c=new a(v[b],u);c.set(e.Ha,"1");d(c)}Qi(B);if(n&&Ai)for(var h=0;h<Ai.length;h++)Ai[h]===f&&Ai.splice(h,1)}:function(){h.set(e.Ha,"1");d(h)}):(d(h),"MANY_PER_ELEMENT"===w&&h.has(e.Ha)&&(h.remove(e.Ha),h.remove(e.Mb)),h.remove(e.Kb))}var l=b.vtp_selectorType,m;"ID"===l?m=String(b.vtp_elementId):
"CSS"===l&&(m=String(b.vtp_elementSelector));var n=!!b.vtp_useDomChangeListener,q=b.vtp_useOnScreenDuration&&Number(b.vtp_onScreenDuration)||0,r=(Number(b.vtp_onScreenRatio)||50)/100,u=b.vtp_uniqueTriggerId,w=b.vtp_firingFrequency,v=[],B=-1;f();n&&Bi(f);H(b.vtp_gtmOnSuccess)})}();


Z.a.csm=["nonGoogleScripts"],function(){(function(a){Z.__csm=a;Z.__csm.g="csm";Z.__csm.h=!0;Z.__csm.b=0})(function(a){var b=W("document");G(function(a){if(2048<a.length){var b=a.substring(0,2040).lastIndexOf("&");a=a.substring(0,b)+"&ns_cut="+Y(a.substring(b+1));a=a.substring(0,2048)}return a}(function(a,c){var d=Ui(),e=(c||"").split("&");c="";for(var k=0;k<e.length;k++)if(e[k]){var l=e[k].match(/([^=]*)=?(.*)/);c+="&"+Y(l[1])+"="+Y(l[2])}return P("https://sb","http://b",".scorecardresearch.com/b?c1=2&c2="+
Y(a)+"&ns__t="+d.valueOf()+"&ns_c="+(b.characterSet||b.defaultCharset||"")+"&c8="+Y(b.title||"")+c+"&c7="+Y(b.URL)+"&c9="+Y(b.referrer))}(a.vtp_clientId,function(){var a="",c=b.cookie;if(0<=c.indexOf("comScore"))for(var f=c.split(";"),h=0;h<f.length;h++){var k=f[h].indexOf("comScore");0<=k&&(a=unescape(f[h].substring(k+8)))}return a}())));var c=function(){var b=P("https://sb","http://b",".scorecardresearch.com/c2/"+Y(a.vtp_clientId)+"/cs.js");S(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)};"complete"===
b.readyState?c():oc(W("self"),"load",c)})}();var Uk={};Uk.macro=function(a){if(ch.Dc.hasOwnProperty(a))return ch.Dc[a]},Uk.onHtmlSuccess=ch.Yd(!0),Uk.onHtmlFailure=ch.Yd(!1);Uk.dataLayer=Be;Uk.callback=function(a){oe.hasOwnProperty(a)&&Aa(oe[a])&&oe[a]();delete oe[a]};Uk.Hf=function(){ge[O.m]=Uk;pe=Z.a;Td=Td||ch;Ud=Pe};
Uk.sg=function(){ge=A.google_tag_manager=A.google_tag_manager||{};if(ge[O.m]){var a=ge.zones;a&&a.unregisterChild(O.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Md.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Pd.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Od.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},r=0;r<n.length;r++)q[n[r][0]]=Array.prototype.slice.call(n[r],1);Nd.push(q)}Rd=Z;Sd=lj;var u=data.permissions||{};uj();xj(u);
Uk.Hf();zg();Te=!1;Ue=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)We();else{oc(C,"DOMContentLoaded",We);oc(C,"readystatechange",We);if(C.createEventObject&&C.documentElement.doScroll){var w=!0;try{w=!A.frameElement}catch(D){}w&&Xe()}oc(A,"load",We)}og=!1;"complete"===C.readyState?qg():oc(A,"load",qg);
a:{if(!Cf)break a;A.setInterval(Df,864E5);}le=(new Date).getTime()}};(0,Uk.sg)();

})()
