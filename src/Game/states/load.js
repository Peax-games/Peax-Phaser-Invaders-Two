export default function loadState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.NO_SCALE;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.image('bullet', 'img/bullet.png');
            this.game.load.image('enemyBullet', 'img/enemy-bullet.png');
            this.game.load.spritesheet('invader', 'img/invader32x32x4.png', 32, 32);
            this.game.load.image('ship', 'img/player.png');
            this.game.load.spritesheet('kaboom', 'img/explode.png', 128, 128);
            this.game.load.image('starfield', 'img/starfield.png');
            this.game.load.image('background', 'img/background2.png');

        },
        create: function () {
            this.game.state.start('play')
        }
    }
}