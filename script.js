const videos = [
  {
    title: "step sister Asian hardcore full sex video",
    thumb: "/files/1.png",
    url: "https://cdn77-vid-mp4.xnxx-cdn.com/6CoJMiakNg1GoRd-VAJoCQ==,1753535304/videos/mp4/a/e/a/xvideos.com_aea475f1a0301315bfd7ac6d5b60dabc.mp4"
  },
  {
    title: "step father fuck asian daughter",
    thumb: "/files/2.png",
    url: "https://cdn77-vid-mp4.xnxx-cdn.com/cSoEY81NetOThzAy-24DLw==,1753541345/videos/mp4/c/d/1/xvideos.com_cd1c695af95f1f624f3214b73e6e640d.mp4"
  },
  {
    title: "amateur mom fuck me step son",
    thumb: "/files/3.png",
    url: "https://gcore-vid.xnxx-cdn.com/r14XGrKWVzpikaFQVtFFIg==,1753534667/videos/mp4/8/4/7/xvideos.com_84782a04239bee2567acb4d2b0722ca2.mp4"
  },
  {
    title: "step sun fuck their amateur mom in kitchen",
    thumb: "/files/4.png",
    url: "https://cdn77-vid-mp4.xnxx-cdn.com/2jc5DaCeSgER-vZLOZKJwA==,1753538389/videos/mp4/f/7/f/xvideos.com_f7f0fe17a276a7bd5070311e1564d5f3.mp4"
  },
  {
    title: "Asian girl fuck her step brother",
    thumb: "/files/5.png",
    url: "https://cdn77-vid-mp4.xnxx-cdn.com/_I3lHI0_EWIhvR51BI3SmA==,1753535595/videos/mp4/4/8/0/xvideos.com_4807b002678efc6b160b265e37dacd7b-1.mp4"
  },
  {
    title: "Amateur girl sex with her father",
    thumb: "/files/6.png",
    url: "https://cdn77-vid-mp4.xnxx-cdn.com/qmiHWw6lZ1rHxXCLFW5CzA==,1753534472/videos/mp4/c/3/8/xvideos.com_c38894861e43dab84c939f985148c1cd.mp4"
  },
  {
    title: "asian family full sex video",
    thumb: "/files/7.png",
    url: "https://cdn77-vid-mp4.xnxx-cdn.com/9iGqfzYmpxcjis79pljiUw==,1753541890/videos/mp4/1/1/7/xvideos.com_11759eed6cd6d568c68951033b0a5441.mp4"
  },
  {
    title: "amateur mom sex with their step son in badroom",
    thumb: "/files/8.png",
    url: "https://cdn77-vid-mp4.xnxx-cdn.com/IEgHo-2baYPRv2dYGjcgvg==,1753534241/videos/mp4/b/0/7/xvideos.com_b074f608416a80b0759fe6472f7ddc2a.mp4"
  },
  {
    title: "asian lesbian sex video",
    thumb: "/files/9.png",
    url: "https://cdn77-vid-mp4.xnxx-cdn.com/gWSvYkwOkUNIo6dV2-YIkQ==,1753541572/videos/mp4/c/8/2/xvideos.com_c829526e29d298e34b973d8db2e05db1.mp4"
  },
  {
    title: "amateur step mother sex with her step asian sister",
    thumb: "/files/10.png",
    url: "https://cdn77-vid-mp4.xnxx-cdn.com/_FMCFT2I7VNJMNGiMATw3A==,1753534325/videos/mp4/8/d/1/xvideos.com_8d1ae7eee5c12a7a91b0e60388e0c442-1.mp4"
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
