# Accessibility Checklist

## Heading Hierarchy
- [ ] One `<h1>` per page (Hero: "Virgi Atha Raditya", Project pages: project title)
- [ ] Logical `<h2>`/`<h3>` order (sections → cards)

## Landmarks & Structure
- [ ] `<header>`, `<nav aria-label="Primary">`, `<main id="content">`, `<footer>`
- [ ] Skip link as first focusable element

## Focus Management
- [ ] Visible `:focus-visible` ring using `--accent` (2px, 2px offset) ✓
- [ ] Mobile menu focus trap with Esc close ✓
- [ ] Tab order logical

## Color Contrast
- [ ] `--ink` (#16181D) on `--bg` (#FAF9F6): check ratio ≥ 4.5:1
- [ ] `--ink-muted` (#5B606B) on `--bg`: check ratio ≥ 4.5:1
- [ ] `--accent` (#B4232A) text usage

## Touch Targets
- [ ] All buttons/links ≥ 44×44px (`.button` min-height: 44px ✓)
- [ ] Mobile nav toggle 44×44px

## Images
- [ ] Every image has meaningful `alt`
- [ ] Certificate alt: "Certificate: [title], [issuer]" ✓

## Keyboard Navigation
- [ ] Works without mouse
- [ ] Mobile menu Esc closes ✓
- [ ] Project cards tabbable

## Motion
- [ ] `prefers-reduced-motion` respected ✓

## Zoom & Reflow
- [ ] Works at 200% zoom without horizontal scroll
- [ ] Responsive breakpoints: 360px, 768px, 1280px

## Language
- [ ] `lang="en"` on `<html>` ✓
