import Renderer from './renderer';
import ShaderProgram  from './shaderProgram';
import Camera  from './camera';
import Light  from './light';
import Mesh from './mesh';
import {
    ProgramEntry
} from '../modules';


const renderer = new Renderer(document.getElementById(ProgramEntry.WEBGL_CANVAS_ID) as HTMLCanvasElement)
renderer.setClearColor(0.0, 0.0, 0.0, 1.0);
const gl: WebGLRenderingContext = renderer.getContext();

const meshArray: Array<Mesh> = [];

Mesh.loadMesh(gl, ProgramEntry.PATH_ASSETS_SPHERE, ProgramEntry.PATH_ASSETS_DIFFUSE)
    .then((mesh) => meshArray.push(mesh));

ShaderProgram.initShaderProgram(gl, ProgramEntry.PATH_SHADE_VERTEX, ProgramEntry.PATH_SHADE_FRAGMENT)
    .then(shaderProgram => renderer.setShaderProgram(shaderProgram));


const camera = new Camera(); camera.setOrthographic(16, 10, 10);
const light = new Light();

const loop = () => {
    renderer.render(camera, light, meshArray);
    camera.position = camera.position.rotateY(Math.PI / ProgramEntry.CAMERA_ANGLE_DIVISION);
    requestAnimationFrame(loop);
}

loop();

