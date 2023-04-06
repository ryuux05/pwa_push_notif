self.addEventListener('push', (event) => {
    var options = {
        body: "Push Notif Test",
        icon: "images/example.png",
        vibrate: [100,50,100],
        data: {
            dateOfArrival: Date.now(),
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
    function sendAddress() {
        console.log("Pressed")
        fetch('https://scrambleserver.onrender.com/push-notif/click',{
        method: 'POST',
        headers:{  
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'    
        },
        body:JSON.stringify()
        }).then("Notif clicked")
    }
    clients.openWindow(event.action);
});
