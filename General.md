# Git Conflict Resolution Guide

## Overview

This guide provides step-by-step instructions for resolving merge conflicts between branches, specifically when merging from any branch into the feature/integration branch.

## Prerequisites

Before starting, ensure you have:

- Git installed on your system
- Access to the repository
- Proper permissions to push changes

## Current Branch Structure

Available branches:

```bash
Local branches:
- feature/integration
- main

Remote branches:
- origin/HEAD -> origin/main
- origin/Lilian
- origin/Olatunji
- origin/Temilade
- origin/feature/integration
- origin/main
- origin/phlames
```

## Step-by-Step Conflict Resolution

### 1. Checkout the Target Branch

```bash
git checkout -b feature/integration origin/feature/integration
```

### 2. Merge Changes

```bash
# example
git merge origin/Lilian
```

### 3. Resolve Conflicts

When conflicts appear you'll need to:

1. Open the conflicting files in your editor
2. Look for conflict markers:
   ```
   #example
   <<<<<<< HEAD
   (feature/integration version)
   =======
   (Lilian branch version)
   >>>>>>> Lilian
   ```
3. Decide which changes to keep or how to combine them
4. Remove the conflict markers

### 4. Complete the Merge

After resolving conflicts:

```bash
git add .
git commit -m "Merge changes from Lilian branch"
```

### 5. Push Changes

```bash
git push origin feature/integration
```

## Common Issues and Solutions

- If you can't see all branches locally, use:
  ```bash
  git fetch --all
  git remote update origin --prune
  ```
- To create tracking branches for specific remotes:
  ```bash
  git checkout -b [branch-name] origin/[branch-name]
  ```

## Additional Resources

For more information about merge conflict resolution, visit:

- Git documentation: https://git-scm.com/docs/git-merge
- GitHub's guide to resolving merge conflicts

## Need Help?

If you encounter any issues during this process, contact your team lead or repository administrator for assistance.
