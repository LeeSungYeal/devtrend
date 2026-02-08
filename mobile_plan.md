# Mobile Design Optimization Plan

## Analysis Findings
Based on code review of the current CSS architecture, several key areas require optimization for mobile devices (Viewport < 768px).

### 1. Hero Section (Critical)
- **Issue**: Main Title is set to `var(--text-6xl)` (~3.75rem), which causes severe wrapping on small screens.
- **Issue**: Background Orbs are fixed at 500px/400px, creating overwhelming noise on mobile.
- **Action**: 
  - Reduce Title to `var(--text-4xl)` or `2.5rem`.
  - Scale Orbs to 50% size or use `vw` units.
  - Adjust Gradient Text size to match.

### 2. Header
- **Issue**: Navigation links are hidden (`display: none`), leaving only Logo and CTA.
- **Action**: Ensure Logo and CTA are properly spaced (`justify-content: space-between` is active, so this should be safe, but padding needs check).

### 3. Process Section
- **Issue**: The connecting "Timeline Line" is hidden on mobile (`display: none`), losing the continuity of the "process" story.
- **Action**: Implement a thin, interrupted vertical line connecting the stacked steps on mobile.

### 4. Solution & Social Proof
- **Issue**: `card-number` in Solution cards is `8rem`, likely overlapping content on narrow cards.
- **Issue**: Metric numbers in Social Proof are `6xl`, potentially breaking layout.
- **Action**: Reduce decorative numbers to `4rem` (Solution) and `4xl` (Social Proof).

### 5. Interaction Adjustments
- **Issue**: Hover-based effects (Tilt, Spotlight) do not function on touch.
- **Action**: Ensure "Active" states or default states are visually appealing without hover.

## Implementation Steps
- [x] **Hero Adjustments**: Update `Hero.css` queries.
- [x] **Process Connectivity**: Update `Process.css` for mobile timeline.
- [x] **Component Scaling**: Update `Solution.css` and `SocialProof.css`.
- [x] **Header Spacing**: Verified global container padding (safe).
