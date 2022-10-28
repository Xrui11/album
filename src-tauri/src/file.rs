use std::path::Path;

pub fn get_file_list(_window: tauri::Window, path: &str) {}

#[tauri::command]
async fn get_folder_images<R: Runtime>(
    app: tauri::AppHandle<R>,
    window: tauri::Window<R>,
) -> Result<(), String> {
}
