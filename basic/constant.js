var ONE = 123; // 대문자로 선언함으로써 상수라는 시멘틱 의미를 부여 (사실은 그냥 변수인데...상수 변수로 취급)
ONE = 456; // js에는 상수가 없어서 값 변경이 가능함
console.log(ONE);
console.log(Number.MAX_VALUE); // MAX_VALUE, MIN_VALUE 등은 JS가 제공하는 상수값이며 값 변경 불가 