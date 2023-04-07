addTooltip('#yudhistira', '#firstname-tooltip');
addTooltip('#wibowo', '#lastname-tooltip');
addTooltip('#instagram', '#instagram-tooltip');
addTooltip('#website', '#website-tooltip');

document.querySelector('#instagram').addEventListener('mouseenter', (e) => {
  document.querySelector('#website').classList.add('fill-violet-500');
});

document.querySelector('#instagram').addEventListener('mouseout', (e) => {
  document.querySelector('#website').classList.remove('fill-violet-500');
});

function addTooltip(listener, target) {
  document.querySelector(listener).addEventListener('mouseenter', (e) => {
    document.querySelector(target).classList.remove('lg:hidden', 'hidden');
  });

  document.querySelector(listener).addEventListener('mouseout', (e) => {
    document.querySelector(target).classList.add('lg:hidden', 'hidden');
  });
}
