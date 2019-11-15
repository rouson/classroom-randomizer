const BASE_SITE = "http://localhost:8888";
const ROOM_NUMBER_REGEX = /([a-z]+)(\d+)/i;

const createRoomElement = roomSpec => {
  const roomId = roomSpec.ID;
  const numberOfSeats = roomSpec.number_of_seats;
  const match = ROOM_NUMBER_REGEX.exec(roomId);

  if (match === null) {
    throw new Error("Invalid Room Id!");
  }

  const roomNumber = match[2];

  const $roomDiv = $("<div>");

  $roomDiv.append(`<h2> ${roomNumber} </h2>`);
  $roomDiv.append(`ID: ${roomId}<br>`);
  $roomDiv.append(`number of seats: ${numberOfSeats}<br>`);

  $("#classrooms").append($roomDiv);
};

const studentListElement = (students) => {
  const $studentList = $("<ul>");

  students.forEach(student => {
    $studentList.append(`<li> ${student} </li>`)
  });

  return $studentList;
};

const createCourseElement = courseSpec => {
  const {subject, trimester, students} = courseSpec;


  const $courseDiv = $("<div>");

  $courseDiv.append(`<h2> ${subject} </h2>`);
  $courseDiv.append(`<h3> ${trimester} </h3>`);
  $courseDiv.append(studentListElement(students));

  $("#courses").append($courseDiv);
};

const fetchRoomData = (roomFilename) => {
  const url = `${BASE_SITE}/${roomFilename}`;

  return window
    .fetch(url)
    .then(response => response.json())
    .catch(error =>
      alert(`There was an error reading from the file: ${roomFilename}`)
    );
};

// const displayAllTheInfo = () => {
//   fetchRoomData("web/data/rooms.json").then(roomList => {
//     roomList.forEach(createRoomElement);
//   });
//   fetchRoomData("web/data/courses.json").then(courseList => {
//     courseList.forEach(createCourseElement);
//   });
// };

const displayClassroomInfo = () => {
  return fetchRoomData("web/data/rooms.json").then(roomList => {
    roomList.forEach(createRoomElement);
  });
};

const displayCoursesInfo = () => {
  return fetchRoomData("web/data/courses.json").then(courseList => {
    courseList.forEach(createCourseElement);
  });
};

// const displayAllTheInfo = () => {
//   displayClassroomInfo();
//   displayCoursesInfo();
// };

const displayAllTheInfo = () => {
  displayClassroomInfo().then(displayCoursesInfo);
};

$(displayAllTheInfo);


const add = (a, b) => {
  return a + b;
}

const fullName = (firstName, lastName) => {
  return firstName + " " + lastName;
}


const result = add(1, 1)


// // Damian to do  vvv

// // var classes_json =
// // '{ "course" : [ {"subject":"Math 7", "trimester":"Spring 2019", "section":"1st period",  "students":["Zendo", "Jeremiah"]}, {"subject":"Spanish 7", "trimester":"Spring 2019", "section":"2nd period", "students":["Hamilton", "Avi"]} ]}';

// // class_list = JSON.parse(classes_json)

// // document.write("<h3>Class 0</h2>")
// // document.write("Subject: ",class_list.course[0].subject,"<br>");
// // document.write("Trimester: ",class_list.course[0].trimester,"<br>");
// // document.write("Section: ",class_list.course[0].section,"<br>");
// // document.write("Students: ",class_list.course[0].students,"<br>");

// // document.write("<h3>Class 1</h2>")
// // document.write("Subject: ",class_list.course[1].subject,"<br>");
// // document.write("Trimester: ",class_list.course[1].trimester,"<br>");
// // document.write("Section: ",class_list.course[1].section,"<br>");
// // document.write("Students: ",class_list.course[1].students,"<br>");
