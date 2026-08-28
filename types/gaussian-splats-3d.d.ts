declare module '@mkkellogg/gaussian-splats-3d' {
  export const LogLevel: {
    None: number;
    Error: number;
    Warning: number;
    Info: number;
    Debug: number;
  };

  export interface ViewerOptions {
    rootElement?: HTMLElement;
    cameraUp?: [number, number, number];
    initialCameraPosition?: [number, number, number];
    initialCameraLookAt?: [number, number, number];
    gpuAcceleratedSort?: boolean;
    halfPrecisionCovariancesOnGPU?: boolean;
    progressiveLoad?: boolean;
    dynamicScene?: boolean;
    logLevel?: number;
    orbitControls?: Record<string, unknown>;
    [key: string]: unknown;
  }

  export interface SplatSceneOptions {
    splatAlphaRemovalThreshold?: number;
    rotation?: [number, number, number, number];
    position?: [number, number, number];
    scale?: [number, number, number];
    progressiveLoad?: boolean;
    showLoadingUI?: boolean;
    [key: string]: unknown;
  }

  export class Viewer {
    constructor(options?: ViewerOptions);
    addSplatScene(path: string, options?: SplatSceneOptions): Promise<void>;
    start(): void;
    stop(): void;
    update(): void;
    dispose(): void;
    renderer?: unknown;
  }

  export const PlyParser: {
    parseToUncompressedSplatArray(plyBuffer: ArrayBuffer, outSphericalHarmonicsDegree?: number): any;
  };

  export const SplatBufferGenerator: {
    getStandardGenerator(alphaRemovalThreshold?: number, compressionLevel?: number): any;
  };
}
