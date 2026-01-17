export class Size {
  width: number;
  height: number;
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }
  resize(newWidth: number, newHeight: number): void {
    this.width = newWidth;
    this.height = newHeight;
  }
}
export class Position {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  move(newX: number, newY: number): void {
    this.x = newX;
    this.y = newY;
  }
}
export class ProgramWindow {
  screenSize: Size;
  size: Size;
  position: Position;
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize: Size): void {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const clippedWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const clippedHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    this.size.resize(clippedWidth, clippedHeight);
  }

  move(newPosition: Position): void {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const clippedX = Math.max(0, Math.min(newPosition.x, maxX));
    const clippedY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.move(clippedX, clippedY);
  }
}
export function changeWindow(programWindow: ProgramWindow): ProgramWindow {
  const newSize = new Size(400, 300);
  programWindow.resize(newSize);

  const newPosition = new Position(100, 150);
  programWindow.move(newPosition);

  return programWindow;
}