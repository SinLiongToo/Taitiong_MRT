# 🚇 台中捷運四界行 — 交通台語互動教學 WebApp

這是一個專為兒童與台語初學者設計的**台中捷運台語學習互動網頁**。本網頁以「台中捷運綠線」為主題，將台語的捷運站名、交通工具詞彙、數字張數、票價金額、月台數字與發車時間（鐘點）融入生動的互動遊戲與語音朗讀中，並結合了專業的台羅拼音變調與語音查詢系統，讓學習台語變得無比有趣！

---

## 🌟 核心功能特色

1. **中捷購票大冒險 (Ticket Adventure)**
   - **綠線 18 站完整收錄**：從「北屯總站」一路玩到「高鐵台中站」。
   - **月台與方向引導**：動態辨識行車方向，提示「第 1 月台 (往北屯總站)」或「第 2 月台 (往高鐵台中站)」。
   - **票價智慧計算**：依搭乘站數自動計算中捷票價（NT$20 至 NT$50），並以台語朗讀完整購票對話。

2. **互動式捷運綠線地圖 (Interactive SVG Map)**
   - 精緻繪製台中捷運綠線的弧形路線與所有 18 個站點。
   - 標註重要轉乘點（台鐵松竹、大慶、高鐵台中站），點擊地圖即可直接聆聽真人台語發音。
   - 車站選取後，地圖將動態高亮整個行車路徑，火車動畫會隨路徑前行。

3. **台語語音自查表與變調練習器 (Tone Sandhi & Voice Lookup) — 史秀里冊房技術支援**
   - **站名查詢表**：一鍵列出 18 個中捷車站的漢字、台羅拼音、本調與變調拼讀，以及 Chao 聲調五度譜（聲調五度圖）。
   - **聲母韻母自查器**：內建教育部 1,855 個單音節真人發音庫。您可以自由選擇「聲母」、「韻母」、「聲調」或直接輸入拼音（如 `tsui3`、`góa`），系統將即時解析聲調流變並順暢播放對應的台語讀音。

4. **時間鐘點師 (Clock Trainer)**
   - 互動指針時鐘，時針分針隨點擊拖曳轉動，即時以台語朗讀時間（例如：「下午三點半」、「早上十點十五分」）。

5. **交通詞彙牆 (Vocabulary Wall)**
   - 精選 20+ 個常用捷運及交通工具詞彙卡片，點擊發音，支援分類篩選及一鍵 JSON 數據匯出。

6. **捷運大檢定 (Challenge Mode)**
   - 隨機 10 題台語聽力測驗，包含「售票挑戰」與「時間挑戰」，答對 8 題以上可解鎖特色捷運紀念章！

7. **我的捷運集章冊 (Stamp Album)**
   - 記錄解鎖的特色印章，點擊印章可聆聽對應的捷運地標台語發音。

---

## 📂 檔案目錄結構

- [index.html](file:///c:/Users/tu-hs/OneDrive/文件/2022_0308_MASA/2022-0708/Projects_antigravity/台中捷運四界行/index.html) — 主要網頁結構
- [style.css](file:///c:/Users/tu-hs/OneDrive/文件/2022_0308_MASA/2022-0708/Projects_antigravity/台中捷運四界行/style.css) — 綠捷風視覺設計、自適應排版、夜間模式與動畫
- [app.js](file:///c:/Users/tu-hs/OneDrive/文件/2022_0308_MASA/2022-0708/Projects_antigravity/台中捷運四界行/app.js) — 捷運計算邏輯、語音拼接引擎、1855 單音節與變調規則資料庫
- [index_single.html](file:///c:/Users/tu-hs/OneDrive/文件/2022_0308_MASA/2022-0708/Projects_antigravity/台中捷運四界行/index_single.html) — 適合 Google Drive 的單一獨立網頁檔
- [blogger_base64_embed.html](file:///c:/Users/tu-hs/OneDrive/文件/2022_0308_MASA/2022-0708/Projects_antigravity/台中捷運四界行/blogger_base64_embed.html) — Blogger 免託管 Iframe 嵌入代碼檔

---

## 🚀 本地運行方式

1. 雙擊開啟 [index.html](file:///c:/Users/tu-hs/OneDrive/文件/2022_0308_MASA/2022-0708/Projects_antigravity/台中捷運四界行/index.html) 即可在瀏覽器運行。
2. 推薦使用本機伺服器以獲得完整的音訊加載體驗：
   ```bash
   python -m http.server 8000
   # 或使用 Node
   npx -y live-server ./
   ```

---

## 🌐 GitHub Pages 免費線上託管發布步驟

本專案已完全相容 **GitHub Pages**，並內建自動化部署流程（[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 與 [`.nojekyll`](.nojekyll)）。

- **專案原始碼庫**：[https://github.com/SinLiongToo/Taitiong_MRT](https://github.com/SinLiongToo/Taitiong_MRT)
- **GitHub Pages 線上直接體驗網址**：[https://sinliongtoo.github.io/Taitiong_MRT/](https://sinliongtoo.github.io/Taitiong_MRT/)

### 步驟 1：上傳代碼至 GitHub 專案庫
在終端機（PowerShell 或 Git Bash）進入本專案資料夾後執行：
```bash
git init
git add .
git commit -m "feat: 初次發布台中捷運四界行 (支援 GitHub Pages、Web Audio 無縫排程與全新 SVG 地圖)"
git branch -M main
git remote add origin https://github.com/SinLiongToo/Taitiong_MRT.git
git push -u origin main
```

### 步驟 2：啟用 GitHub Pages（兩種方式任選）

#### 方式 A：使用 GitHub Actions 自動化部署（推薦）
1. 進入 [SinLiongToo/Taitiong_MRT](https://github.com/SinLiongToo/Taitiong_MRT)，點選上方 **Settings**（設定）。
2. 在左側選單點選 **Pages**。
3. 在 **Build and deployment** 下方的 **Source** 選擇 **GitHub Actions**。
4. 推送代碼後，系統會自動執行工作流程，發布完成後即可線上遊玩：
   👉 **[https://sinliongtoo.github.io/Taitiong_MRT/](https://sinliongtoo.github.io/Taitiong_MRT/)**

#### 方式 B：從 main 分支直接發布
1. 在 **Settings** > **Pages** 中，**Source** 保持 **Deploy from a branch**。
2. **Branch** 選擇 `main`，資料夾選擇 `/ (root)`，點選 **Save**。
3. 等待約 1~2 分鐘即可上線！

