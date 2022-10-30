use glob::glob;
use imagesize::size;
use std::path;

use crate::service::{get_file_list, is_image};
use serde_with::serde_as;
use tauri::{command, AppHandle, Wry};

#[serde_as]
#[derive(serde::Serialize)]
pub struct ImageFile {
    // 图片本地地址
    src: String,
    // 图片名称
    name: String,
    // 图片宽度
    originWidth: usize,
    // 图片高度
    originHeight: usize,
}

#[command]
pub fn get_folder_images(dir: &str) -> Result<Vec<ImageFile>, String> {
    let file_path = std::path::PathBuf::from(dir);
    let file_name = String::from(file_path.file_name().unwrap().to_str().unwrap());

    let mut files: Vec<ImageFile> = vec![];

    let extPatterns = [
        "/**/*.jpeg",
        "/**/*.jpg",
        "/**/*.png",
        "/**/*.webp",
        "/**/*.gif",
        "/**/*.bmp",
    ];

    for ext in extPatterns {
        let mut pattern = dir.to_owned();
        pattern.push_str(ext);
        for entry in glob(&pattern).expect("Failed to read glob pattern") {
            match entry {
                Ok(path) => {
                    let str = path.display().to_string();
                    let (width, height) = match size(&str) {
                        Ok(dim) => (dim.width, dim.height),
                        Err(why) => panic!("Error getting dimensions: {:?}", why),
                    };
                    files.push(ImageFile {
                        src: str,
                        name: String::from(path.file_name().unwrap().to_str().unwrap()),
                        originWidth: width,
                        originHeight: height,
                    })
                }
                Err(e) => println!("{:?}", e),
            }
        }
    }

    Ok(files)
}
