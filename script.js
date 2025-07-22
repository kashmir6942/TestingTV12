// Sample channel data
const channelsData = [
    { id: 1, number: "1", name: "CNN International", category: "news", program: "Breaking News Live", status: "online" },
    { id: 2, number: "2", name: "BBC World News", category: "news", program: "World Today", status: "online" },
    { id: 3, number: "3", name: "ESPN", category: "sports", program: "SportsCenter", status: "online" },
    { id: 4, number: "4", name: "Fox Sports", category: "sports", program: "Live Football", status: "online" },
    { id: 5, number: "5", name: "HBO", category: "movies", program: "Game of Thrones", status: "online" },
    { id: 6, number: "6", name: "Netflix Original", category: "movies", program: "Stranger Things", status: "online" },
    { id: 7, number: "7", name: "Discovery Channel", category: "entertainment", program: "How It's Made", status: "online" },
    { id: 8, number: "8", name: "National Geographic", category: "entertainment", program: "Wild Animals", status: "online" },
    { id: 9, number: "9", name: "MTV", category: "entertainment", program: "Music Videos", status: "online" },
    { id: 10, number: "10", name: "Comedy Central", category: "entertainment", program: "Stand Up Comedy", status: "online" },
    { id: 11, number: "11", name: "Sky Sports", category: "sports", program: "Premier League", status: "online" },
    { id: 12, number: "12", name: "Fox News", category: "news", program: "Evening News", status: "online" },
    { id: 13, number: "13", name: "Cinemax", category: "movies", program: "Action Movies", status: "online" },
    { id: 14, number: "14", name: "Animal Planet", category: "entertainment", program: "Wildlife Documentary", status: "online" },
    { id: 15, number: "15", name: "History Channel", category: "entertainment", program: "Ancient Civilizations", status: "online" },
    { id: 16, number: "16", name: "CNBC", category: "news", program: "Market Watch", status: "online" },
    { id: 17, number: "17", name: "NBA TV", category: "sports", program: "Basketball Live", status: "online" },
    { id: 18, number: "18", name: "Showtime", category: "movies", program: "Premium Movies", status: "online" },
    { id: 19, number: "19", name: "Food Network", category: "entertainment", program: "Cooking Show", status: "online" },
    { id: 20, number: "20", name: "Travel Channel", category: "entertainment", program: "World Explorer", status: "online" }
];

let currentChannel = null;
let filteredChannels = channelsData;
let isPlaying = false;

// DOM Elements
const channelsList = document.getElementById('channelsList');
const searchInput = document.getElementById('searchInput');
const categoryTabs = document.querySelectorAll('.tab-btn');
const currentChannelElement = document.getElementById('currentChannel');
const currentProgramElement = document.getElementById('currentProgram');
const channelCountElement = document.getElementById('channelCount');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeBtn = document.getElementById('volumeBtn');
const volumeSlider = document.getElementById('volumeSlider');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const loadingOverlay = document.getElementById('loadingOverlay');
const currentTimeElement = document.getElementById('currentTime');

// Initialize the application
function init() {
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    renderChannels();
    setupEventListeners();
    updateChannelCount();
}

// Update current time
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    currentTimeElement.textContent = timeString;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => handleCategoryChange(tab));
    });
    
    // Video controls
    playPauseBtn.addEventListener('click', togglePlayPause);
    volumeBtn.addEventListener('click', toggleMute);
    volumeSlider.addEventListener('input', handleVolumeChange);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const activeCategory = document.querySelector('.tab-btn.active').dataset.category;
    
    filteredChannels = channelsData.filter(channel => {
        const matchesSearch = channel.name.toLowerCase().includes(searchTerm) || 
                            channel.program.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || channel.category === activeCategory;
        return matchesSearch && matchesCategory;
    });
    
    renderChannels();
    updateChannelCount();
}

// Handle category change
function handleCategoryChange(clickedTab) {
    // Update active tab
    categoryTabs.forEach(tab => tab.classList.remove('active'));
    clickedTab.classList.add('active');
    
    // Filter channels
    const category = clickedTab.dataset.category;
    const searchTerm = searchInput.value.toLowerCase();
    
    filteredChannels = channelsData.filter(channel => {
        const matchesSearch = channel.name.toLowerCase().includes(searchTerm) || 
                            channel.program.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || channel.category === category;
        return matchesSearch && matchesCategory;
    });
    
    renderChannels();
    updateChannelCount();
}

// Render channels list
function renderChannels() {
    channelsList.innerHTML = '';
    
    filteredChannels.forEach(channel => {
        const channelElement = document.createElement('div');
        channelElement.className = `channel-item ${currentChannel?.id === channel.id ? 'active' : ''}`;
        channelElement.innerHTML = `
            <div class="channel-number">${channel.number}</div>
            <div class="channel-info-item">
                <div class="channel-name">${channel.name}</div>
                <div class="channel-program">${channel.program}</div>
            </div>
            <div class="channel-status ${channel.status}"></div>
        `;
        
        channelElement.addEventListener('click', () => selectChannel(channel));
        channelsList.appendChild(channelElement);
    });
}

// Select channel
function selectChannel(channel) {
    showLoading();
    
    // Simulate loading delay
    setTimeout(() => {
        currentChannel = channel;
        currentChannelElement.textContent = channel.name;
        currentProgramElement.textContent = `Now Playing: ${channel.program}`;
        
        // Update active channel in list
        document.querySelectorAll('.channel-item').forEach(item => {
            item.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        
        // Update video player
        updateVideoPlayer();
        hideLoading();
        
        // Auto-play
        isPlaying = true;
        updatePlayPauseButton();
    }, 1000);
}

// Update video player
function updateVideoPlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    const placeholder = videoPlayer.querySelector('.video-placeholder');
    
    if (currentChannel) {
        placeholder.innerHTML = `
            <div style="text-align: center;">
                <i class="fas fa-broadcast-tower" style="font-size: 60px; color: #ff4757; margin-bottom: 20px;"></i>
                <h3>Now Streaming: ${currentChannel.name}</h3>
                <p>${currentChannel.program}</p>
                <div style="margin-top: 20px; padding: 10px; background: rgba(255, 71, 87, 0.1); border-radius: 8px;">
                    <i class="fas fa-signal" style="color: #2ed573; margin-right: 8px;"></i>
                    <span style="color: #2ed573;">Live Stream Active</span>
                </div>
            </div>
        `;
    }
}

// Update channel count
function updateChannelCount() {
    channelCountElement.textContent = `${filteredChannels.length} channels available`;
}

// Video controls
function togglePlayPause() {
    if (!currentChannel) return;
    
    isPlaying = !isPlaying;
    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    const icon = playPauseBtn.querySelector('i');
    icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
}

function toggleMute() {
    const icon = volumeBtn.querySelector('i');
    const currentVolume = volumeSlider.value;
    
    if (currentVolume > 0) {
        volumeSlider.value = 0;
        icon.className = 'fas fa-volume-mute';
    } else {
        volumeSlider.value = 50;
        icon.className = 'fas fa-volume-up';
    }
}

function handleVolumeChange(e) {
    const volume = e.target.value;
    const icon = volumeBtn.querySelector('i');
    
    if (volume == 0) {
        icon.className = 'fas fa-volume-mute';
    } else if (volume < 50) {
        icon.className = 'fas fa-volume-down';
    } else {
        icon.className = 'fas fa-volume-up';
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenBtn.querySelector('i').className = 'fas fa-compress';
    } else {
        document.exitFullscreen();
        fullscreenBtn.querySelector('i').className = 'fas fa-expand';
    }
}

// Keyboard shortcuts
function handleKeyboardShortcuts(e) {
    switch(e.key) {
        case ' ':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
        case 'm':
        case 'M':
            toggleMute();
            break;
        case 'ArrowUp':
            e.preventDefault();
            changeChannel(-1);
            break;
        case 'ArrowDown':
            e.preventDefault();
            changeChannel(1);
            break;
    }
}

// Change channel with arrow keys
function changeChannel(direction) {
    if (!currentChannel || filteredChannels.length === 0) return;
    
    const currentIndex = filteredChannels.findIndex(ch => ch.id === currentChannel.id);
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = filteredChannels.length - 1;
    if (newIndex >= filteredChannels.length) newIndex = 0;
    
    selectChannel(filteredChannels[newIndex]);
}

// Loading overlay
function showLoading() {
    loadingOverlay.style.display = 'flex';
}

function hideLoading() {
    loadingOverlay.style.display = 'none';
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);