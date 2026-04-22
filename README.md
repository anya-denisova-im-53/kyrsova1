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

//Async Array Function Variants


* **Callback Version**: Implements a manual counter to track the completion of asynchronous tasks across the array.
* **Promise Version**: Utilizes `Promise.all()` for concurrent execution, significantly improving performance.
* **Abort/Cancel Support**: Integrated `AbortController` to allow users to stop long-running filtering processes (e.g., when a new search starts).
* **Demo Cases**: Includes real-world scenarios like filtering the `musicLibrary` by priority or artist with simulated network delays.



#### Task 6: Memory-Efficient Stream Processing
To handle datasets that are too large to fit in memory, I implemented an Async Iterator. This allows the application to process data incrementally in small chunks.

* Mechanism: Uses Symbol.asyncIterator with the yield keyword to pause and resume data delivery.
* Efficiency: Instead of loading 10,000+ tracks at once, the system processes them in batches (chunks), keeping the memory footprint low.
* Real-world use: Simulates how modern streaming services (like Spotify) fetch and render playlists as the user scrolls down.

Example Usage:
const musicStream = new LargeMusicStream(hugeDataset);
for await (const chunk of musicStream) {
    renderCards(chunk); // Process and display one batch at a time
}
