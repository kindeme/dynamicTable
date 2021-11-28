const btn = document.getElementById("btn");
const table = document.getElementById("table");
const diceImage = document.querySelector("#roll");
const diceBtn = document.querySelector("#diceBtn");

btn.addEventListener("click", () => {
	table.classList.add("show");
	let count = 0;
	for (let i = 0; i < 10; i++) {
		let row = table.insertRow(i);
		for (let j = 0; j < 10; j++) {
			let cell = row.insertCell(j);

			cell.innerHTML += 100 - count;
			count++;
		}
	}
	btn.disabled = true;
});

diceBtn.addEventListener("click", () => {
	let randomNumber = Math.floor(Math.random() * 6 + 1);
	diceImage.innerHTML = ` <img src="./images/${randomNumber}.png">`;
});
