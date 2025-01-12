const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./assets/Bumble Bee Sprite Sheet.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	const numberOfBees = 10;
	for (let i = 0; i < numberOfBees; i++) {
		const bee = new Bee(gameEngine);
		bee.x = Math.random() * canvas.width;
		bee.y = Math.random() * canvas.height;
		gameEngine.addEntity(bee);
	}

	gameEngine.init(ctx);
	gameEngine.start();
});
