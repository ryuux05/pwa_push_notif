self.addEventListener('push', (event) => {
    self.registration.sendNotification('Test message', {})
})

self.addEventListener('notificationclick', async function(event){
    if(!event.action)
    {
        return;
    }
    clients.openWindow(event.action);
});
