const { Square, RoundedSquare, Circle, Triangle  } = require('./shapes');

test('renders square with given color', ()=> {
    const shape = new Square();
    shape.setColor('red');
    expect(shape.render()).toEqual('<rect x="10" y="10" width="200" height="200" fill="red" />')
});

test('renders the Rounded Square with given color', ()=> {
    const shape = new RoundedSquare();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="10" y="10" rx="10" ry="10" width="180" height="180" fill="green" />')
});

test('render the Circle with given color', () => {
    const shape = new Circle;
    shape.setColor('purple');
    expect(shape.render()).toEqual('<circle cx="120" cy="105" r="95" fill="purple" />');
});

test('renders the Triangle with given color', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150,0 300,200 0,200" fill="blue" />');
});