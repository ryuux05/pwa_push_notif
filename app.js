// Register the service worker
var registration;
if('serviceWorker' in navigator)
{
    registration = await navigator.serviceWorker.getRegistration();
    if(!registration)
    {
        registration = await navigator.serviceWorker.register("sw.js");
    }
}

async function subscribeToPush() {
    let serverPublicKey = VAPID_PUBLIC_KEY;

    let subscriptionOptions = {
        userVisibleOnly: true,
        applicationServerKey: 'BHfCxidJ4Yv3wLLdmExQDYcJAoK1guYMhy7OSydRVMy4YwAvLNJ2HvvEXwBnoLTcRP5WuACnSnjemZfZRitzScA'
    };

    let subscription = await ServiceWorkerRegistration.pushManager.subscribe(subscriptionOptions);

    sendSubscriptionToServer(subscription)
}

self.addEventListener('push', (event) => {
    let pushMessageJSON = event.data.json();

    //Our server puts everything needed to show the notification
    //In out JSON data.
    event.waitUntil(self.registration.showNotification(pushMessageJSON.title, {

    }))
})

self.addEventListener('notificationclick', async function(event){
    if(!event.action)
    {
        return;
    }
    clients.openWindow(event.action);
});
