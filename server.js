const push = require('web-push');

let VAPID_KEY = {
    publicKey: 'BHfCxidJ4Yv3wLLdmExQDYcJAoK1guYMhy7OSydRVMy4YwAvLNJ2HvvEXwBnoLTcRP5WuACnSnjemZfZRitzScA',
    privateKey: 'dw_A4tCh70cDJ9HtnHtI3wpdDZJQ-swK2QRFm8DifAs'
}

push.setVapidDetails('mailto:bryan@sushitopmarketing.com', VAPID_KEY.publicKey, VAPID_KEY.privateKey)

//This is what we pull out from our database of stored people who want to receive notification
let sub = {};
push.sendNotification(sub, 'test message')