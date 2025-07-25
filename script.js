const videos = [
  {
    title: "Demo Video 1",
    thumb: "https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY"
  },
  {
    title: "Demo Video 2",
    thumb: "https://i.ytimg.com/vi/oUFJJNQGwhk/hqdefault.jpg",
    url: "https://www.youtube.com/embed/oUFJJNQGwhk"
  },
  {
    title: "Demo Video 3",
    thumb: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U"
  }
  {
    title: "Demo Video 1",
    thumb: "https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY"
  },
  {
    title: "Demo Video 2",
    thumb: "https://i.ytimg.com/vi/oUFJJNQGwhk/hqdefault.jpg",
    url: "https://www.youtube.com/embed/oUFJJNQGwhk"
  },
  {
    title: "Demo Video 3",
    thumb: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U"
  }


];

const videoGrid = document.getElementById("videoGrid");
const modal = document.getElementById("videoModal");
const player = document.getElementById("videoPlayer");

videos.forEach((video, index) => {
  const card = document.createElement("div");
  card.className = "video-card";
  card.innerHTML = `
    <img src="${video.thumb}" class="video-thumb" />
    <div class="video-info">
      <h4>${video.title}</h4>
    </div>
  `;
  card.onclick = () => openModal(video.url);
  videoGrid.appendChild(card);
});

function openModal(url) {
  player.src = url;
  modal.style.display = "flex";
}

function closeModal() {
  player.src = "";
  modal.style.display = "none";
}
