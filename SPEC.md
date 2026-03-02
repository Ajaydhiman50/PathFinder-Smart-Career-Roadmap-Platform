# PathFinder - Career Roadmap Website Specification

## Project Overview
- **Project Name**: PathFinder
- **Type**: Single-page web application (SPA-like behavior with vanilla JS)
- **Core Functionality**: Interactive career roadmap planner with course discovery and learning path tracking
- **Target Users**: Students, professionals, career switchers looking for structured learning paths

---

## UI/UX Specification

### Layout Structure

**Sections:**
1. **Navigation Bar** - Fixed top, contains logo, search bar, theme toggle
2. **Hero Section** - Full viewport height landing with animated category cards
3. **Course Section** - Grid of course cards with filter controls
4. **Roadmap Section** - Vertical timeline with step-by-step learning path
5. **Footer** - Minimal footer with credits

**Responsive Breakpoints:**
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3-4 columns)

### Visual Design

**Color Palette:**

*Light Mode:*
- Background: Linear gradient `#f0f4ff` to `#e8f4f8`
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Violet)
- Accent: `#06b6d4` (Cyan)
- Card Background: `rgba(255, 255, 255, 0.7)`
- Text Primary: `#1e293b`
- Text Secondary: `#64748b`

*Dark Mode:*
- Background: Linear gradient `#0f172a` to `#1e1b4b`
- Primary: `#818cf8`
- Secondary: `#a78bfa`
- Accent: `#22d3ee`
- Card Background: `rgba(30, 41, 59, 0.7)`
- Text Primary: `#f1f5f9`
- Text Secondary: `#94a3b8`

**Typography:**
- Font Family: 'Poppins', sans-serif
- Hero Title: 3.5rem (mobile: 2.5rem), weight 700
- Section Titles: 2rem, weight 600
- Card Titles: 1.25rem, weight 600
- Body Text: 1rem, weight 400
- Small Text: 0.875rem, weight 400

**Spacing System:**
- Base unit: 8px
- Section padding: 80px vertical
- Card padding: 24px
- Gap between cards: 24px
- Border radius: 16px (cards), 12px (buttons), 8px (badges)

**Visual Effects:**
- Glassmorphism: `backdrop-filter: blur(12px)`
- Card shadows: `0 8px 32px rgba(0, 0, 0, 0.1)`
- Hover lift: `transform: translateY(-8px)`
- Gradient borders using pseudo-elements

### Components

**1. Navigation Bar**
- Logo text with gradient
- Search input with icon
- Theme toggle button (sun/moon icons)
- Sticky on scroll with blur background

**2. Category Cards (Hero)**
- Two large cards: Technical & Non-Technical
- Animated gradient border on hover
- Icon + Title + Subtitle
- Click ripple effect

**3. Course Cards**
- Image placeholder (gradient if no image)
- Course title
- Short description (2 lines max)
- Difficulty badge (Beginner/Intermediate/Advanced)
- "View Roadmap" button

**4. Filter Controls**
- Search input
- Difficulty dropdown filter
- Category pills

**5. Roadmap Timeline**
- Vertical line with nodes
- Step cards alternating left/right
- Progress bar at top
- Checkbox for each step
- Embedded YouTube video (16:9 aspect ratio)

**6. Buttons**
- Primary: Gradient background, white text
- Secondary: Border with gradient, transparent bg
- Hover: Scale up + shadow increase

### Animations

- **Page Load**: Staggered fade-in for hero elements
- **Scroll**: Fade-in-up for cards entering viewport
- **Card Hover**: Lift + shadow expansion + border glow
- **Button Hover**: Scale 1.05 + color shift
- **Theme Switch**: Smooth color transition (0.3s)
- **Section Transitions**: Slide + fade (300ms)
- **Checkbox**: Bounce effect on check

---

## Functionality Specification

### Core Features

**1. Category Navigation**
- Click category card → scroll to course section
- Courses filtered by selected category
- "All" option to show both categories

**2. Course Display**
- Dynamic rendering from JavaScript object
- 6 Technical courses:
  - Web Development
  - Data Science
  - Mobile App Development
  - Cloud Computing
  - Cybersecurity
  - AI/ML Engineering
- 6 Non-Technical courses:
  - Digital Marketing
  - Product Management
  - UX/UI Design
  - Content Writing
  - Project Management
  - Business Analysis

**3. Search & Filter**
- Real-time search (by course name/description)
- Filter by difficulty: All, Beginner, Intermediate, Advanced
- Combined search + filter

**4. Roadmap View**
- Each course has 6 roadmap steps
- Each step includes:
  - Step number (1-6)
  - Title
  - Description
  - Duration
  - YouTube video embed
  - Checkbox to mark complete
- Progress bar shows completion percentage
- Progress saved to localStorage

**5. Progress Tracking**
- Checkbox toggle saves to localStorage
- Key format: `pathfinder_progress_{courseId}_{stepIndex}`
- Progress bar updates in real-time
- Persists across page reloads

**6. Dark/Light Mode**
- Toggle button in nav
- Preference saved to localStorage
- Respects system preference on first visit
- Smooth transition between modes

### User Interactions

1. **Landing**: User sees hero → clicks category → scrolls to courses
2. **Browse**: User searches/filters courses → clicks "View Roadmap"
3. **Learn**: User watches videos → checks off steps → progress saves
4. **Return**: User returns → sees saved progress → continues learning

### Data Structure

```javascript
{
  courses: [
    {
      id: "web-dev",
      name: "Web Development",
      category: "technical",
      description: "...",
      difficulty: "Beginner",
      image: "gradient-placeholder",
      roadmap: [
        {
          step: 1,
          title: "HTML & CSS Fundamentals",
          description: "...",
          duration: "2 weeks",
          video: "youtube-embed-url"
        },
        // ... 6 steps
      ]
    }
    // ... 12 courses
  ]
}
```

---

## Acceptance Criteria

### Visual Checkpoints
- [ ] Hero section fills viewport with gradient background
- [ ] Two category cards are prominent and clickable
- [ ] Course cards display in responsive grid
- [ ] Roadmap shows vertical timeline with alternating cards
- [ ] Progress bar visible and updates correctly
- [ ] Dark mode toggle works and persists
- [ ] All animations are smooth (60fps)

### Functional Checkpoints
- [ ] Clicking category filters courses correctly
- [ ] Search filters courses by name in real-time
- [ ] Difficulty filter works correctly
- [ ] Combined search + filter works
- [ ] "View Roadmap" opens roadmap view
- [ ] Checkboxes save to localStorage
- [ ] Progress bar reflects actual completion
- [ ] Page reload preserves all progress
- [ ] YouTube videos embed and play
- [ ] Mobile responsive at all breakpoints

### Performance
- [ ] No console errors
- [ ] All external resources load (Poppins font, YouTube)
- [ ] Smooth scrolling and transitions
- [ ] localStorage operations work correctly
