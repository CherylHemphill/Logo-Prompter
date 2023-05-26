class Square {
    constructor() {
      this.color = "";
    }
    setColor(color) {
      this.color = color;
    }
    render() {
      return `<rect x="10" y="10" width="200" height="200" fill="${this.color}" />`;
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
      return `<rect x="10" y="10" rx="10" ry="10" width="180" height="180" fill="${this.color}" />`;
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
      return `<circle cx="120" cy="105" r="95" fill="${this.color}" />`;
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
      return `<polygon points="150,0 300,200 0,200" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Square,
    RoundedSquare,
    Circle,
    Triangle,
  };
  