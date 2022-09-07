const clockTitle = document.querySelector(".js-clock");

const getDateDiff = () => {
  const today = new Date();
  const christmas = new Date(2022, 11, 25, 0);

  const diffDate = christmas.getTime() - today.getTime();

  const diffDay = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diffDate / (1000 * 60 * 60)) - diffDay * 24;
  const diffMin = Math.floor(
    diffDate / (1000 * 60) - Math.floor(diffDate / (1000 * 60 * 60)) * 60
  );
  const diffSec = Math.floor(
    diffDate / 1000 - Math.floor(diffDate / (1000 * 60)) * 60
  );

  clockTitle.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
};

getDateDiff();

setInterval(() => {
  getDateDiff();
}, 1000);
