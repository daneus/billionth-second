import { Curve, Vector3 } from 'three';

// GrannyKnot

class GrannyKnot extends Curve {
  getPoint(t, optionalTarget = new Vector3()) {
    const point = optionalTarget;

    t = 2 * Math.PI * t;

    const x =
      -0.2 * Math.cos(t) -
      0.6 * Math.sin(t) -
      0.4 * Math.cos(3 * t) -
      0.6 * Math.sin(3 * t);
    const y =
      -0.1 * Math.cos(2 * t) -
      0.2 * Math.sin(2 * t) +
      0.3 * Math.cos(4 * t) +
      0.4 * Math.sin(4 * t);
    const z = 0.7 * Math.cos(3 * t) - 0.4 * Math.sin(3 * t);

    return point.set(x, y, z).multiplyScalar(11);
  }
}

export { GrannyKnot };
