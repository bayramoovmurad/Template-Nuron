class CountdownTimer {
    constructor(deadline, cbChange, cbComplete) {
      this._deadline = deadline;
      this._cbChange = cbChange;
      this._cbComplete = cbComplete;
      this._timerId = null;
      this._out = {
        days: '', hours: '', minutes: '', seconds: '',
        daysTitle: '', hoursTitle: '', minutesTitle: '', secondsTitle: ''
      };
      this._start();
    }
    static declensionNum(num, words){
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    _start() {
      this._calc();
      this._timerId = setInterval(this._calc.bind(this), 1000);
    }
    _calc() {
      const diff = this._deadline - new Date();
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      this._out.days = days < 10 ? '0' + days : days;
      this._out.hours = hours < 10 ? '0' + hours : hours;
      this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
      this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
      this._out.daysTitle = CountdownTimer.declensionNum(days, ['DAY', 'DAY', 'DAY']);
      this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['HRS', 'HRS', 'HRS']);
      this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['MINS', 'MINS', 'MINS']);
      this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['SEC', 'SEC', 'SEC']);
      this._cbChange ? this._cbChange(this._out) : null;
      if (diff <= 0) {
        clearInterval(this._timerId);
        this._cbComplete ? this._cbComplete() : null;
      }
    }
  }

const elDays1 = document.querySelector('.timer-1 .timer__days');
const elHours1 = document.querySelector('.timer-1 .timer__hours');
const elMinutes1 = document.querySelector('.timer-1 .timer__minutes');
const elSeconds1 = document.querySelector('.timer-1 .timer__seconds');


const deadline1 = new Date(Date.now() + (900000 * 1000 + 999));

new CountdownTimer(deadline1, (timer) => {
  elDays1.textContent = timer.days;
  elHours1.textContent = timer.hours;
  elMinutes1.textContent = timer.minutes;
  elSeconds1.textContent = timer.seconds;
  elDays1.dataset.title = timer.daysTitle;
  elHours1.dataset.title = timer.hoursTitle;
  elMinutes1.dataset.title = timer.minutesTitle;
  elSeconds1.dataset.title = timer.secondsTitle;
}, () => {
  document.querySelector('.timer-1 .timer__result').textContent = 'Таймер завершился!';
});

//2
const elDays2 = document.querySelector('.timer-2 .timer__days');
const elHours2 = document.querySelector('.timer-2 .timer__hours');
const elMinutes2 = document.querySelector('.timer-2 .timer__minutes');
const elSeconds2 = document.querySelector('.timer-2 .timer__seconds');


const deadline2 = new Date(Date.now() + (500560 * 1000 + 999));

new CountdownTimer(deadline2, (timer) => {
  elDays2.textContent = timer.days;
  elHours2.textContent = timer.hours;
  elMinutes2.textContent = timer.minutes;
  elSeconds2.textContent = timer.seconds;
  elDays2.dataset.title = timer.daysTitle;
  elHours2.dataset.title = timer.hoursTitle;
  elMinutes2.dataset.title = timer.minutesTitle;
  elSeconds2.dataset.title = timer.secondsTitle;
}, () => {
  document.querySelector('.timer-2 .timer__result').textContent = 'Таймер завершился!';
});


//3
const elDays3 = document.querySelector('.timer-3 .timer__days');
const elHours3 = document.querySelector('.timer-3 .timer__hours');
const elMinutes3 = document.querySelector('.timer-3 .timer__minutes');
const elSeconds3 = document.querySelector('.timer-3 .timer__seconds');


const deadline3 = new Date(Date.now() + (1335510 * 1000 + 999));

new CountdownTimer(deadline3, (timer) => {
  elDays3.textContent = timer.days;
  elHours3.textContent = timer.hours;
  elMinutes3.textContent = timer.minutes;
  elSeconds3.textContent = timer.seconds;
  elDays3.dataset.title = timer.daysTitle;
  elHours3.dataset.title = timer.hoursTitle;
  elMinutes3.dataset.title = timer.minutesTitle;
  elSeconds3.dataset.title = timer.secondsTitle;
}, () => {
  document.querySelector('.timer-3 .timer__result').textContent = 'Таймер завершился!';
});


//4
// const elDays4 = document.querySelector('.timer-4 .timer__days');
// const elHours4 = document.querySelector('.timer-4 .timer__hours');
// const elMinutes4 = document.querySelector('.timer-4 .timer__minutes');
// const elSeconds4 = document.querySelector('.timer-4 .timer__seconds');


// const deadline4 = new Date(Date.now() + (515510 * 1000 + 999));

// new CountdownTimer(deadline4, (timer) => {
//   elDays4.textContent = timer.days;
//   elHours4.textContent = timer.hours;
//   elMinutes4.textContent = timer.minutes;
//   elSeconds4.textContent = timer.seconds;
//   elDays4.dataset.title = timer.daysTitle;
//   elHours4.dataset.title = timer.hoursTitle;
//   elMinutes4.dataset.title = timer.minutesTitle;
//   elSeconds4.dataset.title = timer.secondsTitle;
// }, () => {
//   document.querySelector('.timer-4 .timer__result').textContent = 'Таймер завершился!';
// });

//5
const elDays5 = document.querySelector('.timer-5 .timer__days');
const elHours5 = document.querySelector('.timer-5 .timer__hours');
const elMinutes5 = document.querySelector('.timer-5 .timer__minutes');
const elSeconds5 = document.querySelector('.timer-5 .timer__seconds');


const deadline5 = new Date(Date.now() + (5454510 * 1000 + 999));

new CountdownTimer(deadline5, (timer) => {
  elDays5.textContent = timer.days;
  elHours5.textContent = timer.hours;
  elMinutes5.textContent = timer.minutes;
  elSeconds5.textContent = timer.seconds;
  elDays5.dataset.title = timer.daysTitle;
  elHours5.dataset.title = timer.hoursTitle;
  elMinutes5.dataset.title = timer.minutesTitle;
  elSeconds5.dataset.title = timer.secondsTitle;
}, () => {
  document.querySelector('.timer-5 .timer__result').textContent = 'Таймер завершился!';
});

//5
const elDays6 = document.querySelector('.timer-6 .timer__days');
const elHours6 = document.querySelector('.timer-6 .timer__hours');
const elMinutes6 = document.querySelector('.timer-6 .timer__minutes');
const elSeconds6 = document.querySelector('.timer-6 .timer__seconds');


const deadline6 = new Date(Date.now() + (5454510 * 1000 + 999));

new CountdownTimer(deadline5, (timer) => {
  elDays6.textContent = timer.days;
  elHours6.textContent = timer.hours;
  elMinutes6.textContent = timer.minutes;
  elSeconds6.textContent = timer.seconds;
  elDays6.dataset.title = timer.daysTitle;
  elHours6.dataset.title = timer.hoursTitle;
  elMinutes6.dataset.title = timer.minutesTitle;
  elSeconds6.dataset.title = timer.secondsTitle;
}, () => {
  document.querySelector('.timer-6 .timer__result').textContent = 'Таймер завершился!';
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});


new kursor({
  type: 1,
  removeDefaultCursor: true,
  color: '#acacac'
})

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement. scrollHeight -
    document.documentElement. clientHeight ;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#00a3ff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}


const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
















