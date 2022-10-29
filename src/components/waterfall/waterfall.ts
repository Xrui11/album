export type WaterfallOption = {
  container: HTMLElement;
  // 图片列表
  images: ImageType[];
  // 最小图片宽度
  minWidth?: number;
  // 边距
  margin?: number;
};

export type ImageType = {
  // 图片地址
  src: string;
  // 图片原始宽度
  originWidth?: number;
  // 图片原始高度
  originHeight?: number;
  // 图片宽度
  width?: number;
  // 图片高度
  height?: number;
  // 横坐标
  x?: number;
  // 纵坐标
  y?: number;
};

export type ColumnType = {
  x: number;
  y: number;
};

export class Waterfall {
  minWidth: number;
  container: HTMLElement;
  images: ImageType[];
  margin: number;

  constructor(options: WaterfallOption) {
    this.container = options.container;
    this.images = options.images || [];
    this.minWidth = options.minWidth || 200;
    this.margin = options.margin || 10;
  }

  // 获取渲染图片列表
  async getRenderImages(): Promise<images> {
    const result: ImageType[] = [];
    const { width, columns } = this.getColumns();
    const imageWidth = width - this.margin;

    for (const image of this.images) {
      const renderImage = await this.getImageSize(image);
      renderImage.width = imageWidth;
      // 计算好渲染的高度
      renderImage.height =
        (renderImage.originHeight as number) *
        (imageWidth / (renderImage.originWidth as number));

      let minY = 0,
        minIdx = 0;
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        const y = column.y + renderImage.height;

        if (i === 0) {
          minY = y;
          minIdx = 0;
          continue;
        }

        if (y < minY) {
          minY = y;
          minIdx = i;
        }
      }

      renderImage.x = columns[minIdx].x;
      renderImage.y = columns[minIdx].y;
      columns[minIdx].y = minY + this.margin;

      result.push(renderImage);
    }

    return result;
  }

  // 获取主容器的宽度
  private getContainerWidth() {
    return this.container.offsetWidth;
  }

  // 获取图片大小尺寸
  async getImageSize(_image: any): Promise<ImageType> {
    return new Promise(resolve => {
      const img = new Image();
      img.src = _image.src;
      img.onload = () => {
        resolve({
          src: img.src,
          originWidth: img.width,
          originHeight: img.height,
        });
      };
    });
  }

  // 宽度列数据
  // 例如：[0, 200, 400, 600, 800]
  private getColumns() {
    const containerWidth = this.getContainerWidth();
    const count = Math.floor(containerWidth / this.minWidth);
    let width = containerWidth / count;
    let columns: ColumnType[] = [];
    for (let i = 0; i < count; i++) {
      columns.push({ x: i * width, y: 0 });
    }
    return {
      width,
      columns,
    };
  }
}
