


class first extends Phaser.Scene { 
  constructor() {
    super("play");
  }        


 

 preload()
 {

  this.load.image('cell', './resources/scriptJS/assets/cell.png');
  this.load.image('background', './resources/scriptJS/assets/background.png');
  this.load.spritesheet('spaceP', './resources/scriptJS/assets/spritesheet.png', { frameWidth: 122.4, frameHeight: 136 });
  this.load.image('lava', './resources/scriptJS/assets/lava.png');
  this.load.spritesheet('tile', './resources/scriptJS/assets/tiles.png', { frameWidth: 128, frameHeight: 128 });
  this.load.image('platform', './resources/scriptJS/assets/platform.jpg');
  this.load.image('platform2', './resources/scriptJS/assets/platform2.png');
  this.load.image('enemy-bullet', './resources/scriptJS/assets/enemy-bullet.png')
  this.load.image('spikeCrate', './resources/scriptJS/assets/spikeCrate.png');
  this.load.image('bladeSpikeLog', './resources/scriptJS/assets/bladeSpikeLog.png');
  this.load.image('spikeLog', './resources/scriptJS/assets/spikeLog.png');
  this.load.image('lastplatform', './resources/scriptJS/assets/lastplatform.png');
  this.load.image('gamePortal1', './resources/scriptJS/assets/gamePortal1.png');  
  this.load.image('restartButton', './resources/scriptJS/assets/restartButton.png');
  this.load.image('backMenu', './resources/scriptJS/assets/menu.png');
  this.load.image('tracer', './resources/scriptJS/assets/laser.png');
  
  
  this.load.spritesheet('enemy', './resources/scriptJS/assets/enemy1.png', { frameWidth: 48, frameHeight: 64 });

  this.load.image('game_Over', './resources/scriptJS/assets/game_Over.jpg');
  this.load.image('spike', './resources/scriptJS/assets/spike.png');
  
 }




create()
{
  console.log('it works');
  //background
  this.background = this.add.image(0, 0, 'background').setOrigin(0);
  this.background = this.add.image(1000, 0, 'background').setOrigin(0);
  this.background = this.add.image(2000, 0, 'background').setOrigin(0);
  this.background = this.add.image(3000, 0, 'background').setOrigin(0);
  this.background = this.add.image(4000, 0, 'background').setOrigin(0);
  this.background = this.add.image(5000, 0, 'background').setOrigin(0);
  this.background = this.add.image(6000, 0, 'background').setOrigin(0);
  
  
  
  //platforms
  this.platform = this.physics.add.image(2100, 750, 'platform').setScale(0.7);
  this.platform.setSize(230, 240, false);
  this.platform.setImmovable(true);
  this.platform.body.allowGravity = false;
  this.platform.setVelocityX(50);

  this.platform2 = this.physics.add.image(4200, 720, 'platform2').setScale(2);
  this.platform2.body.allowGravity = false;
  this.platform2.setImmovable(true);

  this.lastplatform = this.physics.add.image(4830, 650, 'lastplatform').setScale(.3);
  this.lastplatform.body.allowGravity = false;
  this.lastplatform.setImmovable(true);
  
  
  
  
  
  this.portal = this.physics.add.image(5810, 650, 'gamePortal1').setScale(1);
  this.portal.body.allowGravity = false;
  this.portal.setImmovable(true);
  

  
  this.player = this.physics.add.sprite(285, 600, 'spaceP').setScale(2.2);

  this.player.setGravityY(80);
  this.player.setCollideWorldBounds(true);
  this.player.setSize(100, 112, false);
  
  
  this.lava = this.physics.add.image(2000, 740, 'lava').setScale(2);
  this.lava.setSize(800, 130, true);
  this.lava.body.allowGravity = false;

  this.cell = this.add.image(0,0, 'cell').setOrigin(0);
  this.cell = this.add.image(0,448, 'cell').setOrigin(0);
  this.cell = this.add.image(0,600, 'cell').setOrigin(0);


//spining blades

  this.spikeLog = this.physics.add.image(4550, 800, 'spikeLog').setScale(2);
  this.spikeLog.body.allowGravity = false;
  this.physics.add.collider(this.player, this.spikeLog, this.KILL, null, this);

  this.spikeLog2 = this.physics.add.image(4550, 690, 'spikeLog').setScale(2);
  this.spikeLog2.body.allowGravity = false;
  this.physics.add.collider(this.player, this.spikeLog2, this.KILL, null, this);


  this.bladeSpikeLog = this.physics.add.image(4550, 770, 'bladeSpikeLog').setScale(2);
  this.bladeSpikeLog.body.allowGravity = false;
  




//floor
  
  this.tile = this.physics.add.sprite(0,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(155,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(310,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(465,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(620,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(775,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(930,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(1085,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(1240,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(1395,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(1550,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(2225,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(2380,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(2535,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(2690,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(2845,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(3000,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(3155,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(3310,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(3465,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(3465,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(3465,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(3620,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(3775,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(3930,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(4085,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(4240,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(4395,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(4550,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(4705,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(4860,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(5015,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(5170,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(5325,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(5480,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(5635,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);
  this.tile = this.physics.add.sprite(5790,850, 'tile').setScale(1.2).setOrigin(0);
  this.tile.setImmovable(true);
  this.tile.body.allowGravity = false;
  this.physics.add.collider(this.player, this.tile);

  

  
//spikes  

  this.spike = this.physics.add.image(1000,740, 'spike').setScale(1);
  this.spike.setSize(76, 120, true);
  this.spike.body.allowGravity = false;



  this.spikeCrate = this.physics.add.image(3000,400, 'spikeCrate').setScale(2.5);
  this.spikeCrate.setSize(25*2.5, 57*2.5, false);
  this.spikeCrate.body.allowGravity = false;
  this.spikeCrate.setImmovable(true);
  //this.physics.add.collider(this.player, this.spikeCrate, this.KILL, null, this);


  this.spikeCrate = this.physics.add.image(3550,400, 'spikeCrate').setScale(2.5);
  this.spikeCrate.body.allowGravity = false;
  this.spikeCrate.setSize(25*2.5, 57*2.5, false);
  this.spikeCrate.setImmovable(true);
  //this.physics.add.collider(this.player, this.spikeCrate, this.KILL, null, this);


  this.spikeCrate = this.physics.add.image(4200,70, 'spikeCrate').setScale(2.5);
  this.spikeCrate.body.allowGravity = false;
  this.spikeCrate.setSize(25*2.5, 57*2.5, false);
  this.spikeCrate.setImmovable(true);
  //this.physics.add.collider(this.player, this.spikeCrate, this.KILL, null, this);
  

//enemies
  this.enemy = this.physics.add.sprite(6000, 650, 'enemy').setScale(2);
  this.enemy.body.allowGravity = false;
  this.enemy.setSize(28, 34, false);

  this.enemy2 = this.physics.add.sprite(6000, 450, 'enemy').setScale(2);
  this.enemy2.body.allowGravity = false;
  this.enemy2.setSize(28, 34, false);

  this.enemy3 = this.physics.add.sprite(6000, 750, 'enemy').setScale(2);
  this.enemy3.body.allowGravity = false;
  this.enemy3.setSize(28, 34, false);



//camera and world bounds

  this.cameras.main.setZoom(0.64);
   this.cameras.main.setBounds(0, 0, 3000 * 2, 500 * 2, true, true, true, true);
   this.physics.world.setBounds(0, 0, 3000 * 2, 500 * 2, true, true, true, true);
   this.cameras.main.startFollow(this.player, true, 0.5, 0.5);
  
  
  
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
  


  //enemy animations


  this.anims.create({
      key: 'batL',
      frames: this.anims.generateFrameNumbers('enemy', { start: 9, end: 11 }),
      frameRate: 20,
      repeat: -1
  
  
  });
  this.anims.create({
    key: 'batR',
    frames: this.anims.generateFrameNumbers('enemy', { start: 3, end: 5 }),
    frameRate: 20,
    repeat: -1


});

//enemy 2 

this.anims.create({
  key: 'batL',
  frames: this.anims.generateFrameNumbers('enemy2', { start: 9, end: 11 }),
  frameRate: 20,
  repeat: -1


});
this.anims.create({
key: 'batR',
frames: this.anims.generateFrameNumbers('enemy2', { start: 3, end: 5 }),
frameRate: 20,
repeat: -1


});

//enemy3

this.anims.create({
  key: 'batL',
  frames: this.anims.generateFrameNumbers('enemy3', { start: 9, end: 11 }),
  frameRate: 20,
  repeat: -1


});
this.anims.create({
key: 'batR',
frames: this.anims.generateFrameNumbers('enemy3', { start: 3, end: 5 }),
frameRate: 20,
repeat: -1


});



  
  
  //colliders
  
  this.physics.add.collider(this.player, this.platform);
  this.physics.add.collider(this.player, this.platform2);
  this.physics.add.collider(this.player, this.lastplatform);
  this.physics.add.collider(this.player, this.portal, this.portalSends, null, this);
  
  this.physics.add.collider(this.player, this.lava, this.KILL, null, this);
  this.physics.add.collider(this.player, this.spike, this.KILL, null, this);
  //this.physics.add.collider(this.player, this.enemy, this.KILL, null, this);
  //this.physics.add.collider(this.player, this.enemy2, this.KILL, null, this);
  //this.physics.add.collider(this.player, this.enemy3, this.KILL, null, this);
 

      
  this.cursors = this.input.keyboard.createCursorKeys();



                                           
}








portalSends(player, portal) {
  console.log('it works');
  this.scene.start("gamePart2");
}
         
  KILL () {
    this.physics.pause();
    var square = this.add.graphics();


   // x and y positions
    const x = this.cameras.main.worldView.x + this.cameras.main.width / 2 + 120;
const y = this.cameras.main.worldView.y + this.cameras.main.height / 2 - 150;

const widthQ = this.cameras.main.worldView.x + this.cameras.main.width / 2 - 150;
const heightQ = this.cameras.main.worldView.y + this.cameras.main.height / 2 - 200;

const xB = this.cameras.main.worldView.x + this.cameras.main.width / 2 + 360;
const yB = this.cameras.main.worldView.y + this.cameras.main.height / 2 + 40;

const xB2 = this.cameras.main.worldView.x + this.cameras.main.width / 2 + 360;
const yB2 = this.cameras.main.worldView.y + this.cameras.main.height / 2 + 170;
    

this.time.addEvent({
  delay: 200,
callback: ()=>{

//text
  this.lose = this.add.text(x, y, 'GAME OVER', {
    fontFamily: 'monospace',
    fontSize: '100px',
    color: '#000000',
    fontStyle: 'normal',
    align: 'center',
    shadow: { offsetX: 10, offsetY: 5, color: '#0000FF', fill: true, blur: 2 },
    padding: { left: null },
    wordWrap: { width: 0 },
    fixedWidth: 600
  }).setOrigin(0.5)



//buttons

  const helloButton = this.add.image(xB, yB, 'restartButton').setScale(0.2);
  helloButton.setInteractive();
  helloButton.on('pointerup', () => { this.scene.start("play"); });

  
  const Button = this.add.image(xB2, yB2, 'backMenu').setScale(1);
  Button.setInteractive();
  Button.on('pointerup', () => { this.scene.start("StartGame"); })


  //bg
  square.fillStyle(0x222222, 0.8);
square.fillRect(widthQ, heightQ, 1050, 605).setOrigin(0.5);
}

})
}



enemyFollows() {
  this.physics.moveToObject(this.enemy, this.player, 50);
  this.physics.moveToObject(this.enemy2, this.player, 50);
  this.physics.moveToObject(this.enemy3, this.player, 50);
}


 update()
{




//make blade spin
  this.spikeLog.angle += 2
  this.spikeLog2.angle += 2





if (this.physics.moveToObject(this.enemy, this.player, 50)) {
  
this.enemy.anims.play('batL', true);

} else if (this.enemy.velocityX > 0) {
  this.enemy.anims.play('batR', true);
}

if (this.physics.moveToObject(this.enemy2, this.player, 50) ) {
  
  this.enemy2.anims.play('batL', true);
  
  } else if (this.enemy2.velocityX > 0) {
    this.enemy2.anims.play('batR', true);
  }
  

  if (this.physics.moveToObject(this.enemy3, this.player, 50)) {
  
    this.enemy3.anims.play('batL', true);
    
    } else if (this.enemy3.velocityX > 0) {
      this.enemy3.anims.play('batR', true);
    }
    


//player walking
  if(this.cursors.left.isDown) {
    this.player.setVelocityX(-310);
    this.player.anims.play('left', true);
    this.player.flipX = true;
  } else if (this.cursors.right.isDown) {
       this.player.setVelocityX(310);
       this.player.anims.play('right', true);
       this.player.flipX = false;
       } else {
        this.player.setVelocityX(0);
        this.player.anims.play('right', false);
    }  
   
//player jumping

      if (this.cursors.up.isDown && this.player.body.touching.down)
      {
          this.player.setVelocityY(-630);
          this.player.anims.play('up', true);
      }
     
                                                                         

//platform movement
 if (this.platform.x >= 2100)
 {
     this.platform.setVelocityX(-50);
 }
 else if (this.platform.x <= 1800)
 {
     this.platform.setVelocityX(50);
 }


}
}

//data
var config = {
  type: Phaser.AUTO,
  width: 1350,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 600 },
        enableBody: true,
        debug: false
    }
},
  scene: [home, menu, controls, second, first]
  //controls does not work with the seconds added.
};

var game = new Phaser.Game(config);



