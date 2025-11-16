import { render } from '@testing-library/react';
import { getFileInfo, FileKey } from '../fileIcons';

describe('fileIcons utility', () => {
  describe('getFileInfo', () => {
    it('returns correct file info for readme', () => {
      const fileInfo = getFileInfo('readme');

      expect(fileInfo.name).toBe('README.md');
      expect(fileInfo.key).toBe('readme');
      expect(fileInfo.icon).toBeDefined();
    });

    it('returns correct file info for about', () => {
      const fileInfo = getFileInfo('about');

      expect(fileInfo.name).toBe('about.tsx');
      expect(fileInfo.key).toBe('about');
      expect(fileInfo.icon).toBeDefined();
    });

    it('returns correct file info for skills', () => {
      const fileInfo = getFileInfo('skills');

      expect(fileInfo.name).toBe('skills.ts');
      expect(fileInfo.key).toBe('skills');
      expect(fileInfo.icon).toBeDefined();
    });

    it('returns correct file info for work', () => {
      const fileInfo = getFileInfo('work');

      expect(fileInfo.name).toBe('work.md');
      expect(fileInfo.key).toBe('work');
      expect(fileInfo.icon).toBeDefined();
    });

    it('returns correct file info for education', () => {
      const fileInfo = getFileInfo('education');

      expect(fileInfo.name).toBe('education.md');
      expect(fileInfo.key).toBe('education');
      expect(fileInfo.icon).toBeDefined();
    });

    it('returns correct file info for projects', () => {
      const fileInfo = getFileInfo('projects');

      expect(fileInfo.name).toBe('index.tsx');
      expect(fileInfo.key).toBe('projects');
      expect(fileInfo.icon).toBeDefined();
    });

    it('returns correct file info for recent', () => {
      const fileInfo = getFileInfo('recent');

      expect(fileInfo.name).toBe('recent.ts');
      expect(fileInfo.key).toBe('recent');
      expect(fileInfo.icon).toBeDefined();
    });

    it('returns correct file info for contact', () => {
      const fileInfo = getFileInfo('contact');

      expect(fileInfo.name).toBe('contact.yml');
      expect(fileInfo.key).toBe('contact');
      expect(fileInfo.icon).toBeDefined();
    });

    it('returns renderable icon components', () => {
      const fileKeys: FileKey[] = ['readme', 'about', 'skills', 'work', 'education', 'projects', 'recent', 'contact'];

      fileKeys.forEach((key) => {
        const fileInfo = getFileInfo(key);
        const { container } = render(<div>{fileInfo.icon}</div>);

        expect(container.firstChild).toBeInTheDocument();
      });
    });

    it('maintains consistent structure for all file types', () => {
      const fileKeys: FileKey[] = ['readme', 'about', 'skills', 'work', 'education', 'projects', 'recent', 'contact'];

      fileKeys.forEach((key) => {
        const fileInfo = getFileInfo(key);

        expect(fileInfo).toHaveProperty('name');
        expect(fileInfo).toHaveProperty('icon');
        expect(fileInfo).toHaveProperty('key');
        expect(typeof fileInfo.name).toBe('string');
        expect(fileInfo.key).toBe(key);
      });
    });
  });
});
