
const eating = (nextfunc) => {
	console.log("유리 공주가 밥을 먹기 시작합니다.");
	console.log("지금 밥을 먹고 있습니다...");
	setTimeout(() => {
		console.log("...\n밥을 다 먹었습니다");
		nextfunc();
	}, 1000);
}

const give_new_meal = () => {
	console.log("새 밥그릇에 밥을 담아 가져다줍니다!");
}

console.log("유리 공주가 밥을 먹고 싶어합니다.");
give_new_meal();
eating(give_new_meal);
