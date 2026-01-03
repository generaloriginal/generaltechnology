# Changelog - General Technology

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Rules maintenance section to .cursorrules - auto-update requirement
- Changelog and work log tracking requirements to .cursorrules
- CHANGELOG.md file for tracking all work and changes

### Changed
- Updated .cursorrules to require tracking all rules changes in CHANGELOG.md and Confluence
- Enhanced rules maintenance workflow to ensure all changes are documented

## [1.0.7] - 2025-01-27

### Fixed
- Fixed restart button green highlight after completion light show - now properly applies green styling with correct class and important styles

## [1.0.6] - 2025-01-27

### Added
- Highlight restart button in green after completion light show finishes

## [1.0.5] - 2025-01-27

### Changed
- Removed initial 10-flash sequence for unit/question count
- Completion light show now flashes 10 beats in chronological order (one per question)

## [1.0.4] - 2025-01-27

### Changed
- Fixed completion flashes: top elements (unit and question count) flash at every beat
- Bottom elements flash based on each question's answer (correct/wrong/streak)

## [1.0.3] - 2025-01-27

### Changed
- Changed completion flashes to simultaneous beats instead of sequential
- Each beat flashes appropriate elements based on question answer

## [1.0.2] - 2025-01-27

### Improved
- Enhanced question randomness using crypto.getRandomValues() when available
- Added multiple shuffles with entropy for better question distribution
- Questions now properly randomize on each session start

## [1.0.1] - 2025-01-27

### Added
- Enhanced completion light show with chronological answer replay
- Unit and question count flash 10 times at start
- Answer history replay: correct answers flash green, wrong answers flash red
- Flashes occur in chronological order showing game performance

## [1.0.0] - 2025-01-27

### Added
- Initial release of unit test game
- Unit selection (Units 1-6)
- Question set size options (Quick 10, Normal 20, Full unit)
- Grammar, Vocabulary, and Pronunciation question types
- Score tracking (Correct, Wrong, Streak)
- Answer history tracking
- Completion screen with restart option

---

## Work Log

### 2025-01-27

#### Launchpad Updates
- Added unit test game button to launchpad (third game icon)
- Added fourth empty placeholder card for future games
- All changes committed and pushed to both remotes

#### Unit Test Game - Completion Light Show
- Implemented completion light show feature
- Added chronological answer replay with visual feedback
- Top elements (unit and question count) flash at every beat
- Bottom elements flash based on each question's answer:
  - Correct answers: flash correct counter + streak counter (if applicable) in green
  - Wrong answers: flash wrong counter in red
- All flashes occur simultaneously at 10 beats (one per question)
- Restart button highlights in green after light show completes

#### Unit Test Game - Randomness Improvements
- Enhanced question shuffling with crypto.getRandomValues()
- Added multiple shuffles with entropy for better randomization
- Questions now properly randomize on each session refresh

#### Documentation & Rules
- Created `.cursorrules` file with version management and documentation rules
- Updated `.cursorrules` to include changelog/work log tracking requirements
- Created `CHANGELOG.md` file for tracking all work and changes
- Updated `AI_DOCUMENTATION.md` with version management and documentation workflow
- Updated `AI_DOCUMENTATION_CONFLUENCE.md` with same information in Confluence format
- Added changelog section to Confluence documentation
- Established git workflow: documentation to local repo only, application code to both remotes
- All documentation changes committed to git

#### Version Management
- Implemented semantic versioning (v1.0.x for patch updates)
- Version automatically updated with each feature/fix
- Version display at bottom of unit-tests.html page

---

## Backlog

### Pending Items
- None at this time

### Future Enhancements (Ideas)
- Additional game units beyond Units 1-6
- More question types or categories
- Statistics tracking across sessions
- Difficulty levels
- Timer mode
- Practice mode vs. test mode

