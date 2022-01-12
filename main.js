let skills = document.getElementById("skills");
let stats = document.getElementById("stats");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
window.addEventListener('scroll',num(),span())
function num() {
    if (window.scrollY >= stats.offsetTop - 100){
        const counters = document.querySelectorAll('#num');
        const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
    }
}
function span() {
  if (window.scrollY >= skills.offsetTop - 100) {
  span1.style.width = span1.getAttribute("data-progress");
  span2.style.width = span2.getAttribute("data-progress");
  span3.style.width = span3.getAttribute("data-progress");
  span4.style.width = span4.getAttribute("data-progress");
  }
}