class Panel {
	// pannel에 스케일을 넣는이유
	constructor() {
		this.scale = 0.01;
		// 10.. 돌리기위한 함수 적용
		this.angle = 0;
	}

	draw() {
		context.fillStyle = 'rgba(255,0,0,0.8)';
		// 변환 초기화;
		context.resetTransform();
		// context.setTransform(1,0,0,1,0,0);
		// 위에 2개같이 단위행렬로 초기화

		context.translate(oX, oY);
		context.scale(this.scale, this.scale);
		// 10.. 0~720도로 돌리는 상황
		// 11.. utility 함수로 만든다 (자주 쓰이기 때문에)
		context.rotate(canUtil.toRadian(this.angle));
		// 원점으로 돌려주기 
		context.translate(-oX, -oY);
		context.fillRect(oX-150, oY-150, 300, 300);
		context.resetTransform();
	}
	// 여기서 박스안에서 어떤것이 실행되는지 보여주기위함 
	// 분리한이유는 저기안쪽으로 들어가있으면은 4가 먼저 호출되기때문에 분리시킨다음에
	// 먼저 애니메이션이 실행이되고나서 4를 보여주기위함
	showContent() {
		console.log('showContent 실행');
		context.fillStyle = '#fff';
		context.fillText(selectedBox.index, oX, oY);
	}
}