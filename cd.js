const countdown = () => {
    const countDate = new Date('May 24, 2022 15:22:04').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;


    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);



};

countdown();

