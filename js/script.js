const hour = document.getElementById('clock-hour');
const minutes = document.getElementById('clock-minutes');
const secunds = document.getElementById('clock-secunds');

const textHour = document.getElementById('text-hour');
const texMinutes = document.getElementById('text-minutes');
const textAmPm = document.getElementById('text-ampm');
const dateDay = document.getElementById('date-day');
const dateMonth = document.getElementById('date-month');
const dateYrar = document.getElementById('date-yrar');

const clock = () => {
   let date = new Date;

   let hh = date.getHours() * 30;
   let mm = date.getMinutes() * 6;
   let ss = date.getSeconds() * 6;

   hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
   minutes.style.transform = `rotateZ(${mm}deg)`;
   secunds.style.transform = `rotateZ(${ss}deg)`;
}

const clockText = () => {
   let date = new Date();

   //let ampm;
   let hh = date.getHours();
   let mm = date.getMinutes();
   let dat = date.getDate();
   let month = date.getMonth();
   let year = date.getFullYear();

   //if (hh >= 12) {
   //   hh = hh - 12;
   //   ampm = 'PM';
   //} else {
   //   ampm = 'AM';
   //}

   //if (hh == 0) hh = 12;
   if (hh == 0) hh = `0${hh}`;

   textHour.innerHTML = `${hh}:`;

   if (mm < 10) mm = `0${mm}`;

   texMinutes.innerHTML = `${mm}`;
   //textAmPm.innerHTML = ampm;

   let months = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   dateDay.innerHTML = dat;
   dateMonth.innerHTML = `${months[month]},`;
   dateYrar.innerHTML = year;
}

setInterval(clock, 1000);
setInterval(clockText, 1000);

//********************************************************************** */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
   // Add or remove the dark / icon theme
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)
   // We save the theme and the current icon that the user chose
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})