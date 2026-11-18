# trois bonheurs par jour（免費網站骨架）

三種語言（English / 中文 / Français）、關於我（含 Instagram 貼文）、油畫（可標示可購買）、攝影（依年月、相機、底片、黑白/彩色篩選）。

## 本機預覽
1. 安裝 Hugo Extended：https://gohugo.io/installation/
2. 在此資料夾執行 `hugo server`
3. 打開 http://localhost:1313

## 部署到 Netlify（免費）
1. 把資料夾推到 GitHub，或直接用 Netlify 的 Drop 功能上傳 `public` 資料夾
2. 在 Netlify 連結儲存庫，`netlify.toml` 會自動設定建置指令
3. 網址會是 `你的名稱.netlify.app`，之後可以換成自己的網域

## 需要替換的地方
- `hugo.toml` 的 `baseURL`
- `content/about.*.md` 的 `instagram` 網址（改成你的貼文）
- `content/paintings/` 與 `content/photography/` 的圖片檔案，放在 `static/images/` 下
- 每個作品的 `camera`、`film`、`color`、`date` 欄位會用來篩選
- `i18n/` 內的文字可以隨時修改
