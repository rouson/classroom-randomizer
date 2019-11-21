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
  $courseDiv.append(studentListElement(shuffle(students)));

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

const displayClassroomInfo = () => {
  return fetchRoomData("./data/rooms.json").then(roomList => {
    roomList.forEach(createRoomElement);
  });
};

const displayCoursesInfo = () => {
  return fetchRoomData("./data/courses.json").then(courseList => {
    courseList.forEach(createCourseElement);
  });
};

const displayAllTheInfo = () => {
  displayClassroomInfo().then(displayCoursesInfo);
};

$(displayAllTheInfo);
