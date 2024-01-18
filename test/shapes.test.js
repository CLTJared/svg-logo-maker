const shape = require('../lib/shapes.js');

describe('Triangle', () => {
  test('should render a triangle with lime fill, black text, text as JAE.', () => {
    const expectedShape = `<svg height="300" width="200"><polygon points="100,10 200,300 0,300" style="fill:lime;" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" style="font-size: 2rem;">JAE</text></svg>`;
    const svgTriangle = new shape.Triangle('black','lime','JAE');
    expect(svgTriangle.render()).toEqual(expectedShape);
  });
});


describe('Square', () => {
  test('should render a square with lime fill, black text, text as JAE.', () => {
    const expectedShape = `<svg height="300" width="200"><rect x="75" y="25" width="150" height="150" style="fill:lime" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" style="font-size: 2rem;">JAE</text></svg>`;
    const svgSquare = new shape.Square('black','lime','JAE');
    expect(svgSquare.render()).toEqual(expectedShape);
  });
});


describe('Circle', () => {
  test('should render a circle with lime fill, black text, text as JAE.', () => {
    const expectedShape = `<svg height="300" width="200"><circle cx="100" cy="150" r="100" fill="lime" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" style="font-size: 2rem;">JAE</text></svg>`;
    const svgCircle = new shape.Circle('black','lime','JAE');
    expect(svgCircle.render()).toEqual(expectedShape);
  });
});