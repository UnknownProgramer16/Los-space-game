
class second extends Phaser.Scene { 
    constructor() {
      super("gamePart2");
    }  
  
   preload() {
    console.log('connected');
    this.load.image('bg', './resources/scriptJS/assets/mars.jpg');
  
  
    this.load.spritesheet('spaceP', './resources/scriptJS/assets/spritesheet.png', { frameWidth: 122.4, frameHeight: 136 });
    this.load.spritesheet('monster', './resources/scriptJS/assets/aliens.png', { frameWidth: 33, frameHeight: 68 });
 

   
    this.load.image('restartButton', './resources/scriptJS/assets/restartButton.png');
    this.load.image('backMenu', './resources/scriptJS/assets/menu.png');
  
    this.load.image('laser', './resources/scriptJS/assets/laser.png');
    this.load.image('homeback', './resources/scriptJS/assets/homebackground.gif');
    this.load.image('jail', './resources/scriptJS/assets/jailBase.png');
    this.load.image('game_Over', './resources/scriptJS/assets/game_Over.jpg');
    this.load.image('ship', './resources/scriptJS/assets/ship.png');
    this.load.image('base1', './resources/scriptJS/assets/BIGship.png');
  
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

    
    this.player = this.physics.add.sprite(285, 140, 'spaceP').setScale(.5);
    this.player.body.allowGravity = false;
    this.player.setCollideWorldBounds(true);




    this.add.text(10, 20, 'Find the ship to escape the planet and dont let the aliens catch you.', {
      fontFamily: 'Roboto Flex',
      fontSize: '20px',
      color: '#000000',
      fontStyle: 'normal',
      align: 'center',
      padding: { left: null },
      wordWrap: { width: 500 },
      fixedWidth: 100
    }).setOrigin(0.5);

    



    const ship = this.add.image(770, 1000, 'ship').setScale(1);
    ship.setOrigin(0.5);
    ship.setInteractive();
    ship.on('pointerup', () => { 



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
  
      this.add.text(x, y, 'You Win! ', {
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
  
  this.time.addEvent({
    delay: 1500,
  callback: ()=>{
  

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

})



     });

    this.base1 = this.add.image(1000, 1000, 'base1').setScale(0.1);
  
    
  
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
    

    

//create lasers group
this.lasers = this.physics.add.group();
this.lasers.body.allowGravity = false;

//create mosters group
this.monsters = this.physics.add.group();
this.monsters.body.allowGravity = false;


//Create monsters
for (var i = 0; i < 5; i++) {
  var monster = this.physics.add.sprite(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), 'monster');
  monsters.add(this.monster);
}

    
    this.physics.add.collider(this.player, this.monsters, this.gameOver, null, this); 
    this.physics.add.collider(this.lasers, this.monsters, this.destroyMonster, null, this);
    
     
    this.cursors = this.input.keyboard.createCursorKeys();
  
  

  
    this.canShoot = true;  
    

  
  }

  

   update() {


    
    this.enemyFollows();

    

    if (this.canShoot && this.cursors.space.isDown && this.player.flipX == false) {
      var laser = this.physics.add.sprite(this.player.x + 30, this.player.y - 5, 'laser').setScale(0.08);
      this.lasers.add(this.laser);
      this.laser.body.allowGravity = false;
      this.laser.setVelocityX(200);
      this.canShoot = false;
      this.time.delayedCall(500, () => {
        this.canShoot = true;
      });
    }

       
    if (this.canShoot && this.cursors.space.isDown && this.player.flipX == true) {
      var laser = this.physics.add.sprite(this.player.x - 30, this.player.y - 5, 'laser').setScale(0.08);
      this.lasers.add(this.laser);
      this.laser.flipX = true;
      this.laser.body.allowGravity = false;
      this.laser.setVelocityX(-200);
      this.canShoot = false;
      this.time.delayedCall(500, () => {
        this.canShoot = true;
      });
    }
    
    this.lasers.children.each(function (laser) {
      if (this.laser.y < 0) {
        this.laser.destroy();
      }
    });
    
    
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


  enemyFollows() {
    this.physics.moveToObject(this.monster, this.player, 50);
  }

   destroyMonster(laser, monster) {
    this.laser.destroy();
    this.monster.destroy();
  }

   gameOver() {


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
        debug: true,
      }
    },
    scene: [home, menu, controls, first, second]
  };
  
  var game = new Phaser.Game(config);
  