import AppLoader from "@/app/components/core/appLoader"
import { ProgramEntrySettings } from "@/modules"
import {config} from '@/config/env'
import { Camera, CameraController } from "./camera"
import GLContext from "./glContext"
import Light from "./light"
import { Vector3 } from "./math"
import { Model, ModelShader } from "./model"
import ObjLoader from "./objLoader"
import { InfiniteGrid, InfiniteGridShader } from "./primitives/grid/infiniteGrid"
import Texture from "./Textures/texture"

export default class Scene {
    constructor(){
        (async()=>{
            const appLoader = new AppLoader()
            
            const glContext = new GLContext(ProgramEntrySettings.WEBGL_CANVAS_ID)
            const [wp, wh] = [0.95, 0.90]
            glContext.fitScreen(wp, wh).setClearColor(13, 17, 23, 1.0).clear()
            const gl = glContext.getContext() as WebGLRenderingContext

            const lightPosition1 = new Vector3(0, 2.5, 3)
            const light1 = new Light(lightPosition1)

            const vertices = await ObjLoader.loadOBJ(config?.MODELS.FORMULA_1.MODEL)
            const textures: Texture[] =  []
            for (const t of config?.MODELS.FORMULA_1.TEXTURES as string[]) {
                textures.push(await Texture.loadTexture(gl, t))
            }
            

            const camera = new Camera(gl as WebGLRenderingContext)
            camera.transform.position.set(0, 0.5, 1.5)
            new CameraController(gl as WebGLRenderingContext, camera)

            const infiniteGridShader = new InfiniteGridShader(gl as WebGLRenderingContext, camera)
            const infiniteGrid = InfiniteGrid.createGeometry(gl, infiniteGridShader)

            const modelShader = new ModelShader(gl as WebGLRenderingContext, camera)
            const model = Model.createGeometry(gl, modelShader, vertices)
            model.setScale(0.0035,0.0035,0.0035).setRotation(0,30,0)

            appLoader.disable()

            const loop = () => {

                camera.updateViewMatrix()

                infiniteGridShader.setUniforms(gl).shaderProgram
                    .renderModel(infiniteGrid.preRender())

                modelShader.setUniforms(gl, model.preRender())
                    .shaderProgram.renderModel(model.preRender())

                for (const i in textures) {
                    const index = Number(i)
                    textures[i].setUniform(modelShader, index).activate(index)
                }

                light1.setUniforms(gl, modelShader)

                requestAnimationFrame(loop)
            }
            loop()
        })()

    }
}