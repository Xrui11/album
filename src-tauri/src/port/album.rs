use std::path;

use crate::service::{get_file_list, is_image};
use tauri::{command, AppHandle, Wry};

#[serde_as]
#[derive(serde::Serialize)]
struct ImageFolderFile {
    // 是否为目录
    is_dir: bool,
    // 图片本地地址
    path: String,
    // 图片名称
    name: String,
    // 图片宽度
    width: i16,
    // 图片高度
    height: i16,
    // 图片列表
    images: Vec<String>,
}

#[serde_as]
#[derive(serde::Serialize)]
struct ImageFolder {
    name: String,
    files: Vec<ImageFolderFile>,
}

#[command]
pub async fn get_folder_images<R: Runtime>(
    window: tauri::Window<R>,
    path_str: &str,
) -> Result<(), String> {
    let file_path = std::path::PathBuf::from(path_str);
    let file_name = String::from(file_path.file_name().unwrap().to_str().unwrap());

    let mut folderInfo = ImageFolder {
        name: file_name,
        files: vec![],
    };

    for entry in file_path.read_dir() {
        if entry {
            let mut file2 = vec![];
        }
    }

    Ok(folderInfo)
}
