const musicLibrary = {
    allArtist: btsData,

    [Symbol.iterator](){
        let artistIdx =0;
        let songIdx = 0;
        const artist = this.allArtist;

        return {
            next : () => {
                if(artistIdx >= this.allArtist.length){
                    return {done : true};
    }
    const currentArtist = this.allArtist[artistIdx];
    const song = currentArtist.songs[songIdx];

    const trackValue = {...song, 
        artistName : currentArtist.artist,
        type : currentArtist.type
    };

    songIdx++; 
    if (songIdx >= currentArtist.songs.length) {
        artistIdx++;
        songIdx =0;
    }
    return {
        value :{...song, artistName : currentArtist.artist},
        done: false
    };
}
 
        };
    }

};


function* smartMixer() {
    const allSongs = [ ...musicLibrary];

   while (true) {
        const randomIndex = Math.floor(Math.random() * allSongs.length);
        yield allSongs[randomIndex];
    }
} 

const radio = smartMixer();
const display = document.getElementById("playlistDisplay");

async function consumeWithTimeout(iterator, durationInSeconds) {
    const endTime = Date.now() + (Number(durationInSeconds) * 1000);
    let count = 0;

    console.log(`--- Starting auto-mode for ${durationInSeconds}s ---`);

    while (Date.now() < endTime) {
        const { value, done } = await iterator.next();

        if (done) {
            console.log("--- All tracks processed before timeout ---");
            break; 
        }

        console.log(`[${count++}] Added: ${value.title}`);
        renderCard(value);
        
        await new Promise(resolve => setTimeout(resolve, 800));
    }

    console.log("--- Process finished ---");
}


function renderCard(song) {
    const card = document.createElement("div");
    card.className = "song-card";
    const badgeClass = song.type === "Group" ? "badge-group" : "badge-solo";

    card.innerHTML = `
    <span class ="badge"${badgeClass}>${song.type}</span>
    <h3>${song.title}</h3>
    <p><strong>Artist:</strong> ${song.artistName}</p>
    <p><strong>Album:</strong> ${song.album}</p>
    <p><strong>Release Date:</strong> ${song.releaseDate}</p>
    `;
    display.prepend(card);
}

document.getElementById('surpriseBtn').onclick = () => {
    const nextSong = radio.next().value;
    renderCard(nextSong);
};


document.getElementById('searchBtn').onclick = () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) return;
    
    display.innerHTML = ""; 
    for (const track of musicLibrary) {
        if (track.album.toLowerCase().includes(query)) {
            renderCard(track);
        }
    }
};
document.getElementById('clearBtn').onclick = () => {
    display.innerHTML = '';
};



function memoize(fn, limit = 10) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log(` %c [Cache Hit] to request: ${key}` , 'color: #8e44ed; font-weight: bold;');
            return cache.get(key);
        }
            
            const result = fn.apply(this, args);

            if (cache.size >= limit) {
                const firstKey = cache.keys().next().value;
                cache.delete(firstKey);
                console.log (`[Cache Eviction] removed : ${firstKey} from cache `, 'color: #e74c3c; font-weight: bold;');
            }

            cache.set(key, result);
            return result;
        };
    };



class BiPriorityQueue {
    constructor() {
        this.nodes = [];
        this.counter = 0;
    }

    enqueue(item, priority) {
        const node = { 
            item,
            priority,
            id: this.counter++
        };
        this.nodes.push(node);
        console.log(`[Queue] Added:"${item.title}" | Priority ${priority}`);
    }


_getTargetIndex(type) {
    if (this.nodes.length === 0) return -1;

    let targetIndex = 0;
    for (let i = 1; i < this.nodes.length; i++) {
        const current = this.nodes[i];
        const target = this.nodes[targetIndex];

        let isBetter = false;
        switch (type) {
            case 'highest':
                isBetter = current.priority > target.priority || (current.priority === target.priority && current.id < target.id);
                break;
            case 'lowest':
                isBetter = current.priority < target.priority || (current.priority === target.priority && current.id < target.id);
                break;
            case 'oldest':
                isBetter = current.id < target.id;
                break;
            case 'newest':
                isBetter = current.id > target.id;
                break;
        }
        if (isBetter) {
            targetIndex = i;
        }
    }
        return targetIndex;
}

dequeue(type = 'highest') {
    const index = this._getTargetIndex(type);
    if (index === -1)
        return null;
    const removedNode = this.nodes.splice(index, 1)[0];
    return removedNode.item;
} 


peek(type = 'highest') {
    const index = this._getTargetIndex(type);
    return index === -1 ? null : this.nodes[index].item;
}

get size() {
    return this.nodes.length;
}
}
