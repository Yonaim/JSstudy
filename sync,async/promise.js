function goToSchool() {
    console.log("학교에 갑니다.");
}

function arriveAtSchool_tobe() {
    return new Promise(() => {
        console.log("학교에 도착했습니다.");
        resolve();
    });
}

function cure() {
    console.log("양호실에 가서 약을 발랐습니다.");
}

function study() {
    console.log("열심히 공부를 합니다.");
}

goToSchool();
arriveResult = arriveAtSchool_tobe();
arriveReulst.then(() => {
    study();
	console.log("끝남");
});
// 반환된 promise 객체에서 메소드 then 사용