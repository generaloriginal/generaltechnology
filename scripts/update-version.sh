#!/bin/bash

# Script to update version in unit-tests.html and commit/push
# Usage: ./scripts/update-version.sh [patch|minor|major]

set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

FILE="unit-tests.html"
VERSION_TYPE="${1:-patch}"

# Get current version
CURRENT_VERSION=$(grep -oP 'v\d+\.\d+\.\d+' "$FILE" | head -1 | sed 's/v//')
if [ -z "$CURRENT_VERSION" ]; then
    CURRENT_VERSION="1.0.0"
fi

IFS='.' read -r -a VERSION_PARTS <<< "$CURRENT_VERSION"
MAJOR="${VERSION_PARTS[0]}"
MINOR="${VERSION_PARTS[1]}"
PATCH="${VERSION_PARTS[2]}"

# Increment version based on type
case "$VERSION_TYPE" in
    major)
        MAJOR=$((MAJOR + 1))
        MINOR=0
        PATCH=0
        ;;
    minor)
        MINOR=$((MINOR + 1))
        PATCH=0
        ;;
    patch)
        PATCH=$((PATCH + 1))
        ;;
    *)
        echo "Invalid version type. Use: patch, minor, or major"
        exit 1
        ;;
esac

NEW_VERSION="v${MAJOR}.${MINOR}.${PATCH}"

# Update version in file
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s/v[0-9]\+\.[0-9]\+\.[0-9]\+/$NEW_VERSION/g" "$FILE"
else
    # Linux
    sed -i "s/v[0-9]\+\.[0-9]\+\.[0-9]\+/$NEW_VERSION/g" "$FILE"
fi

echo "✅ Updated version: $CURRENT_VERSION → $NEW_VERSION"

# Stage, commit, and push
git add "$FILE"
git commit -m "Bump version to $NEW_VERSION"
echo "✅ Committed version update"

# Push to origin (GitHub) for GitHub Pages
if git remote | grep -q "origin"; then
    echo "🚀 Pushing to GitHub (GitHub Pages)..."
    if git push origin main 2>&1; then
        echo "✅ Pushed to GitHub successfully!"
    else
        echo "⚠️  Push to GitHub failed (check manually)"
    fi
fi

# Push to GitLab (Docker-hosted)
if git remote | grep -q "gitlab"; then
    echo "🚀 Pushing to GitLab (Docker)..."
    if git push gitlab main 2>&1; then
        echo "✅ Pushed to GitLab successfully!"
    else
        echo "⚠️  Push to GitLab failed (Docker may not be running)"
    fi
fi

echo ""
echo "📊 Version updated and pushed: $NEW_VERSION"

