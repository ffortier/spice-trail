class TrailNode {
  x: number = 0;
  y: number = 0;

  constructor(
    private img: HTMLImageElement,
    private next: TrailNode | null= null,
  ) { }

  update(x: number, y, number) {

  }
}

let mousePageX = 0;
let mousePageY = 0;

function createImage(url: string): HTMLImageElement {
  const el = document.createElement('img');
  el.src = url;
  el.style.position = 'absolute';
  el.style.top = '0px';
  el.style.left = '0px';
  document.body.append(el);
  return el;
}

const head = new TrailNode(
  createImage('ginger.png'),
  new TrailNode(
    createImage('baby.png'),
    new TrailNode(
      createImage('sporty.png'),
      new TrailNode(
        createImage('scary.png'),
        new TrailNode(
          createImage('posh.png'),
        )        
      )
    )
  )  
)

setInterval(() => {

}, 100);

addEventListener('mousemove', e => {
  mousePageX = e.pageX;
  mousePageY = e.pageY;
})