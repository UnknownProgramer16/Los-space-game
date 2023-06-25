class controls extends Phaser.Scene {
    constructor() {
      super("howTo");
    }
    preload(){
        this.load.image('BG', './resources/scriptJS/assets/controlsBG.jpg');
        this.load.image('arrowKeys', './resources/scriptJS/assets/arrowKeys.png');
        this.load.image('spacebar', './resources/scriptJS/assets/spacebar.png');
        this.load.image('exit', './resources/scriptJS/assets/exit1.png');
    }

    create(){

        const x = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const y = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        const xK = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const yK = this.cameras.main.worldView.y + this.cameras.main.height / 2 - 200;

        const xS = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const yS = this.cameras.main.worldView.y + this.cameras.main.height / 2;

         this.BG = this.add.image(x, y, 'BG');
         this.BG.setScale(0.75);
         this.BG.setOrigin(0.5);

         this.keys = this.add.image(xK, yK, 'arrowKeys');
         this.keys.setScale(0.5);

         this.spacebar = this.add.image(xS, yS, 'spacebar');
         this.spacebar.angle = 27;

         const exit = this.add.image(1250, 50, 'exit').setScale(0.2);
         exit.setInteractive();
         exit.on('pointerdown', () => { this.scene.start("StartGame"); })

         
         this.add.text(60, 50, 'The left, right, up, and down keys are use to navigate around the map, and use the space bar to shoot at enemies.', {
			fontFamily: 'Quicksand',
			fontSize: '30px',
			color: '#fff',
			padding: { left: 0, top: 0 },
			resolution: 2,
			wordWrap: { width: 300 }
		})


             
        this.add.text(1000, 100, 'By Ian, Nii, and Javier.', {
			fontFamily: 'Quicksand',
			fontSize: '30px',
			color: '#fff',
			padding: { left: 0, top: 0 },
			resolution: 2,
			wordWrap: { width: 300 }
		})

       

    }


 
  
    }