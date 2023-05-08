const container = document.querySelector('.soundsContainer');
const search = document.querySelector('.search')
const go = document.querySelector('.go')
let sounds;

go.addEventListener('click', () => {
    let searchQuery = search.value
    fetchSounds(searchQuery)
})

const fetchSounds = async (searchQuery) => {
    try {
        const response = await axios.get('https://freesound.org/apiv2/search/text/', {
            params: {
                query: searchQuery,
                token: 'API_KEY_HERE',
                fields: 'id,name,previews',
                format: 'json'
            }
        });

        if (response.data && response.data.results) {
            sounds = response.data.results.map((sound) => ({
                id: sound.id,
                name: sound.name,
                previewURL: sound.previews['preview-lq-mp3']
            }));
            // use sounds object here :-)
            console.log(sounds);
            renderSounds();
        } else {
            console.log('No results found');
        }
    } catch (error) {
        console.error('Error fetching sounds:', error);
    }
};


const playSound = (url) => {
    const sound = new Howl({
        src: [url]
    });

    sound.play();
};

const renderSounds = () => {
    sounds.forEach((sound) => {
        let preview = document.createElement('div');
        preview.classList.add('preview')
        preview.innerText = sound.name;
        preview.addEventListener('click', () => {
            playSound(sound.previewURL);
        });
        container.appendChild(preview);
    });
};







