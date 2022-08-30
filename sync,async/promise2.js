
const eating = (YuriStatus) => {
	console.log("유리 공주가 밥을 먹기 시작합니다.");
	console.log("\n지금 밥을 먹고 있습니다...\n");
	return new Promise(function(resolve, reject){
	
	});
}

const happy = () => {
	console.log("유리 공주는 밥을 다 먹고 행복해합니다!");
}

const angry = () => {
	console.log("유리 공주는 밥을 먹다 화가 나서 내팽겨쳤습니다.");
}

const give_new_meal = () => {
	console.log("새 밥그릇에 밥을 담아 가져다줍니다.");
}

console.log("유리 공주가 밥을 먹고 싶어합니다.");
give_new_meal();
eating().then(happy);
