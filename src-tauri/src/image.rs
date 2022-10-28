use std::str;

pub fn is_image(s: &str) -> bool {
  let s: String = s.to_lowercase();
  let exts = [".jpeg", ".jpg", ".webp", ".gif", ".png", ".bmp"];
  for ext in exts {
    if s.ends_with(ext) {
      return true;
    }
  }
}