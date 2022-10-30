#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error("Fail to get Ctx")]
    CtxFail,

    #[error("Value not of type '{0}'")]
    XValueNotOfType(&'static str),

    #[error("Property '{0}' not found")]
    XPropertyNotFound(String),

    #[error("Fail to create. Cause: {0}")]
    StoreFailToCreate(String),

    #[error(transparent)]
    IO(#[from] std::io::Error),
}
