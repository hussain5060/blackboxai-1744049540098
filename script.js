// Current date track karenge
let currentDate = new Date();

// Calendar render karega
function renderCalendar() {
    const monthYear = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    
    // Month aur year show karega
    const months = ["January", "February", "March", "April", "May", "June", 
                   "July", "August", "September", "October", "November", "December"];
    monthYear.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    
    // Pehla aur last day of month
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    // Days grid ko clear karega
    daysContainer.innerHTML = '';
    
    // Empty cells for previous month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDiv = document.createElement('div');
        daysContainer.appendChild(emptyDiv);
    }
    
    // Current month ke days
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        
        // Aaj ke din ko highlight karega
        const today = new Date();
        if (i === today.getDate() && 
            currentDate.getMonth() === today.getMonth() && 
            currentDate.getFullYear() === today.getFullYear()) {
            dayDiv.classList.add('today');
        }
        
        daysContainer.appendChild(dayDiv);
    }
    
    // Next month ke empty cells
    const totalCells = firstDay.getDay() + lastDay.getDate();
    const remainingCells = 7 - (totalCells % 7);
    if (remainingCells < 7) {
        for (let i = 0; i < remainingCells; i++) {
            const emptyDiv = document.createElement('div');
            daysContainer.appendChild(emptyDiv);
        }
    }
}

// Month navigation
document.getElementById('prev-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Add event button
document.getElementById('add-event').addEventListener('click', () => {
    alert("Event add karne ka feature baad mein implement karenge!");
});

// Pehli baar calendar render karega
renderCalendar();