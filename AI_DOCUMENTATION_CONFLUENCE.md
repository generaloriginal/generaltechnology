# General Technology - AI Assistant Documentation (Confluence Ready)

**Purpose:** This document is formatted for Confluence import.

**Last Updated:** 2025-01-27

---

## Confluence Page Content

h1. General Technology - AI Assistant Documentation

*Last Updated:* 2025-01-27

----

h2. Overview

The General Technology project contains web-based games with persistent leaderboards powered by Supabase. The project includes:

* *Snake Game* - Classic snake game with online leaderboard
* *Homophone Game* - Word game with leaderboard tracking
* *Launchpad* - Project landing page

All games use Supabase for backend data storage and real-time leaderboard updates.

----

h2. Project Structure

{code}
generaltechnology/
├── index.html              # Main landing page
├── snake.html              # Snake game
├── homophone-game.html     # Homophone game
├── launchpad.html          # Launchpad page
├── README.md               # Project overview
├── AUTO_SETUP.md           # Quick setup guide
├── SUPABASE_SETUP.md       # Detailed Supabase setup
├── setup-supabase-sql.sql  # SQL setup script
├── setup-supabase.js       # Node.js setup script
└── *.sql                   # Database setup scripts
{code}

----

h2. Key Components

|||Component||Purpose||Location||
|Snake Game|Classic snake game with leaderboard|snake.html|
|Homophone Game|Word game with leaderboard|homophone-game.html|
|Launchpad|Project landing page|launchpad.html|
|Supabase Backend|Database and API for leaderboards|Supabase Cloud|
|Setup Scripts|Automated database setup|setup-*.sql, setup-*.js|

----

h2. Architecture

h3. System Architecture

The project uses a client-server architecture:

# *Frontend:* HTML/CSS/JavaScript games running in the browser
# *Backend:* Supabase (PostgreSQL database + REST API)
# *Data Flow:* Games → Supabase API → PostgreSQL → Leaderboard display

*See diagrams section below for visual architecture diagrams.*

h3. Leaderboard Flow

# *Player completes game and submits score*
# *Game sends POST request to Supabase API*
# *Supabase stores score in {{leaderboard}} table*
# *Game fetches top scores via GET request*
# *Leaderboard displays in real-time*

*See diagrams section below for detailed flow diagrams.*

----

h2. Setup & Configuration

h3. Prerequisites

* Supabase account (free tier available)
* Web server (GitHub Pages, Netlify, or local server)

h3. Quick Setup

# *Create Supabase Project*
** *Go to* {{https://supabase.com/}}
** *Create new project*
** *Get API keys (URL and anon key)*

# *Run Database Setup*
{code}
# Option 1: SQL Script (Recommended)
# Copy setup-supabase-sql.sql to Supabase SQL Editor and run

# Option 2: Node.js Script
SUPABASE_SERVICE_KEY=your_key node setup-supabase.js
{code}

# *Configure Games*
** *Update {{SUPABASE_URL}} in game HTML files*
** *Update {{SUPABASE_ANON_KEY}} in game HTML files*

# *Deploy*
** *Push to GitHub and enable Pages*
** *Or deploy to Netlify/Vercel*

h3. Database Schema

*{{leaderboard}} table:*
* {{id}} (uuid, primary key)
* {{name}} (text) - Player name
* {{score}} (int8) - Game score
* {{date}} (text) - Date string
* {{created_at}} (timestamp) - Auto-generated

----

h2. Games

h3. Snake Game

*File:* {{snake.html}}

*Features:*
* Classic snake gameplay
* Online leaderboard
* Score persistence
* Real-time top scores display

*Configuration:*
{code}
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
{code}

h3. Homophone Game

*File:* {{homophone-game.html}}

*Features:*
* Word matching game
* Leaderboard tracking
* Score persistence

*Configuration:*
Same Supabase configuration as Snake game.

----

h2. Supabase Configuration

h3. API Keys

* *Project URL:* Found in Settings → API
* *anon public key:* Safe for client-side use
* *service_role key:* Server-side only (never expose!)*

h3. Row Level Security (RLS)

For simplicity, RLS can be disabled for leaderboard table:
* Allows public read/write access
* Suitable for game leaderboards
* Can be secured later with policies if needed

h3. Free Tier Limits

* 500 MB database storage
* 2 GB bandwidth/month
* More than enough for game leaderboards

----

h2. Development

h3. Local Development

# *Start local server:*
{code}
# Python
python3 -m http.server 8000

# Node.js
npx http-server
{code}

# *Open in browser:*
{code}
http://localhost:8000/snake.html
{code}

h3. Testing

# *Play game and submit score*
# *Check Supabase Table Editor for new entry*
# *Verify leaderboard updates in real-time*
# *Test with multiple browsers/devices*

----

h2. Troubleshooting

h3. Common Issues

h4. Issue: Scores not saving

* *Check Supabase API keys are correct*
* *Verify database table exists*
* *Check browser console for errors*
* *Verify RLS is disabled or policy allows writes*

h4. Issue: Leaderboard not loading

* *Check network tab for API calls*
* *Verify Supabase URL is correct*
* *Check CORS settings in Supabase*
* *Verify table has data*

h4. Issue: GitHub secret scanning

* *Anon key is safe to expose (designed for client-side)*
* *If flagged, it's a false positive*
* *Can safely allow in GitHub settings*

----

h2. Deployment

h3. GitHub Pages

# *Push code to GitHub repository*
# *Go to Settings → Pages*
# *Select branch (usually {{main}})*
# *Site will be available at {{username.github.io/repo-name}}*

h3. Netlify/Vercel

# *Connect GitHub repository*
# *Configure build settings (no build needed for static files)*
# *Deploy automatically on push*

----

h2. Architecture Diagrams

*See the diagrams page for visual representations of the system architecture, data flows, and setup workflows.*

*[General Technology - Architecture Diagrams|General Technology - Architecture Diagrams]*

----

h2. Documentation Management

*CRITICAL: Git is the source of truth for all documentation. All documentation changes MUST be committed to git.*

h3. Repository Structure

* *Local Repository (gitlab remote):* Full project folder - includes ALL files (application code + documentation)
** *Commits to:* local file system, local git server (gitlab)
** *Contains:* HTML files, documentation, setup scripts, SQL files, etc.

* *Cloud Repository (origin remote):* Application code only - for GitHub Pages deployment
** *Commits to:* local file system, local git server (gitlab), AND cloud server (GitHub Pages)
** *Contains:* Only application code (HTML, CSS, JS files needed for the website)
** *Does NOT contain:* Documentation files (*.md), setup scripts, SQL files, etc.

h3. Documentation Workflow

# *Git is the source of truth* - All documentation lives in git repository
# *Always commit documentation changes* - Never leave documentation changes uncommitted
# *Update both documentation files* when making changes:
** *Update {{AI_DOCUMENTATION.md}} (Markdown)*
** *Update {{AI_DOCUMENTATION_CONFLUENCE.md}} (Confluence markup)*
# *Confluence sync* - Confluence should be updated from git files (not the other way around)
# *Documentation only goes to local repository* - Documentation is committed to git but only pushed to gitlab (local), NOT to origin (cloud)

h3. Documentation Files (All tracked in git)

* {{AI_DOCUMENTATION.md}} - Main documentation (Markdown format)
* {{AI_DOCUMENTATION_CONFLUENCE.md}} - Confluence-ready documentation (Confluence markup)
* {{README.md}} - Project overview
* {{AUTO_SETUP.md}} - Quick setup guide
* {{SUPABASE_SETUP.md}} - Detailed Supabase configuration

h3. Documentation Commit Rules

* *NEVER* leave documentation changes uncommitted
* Documentation changes should be committed in the same commit as code changes, or immediately after
* If updating documentation separately, commit it as a separate commit: "Update documentation for feature X"
* All documentation files are tracked in git and must be committed
* *Documentation commits go to gitlab (local) only, NOT to origin (cloud)*

----

h2. Version Management

*CRITICAL: Always update version numbers when making changes to HTML files with version numbers.*

h3. Version Format

* Use semantic versioning: {{vMAJOR.MINOR.PATCH}} (e.g., v1.0.1)
* For frequent updates, increment the PATCH version (third number)
* Example progression: v1.0.1 → v1.0.2 → v1.0.3

h3. When to Update

* *ALWAYS* update the version number when:
** Adding new features
** Fixing bugs
** Making UI/UX changes
** Updating game logic
** Any code changes to files with version numbers

h3. How to Update

# *Find the version element in the HTML file (usually {{<div id="version">vX.X.X</div>}})*
# *Increment the patch version (third number)*
# *Commit the version update in the same commit as the changes, or as a separate commit immediately after*

h3. Files with Version Numbers

* {{unit-tests.html}} - Contains version display at bottom of page

----

h2. Changelog & Work Log

*See {{CHANGELOG.md}} for detailed change history and work log.*

h3. Recent Updates (2025-01-27)

h4. Unit Test Game v1.0.7

* *Fixed:* Restart button green highlight after completion light show
* *Added:* Completion light show with chronological answer replay
* *Improved:* Question randomness with crypto.getRandomValues()
* *Changed:* Flashes now occur simultaneously at 10 beats (one per question)

h4. Launchpad

* *Added:* Unit test game button (third game icon)
* *Added:* Fourth empty placeholder card

h4. Documentation & Rules

* *Created:* .cursorrules file with version management and documentation rules
* *Updated:* .cursorrules with rules maintenance section and changelog tracking requirements
* *Updated:* All documentation with git workflow and version management
* *Established:* Documentation goes to local repo only, application code to both remotes
* *Established:* All .cursorrules changes must be tracked in CHANGELOG.md and Confluence

h3. Backlog

*No pending items at this time.*

----

h2. Related Documentation

* *[AUTO_SETUP.md|AUTO_SETUP.md]* - Quick setup guide
* *[SUPABASE_SETUP.md|SUPABASE_SETUP.md]* - Detailed Supabase configuration
* *[README.md|README.md]* - Project overview
* *.cursorrules* - Cursor IDE rules and guidelines
* *[CHANGELOG.md|CHANGELOG.md]* - Work log and change history

----

*Last Updated:* 2025-01-27  
*Maintained By:* Xavier
