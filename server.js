const push = require('web-push');

let VAPID_KEY = {
    publicKey: 'BHfCxidJ4Yv3wLLdmExQDYcJAoK1guYMhy7OSydRVMy4YwAvLNJ2HvvEXwBnoLTcRP5WuACnSnjemZfZRitzScA',
    privateKey: 'dw_A4tCh70cDJ9HtnHtI3wpdDZJQ-swK2QRFm8DifAs'
}

push.setVapidDetails('mailto:bryan@sushitopmarketing.com', VAPID_KEY.publicKey, VAPID_KEY.privateKey)

//This is what we pull out from our database of stored people who want to receive notification
let sub = {"endpoint":"https://web.push.apple.com/QFZq8bi2-k-_Vxa2syjk6yKawQHDJ5zcgC1ZVhbyj4r4jBrwHS46QKDw-hTNmev7lEz9hD4FrlGWPuArIs5GmWA3eVPQp92Cuy1viqxWYM8cMia1n4Cf8ngk16CV4AFICu1TmvR9tgsVUgP_STt6_W8WYcAE0aHPy361JU9CVa4","keys":{"p256dh":"BOGqCFSYJ7wFG8eL0vTNz8VXn3qxxWJ6UZlmvhXoxa0LhM0fSoK7bdYmHmiJMeTz3nJQqg_LBXtHcOz-0EQHb88","auth":"pz0TaZ-3SoJImA6hmsadXA"}};
push.sendNotification(sub, 'test message')