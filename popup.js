chrome.runtime.sendMessage({ message: "LoadTungShing" }, (response) => {
  console.log("load Tung Shing");

  if (response.message === "success") {
    console.log(response.result);
    const calendar = response.result;

    document.querySelector("p.lunar").innerHTML = calendar.nongli;
    document.querySelector("p.gregorian").innerHTML = response.formatMonth + " " + response.formatYear;
    document.querySelector("p.day").innerHTML = response.formatDate;
    document.querySelector("td.yi").innerHTML = calendar.do;
    document.querySelector("td.ji").innerHTML = calendar.nodo;
    document.querySelector("td.solarTerm").innerHTML = calendar.jieqi;
    document.querySelector("td.Zodiac").innerHTML = calendar.shengxiao;

  } else {
    console.log(response.result);
  }
});


document
  .querySelector("button.divineByNumber")
  .addEventListener("click", function () {
    const shangYao = document.getElementById("ShangYao").value;
    const up = shangYao % 8;
    var date = new Date();
    const hour = date.getHours();
    let low;

    switch (hour) {
      case 23:
      case 0:
        low = 1;
        break;
      case 1:
      case 2:
        low = 2;
        break;
      case 3:
      case 4:
        low = 3;
        break;
      case 5:
      case 6:
        low = 4;
        break;
      case 7:
      case 8:
        low = 5;
        break;
      case 9:
      case 10:
        low = 6;
        break;
      case 11:
      case 12:
        low = 7;
        break;
      case 13:
      case 14:
        low = 8;
        break;
      case 15:
      case 16:
        low = 0;
        break;
      case 17:
      case 18:
        low = 10;
        break;
      case 19:
      case 20:
        low = 11;
        break;
      default:
        low = 12;
    }

    const l = low % 8;

    chrome.runtime.sendMessage(
      {
        message: "plumBlossom",
        shangYao: up,
        xiaYao: l
      },
      (response) => {
        if (response.message === "success") {

          document.querySelector("div.plumResult").innerHTML = "";

          let element = document.querySelector("div.plumResult").innerHTML;
          const hexagram = response.result;

          element = element + "<h5>Name</h5>";
          element = element + `${hexagram.name}`;

          const image = document.createElement("img");
          image.src = hexagram.image;
          document.querySelector("div.plumResult").appendChild(image);

          element = element + "<h5>Meaning</h5>";
          element = element + `${hexagram.meaning}`;
          
          element = element + "<h5>Fortune</h5>";
          element = element +  `${hexagram.Fortune}`;

          element = element + "<h5>Love</h5>";
          element = element + `${hexagram.Love}`;

          element = element + "<h5>Waiting For Someone</h5>";
          element = element + `${hexagram.WaitingForSomeone}`;

          element = element + "<h5>Lost Property</h5>";
          element = element +  `${hexagram.LostProperty}`;

          element = element + "<h5>Travel</h5>";
          element = element + `${hexagram.Travel}`;

          element = element + "<h5>Exam</h5>";
          element = element + `${hexagram.Exam}`;

          document.querySelector("div.plumResult").innerHTML += element;
        }
      }
    );
  });

  document
  .querySelector("button.clear")
  .addEventListener("click", function () {
    document.querySelector("div.plumResult").innerHTML = "";
  } );
