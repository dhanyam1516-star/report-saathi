# ReportSaathi (रिपोर्ट साथी)
### *Educational Pathology Lab Report Explainer & Patient Health Literacy Assistant*

ReportSaathi is an empathetic, AI-assisted web application built to explain medical laboratory reports in simple, jargon-free 8th-grade language for educational purposes.

> **Important Educational Disclaimer:**
> ReportSaathi is strictly for personal understanding and patient health literacy. It is **not** a clinical diagnostic tool and does not provide medical prescriptions or clinical diagnoses. Users must always consult their licensed doctor or healthcare professional with their printed lab results.

---

## 🛠️ Stack Architecture

* **Frontend:** React 19 + Vite + Tailwind CSS + Lucide Icons
* **Extraction (Phase 2):** PyMuPDF (`fitz`) for digital PDFs + Tesseract OCR for physical report scans & images
* **Educational Intelligence (Phase 3):** Google Gemini 2.5 Flash API with strict grounding & hallucination prevention
* **Persistence & History (Phase 5):** Supabase (Guest-first architecture with optional login)

---

## 🚀 How to Run the Frontend Locally

### Option A: Standard Vite Dev Server
Open a terminal in your workspace (`c:\Users\Dhanya\Desktop\CSDS\frontend`) and run:

```powershell
cd frontend
npm install
npm run dev
```
Then open the displayed local URL (typically **`http://localhost:5173`**).

---

### Option B: Instant Zero-Install Direct Preview (Recommended for immediate review)
Because no external node modules are required for the preview, you can run either:

1. **One-Click Script:** Double-click `start_app.bat` in the project root, or
2. **Direct Browser File:** Open `frontend/preview.html` in Chrome, Edge, or Firefox:
   ```
   file:///c:/Users/Dhanya/Desktop/CSDS/frontend/preview.html
   ```
3. **Python Local Server:**
   ```powershell
   python serve_frontend.py
   ```
   Then open: **`http://localhost:5173`**

---

## 📂 Project Structure

```text
CSDS/
├── frontend/
│   ├── index.html                   # Vite HTML entry
│   ├── preview.html                 # Standalone interactive preview
│   ├── package.json                 # React & Tailwind dependencies
│   ├── vite.config.js               # Vite server config
│   ├── tailwind.config.js           # Custom health & saathi color palette
│   ├── postcss.config.js            # PostCSS configuration
│   └── src/
│       ├── main.jsx                 # React root mount
│       ├── App.jsx                  # State machine & view coordinator
│       ├── index.css                # Tailwind directives & scanline animations
│       ├── data/
│       │   └── sampleReports.js     # Realistic CBC, Lipid, and Thyroid datasets
│       └── components/
│           ├── Navbar.jsx           # Top branding, navigation & disclaimer badge
│           ├── LandingPage.jsx      # Hero, educational mission & 3-step workflow
│           ├── Dashboard.jsx        # Report management, sample switcher & quick actions
│           ├── UploadModal.jsx      # Drag-and-drop, PDF/JPG/PNG validation & demo quick-picker
│           ├── LoadingState.jsx     # High-tech animated medical scanner & progress pipeline
│           ├── ResultsPage.jsx      # Biomarker cards, plain meanings, and doctor checklist
│           └── DisclaimerModal.jsx  # Mandatory educational disclaimer & emergency guidance
├── serve_frontend.py                # Python HTTP server
├── start_app.bat                    # One-click Windows starter script
└── README.md
```

---

## 🧪 Included Realistic Demo Datasets

1. **Complete Blood Count (CBC) with Differential:**
   * Demonstrates mild low hemoglobin (12.1 g/dL) and low RBC alongside normal white blood cells and platelets.
   * Educational note: explains oxygen carrying capacity and questions regarding dietary iron.
2. **Comprehensive Lipid & Cholesterol Profile:**
   * Demonstrates elevated LDL (142 mg/dL) and Total Cholesterol (224 mg/dL) paired with protective HDL (58 mg/dL).
   * Educational note: explains arterial plaque mechanics and cardiovascular discussion points.
3. **Thyroid Function Panel (TFT):**
   * Demonstrates subclinical hypothyroid pattern with mildly high TSH (5.82 uIU/mL) but healthy Free T3 & Free T4.
   * Educational note: explains the pituitary-thyroid feedback loop in plain terminology.
