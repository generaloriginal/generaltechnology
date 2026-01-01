#!/bin/bash

# Script to commit changes in general.technology project
# Pushes to both GitHub (origin) and GitLab (Docker-hosted)
# Usage: ./commit.sh [commit message]

set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

# Default commit message if none provided
COMMIT_MSG="${1:-Update general.technology project}"

echo "📦 Staging changes in general.technology project..."

# Stage all files
git add . 2>/dev/null || true

# Check if there are any changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit. Everything is up to date!"
    exit 0
fi

# Show what will be committed
echo ""
echo "📋 Files to be committed:"
git --no-pager diff --staged --name-status

echo ""
echo "💾 Committing with message: '$COMMIT_MSG'"
git commit -m "$COMMIT_MSG"

echo ""
echo "✅ Commit successful!"

# Push to GitHub (origin) for GitHub Pages
if git remote | grep -q "origin"; then
    echo ""
    echo "🚀 Pushing to GitHub (GitHub Pages)..."
    if git push origin main 2>&1; then
        echo "✅ Pushed to GitHub successfully!"
    else
        echo "⚠️  Push to GitHub failed (check manually)"
    fi
fi

# Push to GitLab (Docker-hosted)
if git remote | grep -q "gitlab"; then
    echo ""
    echo "🚀 Pushing to GitLab (Docker)..."
    if git push gitlab main 2>&1; then
        echo "✅ Pushed to GitLab successfully!"
    else
        echo "⚠️  Push to GitLab failed (Docker may not be running)"
    fi
fi

echo ""
echo "📊 Repository status:"
git --no-pager status --short

