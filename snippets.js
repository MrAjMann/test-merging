fetch(`https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${youtube_name}&key=${youtube_key}`)
.then(response => response.json())
.then(data => {
  
let	imgURL = data["items"][0].brandingSettings.image.bannerExternalUrl
  covImage.src = imgURL;
})

fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtube_name}&key=${youtube_key}`)
.then(response => response.json())
.then(data => {
    console.log(data.items[0]);
    subCount.innerHTML = data["items"][0].statistics.subscriberCount;
})

fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=GoogleDevelopers&key=${youtube_key}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  subCount.innerHTML = data["items"][0].statistics.subscriberCount;
})

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${youtube_key}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  // subCount.innerHTML = data["items"][0].statistics.subscriberCount;
})