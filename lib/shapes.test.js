const { Square, RoundedSquare, Triangle, Circle } = require('./shapes');

test('renders square with given color', ()=> {
    const shape = new Square();
    shape.setColor('red');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="red" />')
});

test('renders the Rounded Square with given color', ()=> {
    const shape = new RoundedSquare();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="50" y="50" rx="10" ry="10" width="200" height="100" fill="green" />')
});

test('render the Circle with given color', () => {
    const shape = new Circle;
    shape.setColor('purple');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="purple" />');
});

test('renders the Triangle with given color', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150,50 250,150 50,150" fill="blue" />');
});