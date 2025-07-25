const videos = [
  {
    title: "Demo Video 1",
    thumb: "https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    url: "https://xhamster43.desi/videos/teacher-and-student-hardcore-fuck-rahul-and-srimoyee-sex-indian-porn-videos-hotmasterxx-xh6EfcA"
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
  },
  {
    title: "Demo Video 4",
    thumb: "https://i.ytimg.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4"
  },
  {
    title: "Demo Video 5",
    thumb: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
    url: "https://www.youtube.com/embed/2Vv-BfVoq4g"
  },
  {
    title: "Demo Video 6",
    thumb: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg",
    url: "https://www.youtube.com/embed/JGwWNGJdvx8"
  },
  {
    title: "Demo Video 7",
    thumb: "https://i.ytimg.com/vi/3tmd-ClpJxA/hqdefault.jpg",
    url: "https://www.youtube.com/embed/3tmd-ClpJxA"
  },
  {
    title: "Demo Video 8",
    thumb: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    url: "https://www.youtube.com/embed/kJQP7kiw5Fk"
  },
  {
    title: "Demo Video 9",
    thumb: "https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg",
    url: "https://www.youtube.com/embed/60ItHLz5WEA"
  },
  {
    title: "Demo Video 10",
    thumb: "https://i.ytimg.com/vi/hT_nvWreIhg/hqdefault.jpg",
    url: "https://www.youtube.com/embed/hT_nvWreIhg"
  }
];

const videoGrid = document.getElementById("videoGrid");
const modal = document.getElementById("videoModal");
const player = document.getElementById("videoPlayer");

videos.forEach((video) => {
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
