

export class Tag {
  ele: HTMLElement;
  x: number;
  y: number;
  z: number;

  constructor(ele: HTMLElement, x: number, y: number, z: number) {
    this.ele = ele;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * @param RADIUS
   * @param fallLength
   * @param CX
   * @param CY
   */
  move(RADIUS: number, fallLength: number, CX: number, CY: number) {
    // var RADIUS = 300;
    // var fallLength = 500;
    var scale = fallLength / (fallLength - this.z);
    var alpha = (this.z + RADIUS) / (2 * RADIUS);
    this.ele.style.fontSize = 15 * scale + "px";
    this.ele.style.opacity = alpha + 0.5 + '';
    this.ele.style.filter = "alpha(opacity = " + (alpha + 0.5) * 100 + ")";
    this.ele.style.zIndex = parseInt(scale * 100 + '') + '';
    this.ele.style.left = this.x + CX - this.ele.offsetWidth / 2 + "px";
    this.ele.style.top = this.y + CY - this.ele.offsetHeight / 2 + "px";
  }
}
