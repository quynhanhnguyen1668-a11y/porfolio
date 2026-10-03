# Portfolio — Nguyễn Minh Anh

**Cách mở:** double-click `index.html`. Không cần cài đặt, không cần server hay Internet.

## Cập nhật nội dung
Mọi chữ, số liệu, dự án, kinh nghiệm, lời giới thiệu nằm trong **`data/content.js`** (mỗi đoạn có bản `vi` và `en`). Sửa → lưu → nhấn F5.

- **Đổi thông tin liên hệ thật:** mục `contact` (email, LinkedIn) trong `content.js`.
- **Thêm dự án:** copy một khối trong `projects: [...]`, đổi `id` (duy nhất), nội dung và `image`; nếu muốn số liệu hiện ở "Kết quả nổi bật" thì thêm vào `highlights` với `project: "<id>"`.
- **Đổi ảnh:** thay file trong `assets/images/` (giữ tên hoặc sửa đường dẫn trong `content.js`). Nên dùng JPG/WebP dưới ~200 KB.
- **Đổi CV:** thay `assets/CV_Nguyen_Minh_Anh.pdf`.
- **Màu sắc:** các biến ở đầu `css/styles.css` (`--navy`, `--accent`…).

## Ghi chú
- Ngôn ngữ và giao diện sáng/tối được ghi nhớ trong trình duyệt (`localStorage`).
- Form liên hệ mở ứng dụng email của người xem (`mailto:`); website không lưu tin nhắn.
- Link trực tiếp tới dự án: `index.html#project-purchase-request`, `#project-ops-dashboard`, `#project-sop`, `#project-ai-pilot`.
- Dữ liệu CV, liên hệ, lời giới thiệu hiện là **dữ liệu giả lập** (ghi chú ở chân trang; xoá `meta.demoNote` khi dùng dữ liệu thật).
- Đưa lên mạng sau này: tải cả thư mục lên GitHub Pages / Netlify / Vercel, không cần đổi code.
