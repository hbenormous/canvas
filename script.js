const canvas = {
    width: 500,
    height: 500
};

function getCtx() {

    return document.querySelector("canvas").getContext("2d");

}

const player = new class Player {

    constructor() {

        this.x = 0;
        this.y = 0;
        this.radius = 20;

    }

    draw() {

        const ctx = getCtx();

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // BOLA PRETA
        ctx.beginPath();
        ctx.fillStyle = "#000";
        ctx.arc(this.x, this.y, this.radius + 4, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.fill();

        // BOLA VERMELHA
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.fill();

        // MEU DISCORD(TEXTO)
        ctx.beginPath();
        ctx.fillStyle = "#7289da";
        ctx.font = "bold 20px Nobile, arial, sans-serif";
        ctx.fillText("aazin#8560", this.x - 50, this.y + 50);
        ctx.closePath();

    }

}();

class Game {

    setPlayerPosition(x, y) {

        const ctx = getCtx();

        player.x = x || player.x;
        player.y = y || player.y;

        player.draw(ctx);

    }

    onPlayerMovement(event) {

        switch (event.keyCode) {
            case 37:
                player.x -= player.radius;
                break;
            case 39:
                player.x += player.radius;
                break;
            case 40:
                player.y += player.radius;
                break;
            case 38:
                player.y -= player.radius;
                break;
            default:
                null;
        }

        player.draw();

    }

}

class Init extends Game {

    constructor() {

        super();

    }

}

window.onload = () => {

    const init = new Init();

    // COLOCAR O JOGADOR NO CENTRO
    init.setPlayerPosition(250, 250);

    // EVENTOS DE DETECÇÃO DE TECLA
    document.onkeyup = init.onPlayerMovement;
    document.onkeydown = init.onPlayerMovement;

};