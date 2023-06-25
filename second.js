

class second extends Phaser.Scene {
  constructor() {
    super("gamePart2");
  }  

 preload() {
  console.log('connected');
  this.load.image('bg', './resources/scriptJS/assets/mars.jpg');


  this.load.spritesheet('spaceP', './resources/scriptJS/assets/spritesheet.png', { frameWidth: 122.4, frameHeight: 136 });
  this.load.spritesheet('enemy', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
  this.load.spritesheet('enemy1', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
  this.load.spritesheet('enemy2', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
  this.load.spritesheet('enemy3', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
  this.load.spritesheet('enemy4', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
  this.load.spritesheet('enemy5', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
  this.load.spritesheet('enemy6', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
  this.load.spritesheet('enemy7', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
  this.load.spritesheet('enemy8', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
  this.load.spritesheet('enemy9', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
  this.load.spritesheet('enemy10', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 64 });
 
  this.load.image('restartButton', './resources/scriptJS/assets/restartButton.png');
  this.load.image('backMenu', './resources/scriptJS/assets/menu.png');

  this.load.image('tracer', './resources/scriptJS/assets/laser.png');
  this.load.image('homeback', './resources/scriptJS/assets/homebackground.gif');
  this.load.image('jail', './resources/scriptJS/assets/jailBase.png');
  this.load.image('game_Over', './resources/scriptJS/assets/game_Over.jpg');
  this.load.image('ship', './resources/scriptJS/assets/ship.png');
  this.load.image('base', './resources/scriptJS/assets/BIGship.png')

}







 create() {

  console.log('connected2 yay');


  this.bg = this.add.image(0, 0, 'bg').setOrigin(0);
  this.bg = this.add.image(0, 600, 'bg').setOrigin(0);
  this.bg = this.add.image(600, 0, 'bg').setOrigin(0);
  this.bg = this.add.image(600, 600, 'bg').setOrigin(0);
  this.bg = this.add.image(0, 1200, 'bg').setOrigin(0);
  this.bg = this.add.image(1200, 0, 'bg').setOrigin(0);
  this.bg = this.add.image(1200, 1200, 'bg').setOrigin(0);
  this.bg = this.add.image(600, 1200, 'bg').setOrigin(0);
  this.bg = this.add.image(1200, 600, 'bg').setOrigin(0);

 
  this.jail = this.add.image(150,70, 'jail');



  //base
  this.base = this.add.image(800,500, 'base');
  this.base.setScale(0.1);

//ship
const shipButton = this.add.image(1000, 500, 'ship').setScale(1);
shipButton.setOrigin(0.5);
shipButton.setInteractive();
shipButton.on('pointerup', () => { 


  this.physics.pause();
  var square = this.add.graphics();
 
 
// x and y positions
const x = this.cameras.main.worldView.x + this.cameras.main.width / 2 - 400;
const y = this.cameras.main.worldView.y + this.cameras.main.height / 2  - 250;


const widthQ = this.cameras.main.worldView.x + this.cameras.main.width / 2 - 500;
const heightQ = this.cameras.main.worldView.y + this.cameras.main.height / 2 - 300;


const xB = this.cameras.main.worldView.x + this.cameras.main.width / 2 - 230;
const yB = this.cameras.main.worldView.y + this.cameras.main.height / 2 - 150;


const xB2 = this.cameras.main.worldView.x + this.cameras.main.width / 2 - 230;
const yB2 = this.cameras.main.worldView.y + this.cameras.main.height / 2 - 50;




//text


  this.add.text(x, y, 'You Win!', {
    fontFamily: 'Roboto Flex',
    fontSize: '70px',
    color: '#000000',
    fontStyle: 'normal',
    align: 'center',
    shadow: { offsetX: 10, offsetY: 5, color: '#0000FF', fill: true, blur: 2 },
    padding: { left: null },
    wordWrap: { width: 0 },
    fixedWidth: 600
  }).setOrigin(0.5);




//buttons


  const helloButton = this.add.image(xB, yB, 'restartButton').setScale(0.1);
  helloButton.setOrigin(0.5);
  helloButton.setInteractive();
  helloButton.on('pointerup', () => { this.scene.start("play"); });


 
  const Button = this.add.image(xB2, yB2, 'backMenu').setScale(0.5);
  Button.setOrigin(0.5);
  Button.setInteractive();
  Button.on('pointerup', () => { this.scene.start("StartGame"); });




  //bg
  square.fillStyle(0x222222, 0.8);
square.fillRect(widthQ, heightQ, 550, 305).setOrigin(0.5);


 });



//player
 
  this.player = this.physics.add.sprite(285, 140, 'spaceP').setScale(.5);
  this.player.body.allowGravity = false;
  this.player.setCollideWorldBounds(true);

//enemy Sprites



  this.enemy = this.physics.add.sprite(600, 800,  'enemy').setScale(.9);
  this.enemy.setCollideWorldBounds(true);

  this.enemy1 = this.physics.add.sprite(700, 400, 'enemy1').setScale(.9);
  this.enemy1.setCollideWorldBounds(true);

  this.enemy2 = this.physics.add.sprite(800, 200, 'enemy2').setScale(.9);
  this.enemy2.setCollideWorldBounds(true);

  this.enemy3 = this.physics.add.sprite(555, 300, 'enemy3').setScale(.9);
  this.enemy3.setCollideWorldBounds(true);

  this.enemy4 = this.physics.add.sprite(800, 100, 'enemy4').setScale(.9);
  this.enemy4.setCollideWorldBounds(true);

  this.enemy5 = this.physics.add.sprite(599, 400, 'enemy5').setScale(.9);
  this.enemy5.setCollideWorldBounds(true);

  this.enemy6 = this.physics.add.sprite(698, 676, 'enemy6').setScale(.9);
  this.enemy6.setCollideWorldBounds(true);

  this.enemy7 = this.physics.add.sprite(778, 845, 'enemy7').setScale(.9);
  this.enemy7.setCollideWorldBounds(true);

  this.enemy8 = this.physics.add.sprite(456, 789, 'enemy8').setScale(.9);
  this.enemy8.setCollideWorldBounds(true);

  this.enemy9 = this.physics.add.sprite(1000, 600, 'enemy9').setScale(.9);
  this.enemy9.setCollideWorldBounds(true);

  this.enemy10 = this.physics.add.sprite(600, 600, 'enemy10').setScale(.9);
  this.enemy10.setCollideWorldBounds(true);

 

 

  this.cameras.main.setZoom(1.5);
 this.cameras.main.setBounds(0, 0, 600 * 2, 600 * 2, true, true, true, true);

 //border problem fixed here
 this.physics.world.setBounds(0, 0, 578 * 2, 578 * 2, true, true, true, true);

 this.cameras.main.startFollow(this.player, true, 0.5, 0.5)
 
 
   

//player Animation

  this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('spaceP', { start: 0, end: 11 }),
      frameRate: 20,
      repeat: -1
  });

 
  this.anims.create({
      key: 'turn',
      frames: [ { key: 'spaceP', frame: 12 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('spaceP', { start: 0, end: 11 }),
      frameRate: 20,
      repeat: -1
  });

 

  this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('spaceP', { start: 12, end: 14 }),
      frameRate: 20,
      repeat: -1

  });

  this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('spaceP', { start: 12, end: 14 }),
      frameRate: 20,
      repeat: -1

  });
 
 
   
  this.cursors = this.input.keyboard.createCursorKeys();

 

  this.physics.add.collider(this.player, this.enemy, this.playerDie, null, this);
  this.physics.add.collider(this.player, this.enemy1, this.playerDie, null, this);
  this.physics.add.collider(this.player, this.enemy2, this.playerDie, null, this);
  this.physics.add.collider(this.player, this.enemy3, this.playerDie, null, this);
  this.physics.add.collider(this.player, this.enemy4, this.playerDie, null, this);
  this.physics.add.collider(this.player, this.enemy5, this.playerDie, null, this);
  this.physics.add.collider(this.player, this.enemy6, this.playerDie, null, this);
  this.physics.add.collider(this.player, this.enemy7, this.playerDie, null, this);
  this.physics.add.collider(this.player, this.enemy8, this.playerDie, null, this);
  this.physics.add.collider(this.player, this.enemy9, this.playerDie, null, this);
  this.physics.add.collider(this.player, this.enemy10, this.playerDie, null, this);

  this.canShoot = true;                                                                                                                                                                                                                                                                                                                                                                                                  

}






enemyFollows() {
  this.physics.moveToObject(this.enemy, this.player, 50);
  this.physics.moveToObject(this.enemy1, this.player, 50);
  this.physics.moveToObject(this.enemy2, this.player, 50);
  this.physics.moveToObject(this.enemy3, this.player, 50);
  this.physics.moveToObject(this.enemy4, this.player, 50);
  this.physics.moveToObject(this.enemy5, this.player, 50);
  this.physics.moveToObject(this.enemy6, this.player, 50);
  this.physics.moveToObject(this.enemy7, this.player, 50);
  this.physics.moveToObject(this.enemy8, this.player, 50);
  this.physics.moveToObject(this.enemy9, this.player, 50);
  this.physics.moveToObject(this.enemy10, this.player, 50);
}



 playerDie(player, enemy) {
 
  this.physics.pause();
  var square = this.add.graphics();
 
 
// x and y positions
const x = this.cameras.main.worldView.x + this.cameras.main.width / 2 - 400;
const y = this.cameras.main.worldView.y + this.cameras.main.height / 2  - 250;


const widthQ = this.cameras.main.worldView.x + this.cameras.main.width / 2 - 500;
const heightQ = this.cameras.main.worldView.y + this.cameras.main.height / 2 - 300;


const xB = this.cameras.main.worldView.x + this.cameras.main.width / 2 - 230;
const yB = this.cameras.main.worldView.y + this.cameras.main.height / 2 - 150;


const xB2 = this.cameras.main.worldView.x + this.cameras.main.width / 2 - 230;
const yB2 = this.cameras.main.worldView.y + this.cameras.main.height / 2 - 50;




//text


  this.add.text(x, y, 'Game Over ', {
    fontFamily: 'Roboto Flex',
    fontSize: '70px',
    color: '#000000',
    fontStyle: 'normal',
    align: 'center',
    shadow: { offsetX: 10, offsetY: 5, color: '#0000FF', fill: true, blur: 2 },
    padding: { left: null },
    wordWrap: { width: 0 },
    fixedWidth: 600
  }).setOrigin(0.5);




//buttons


  const helloButton = this.add.image(xB, yB, 'restartButton').setScale(0.1);
  helloButton.setOrigin(0.5);
  helloButton.setInteractive();
  helloButton.on('pointerup', () => { this.scene.start("play"); });


 
  const Button = this.add.image(xB2, yB2, 'backMenu').setScale(0.5);
  Button.setOrigin(0.5);
  Button.setInteractive();
  Button.on('pointerup', () => { this.scene.start("StartGame"); });




  //bg
  square.fillStyle(0x222222, 0.8);
square.fillRect(widthQ, heightQ, 550, 305).setOrigin(0.5);








}


 update() {

this.enemyFollows();




  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy, (laser, enemy) => {
      this.enemy.setPosition(600, 245);
      this.laser.destroy();
      this.laser = null;
    });
  }


  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy1, (laser, enemy1) => {
      this.enemy1.setPosition(300, 600);
      this.laser.destroy();
      this.laser = null;
    });
  }


  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy2, (laser, enemy2) => {
      this.enemy2.setPosition(123, 147);
      this.laser.destroy();
      this.laser = null;
    });
  }


  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy3, (laser, enemy3) => {
      this.enemy3.setPosition(600, 300);
      this.laser.destroy();
      this.laser = null;
    });
  }


  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy4, (laser, enemy4) => {
      this.enemy4.setPosition(500, 200);
      this.laser.destroy();
      this.laser = null;
    });
  }


  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy5, (laser, enemy5) => {
      this.enemy5.setPosition(200, 412);
      this.laser.destroy();
      this.laser = null;
    });
  }


  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy6, (laser, enemy6) => {
      this.enemy6.setPosition(111, 333);
      this.laser.destroy();
      this.laser = null;
    });
  }


  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy7, (laser, enemy7) => {
      this.enemy7.setPosition(1000, 340);
      this.laser.destroy();
      this.laser = null;
    });
  }


  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy8, (laser, enemy8) => {
      this.enemy8.setPosition(999, 222);
      this.laser.destroy();
      this.laser = null;
    });
  }


  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy9, (laser, enemy9) => {
      this.enemy9.setPosition(1000, 600);
      this.laser.destroy();
      this.laser = null;
    });
  }


  if (this.laser) {
    this.physics.overlap(this.laser, this.enemy10, (laser, enemy10) => {
      this.enemy10.setPosition(1000, 345);
      this.laser.destroy();
      this.laser = null;
    });
  }
 






 
  if (this.canShoot && this.cursors.space.isDown && this.player.flipX == false) {
    this.laser = this.physics.add.sprite(this.player.x + 30, this.player.y - 5, 'tracer').setScale(0.08);
    this.laser.body.allowGravity = false;
    this.laser.setVelocityX(200);
    this.canShoot = false;
    this.time.delayedCall(500, () => {
      this.canShoot = true;
    });
  }


     
  if (this.canShoot && this.cursors.space.isDown && this.player.flipX == true) {
    this.laser = this.physics.add.sprite(this.player.x - 30, this.player.y - 5, 'tracer').setScale(0.08);
    this.laser.flipX = true;
    this.laser.body.allowGravity = false;
    this.laser.setVelocityX(-200);
    this.canShoot = false;
    this.time.delayedCall(500, () => {
      this.canShoot = true;
    });
  }
 
 
 
  if(this.cursors.left.isDown) {
      this.player.setVelocityX(-110);
      this.player.anims.play('left', true);
      this.player.flipX = true;
    } else if (this.cursors.right.isDown) {
         this.player.setVelocityX(110);
         this.player.anims.play('right', true);
         this.player.flipX = false;
         } else {
          this.player.setVelocityX(0);
          this.player.anims.play('right', false);
      }  
     
      if (this.cursors.up.isDown) {
          this.player.setVelocityY(-110);
          this.player.anims.play('up', true);
        } else {
          this.player.setVelocityY(0);
        }
       
       
      if  (this.cursors.down.isDown) {
      this.player.setVelocityY(110);
      this.player.anims.play('down', true);
   }

}
}


var config = {
  type: Phaser.AUTO,
  width: 1350,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
      enableBody: true,
      debug: false,
    }
  },
  scene: [home, menu, controls, first, second]
};

var game = new Phaser.Game(config);


