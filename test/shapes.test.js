const shape = require('../lib/shapes.js');

describe('Triangle', () => {
  test('should render a triangle with lime fill.', () => {
    const expectedShape = `<polygon points="100,10 200,300 0,300" style="fill:lime;" />`;
    const svgTriangle = new shape.Triangle('red','lime','JAE');
    expect(svgTriangle.render()).toEqual(expectedShape);
  });
});


describe('Square', () => {
  test('should render a square with lime fill.', () => {
    const expectedShape = `<rect x="75" y="25" width="150" height="150" style="fill:lime" />`;
    const svgSquare = new shape.Square('red','lime','JAE');
    expect(svgSquare.render()).toEqual(expectedShape);
  });
});


describe('Circle', () => {
  test('should render a circle with lime fill.', () => {
    const expectedShape = `<circle cx="100" cy="150" r="100" fill="lime" />`;
    const svgCircle = new shape.Circle('red','lime','JAE');
    expect(svgCircle.render()).toEqual(expectedShape);
  });
});