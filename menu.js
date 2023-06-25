class menu extends Phaser.Scene {
  constructor() {
    super("StartGame");
  }
  preload(){
  this.load.image('back', './resources/scriptJS/assets/homeBackground.jpg');
  this.load.image('start', './resources/scriptJS/assets/start.png');
  this.load.image('controls', './resources/scriptJS/assets/controlsButton.png');
  this.load.image('LOST', './resources/scriptJS/assets/LOST.png');
  this.load.audio('song', './resources/scriptJS/assets/song.mp3');
  }
  create(){
    console.log('it works');
   this.music = this.sound.play("song");
   this.add.image(675, 300, 'back').setScale(0.35);
   this.add.image(675, 130, 'LOST').setScale(.6);

   const start = this.add.image(665, 400, 'start').setScale(1);
   start.setInteractive();
   start.on('pointerdown', () => { this.scene.start("play"); });

   const controls = this.add.image(665, 500, 'controls').setScale(1);
   controls.setInteractive();
   controls.on('pointerdown', () => { this.scene.start("howTo"); });

  }
   }

        
        
      