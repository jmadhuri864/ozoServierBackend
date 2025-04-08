import multer from 'multer'
import path from 'path';

const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

export const upload = multer({ storage ,limits: { fileSize: 2 * 1024 * 1024 }});
