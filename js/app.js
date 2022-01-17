const dBtn = document.getElementsByClassName('daily-btn')[0];
const wBtn = document.getElementsByClassName('weekly-btn')[0];
const mBtn = document.getElementsByClassName('monthly-btn')[0];
const daily = document.getElementsByClassName('daily');
const weekly = document.getElementsByClassName('weekly');
const monthly = document.getElementsByClassName('monthly');

// set active to daily button and section
let myData = []
let stats = document.getElementsByClassName('stats')[0];

function getHours() {
  fetch('js/data.json')
  .then((res) => res.json())
  .then((data) => {
    myData = data;
    let cards = '';
        myData.forEach((data) => {
          cards += `
          <div class='card-container'>
          <div class="cont ${data.title}"></div>
        <div class="cont__info stats__${data.title}">
   <div class="stats__title">
      <h2 class="stats__title-name ${data.title}-title">${data.title}</h2>
       <p>...</p>
     </div>
    <div class="stats__hours-section">
      <div class="daily daily--active">
         <p class="recent">
         ${data.timeframes.daily.current}hrs
           <!-- daily -->
         </p>
         <p class="previous">
           Yesterday - ${data.timeframes.daily.previous}hrs
           <!-- daily -->
         </p>
       </div>

       <div class="weekly">
         <p class="recent">
         ${data.timeframes.weekly.current}hrs
          <!-- weekly -->
        </p>
        <p class="previous">
           Last Week - ${data.timeframes.weekly.previous}hrs
           <!-- weekly -->
         </p>

       </div>
       <div class="monthly">
         <p class="recent">
         ${data.timeframes.monthly.current}hrs
           <!-- monthly -->
         </p>
         <p class="previous">
          Last Month - ${data.timeframes.monthly.previous}hrs
          <!-- monthly -->
         </p>
      </div>
     </div>
  </div>
 </div>
 </div>
          `
          
        });
    
    
        stats.innerHTML = cards
      })
}
getHours()


const showDaily = () => {
  // button
  dBtn.classList.add('btn--active')
  // sections
  for (let i = 0; i < daily.length; i++) {
    daily[i].classList.add('daily--active');
  }
}
// when daily btn is active this remove active from the other buttons and sections
const remove_wm = () => {
  wBtn.classList.remove('btn--active');
  mBtn.classList.remove('btn--active');

  for (let i = 0; i < weekly.length; i++) {
    weekly[i].classList.remove('weekly--active');
  }
  for (let i = 0; i < monthly.length; i++) {
    monthly[i].classList.remove('monthly--active');
  }
}
// set active to weekly button and section
const showWeekly = () => {
  // button
  wBtn.classList.add('btn--active');
  // sections
  for (let i = 0; i < weekly.length; i++) {
    weekly[i].classList.add('weekly--active');
  }
}

// when weekly btn is active this remove active from the other buttons and sections
const remove_dm = () => {
  dBtn.classList.remove('btn--active');
  mBtn.classList.remove('btn--active');

  for (let i = 0; i < daily.length; i++) {
    daily[i].classList.remove('daily--active');
  }
  for (let i = 0; i < monthly.length; i++) {
    monthly[i].classList.remove('monthly--active');
  }
}

// set active to monthly button and section
const showMonthly = () => {
  // button
  mBtn.classList.add('btn--active');
  // sections
  for (let i = 0; i < monthly.length; i++) {
    monthly[i].classList.add('monthly--active');
  }
}
// when monthly btn is active this remove active from the other buttons and sections
const remove_dw = () => {
  // btn
  dBtn.classList.remove('btn--active');
  wBtn.classList.remove('btn--active');

  // sections
  for (let i = 0; i < daily.length; i++) {
    daily[i].classList.remove('daily--active');
  }
  for (let i = 0; i < weekly.length; i++) {
    weekly[i].classList.remove('weekly--active');
  }
}

dBtn.addEventListener('click', () => {
  showDaily()
  remove_wm()

})
wBtn.addEventListener('click', () => {
  showWeekly()
  remove_dm()
})
mBtn.addEventListener('click', () => {
  showMonthly()
  remove_dw()
})