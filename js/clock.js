function updateDate() {
    const now = new Date();
    const dateOptions = { 
        weekday: 'short', 
        day: '2-digit', 
        month: 'short'
    };
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    const dateString = now.toLocaleDateString('en-GB', dateOptions).replace(/,/g, '');
    let timeString = now.toLocaleTimeString('en-GB', timeOptions);
    timeString = timeString.replace(/(:)(?=[^:]*$)/, '/');
    
    const dateElement = document.getElementById('current-date');
    dateElement.innerHTML = `<span>${dateString}</span>&nbsp;<span class="time">${timeString}</span>`;
    dateElement.style.display = 'flex';  // Show the date/time element
}
updateDate();
setInterval(updateDate, 1000);
