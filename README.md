# kyrsova1
Конструктор "Your BTS Playlist Creator" Проєкт, що імітує функціонал Spotify.
# Examples
```javascript
// Example of using generator
const radio = smartMixer();
console.log(radio.next().value);

// Example of Timeout
consumeWithTimeout(radio, 5);

// Wrap the search function
const fastSearch = memoize(searchTracks, 5);

// First call: Performs actual iteration
fastSearch("Love Yourself"); 

// Second call: Returns result instantly from cache
fastSearch("Love Yourself");