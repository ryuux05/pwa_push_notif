const push = require('web-push');

let VAPID_KEY = {
    publicKey: 'BHfCxidJ4Yv3wLLdmExQDYcJAoK1guYMhy7OSydRVMy4YwAvLNJ2HvvEXwBnoLTcRP5WuACnSnjemZfZRitzScA',
    privateKey: 'dw_A4tCh70cDJ9HtnHtI3wpdDZJQ-swK2QRFm8DifAs'
}

push.setVapidDetails('mailto:bryan@sushitopmarketing.com', VAPID_KEY.publicKey, VAPID_KEY.privateKey)

//This is what we pull out from our database of stored people who want to receive notification
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cWeGXW7cyms:APA91bHlQUnOtc4i5k2Be2a-mwC-GYzyNo1WUdjTjeAvTWGtQnCvmmXz4r1NggZf5Y5WWsdZRR1MkDlrNYrOdmAdY_ELXCrs-QsdB1bUkAj1WlwLMQZX2z-KP0YWaLysjydvyuRVkJje","expirationTime":null,"keys":{"p256dh":"BDR5-zWWhTr1Fp3a3pMR6BBgyaIRnMKjYnPG05Pe5qI16opFtJuM_6hR8BknZp3ewfrD5c1QB1LkNEnNy8HFLtk","auth":"Qd-Rx5Mcv-3_RRzVpELQMw"}};
push.sendNotification(sub, 'test message')