const videos = [
  {
    title: "step sister Asian hardcore full sex video",
    thumb: "/files/1.png",
    url: "/files/1st.mp4"
  },
  {
    title: "step father fuck asian daughter",
    thumb: "/files/2.png",
    url: "/files/2.mp4"
  },
  {
    title: "amateur mom fuck me step son",
    thumb: "/files/3.png",
    url: "/files/3.mp4"
  },
  {
    title: "step sun fuck their amateur mom in kitchen",
    thumb: "/files/4.png",
    url: "/files/4.mp4"
  },
  {
    title: "Asian girl fuck her step brother",
    thumb: "/files/5.png",
    url: "/files/5.mp4"
  },
  {
    title: "Amateur girl sex with her father",
    thumb: "/files/6.png",
    url: "/files/6.mp4"
  },
  {
    title: "asian family full sex video",
    thumb: "/files/7.png",
    url: "/files/7.mp4"
  },
  {
    title: "amateur mom sex with their step son in badroom",
    thumb: "/files/8.png",
    url: "/files/8.mp4"
  },
  {
    title: "asian lesbian sex video",
    thumb: "/files/9.png",
    url: "/files/9.mp4"
  },
  {
    title: "amateur step mother sex with her step asian sister",
    thumb: "/files/10.png",
    url: "/files/10.mp4"
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
