const videos = [
  {
    title: "step sister Asian hardcore full sex video",
    thumb: "/files/1.png",
    url: "https://ip226109515.ahcdn.com/key=+jdXP5tbL3wdI4AaMQOpqQ,s=,end=1753549200,limit=3/data=43.153.85.245-dvp/state=aITZJAlAgau9wgZKqrjk/reftag=0324064223/7/21/3/389278763/025/617/373/1080p.h264.mp4"
  },
  {
    title: "step father fuck asian daughter",
    thumb: "/files/2.png",
    url: "https://video-b.xhcdn.com/key=us0o6b15zKh9O9vk15h8kw,end=1753549200,limit=3/data=43.153.85.245-dvp/speed=0/008/596/503/720p.h264.mp4"
  },
  {
    title: "amateur mom fuck me step son",
    thumb: "/files/3.png",
    url: "https://video-a.xhcdn.com/key=ZXknLTKepOTmZInoxgu7Vg,end=1753549200,limit=3/data=43.153.85.245-dvp/speed=0/023/130/631/1080p.h264.mp4"
  },
  {
    title: "step sun fuck their amateur mom in kitchen",
    thumb: "/files/4.png",
    url: "https://video-b.xhcdn.com/key=JbyrhDGUtm7NgQ-7aDat0Q,end=1753549200,limit=3/data=43.153.85.245-dvp/speed=0/025/780/046/720p.h264.mp4"
  },
  {
    title: "Asian girl fuck her step brother",
    thumb: "/files/5.png",
    url: "https://video-a.xhcdn.com/key=c3u1AwV7MK+XEidRFgRyfw,end=1753549200,limit=3/data=43.153.85.245-dvp/speed=0/026/516/803/1080p.h264.mp4"
  },
  {
    title: "Amateur girl sex with her father",
    thumb: "/files/6.png",
    url: "https://video-b.xhcdn.com/key=QWUo0KmGeOINjglXxgVT2A,end=1753549200,limit=3/data=43.153.85.245-dvp/speed=0/025/662/950/720p.h264.mp4"
  },
  {
    title: "asian family full sex video",
    thumb: "/files/7.png",
    url: "https://video-b.xhcdn.com/key=seI0lfyZaj+9Et8eZHY2Uw,end=1753549200,limit=3/data=43.153.85.245-dvp/speed=0/022/719/495/720p.h264.mp4"
  },
  {
    title: "amateur mom sex with their step son in badroom",
    thumb: "/files/8.png",
    url: "https://video-b.xhcdn.com/key=e8qNrPLW5GQsnraSTW+Y3Q,end=1753549200,limit=3/data=43.153.85.245-dvp/speed=0/023/898/857/720p.h264.mp4"
  },
  {
    title: "asian lesbian sex video",
    thumb: "/files/9.png",
    url: "https://video-a.xhcdn.com/key=venOi8Q9DjYiBy0TIlPnXQ,end=1753549200,limit=3/data=43.153.85.245-dvp/speed=0/022/899/529/1080p.h264.mp4"
  },
  {
    title: "amateur step mother sex with her step asian sister",
    thumb: "/files/10.png",
    url: "https://video-a.xhcdn.com/key=veohaOCRHYzwPHb+ya1w5Q,end=1753549200,limit=3/data=43.153.85.245-dvp/speed=0/022/645/217/1080p.h264.mp4"
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
