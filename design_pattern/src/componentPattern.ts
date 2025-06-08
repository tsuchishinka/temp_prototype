interface Component {
  update: (component: Component) => void
}

type World = {

}

type Graphics = {

}



class GameObject implements Component {
  input: InputComponent
  physics: PhysicsComponent
  graphics: GraphicsComponent

  constructor(input: InputComponent, physics: PhysicsComponent, graphics: GraphicsComponent) {
    this.input = input
    this.physics = physics
    this.graphics = graphics
  }

  update(world: World) {
    this.input.update(this)
    this.physics.update(this, world)
    this.graphics.update(this)
  }
}

class InputComponent implements Component {
  update(component: Component) {

  }
}

class PhysicsComponent {
  update(component: GameObject, world: World) {

  }
}

class GraphicsComponent implements Component {
  update(component: Component) {

  }
}