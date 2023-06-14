function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    document.getElementById("month").textContent = seconds.toString().padStart(2, "0");                
    document.getElementById("week").textContent = now.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();        
    document.getElementById("month").textContent = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }).toUpperCase();
    document.getElementById("separator").style.visibility = seconds % 2 === 0 ? "visible" : "hidden";
    
  }

  setInterval(updateClock, 1000);