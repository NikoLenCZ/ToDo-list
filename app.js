// TIME FUNCTION
// ? GET DATE AND TIME WITH REFRESH

function thisDay() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let hours = today.getHours();
  let minutes = today.getMinutes().toString().padStart(2, '0');
  let seconds = today.getSeconds().toString().padStart(2, '0');
  let weekday = today.toLocaleString('cs-CZ', { weekday: 'long' });

  document.querySelector('.date').textContent = `${weekday} ${day}. ${month}. ${year}`;
  document.querySelector('.time').textContent = `${hours} : ${minutes} : ${seconds}`;
}
setInterval(thisDay, 1000);

// ? CREATE NEW ELEMENT - TODAY SECTION
let sectionToday = document.getElementsByClassName('todaySection');
let div = document.createElement('div');
div.setAttribute('class', 'today');
div.innerHTML = `
        <div class="dateTime">
        <h2 class="date"></h2>
        <div class="time"></div>
        </div>
`;
sectionToday[0].appendChild(div);

