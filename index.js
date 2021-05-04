

firstSearchForm=document.getElementById("first-search-form")
secondSearchForm=document.getElementById("second-search-form")
firstSearchUl=document.getElementById("first-search-ul")
secondSearchUl=document.getElementById("second-search-ul")
//add event listener to left form
firstSearchForm.addEventListener("submit",function(event){getSearchResult(event,firstSearchUl)})

//add event listener to second form
secondSearchForm.addEventListener("submit",function(event){
getSearchResult(event,secondSearchUl)})


async function getSearchResult(e,searchUl){
	e.preventDefault(); 
	searchBar=e.target.querySelector('input[type=text]')
	const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchBar.value}&key=${youtube-key}`)
			const data = await response.json()
			console.log(data)
			// const channelId = await data["items"][0].id.channelId
			const searchResult = await data["items"]
	 		// console.log(channelId)
			// getSubcribers(channelId)
			showSearchResult(searchResult,searchUl)
}

function showSearchResult(list,searchUl){
	let filtered = filterUniqueChannel(list)	
	//console.log(filtered)
	searchUl.textContent=""
	for(item of filtered){
		console.log(item.snippet.thumbnails.default.url)
		let li=document.createElement("li")
		li.data=item.snippet.channelId
		li.addEventListener("click",getChannel)
		let img=document.createElement("img")
		let channelName=document.createElement("h3")
		img.src=item.snippet.thumbnails.default.url
		channelName.textContent=`${item.snippet.channelTitle}`
		li.appendChild(img)
		li.appendChild(channelName)
		searchUl.appendChild(li)
		
	}	
}
async function getChannel(e){
	fetch(`https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${e.target.data}&key=${youtube-key}`)
		.then(response => response.json())
		.then(data => {	
		 //let	imgURL = data["items"][0].brandingSettings.image.bannerExternalUrl
				//covImage.src = imgURL;
				console.log(data)
			})
}
//filters result search based on channelTitle
function filterUniqueChannel(list){
	let channels={}
	var filtered = list.filter(obj => !channels[obj.snippet.channelTitle] && (channels[obj.snippet.channelTitle] = true))
	return filtered
}



