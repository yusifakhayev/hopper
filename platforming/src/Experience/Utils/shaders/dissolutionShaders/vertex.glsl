varying vec2 vUv;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPostion;
    vec4 projectedPosition = projectionMatrix * viewPostion;

    gl_Postion = projectedPosition;

    vUv = uv;
}
