const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('{
	"responseCode": 200,
	"responseMessage": "Success",
	"responseData": {
		"notifications": [{
				"notificationType": 0,
				"message": "New feature coming soon!",
				"image": "",
				"video": ""
			},
			{
				"notificationType": 1,
				"message": "",
				"image": "https://cdn2.unrealengine.com/fall-guys-home-page-hero-background-mobile-375x513-ae8876c70b1e.jpg",
				"video": ""
			},
			{
				"notificationType": 1,
				"message": "New feature coming soon!",
				"image": "https://assets-prd.ignimgs.com/2022/11/05/fall-guys-button-2022-1667627615731.jpg",
				"video": ""
			},
			{
				"notificationType": 2,
				"message": "",
				"image": "",
				"video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
			},
			{
				"notificationType": 1,
				"message": "",
				"image": "https://www.gamereactor.eu/media/97/youcannow_3339733b.jpg",
				"video": ""
			},
			{
				"notificationType": 2,
				"message": "",
				"image": "",
				"video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
			}
		]
	}
}')
})
app.listen(process.env.PORT || 3000)
