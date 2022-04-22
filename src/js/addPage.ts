import './types.ts';
import Control from './Control';

const createPage = () => {
  const SIZE_BLOCK = 40;

  const game = {
    area: [
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','x','o','o','o','o','x','o','o'],
      ['o','o','x','o','o','o','o','x','o','x'],
      ['x','x','x','o','x','x','o','x','o','x'],
      ['x','x','x','o','x','x','o','x','x','x'],
    ],

    activeTetromino: {
      x: 3,
      y: 0,
      block: [
        ['o','x','o'],
        ['o','x','o'],
        ['x','x','o'],
      ],
    },

    moveLeft() {
      game.activeTetromino.x -= 1;
    },

    moveRight() {
      game.activeTetromino.x += 1;
    },

    moveDown() {
      game.activeTetromino.y += 1;
    },
    
    rotateTetromino() {
      game.activeTetromino.y += 1;
    },

    viewArea() {
      const area = JSON.parse(JSON.stringify(this.area));
      const {x, y, block} = this.activeTetromino;

      for (let i = 0; i < block.length; i++) {
        const row = block[i];
        console.log('row: ', row);
        for (let j = 0; j < row.length; j++) {
          console.log('row[j]: ', row[j]);
          if (row[j] === 'x') {
            area[y + i][x + j] = block[i][j];
          }
        }
      }
      return area;
    }
  }

  game.viewArea();

  const { body } = document;
  const h1 = new Control(body, 'h1').node;
  new Control(h1, 'span', '', 'TETRIS');
  h1.append(' for JS');
  const container = new Control(body, undefined, 'container').node;

  const canvas: any = new Control(container, 'canvas', 'game-area').node;
  canvas.width = SIZE_BLOCK * 10;
  canvas.height = SIZE_BLOCK * 20;

  const context = canvas.getContext('2d');

  const showArea = (area?) => {
    for (let y = 0; y < area.length; y++) {
      const line = area[y];

      for (let x = 0; x < line.length; x++) {
        const block = line[x];
        if (block === 'x') {
          context.fillStyle = '#26a96c';
          context.strokeStyle = 'white';
          context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
          context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
        }
      }
    }
  };

  showArea(game.viewArea());
};
export default createPage;
