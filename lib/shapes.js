class Svg {
  constructor(){
    this.version = "1.2";
    this.width = "300",
    this.heigh = "200",
    this.xmlns = "http://www.w3.org/2000/svg"
  }

  render(){
    return `<svg version=${this.version} width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
  }
}



class Circle {
  constructor(color){
    this.color = color
  }
  // <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

  render(){
    //renders the circle tag
    //similar to above
  }
}

inquirer.prompt([
  {
    type: 'list',
    message: "Shape",
    name: "shape"
  },
  {
    type: 'input',
    message: "Color",
    name: "shapeColor"
  }
]).then(response => {
  if(response.shape === 'circle'){
    const shape = new Circle(shapeColor)
  }
})
