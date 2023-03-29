self.addEventListener('push', (event) => {
    var options = {
        body: "Push Notif Test",
        icon: "images/example.png",
        vibrate: [100,50,100],
        data: {
            dateOfArrival: date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title:'Explore this new world',
                icon: 'images/checkmark.png'},
            {action: 'close', title:'Close',
            icon: 'images/xmark.png'},
    ]
    };
    event.waitUntil(
        self.registration.showNotification('Hello world', options)
    );
});

self.addEventListener('notificationclick', async function(event){
    if(!event.action)
    {
        return;
    }
    clients.openWindow(event.action);
});
