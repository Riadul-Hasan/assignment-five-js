let taskRemaining = parseInt(
  document.getElementById("task-remaining").innerText
);

let totalTaskCompleted = parseInt(
  document.getElementById("total-task").innerText
);
// console.log(totalTaskCompleted);

// let count = 0;
// function taskCompleted() {
//   taskRemaining = taskRemaining - 1;
//   document.getElementById("task-remaining").innerText = taskRemaining;
//   count++;

//   if (taskRemaining === 0) {
//     alert("Congrats!!! You have completed all the current task");
//   }
//   if (count === 6) {
//     // alert("Board updated successfully");
//     return;
//   }
// }

if (taskRemaining === 0) {
  alert();
}
if (taskRemaining > 0) {
  // Task 1
  const taskButton = document.getElementById("task-btn-1");
  document.getElementById("task-btn-1").addEventListener("click", function () {
    alert("Board Updated Successfully");
    const taskTitle1 = document.getElementById("task1-title").innerText;
    activityHistory("activity-container", taskTitle1);
    taskButton.disabled = true;

    taskCompleted();
    totalTask();
  });

  // Task 2
  const taskButton2 = document.getElementById("task-btn-2");
  document.getElementById("task-btn-2").addEventListener("click", function () {
    alert("Board updated successfully");
    const taskTitle2 = document.getElementById("task2-title").innerText;
    activityHistory("activity-container", taskTitle2);
    taskButton2.disabled = true;
    let taskNow = taskRemaining - 1;

    taskCompleted();
    totalTask();
  });

  // Task 3
  const taskButton3 = document.getElementById("task-btn-3");
  document.getElementById("task-btn-3").addEventListener("click", function () {
    alert("Board updated successfully");
    const taskTitle3 = document.getElementById("task3-title").innerText;
    activityHistory("activity-container", taskTitle3);
    taskButton3.disabled = true;

    taskCompleted();
    totalTask();
  });

  // Task 4
  const taskButton4 = document.getElementById("task-btn-4");
  document.getElementById("task-btn-4").addEventListener("click", function () {
    alert("Board updated successfully");
    const taskTitle4 = document.getElementById("task4-title").innerText;
    activityHistory("activity-container", taskTitle4);
    taskButton4.disabled = true;

    taskCompleted();
    totalTask();
  });

  // Task 5
  const taskButton5 = document.getElementById("task-btn-5");
  document.getElementById("task-btn-5").addEventListener("click", function () {
    alert("Board updated successfully");
    const taskTitle5 = document.getElementById("task5-title").innerText;
    activityHistory("activity-container", taskTitle5);
    taskButton5.disabled = true;

    taskCompleted();
    totalTask();
  });

  // Task 6
  const taskButton6 = document.getElementById("task-btn-6");
  document.getElementById("task-btn-6").addEventListener("click", function () {
    alert("Board updated successfully");
    const taskTitle6 = document.getElementById("task6-title").innerText;
    activityHistory("activity-container", taskTitle6);
    taskButton6.disabled = true;

    taskCompleted();
    totalTask();
  });

  //   console.log(taskRemaining);
}
