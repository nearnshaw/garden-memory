import * as DCL from 'decentraland-api'
import { createSpriteSheet, createAtlas } from 'dcl-sprites'


export function sleep(ms: number = 0) {
  return new Promise(r => setTimeout(r, ms));
}

export enum flowerTypes {
  redPlant,
  yellowPlant,
  orangePlant,
  bluePlant,
  violetPlant,
  whitePlant
 }


 export type Plant = {
   x: number, z:  number, type: flowerTypes, active: boolean, frame: number
  }   // positionX, positionY, color, active, frame
 



export interface IState {
  plants: Plant[],
  currentPlant: [number, number] | null
}

export default class gardenGame extends DCL.ScriptableScene <any, IState>{
  state: IState = {
    plants: [],
    currentPlant: null
  }


  sceneDidMount(){
    this.generateField()
  }

  generateField(){
    const plants: Plant[] = [];

    [0, 1, 2, 3, 4, 5].forEach(x => {
      [0, 1, 2, 3, 4, 5].forEach(z => {
        let plantType = Math.random() * 6
        plants.push({x: x * 2, z: z * 2, type: plantType, active: false, frame: 0})
      })
    })

    this.setState({plants: plants})
    console.log(this.state.plants)
  }



  renderMaterials(){
    return (
      <basic-material
      id="explosion"
      texture="materials/explosion.png"
    /> 
    )
  }

  renderPlants(){
    let renderedPlants: any[] = []
    for (var plant in this.state.plants){
      renderedPlants.push(
        <plane
          key={plant}
          billboard={2}
          position={{x: this.state.plants[plant].x, y: 1, z: this.state.plants[plant].z }}
         // frame={this.state.plants[plant].frame}
      />
      )
    }
    return(renderedPlants)
  }

  async render() {
    const redPlant = createSpriteSheet({
      material: "#explosion",
      textureSize: { width: 512, height: 512 },
      cellSize: { width: 171, height: 171 }
    })
    return (
      <scene>
        {this.renderMaterials()}
       
        {this.renderPlants()}
       </scene>
    )
  }
}
