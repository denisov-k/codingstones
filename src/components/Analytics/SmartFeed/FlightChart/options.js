module.exports = {
  globe: {
    environment: '/data/draft2/flights/starfield.jpg',
    heightTexture: '/data/draft2/flights/bathymetry_bw_composite_4k.jpg',
    displacementScale: 0.1,
    displacementQuality: 'high',
    baseColor: '#000',
    shading: 'realistic',
    realisticMaterial: {
      roughness: 0.2,
      metalness: 0
    },
    postEffect: {
      enable: true,
      depthOfField: {
        enable: false,
        focalDistance: 150
      }
    },
    temporalSuperSampling: {
      enable: true
    },
    light: {
      ambient: {
        intensity: 0
      },
      main: {
        intensity: 0.1,
        shadow: false
      },
      ambientCubemap: {
        texture: '/data/draft2/flights/lake.hdr',
        exposure: 1,
        diffuseIntensity: 0.5,
        specularIntensity: 2
      }
    },
    viewControl: {
      autoRotate: false
    },
    silent: true
  }
}