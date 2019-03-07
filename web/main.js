const createRoomElement = (roomSpec) => {
  const roomId = roomSpec.ID
  const numberOfSeats = roomSpec.number_of_seats

  const ROOM_NUMBER_REGEX = /([a-z]+)(\d+)/i
  const match = ROOM_NUMBER_REGEX.exec(roomId)

  if (match === null) {
    throw new Error("Invalid Room Id!")
  }

  const roomNumber = match[2]

  document.write(`<h2> ${roomNumber} </h2>`)
  document.write(`ID: ${roomId}<br>`)
  document.write(`number of seats: ${numberOfSeats}<br>`)
}

str = "<h3>" + "Room 0" + "</h2>"
str1 = `Damien likes: apples`

var roomsJson =
'{"classroom": [ {"ID":"room7", "number_of_seats": 15}, {"ID": "room8", "number_of_seats": 25} ]}';

roomList = JSON.parse(roomsJson).classroom

for (let next = 0, count = roomList.length; next < count; next++) {
  const room = roomList[next]
  createRoomElement(room)
}


// var classes_json =
// '{ "course" : [ {"subject":"Math 7", "trimester":"Spring 2019", "section":"1st period",  "students":["Zendo", "Jeremiah"]}, {"subject":"Spanish 7", "trimester":"Spring 2019", "section":"2nd period", "students":["Hamilton", "Avi"]} ]}';

// class_list = JSON.parse(classes_json)

// document.write("<h3>Class 0</h2>")
// document.write("Subject: ",class_list.course[0].subject,"<br>");
// document.write("Trimester: ",class_list.course[0].trimester,"<br>");
// document.write("Section: ",class_list.course[0].section,"<br>");
// document.write("Students: ",class_list.course[0].students,"<br>");

// document.write("<h3>Class 1</h2>")
// document.write("Subject: ",class_list.course[1].subject,"<br>");
// document.write("Trimester: ",class_list.course[1].trimester,"<br>");
// document.write("Section: ",class_list.course[1].section,"<br>");
// document.write("Students: ",class_list.course[1].students,"<br>");