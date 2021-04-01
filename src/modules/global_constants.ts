export enum ProgramEntrySettings {
    WEBGL_CANVAS_ID = 'qrius-glCanvas',
    WEBGL_CONTEXT = 'webgl',
    WEBGL_CONTEXT_EXPERIMENTAL = 'experimental-webgl',
    WEBGL_CONTEXT_WEBKIT = 'webkit-3d',
    WEBGL_CONTEXT_MOZ = 'moz-webgl',
    WEBGL_CONTEXT_ERROR_MESSAGE = 'Could not initialise WebGL',
    PATH_ASSETS_SPHERE = '/assets/resources/sphere.obj',
    PATH_ASSETS_DIFFUSE = '/assets/resources/textures/diffuse.png',
    PATH_SHADE_VERTEX = '/shaders/basic.vert',
    PATH_SHADE_FRAGMENT = '/shaders/basic.frag',
}

export enum CameraSettings {
    CAMERA_ANGLE_DIVISION = 120,
    NEAR_PLANE = 1,
    FAR_PLANE = 2000,
    FIELD_OF_VIEW = 60,
    PROJECTION_DEPTH = 400,
    SCREEN_LEFT = 0,
    SCREEN_TOP = 0,
    ORTHO_NEAR = 400,
    ORTHO_FAR = -400,
}

export enum ControlsSettings {
    KEY_DOWN_EVENT = 'keydown',
    KEY_UP_EVENT = 'keyup',
    KEY_DOWN = 40,
    KEY_UP = 38,
    KEY_LEFT = 37,
    KEY_RIGHT = 39,
}

export enum GLSetttings {
    ATTR_POSITION_NAME = "a_position",
    ATTR_POSITION_LOC = 0,
    ATTR_NORMAL_NAME = "a_norm",
    ATTR_NORMAL_LOC = 1,
    ATTR_UV_NAME = "a_uv",
    ATTR_UV_LOC = 2,
}