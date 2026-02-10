# ZARVEX GLOBAL (Pty) Ltd - Static Website

This is a professional B2B static website for ZARVEX GLOBAL, a mineral processing and industrial equipment supplier based in South Africa.

## Deployment to GitHub Pages

To deploy this website to GitHub Pages, follow these steps:

1.  **Initialize a Git Repository**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit of ZARVEX GLOBAL static site"
    ```

2.  **Create a New Repository on GitHub**:
    - Go to GitHub and create a new repository named `zarvex-global`.

3.  **Push to GitHub**:
    - Add the remote and push your code:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/zarvex-global.git
    git branch -M main
    git push -u origin main
    ```

4.  **Enable GitHub Pages**:
    - In your GitHub repository, go to **Settings > Pages**.
    - Under "Branch", select `main` and the `/ (root)` folder.
    - Click **Save**.

## File Structure
- `index.html`: Homepage
- `products.html`: Product categories
- `about.html`: Company information and regions
- `contact.html`: Contact form and location
- `style.css`: Unified styling for all pages
- `README.md`: Deployment instructions
