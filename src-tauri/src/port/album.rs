use crate::service::{get_file_list, is_image};
use tauri::{command, AppHandle, Wry};

#[command]
pub async fn get_folder_images<R: Runtime>(
    app: tauri::AppHandle<R>,
    window: tauri::Window<R>,
) -> Result<(), String> {
}
