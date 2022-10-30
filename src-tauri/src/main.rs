#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod error;
mod port;
mod prelude;
mod service;

use crate::port::get_folder_images;
// mod infra;
// mod model;

// #[tokio::main]
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_folder_images])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
