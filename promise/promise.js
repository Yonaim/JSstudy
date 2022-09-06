
function getData_(){
	return ;
}

function getData(){
	return new Promise(getData_);
}

function getData(callback) {
	// new Promise() 추가
	return new Promise(function(resolve, reject) {
	  $.get('url 주소/products/1', function(response) {
		// 데이터를 받으면 resolve() 호출
		resolve(response);
	  });
	});
  }