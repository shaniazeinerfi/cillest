// Add a new item to the leaderboard list
const newListItem = document.createElement("li");
newListItem.textContent = "New item";
leaderboardList.appendChild(newListItem);

// Remove an item from the leaderboard list
const itemToRemove = leaderboardList.querySelector("li:last-child");
leaderboardList.removeChild(itemToRemove);

// Add an event listener to the leaderboard list
leaderboardList.addEventListener("click", (event) => {
  console.log("Leaderboard list clicked!");
});
