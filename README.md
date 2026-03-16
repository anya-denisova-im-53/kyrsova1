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