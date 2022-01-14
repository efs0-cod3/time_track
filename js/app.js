let dBtn = document.getElementsByClassName('daily-btn')[0]
let wBtn = document.getElementsByClassName('weekly-btn')[0]
let mBtn = document.getElementsByClassName('monthly-btn')[0]

let data = [{
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self-care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

let myData = JSON.parse(JSON.stringify(data))

let stats = document.getElementsByClassName('stats')[0];
myData.forEach((item) => {
  let cards = document.createElement('div')
  cards.classList.add('cont', `${item.title}`);
  cards.innerHTML = `
  <div class="cont__info stats__${item.title}">
   <div class="stats__title">
      <h2 class="stats__title-name ${item.title}-title">${item.title}</h2>
       <p>...</p>
     </div>
    <div class="stats__hours-section">
      <div class="daily">
         <p class="recent">
         ${item.timeframes.daily.current}hrs
           <!-- daily -->
         </p>
         <p class="previous">
           Yesterday - ${item.timeframes.daily.previous}hrs
           <!-- daily -->
         </p>
       </div>

       <div class="weekly">
         <p class="recent">
         32hrs
          <!-- weekly -->
        </p>
        <p class="previous">
           Last Week - 36hrs
           <!-- weekly -->
         </p>

       </div>
       <div class="monthly">
         <p class="recent">
           103hrs
           <!-- monthly -->
         </p>
         <p class="previous">
          Last Month - 128hrs
          <!-- monthly -->
         </p>
      </div>
     </div>
  </div>
 </div>  
  `

  stats.append(cards)
})

dBtn.addEventListener('click', () => {
  dBtn.classList.add('daily-btn--active')

  if(dBtn.classList == 'daily-b')
})