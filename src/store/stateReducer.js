import {createSlice} from "@reduxjs/toolkit";

const initialState = [{
    "date": "2022-08-08T19:21:00.174Z",
    "title": "Et distinctio a quo provident.",
    "type": "dog",
    "duration": 90761,
    "id": "1"
}, {
    "date": "2022-08-09T04:21:53.386Z",
    "title": "Qui placeat sed similique ratione autem sint.",
    "type": "bird",
    "duration": 67476,
    "id": "2"
}, {
    "date": "2022-08-08T22:50:05.574Z",
    "title": "Quaerat inventore corporis iusto cupiditate delectus illum corrupti cupiditate est.",
    "type": "fish",
    "duration": 68220,
    "id": "3"
}, {
    "date": "2022-08-08T14:28:17.715Z",
    "title": "Et ut dolor occaecati et.",
    "type": "snake",
    "duration": 35375,
    "id": "4"
}, {
    "date": "2022-08-09T08:13:34.683Z",
    "title": "Aut rerum quibusdam.",
    "type": "crocodilia",
    "duration": 8232,
    "id": "5"
}, {
    "date": "2022-08-08T20:37:20.019Z",
    "title": "Quisquam possimus est quod.",
    "type": "bear",
    "duration": 23099,
    "id": "6"
}, {
    "date": "2022-08-08T19:15:08.241Z",
    "title": "Illo temporibus aut dolores fugiat perferendis earum consequatur voluptas.",
    "type": "fish",
    "duration": 44727,
    "id": "7"
}, {
    "date": "2022-08-08T21:19:48.957Z", "title": "Earum eveniet amet.", "type": "cetacean", "duration": 6784, "id": "8"
}, {
    "date": "2022-08-09T03:22:36.993Z",
    "title": "Odio odio error repellendus quas dolorum occaecati est nulla.",
    "type": "bear",
    "duration": 60576,
    "id": "9"
}, {
    "date": "2022-08-09T04:23:14.912Z",
    "title": "Consequatur temporibus omnis non ab corporis repellat consectetur est animi.",
    "type": "cetacean",
    "duration": 51553,
    "id": "10"
}, {
    "date": "2022-08-09T00:47:54.980Z",
    "title": "Consectetur consequuntur laudantium.",
    "type": "rabbit",
    "duration": 70562,
    "id": "11"
}, {
    "date": "2022-08-08T16:54:12.720Z",
    "title": "Nemo tempore laudantium numquam.",
    "type": "cetacean",
    "duration": 68084,
    "id": "12"
}, {
    "date": "2022-08-08T20:22:08.202Z",
    "title": "Praesentium occaecati exercitationem minus qui et in ut.",
    "type": "fish",
    "duration": 18718,
    "id": "13"
}, {
    "date": "2022-08-09T04:34:14.530Z",
    "title": "Quidem fuga quia reprehenderit sed eum magni eos veniam veritatis.",
    "type": "lion",
    "duration": 33231,
    "id": "14"
}, {
    "date": "2022-08-08T20:41:14.056Z",
    "title": "Voluptatem velit quam aut modi enim iste soluta quia.",
    "type": "rabbit",
    "duration": 50686,
    "id": "15"
}, {
    "date": "2022-08-09T03:40:56.697Z", "title": "Tempore tenetur et.", "type": "fish", "duration": 50335, "id": "16"
}, {
    "date": "2022-08-09T02:00:39.718Z",
    "title": "Quasi et sit eaque voluptatibus perferendis culpa commodi quibusdam nam.",
    "type": "bear",
    "duration": 90039,
    "id": "17"
}, {
    "date": "2022-08-08T19:32:09.634Z",
    "title": "Deleniti amet ducimus doloribus corporis.",
    "type": "bear",
    "duration": 4710,
    "id": "18"
}, {
    "date": "2022-08-08T11:16:38.764Z", "title": "Consequatur dicta aut.", "type": "cat", "duration": 28219, "id": "19"
}, {
    "date": "2022-08-08T13:11:27.469Z", "title": "Rem ut ab.", "type": "rabbit", "duration": 24757, "id": "20"
}, {
    "date": "2022-08-08T15:26:14.422Z",
    "title": "Aut repudiandae quibusdam.",
    "type": "cat",
    "duration": 81814,
    "id": "21"
}, {
    "date": "2022-08-08T22:52:06.461Z",
    "title": "Officia optio quos non cum cupiditate.",
    "type": "cow",
    "duration": 9223,
    "id": "22"
}, {
    "date": "2022-08-08T15:45:41.694Z",
    "title": "Culpa odio perferendis vitae.",
    "type": "cetacean",
    "duration": 77276,
    "id": "23"
}, {
    "date": "2022-08-08T15:48:07.152Z",
    "title": "Explicabo nesciunt dolorum enim architecto.",
    "type": "bird",
    "duration": 19518,
    "id": "24"
}, {
    "date": "2022-08-09T04:36:43.988Z",
    "title": "Nesciunt fugiat rerum qui velit corrupti culpa.",
    "type": "insect",
    "duration": 97917,
    "id": "25"
}, {
    "date": "2022-08-08T10:29:49.065Z",
    "title": "Recusandae inventore est.",
    "type": "horse",
    "duration": 75473,
    "id": "26"
}, {
    "date": "2022-08-08T20:35:04.522Z",
    "title": "Voluptas aut omnis quos et.",
    "type": "insect",
    "duration": 14809,
    "id": "27"
}, {
    "date": "2022-08-08T13:02:27.504Z",
    "title": "Id ipsa non expedita.",
    "type": "rabbit",
    "duration": 90700,
    "id": "28"
}, {
    "date": "2022-08-09T03:04:47.348Z",
    "title": "Et dignissimos at qui a ad beatae.",
    "type": "insect",
    "duration": 69347,
    "id": "29"
}, {
    "date": "2022-08-09T09:38:36.372Z",
    "title": "Sit repellendus aliquid ab alias qui reiciendis recusandae aliquid id.",
    "type": "bear",
    "duration": 11605,
    "id": "30"
}, {
    "date": "2022-08-09T01:18:15.868Z",
    "title": "Laudantium nesciunt quia doloremque quod modi aspernatur omnis debitis.",
    "type": "lion",
    "duration": 33293,
    "id": "31"
}, {
    "date": "2022-08-08T16:08:04.204Z",
    "title": "Impedit voluptatem sint nobis odit fuga error voluptatum omnis dolorem.",
    "type": "horse",
    "duration": 68704,
    "id": "32"
}, {
    "date": "2022-08-08T10:34:51.792Z",
    "title": "Ducimus omnis eum maiores quibusdam in.",
    "type": "snake",
    "duration": 44066,
    "id": "33"
}, {
    "date": "2022-08-09T06:40:02.766Z",
    "title": "Quia veritatis numquam quis et illo optio assumenda et.",
    "type": "horse",
    "duration": 8575,
    "id": "34"
}, {
    "date": "2022-08-08T18:17:24.979Z",
    "title": "Modi alias veritatis vero iusto.",
    "type": "cat",
    "duration": 21807,
    "id": "35"
}, {
    "date": "2022-08-08T23:19:32.276Z",
    "title": "Maxime autem eius quae ut quia facilis eveniet eaque vel.",
    "type": "lion",
    "duration": 84195,
    "id": "36"
}, {
    "date": "2022-08-08T13:53:31.101Z",
    "title": "Qui officiis ut magni animi.",
    "type": "bird",
    "duration": 55551,
    "id": "37"
}, {
    "date": "2022-08-09T04:36:17.292Z",
    "title": "Repellat blanditiis sint.",
    "type": "cat",
    "duration": 45628,
    "id": "38"
}, {
    "date": "2022-08-09T09:54:11.556Z",
    "title": "Vitae nemo dolore quia fuga ipsum rerum et id.",
    "type": "lion",
    "duration": 62578,
    "id": "39"
}, {
    "date": "2022-08-09T09:15:58.643Z",
    "title": "Eveniet qui et unde est cumque.",
    "type": "crocodilia",
    "duration": 56200,
    "id": "40"
}, {
    "date": "2022-08-08T15:26:33.913Z",
    "title": "Similique id ad ratione placeat error culpa.",
    "type": "cow",
    "duration": 64927,
    "id": "41"
}, {
    "date": "2022-08-09T02:37:09.986Z",
    "title": "Voluptas incidunt fuga molestiae odit facilis et non nihil aperiam.",
    "type": "cat",
    "duration": 794,
    "id": "42"
}, {
    "date": "2022-08-08T16:17:27.506Z",
    "title": "Veritatis velit qui sit et quas quo quis rem.",
    "type": "horse",
    "duration": 37174,
    "id": "43"
}, {
    "date": "2022-08-08T15:19:13.607Z",
    "title": "Qui et accusantium exercitationem quidem.",
    "type": "horse",
    "duration": 79158,
    "id": "44"
}, {
    "date": "2022-08-08T10:46:39.440Z",
    "title": "Rerum placeat similique earum aut voluptatem.",
    "type": "bear",
    "duration": 18214,
    "id": "45"
}, {
    "date": "2022-08-08T13:42:22.135Z",
    "title": "Aut ut dolorem dolore.",
    "type": "crocodilia",
    "duration": 73793,
    "id": "46"
}, {
    "date": "2022-08-08T13:30:20.737Z", "title": "Sit nostrum veniam.", "type": "snake", "duration": 4441, "id": "47"
}, {
    "date": "2022-08-08T13:13:06.438Z",
    "title": "Voluptatem earum voluptates expedita autem aperiam earum sequi nulla at.",
    "type": "cetacean",
    "duration": 67117,
    "id": "48"
}, {
    "date": "2022-08-08T23:07:07.634Z",
    "title": "Consequatur consequatur voluptas repellat ducimus nobis aut et inventore.",
    "type": "cat",
    "duration": 5058,
    "id": "49"
}, {
    "date": "2022-08-08T19:40:13.816Z",
    "title": "Amet voluptatem dolorum velit aliquid maxime dicta.",
    "type": "cow",
    "duration": 15861,
    "id": "50"
}, {
    "date": "2022-08-09T01:17:32.776Z",
    "title": "Architecto id deleniti.",
    "type": "insect",
    "duration": 24987,
    "id": "51"
}, {
    "date": "2022-08-08T22:47:47.746Z",
    "title": "Occaecati dolorem omnis qui.",
    "type": "cetacean",
    "duration": 48131,
    "id": "52"
}, {
    "date": "2022-08-09T03:58:16.727Z",
    "title": "Veritatis autem voluptate et quibusdam.",
    "type": "lion",
    "duration": 85630,
    "id": "53"
}, {
    "date": "2022-08-08T10:31:52.540Z",
    "title": "Qui iusto est consequuntur voluptas laborum facilis saepe velit.",
    "type": "fish",
    "duration": 68878,
    "id": "54"
}, {
    "date": "2022-08-08T14:16:54.022Z", "title": "Et ullam et.", "type": "lion", "duration": 16029, "id": "55"
}, {
    "date": "2022-08-08T12:17:46.958Z",
    "title": "Quis voluptatem quia et est sed sit placeat tenetur autem.",
    "type": "insect",
    "duration": 5731,
    "id": "56"
}, {
    "date": "2022-08-08T22:35:12.834Z",
    "title": "Consequuntur maiores veritatis ut eum.",
    "type": "rabbit",
    "duration": 64006,
    "id": "57"
}, {
    "date": "2022-08-08T18:15:25.494Z",
    "title": "Et similique rerum voluptatem officia possimus sit optio.",
    "type": "rabbit",
    "duration": 5130,
    "id": "58"
}]

const slice = createSlice({
    name: "state", initialState: initialState, reducers: {}
})

export const stateReducer = slice.reducer
export const {} = slice.actions