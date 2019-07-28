const BASE_SITE = "http://localhost:8888";
const YEAR_REGEX = /([a-z]+) (\d+)/i;

const createCourseElement = courseSpec => {
  const courseTerm = courseSpec.term;
  const courseSubject = courseSpec.subject;
  const match = YEAR_REGEX.exec(courseTerm);

  if (match === null) {
    throw new Error("Invalid Course Term!");
  }

  const year = match[2];

  const $courseDiv = $("<div>");

  $courseDiv.append(`<h2> ${year} </h2>`);
  $courseDiv.append(`Term: ${courseTerm}<br>`);
  $courseDiv.append(`Subject: ${courseSubject}<br>`);

  $("#courses").append($courseDiv);
};

const fetchCourseData = courseFilename => {
  const url = `${BASE_SITE}/${courseFilename}`;

  return window
    .fetch(url)
    .then(response => response.json())
    .catch(error =>
      alert(`There was an error reading from the file: ${courseFilename}`)
    );
};

const displayCourseInfo = () => {
  fetchCourseData("web/data/courses.json").then(courseList => {
    courseList.forEach(createCourseElement);
  });
};

$(() => {
  displayCourseInfo();
});
