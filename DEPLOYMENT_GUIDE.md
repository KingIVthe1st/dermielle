# 🚀 Dermielle Deployment Guide

Your Dermielle site has been successfully pushed to GitHub! Follow these steps to complete the deployment.

---

## ✅ What's Already Done

- ✅ Site pushed to: `https://github.com/KingIVthe1st/dermielle`
- ✅ Next.js configured for static export
- ✅ GitHub Actions workflow created for automatic deployment
- ✅ CNAME file added for custom domain: `dermielleautogroup.com`

---

## 📋 Step 1: Enable GitHub Pages

1. **Go to your GitHub repository:**
   - Visit: `https://github.com/KingIVthe1st/dermielle`

2. **Navigate to Settings:**
   - Click the "Settings" tab (top right)

3. **Go to Pages section:**
   - In the left sidebar, click "Pages" (under "Code and automation")

4. **Configure GitHub Pages:**
   - **Source:** Select "GitHub Actions" from the dropdown
   - This will enable the automatic deployment workflow

5. **Wait for deployment:**
   - Go to the "Actions" tab to watch the deployment progress
   - The workflow will automatically build and deploy your site
   - Takes about 2-3 minutes

---

## 🌐 Step 2: Configure Custom Domain in GitHub

1. **Still in Settings > Pages:**
   - Find the "Custom domain" section
   - Enter: `dermielleautogroup.com`
   - Click "Save"

2. **Enable HTTPS (recommended):**
   - Check the "Enforce HTTPS" checkbox
   - (This may take a few minutes to become available)

---

## 🔧 Step 3: Configure DNS in GoDaddy

Now you need to point your GoDaddy domain to GitHub Pages:

### Option A: Using A Records (Recommended for root domain)

1. **Log into GoDaddy:**
   - Go to https://godaddy.com and log in
   - Navigate to "My Products" > "All Products and Services"

2. **Manage DNS:**
   - Find `dermielleautogroup.com`
   - Click "DNS" or "Manage DNS"

3. **Add A Records:**
   - Delete any existing A records pointing to other IPs
   - Add these 4 A records (all pointing to the root `@`):

   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 600 (or default)

   Type: A
   Name: @
   Value: 185.199.109.153
   TTL: 600

   Type: A
   Name: @
   Value: 185.199.110.153
   TTL: 600

   Type: A
   Name: @
   Value: 185.199.111.153
   TTL: 600
   ```

4. **Add CNAME for www (optional):**
   ```
   Type: CNAME
   Name: www
   Value: kingivthe1st.github.io
   TTL: 600
   ```

### Option B: Using CNAME (Alternative)

If you prefer to use `www.dermielleautogroup.com` as your primary domain:

1. **Set up CNAME record:**
   ```
   Type: CNAME
   Name: www
   Value: kingivthe1st.github.io
   TTL: 600
   ```

2. **Set up redirect:**
   - In GoDaddy, forward `dermielleautogroup.com` to `www.dermielleautogroup.com`

---

## ⏱️ Step 4: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate globally
- Usually it's ready within **1-2 hours**
- You can check progress at: https://www.whatsmydns.net/

---

## 🧪 Step 5: Test Your Site

Once DNS has propagated, test these URLs:

1. **GitHub Pages URL:** `https://kingivthe1st.github.io/dermielle/`
2. **Custom Domain:** `https://dermielleautogroup.com`
3. **WWW Subdomain:** `https://www.dermielleautogroup.com`

All should show your beautiful Dermielle site! 🎉

---

## 🔄 Future Updates

To update your site in the future:

```bash
# Make your changes, then:
git add .
git commit -m "Your update message"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site!

---

## 🐛 Troubleshooting

### Site not showing after 2 hours?

1. **Check GitHub Actions:**
   - Go to `https://github.com/KingIVthe1st/dermielle/actions`
   - Make sure the deployment succeeded (green checkmark)

2. **Verify DNS settings:**
   - Use `nslookup dermielleautogroup.com` in terminal
   - Should show the GitHub Pages IPs (185.199.108-111.153)

3. **Check HTTPS:**
   - If you see certificate errors, wait a bit longer
   - GitHub needs time to provision SSL certificate

4. **Clear browser cache:**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Need to change something?

- **Update custom domain:** Edit `public/CNAME` file
- **Change deployment settings:** Edit `.github/workflows/deploy.yml`
- **Modify Next.js config:** Edit `next.config.js`

---

## 📊 Deployment Architecture

```
Your Code → GitHub → GitHub Actions → Build Next.js → Deploy to GitHub Pages → Custom Domain
```

1. Push to GitHub
2. GitHub Actions automatically triggers
3. Installs dependencies
4. Builds static site
5. Deploys to GitHub Pages
6. Accessible via dermielleautogroup.com

---

## 🎯 Quick Reference

| Item | Value |
|------|-------|
| **GitHub Repo** | https://github.com/KingIVthe1st/dermielle |
| **GitHub Pages URL** | https://kingivthe1st.github.io/dermielle/ |
| **Custom Domain** | dermielleautogroup.com |
| **DNS Provider** | GoDaddy |
| **Hosting** | GitHub Pages (Free) |
| **Auto Deploy** | ✅ Enabled via GitHub Actions |

---

## 📞 Need Help?

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Custom Domain Setup:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **GoDaddy DNS Help:** https://www.godaddy.com/help/manage-dns-680

---

**🎉 Your Dermielle site is ready to go live! Just complete the DNS setup in GoDaddy and you're done!**
