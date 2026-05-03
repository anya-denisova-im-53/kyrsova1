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

#### **Task 7: Reactive Communication with EventEmitter**
Implemented a reactive message-based communication system to allow different entities to interact independently.

* **Pattern**: Built using the **Observer Pattern** (EventEmitter), supporting high decoupling between logic and UI.
* **Features**:
    * **Independent Listeners**: Multiple entities (e.g., UI updates, Analytics, Logger) can react to the same event simultaneously.
    * **Subscribe/Unsubscribe**: Full support for adding and removing listeners to prevent memory leaks.
* **Example Case**:
    When the "current track" changes, the `EventEmitter` broadcasts a message. The UI updates the song title, while the Analytics module logs the play event — both acting independently.

    #### **Task 8: Authentication Proxy Implementation**
Developed a security proxy layer that acts as an intermediary between the client and the API service.

* **Pattern**: **Proxy Pattern**. It wraps HTTP-like requests to intercept and modify them before they reach the service.
* **Security Features**:
    * **Credential Injection**: Automatically injects Bearer tokens (JWT) or API Keys into request headers.
    * **Logging & Monitoring**: Every outgoing request is logged with metadata (timestamps, endpoint info) for auditing.
* **Flexibility**: Supports dynamic switching between different authentication strategies (OAuth, API Key, JWT) by modifying the internal configuration without changing the application logic.

**Code Example:**
const secureProxy = new AuthProxy(api, { type: 'JWT', token: '...' });
const data = await secureProxy.request('/user/profile'); // Headers injected automatically!