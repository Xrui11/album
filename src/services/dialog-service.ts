import { dialog } from '@tauri-apps/api';
import { dir } from 'console';
import { ImageService } from './image-service';

export class DialogService {
  // 选择图片目录
  static async selectImageDir() {
    const imageDir = (await dialog.open({
      title: '选择图片目录',
      directory: true,
    })) as string;
    console.log('selectImageDir', imageDir);
    const res = await ImageService.getImages(imageDir);
  }
}
