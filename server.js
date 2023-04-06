const push = require('web-push');

let VAPID_KEY = {
    publicKey: 'BHfCxidJ4Yv3wLLdmExQDYcJAoK1guYMhy7OSydRVMy4YwAvLNJ2HvvEXwBnoLTcRP5WuACnSnjemZfZRitzScA',
    privateKey: 'dw_A4tCh70cDJ9HtnHtI3wpdDZJQ-swK2QRFm8DifAs'
}

push.setVapidDetails('mailto:bryan@sushitopmarketing.com', VAPID_KEY.publicKey, VAPID_KEY.privateKey)

//This is what we pull out from our database of stored people who want to receive notification
let sub ={"endpoint":"https://web.push.apple.com/QAZvYlV86mvuwWvPpMEz9WzkMnAOm6CHBuHEAnxamV3vFtFnUnRgfP4jwxwQ0b1QCFjpQFMamI6bqu5uaoSa0I8RkTIjZXINnFz1y521Hxd_rz6nBf_Vni2mMVU_teCxTVPyjDDl-KKw0TPrbcoLg7R6EQka7hM7uhfPryrEdfE","keys":{"p256dh":"BNJzYAiBLq1_m9MUTcdRo8XceHoxclAu_5E_oOX0Jc4e-qRoOdGzoiYgoNOl4cS3O7Ds9b9aUs-Zd6Hj4rBkCG8","auth":"VifGThCwi_JMKgRbElEXRQ"}};
push.sendNotification(sub, 'test message')