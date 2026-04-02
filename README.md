# kyrsova1
Конструктор "Your BTS Playlist Creator" Проєкт, що імітує функціонал Spotify.
# Examples
```javascript
// Example of using generator
const radio = smartMixer();
console.log(radio.next().value);

// Example of Timeout
consumeWithTimeout(radio, 5);

// Search results for "Golden" will be cached after the first call
const search = memoize(searchTracksv, 5);

search("Golden"); // Logs: [Searching...]
search("Golden"); // Logs: [Cache Hit] (Instant result)

// Initializing the queue
const btsQueue = new BiPriorityQueue();

// Adding tracks with different priority levels
btsQueue.enqueue(songData, 10); // High priority
btsQueue.enqueue(anotherSong, 1); // Low priority

// Dequeuing based on specific requirements
const nextToPlay = btsQueue.dequeue('highest'); 
console.log(Now playing: ${nextToPlay.title});


