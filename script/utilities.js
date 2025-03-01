// Track Activity History

function activityHistory(id2, title) {
  //   console.log(id2, title);
  const taskTitle = title;
  //   console.log(taskTitle);

  const activityContainer = document.getElementById(id2);
  const div = document.createElement("div");

  div.classList.add("mb-4", "p-4", "bg-[#F4F7FF]", "rounded-lg");

  div.innerHTML = `
                  You have completed the task ${taskTitle} on time 
                  at ${new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}</p>       
        `;
  activityContainer.appendChild(div);
}

// Task calculation

let count = 0;
function taskCompleted() {
  taskRemaining = taskRemaining - 1;
  document.getElementById("task-remaining").innerText = taskRemaining;
  count++;

  if (taskRemaining === 0) {
    alert("Congrats!!! You have completed all the current task");
  }
  if (count === 6) {
    // alert("Board updated successfully");
    return;
  }
}

// Total task Completed
function totalTask() {
  totalTaskCompleted = totalTaskCompleted + 1;
  document.getElementById("total-task").innerText = totalTaskCompleted;
}

const dateToday = document.getElementById("date-today");
const div = document.createElement("div");

// Time format from google

div.classList.add("font-bold");
const options = {
  weekday: "short",
  month: "short",
  day: "2-digit",
  year: "numeric",
};
const formattedDate = new Date()
  .toLocaleDateString("en-US", options)
  .replace(",", "");

div.innerHTML = `<p>${formattedDate}</p>`;

dateToday.appendChild(div);
