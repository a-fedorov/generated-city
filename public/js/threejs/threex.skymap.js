/** @namespace */
var THREEx	= THREEx || {}

var textureCube;

THREEx.createSkymap	= function(textureName){
	// if (! (textureCube instanceof THREE.Texture)) textureCube = THREEx.createTextureCube(textureName);
	
	var cubeW = nBlockX * blockSizeX + blockSizeX;
	var cubeD = nBlockZ * blockSizeZ + blockSizeZ;
	var cubeH = 500;

	var shader = THREE.ShaderLib[ "lambert" ];
	var uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	// uniforms[ "tCube" ].value	= textureCube;

	// uniforms["map"].texture = THREE.ImageUtils.loadTexture( 'images/pixelcity_windows4.jpg' );



// uniforms = {
// 	"tCube": { type: "t", value: null },
// 	"tFlip": { type: "f", value: -1 } 
// };

// uniforms = THREE.UniformsUtils.merge( [
// 			// THREE.UniformsLib[ "common" ],
// 			THREE.UniformsLib[ "fog" ],
// 			// THREE.UniformsLib[ "lights" ],
// 			// THREE.UniformsLib[ "shadowmap" ],

// 			{
// 				"tCube": { type: "t", value: null },
// 				"tFlip": { type: "f", value: -1 },
// 				// "ambient"  : { type: "c", value: new THREE.Color( 0xffffff ) },
// 				// "emissive" : { type: "c", value: new THREE.Color( 0x000000 ) },
// 				// "wrapRGB"  : { type: "v3", value: new THREE.Vector3( 1, 1, 1 ) }
// 			}

// 		] ),

// textureCube.format = THREE.RGBFormat;
// uniforms[ "tCube" ].value	= textureCube;

// vertexShader = [
// 	"varying vec3 vWorldPosition;",

// 	"void main() {",

// 		"vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
// 		"vWorldPosition = worldPosition.xyz;",

// 		"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

// 	"}"
// ].join("\n"),

// fragmentShader = [
// 	"uniform samplerCube tCube;",
// 	"uniform float tFlip;",
// 	"varying vec3 vWorldPosition;",
// 	THREE.ShaderChunk[ "fog_pars_fragment" ],
	
// 	"void main() {",

// 		"gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
		
// 		THREE.ShaderChunk[ "fog_fragment" ],
// 	"}"
// ].join("\n")




	var material = new THREE.ShaderMaterial({
		fragmentShader: shader.fragmentShader,
		vertexShader: shader.vertexShader,
		uniforms: uniforms,
		// depthWrite: false,
		side: THREE.BackSide,

		fog: true,
		shading: true,
		lights: true,
		// wireframes: true
	})
// uniforms.map.value.needsUpdate = true;
// console.log(material);
// console.log(uniforms);

	var geometry = new THREE.CubeGeometry(cubeW, cubeH, cubeD)
	var mesh = new THREE.Mesh(geometry, material);
	return mesh
}

THREEx.createTextureCube = function(textureName){
	var urls = [
	  'images/' + textureName + '/px.jpg',
	  'images/' + textureName + '/nx.jpg',
	  'images/' + textureName + '/py.jpg',
	  'images/' + textureName + '/ny.jpg',
	  'images/' + textureName + '/pz.jpg',
	  'images/' + textureName + '/nz.jpg'
	];

	var textureCube	= THREE.ImageUtils.loadTextureCube( urls );
	return textureCube;
}