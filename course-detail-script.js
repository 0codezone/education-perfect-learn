// JavaScript functionality to load course details
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("course");
  const courseDescription = document.querySelector("#course-description");

  // Fetch the courses data from the JSON file
  fetch("./course.json")
    .then((response) => response.json())
    .then((data) => {
      // Find the course with the matching courseId
      const course = data.find((course) => course.id.toString() === courseId);
      if (course) {
        // Display the course details
        courseDescription.innerHTML = `
            <h3>${course.title}</h3>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Level:</strong> ${course.level}</p>
            <p><strong>Price:</strong> ${course.price}</p>
          `;
      } else {
        courseDescription.innerHTML = "<p>Course details not found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching courses data:", error);
      courseDescription.innerHTML = "<p>Failed to load course details.</p>";
    });
});
