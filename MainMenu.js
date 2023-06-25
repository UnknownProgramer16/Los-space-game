Gamepad.MainMenu = function(game) {

};

var titlescreen;


Gamepad.MainMenu.prototype = {
    create:function(game) {

        this.createButton(game,"start",game.world.centerX,game.world,centerY + 32, 300, 100
        function(){
            this.state.start('game');
        });

        titlescreen = game.add.sprite(game.world.centerX,game.world.centerY - 
        192, 'titlescreen');
        titlescreen.anchor.setTo(0.5,0.5);

    }

    update:function(game){

    },

    createButton: function(game,string,x,y,w,h,callback){
        var button1 = game.addbutton(x,y, 'button',callback,this,2,1,0);

        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;

        

    };

};