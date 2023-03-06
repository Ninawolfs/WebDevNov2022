
// async function MakeShortURL() {
//     // Step 1: get the link from the input tag
//     const longURL = LinkNeedToBeShorten.value.trim();
  
//     // Step 2: encode the link
//     const encodedURL = encodeURIComponent(longURL);
  
//     // Step 3: add the encoded link to the base URL
//     const url = baseURL + encodedURL;
  
//     // Step 4: send a GET request to the URL
//     const response = await fetch(url);
  
//     // Step 5: get the response from the server
//     const data = await response.json();
  
//     // Step 6: make new object from the response for ShortURL link and QRCode image
//     const shortURL = data.shortenedUrl;
//     const qrCodeURL = QRCode + encodeURIComponent(shortURL);
  
//     // Step 7: set the src attribute of the QRCode image to the QRCode image URL
//     QRCodeImage.src = qrCodeURL;
  
//     // Step 8: set the innerHTML of the shortURLText to the ShortURL link
//     shortURLText.innerHTML = `Short URL: <a href="${shortURL}" target="_blank">${shortURL}</a>`;
  
//     // Step 9: set the href attribute of the shortURLText to the ShortURL link
//     shortURLText.href = shortURL;
//   }


const LinkNeedToBeShorten = document.getElementById("link"); // <input> tag
const QRCodeImage = document.getElementById("qrcode"); // <img> tag
const shortURLText = document.getElementById("short_url"); // <p> tag

// do not change these variables
let baseURL = "https://csclub.uwaterloo.ca/~phthakka/1pt/addURL.php?url="; // base URL for 1pt.co
//let QRCode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="; // base URL for QR Code image


async function MakeShortURL(){
    console.log(LinkNeedToBeShorten.value)
    console.log(encodeURIComponent(LinkNeedToBeShorten.value))

    const FullLink = baseURL += encodeURIComponent(LinkNeedToBeShorten.value)
    console.log(FullLink)

    let res = await fetch(FullLink);
    let data = res.json()

    data.then(obj=>{
        const ShortObj = {
            ShortURL: `https://lpt.co/${obj.short}`,
            QRImage: ''
        }
        console.log(ShortObj)
        shortURLText.innerHTML=`shorturl: ${ShortObj.ShortURL}`

        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: ShortObj.ShortURL,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    })
    }

