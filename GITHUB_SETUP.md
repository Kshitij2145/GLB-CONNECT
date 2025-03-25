# GitHub Repository Setup Guide

Follow these steps to connect your local GLB.Connect repository to GitHub:

## Steps to Set Up GitHub Repository

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and sign in to your account
   - Click on the "+" button in the top right corner and select "New repository"
   - Name your repository (e.g., "glb-connect")
   - Add a description (optional)
   - Choose public or private visibility
   - Do NOT initialize the repository with a README, .gitignore, or license
   - Click "Create repository"

2. **Connect your local repository to GitHub**
   - GitHub will display commands to link your local repository
   - Open your terminal and make sure you're in the frontend directory
   - Run the following commands (replace `<your-github-username>` with your actual GitHub username):

   ```bash
   git remote add origin https://github.com/<your-github-username>/glb-connect.git
   git branch -M main
   git push -u origin main
   ```

3. **Verify the connection**
   - Refresh your GitHub repository page
   - You should see all your files and commit history

## Alternative: Using GitHub CLI

If you have GitHub CLI installed, you can use:

```bash
gh repo create glb-connect --private --source=. --push
```

This will create a repository and push your local code in one step.

## After Setup

Once your repository is set up, you can:

- Invite collaborators to your project
- Set up GitHub Pages for a live demo
- Configure GitHub Actions for CI/CD
- Create issues and project boards to track work

Remember to update your README.md with the correct repository URL after setup. 