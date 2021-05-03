

// Get Subscriber Count
const subCount = document.getElementById('sub-count')

// get Channel cover Image
const covImage = document.getElementById('covImage')

async function getChannelId() {
		const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=TheCodingTrain&key=${youtube_key}`)
			const data = await response.json()
			console.log(data)
			const channelId = await data["items"][0].id.channelId
	// console.log(channelId)
	getSubcribers(channelId)
}
	function getSubcribers(channelId) {
		fetch(`https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${youtube_key}`)
			.then(response => response.json())
			.then(data => {
				
			let	imgURL = data["items"][0].brandingSettings.image.bannerExternalUrl
				covImage.src = imgURL;
			})
}
getChannelId();


