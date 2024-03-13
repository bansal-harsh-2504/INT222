//29-1-24


let items = ["a", 'b', 'c', 'd'];
console.log(items);
console.timeLog('a');
console.table(items);
console.timeEnd('a');
console.clear();

function updateProgress() {
    console.count("Progress update");
    // Simulate some work
    if (progress === 100) {
      console.count(""); // Reset the "Progress update" counter
    }
  }
  
  setInterval(updateProgress, 1000);
  
  // Output initially shows increasing counts, then resets when progress reaches 100.
  