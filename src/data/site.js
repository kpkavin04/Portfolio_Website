// Resume lives in public/ so it is served as a static file and can be linked
// directly. Replace the PDF in place to publish an updated version.
export const RESUME_URL = `${import.meta.env.BASE_URL}Kavin_Parthipan_Resume.pdf`;

export const EMAIL = 'kpkavin04@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/kavin-parthipan/';
export const GITHUB_URL = 'https://github.com/kpkavin04';

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'techSkills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

// Height of the fixed navbar, used to offset scroll targets so headings are
// not hidden underneath it.
export const SCROLL_OFFSET = -72;
