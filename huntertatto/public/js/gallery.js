const images = [
    "./huntertatto/public/img/gallery/gallery_1.jpeg",
    "./huntertatto/public/img/gallery/gallery_2.jpeg",
    "./huntertatto/public/img/gallery/gallery_3.jpeg",
    "./huntertatto/public/img/gallery/gallery_4.jpeg",
    "./huntertatto/public/img/gallery/gallery_5.jpeg",
    "./huntertatto/public/img/gallery/gallery_6.jpeg",
    "./huntertatto/public/img/gallery/gallery_7.jpeg",
    "./huntertatto/public/img/gallery/gallery_8.jpeg",
    "./huntertatto/public/img/gallery/gallery_9.jpeg",
    "./huntertatto/public/img/gallery/gallery_10.jpeg",
    "./huntertatto/public/img/gallery/gallery_11.jpeg",
    "./huntertatto/public/img/gallery/gallery_12.jpeg",
    "./huntertatto/public/img/gallery/gallery_13.jpeg",
    "./huntertatto/public/img/gallery/gallery_14.jpeg",
    "./huntertatto/public/img/gallery/gallery_15.jpeg",
    "./huntertatto/public/img/gallery/gallery_16.jpeg",
    "./huntertatto/public/img/gallery/gallery_17.jpeg",
    "./huntertatto/public/img/gallery/gallery_18.jpeg",
  
  
  ];
  
  const gallery = document.getElementById("gallery");
  
  images.forEach((src) => {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("gallery-item", "overflow-hidden");
  
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gallery image";
    img.classList.add("w-full", "h-auto", "object-cover", "rounded");
  
    imgDiv.appendChild(img);
    gallery.appendChild(imgDiv);
  });
  