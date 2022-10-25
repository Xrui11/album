import { invoke } from '@tauri-apps/api/tauri';

export class ImageService {
  // 获取目录下的图片
  static async getImages(dir: string) {
    return invoke('get_folder_images', { dir });
  }
}
