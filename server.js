const push = require('web-push');

let VAPID_KEY = {
    publicKey: 'BHfCxidJ4Yv3wLLdmExQDYcJAoK1guYMhy7OSydRVMy4YwAvLNJ2HvvEXwBnoLTcRP5WuACnSnjemZfZRitzScA',
    privateKey: 'dw_A4tCh70cDJ9HtnHtI3wpdDZJQ-swK2QRFm8DifAs'
}

push.setVapidDetails('mailto:bryan@sushitopmarketing.com', VAPID_KEY.publicKey, VAPID_KEY.privateKey)

//This is what we pull out from our database of stored people who want to receive notification
let sub = {"endpoint":"https://web.push.apple.com/QO1FMO4Gg1Mpy7L_wNTXkjQiS4JAniW27u59VS_lbAbkWNbg1OlvomBkKaUpX9613nGCB7Cw5YodAZxschMzM6NJgSile0FYdstBK8t9B0H7Nv2YGPmi9mlhjEw9hTMFYb8dk3O-ibhAbu6ua6OPgmnZk1VEBRWaeftW5fIVooI","keys":{"p256dh":"BJWBofWeePE4JAiu5BsetWpKBWXy7E0m-kjfymt9pbnNYDZ7396fHLEeM5RvXSVqtPyQ5cIy0f_pVzT7BaeqwKo","auth":"Ttd2ml3d8rVH9albeQaUSA"}};
push.sendNotification(sub, 'test message')