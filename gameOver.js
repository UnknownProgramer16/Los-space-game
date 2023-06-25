import Phaser from 'Phaser'

export default class gameOver extends Phaser.Scene { 
    constructor() {
      super("lose");
    } 

    preload()
    {
      const fonts = new WebFontFile(this.load, 'Roboto Flex')
      this.load.addFile(fonts)
    }

create()
{


 
 

}

}