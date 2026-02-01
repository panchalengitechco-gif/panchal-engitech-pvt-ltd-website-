# Panchal Engitech Website - Management Guide

This website is designed for easy content management. You can update projects, services, and process steps without touching any code.

## 🚀 Quick Setup
1. Open this folder in your code editor (like VS Code).
2. Run `npm install` (first time only).
3. Run `npm run dev` to start the website locally.

---

## 📝 How to Update Content
All website text and data are stored in the `src/data/` folder. Simply edit the JSON files and save to see changes.

### 🏢 Manage Projects
Edit [**projects.json**](src/data/projects.json) to update the Gallery.
- **Title**: Change the project name.
- **Location**: Update project site.
- **Description**: Add more details.
- **Image**: Point to the new image (see "Manage Images" below).

### 🛠️ Manage Services
Edit [**services.json**](src/data/services.json) for the Services page.
- Update descriptions and bullet points for Construction, Fabrication, and Interior Design.

### 🔄 Manage Process Steps
Edit these files to change the "How It Works" timelines:
- [**construction-steps.json**](src/data/construction-steps.json)
- [**fabrication-steps.json**](src/data/fabrication-steps.json)
- [**interior-steps.json**](src/data/interior-steps.json)

---

## 🖼️ Manage Images
1. Place your new images in [**public/assets/**](public/assets/).
2. In the JSON files, update the `"img"` field to look like this:
   `"img": "/assets/your-new-image.jpg"`

---

## 🎨 Advanced Styling
- **Colors**: Edit [**variables.css**](src/styles/variables.css) to change the Navy, Gold, or Gray color scheme.
- **Contact Info**: Update phone numbers and email in [**Contact.jsx**](src/pages/Contact.jsx).
# new-panchal
