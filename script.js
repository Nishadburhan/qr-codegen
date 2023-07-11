let imgBox = document.getElementById("imgBox");
let qtImage = document.getElementById("qrImage");
document.querySelector(".theForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputData = document.querySelector(".theForm input").value;
  if (inputData.length > 0) {
    
      qtImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputData}`;
        imgBox.classList.add("show-img");
  } else{
      document.querySelector(".theForm input").classList.add("error");
      setTimeout(() => {
      document.querySelector(".theForm input").classList.remove("error");
      }, 1000);
  }
});
