class Square {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
  }
  
  class RoundedSquare {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="50" y="50" rx="10" ry="10" width="200" height="100" fill="${this.color}" />`;
    }
  }
  
  class Circle {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Triangle {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="150,50 250,150 50,150" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Square,
    RoundedSquare,
    Circle,
    Triangle,
  };
  