class Bee {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(
            ASSET_MANAGER.getAsset("./assets/Bumble Bee Sprite Sheet.png"),
            0,  
            0,   
            128/4, 
            128/4,  
            4,    
            0.1  
        );
        this.moveSpeed = 1;
        this.x = 0;
        this.y = 0;
        this.animations = {
            RIGHT: 0,
            LEFT: 1,
            UP: 2,
            DOWN: 3
        };
        this.currentState = this.animations.RIGHT;
    }

    update() {
        if (Math.random() < 0.05) {
            this.currentState = Math.floor(Math.random() * 4); 
        }

        switch (this.currentState) {
            case this.animations.RIGHT:
                this.x += this.moveSpeed;
                break;
            case this.animations.LEFT:
                this.x -= this.moveSpeed;
                break;
            case this.animations.UP:
                this.y -= this.moveSpeed;
                break;
            case this.animations.DOWN:
                this.y += this.moveSpeed;
                break;
        }
    }

    draw(ctx) {
        this.animator.drawFrame(
            this.game.clockTick,
            ctx, 
            this.x, 
            this.y,
            this.currentState
        );
    }
}