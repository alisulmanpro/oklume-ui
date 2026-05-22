import { describe, it, expect, vi } from "vitest";
import tailwind_plugin from "../index";

describe("Tailwind Plugin", () => {
    it("should export a valid plugin handler", () => {
        expect(typeof tailwind_plugin.handler).toBe("function");
    });

    it("should register custom utilities and components", () => {
        const addUtilities = vi.fn();
        const addComponents = vi.fn();

        const theme = vi.fn((path) => {
            if (path === 'colors.blue.500') return '#3b82f6';
            if (path === 'colors.blue.600') return '#2563eb';
            if (path === 'borderRadius.lg') return '0.5rem';
            return null;
        });

        tailwind_plugin.handler({
            addUtilities,
            addComponents,
            theme,
        } as any);

        expect(addUtilities).toHaveBeenCalledWith({
            '.skew-15deg': {
                transform: 'skewY(-15deg)',
            },
        });

        // 4. Verify addComponents was called with your custom button
        expect(addComponents).toHaveBeenCalledWith({
            '.btn-custom': {
                backgroundColor: '#3b82f6', // Evaluated from theme('colors.blue.500')
                cursor: 'pointer',
                padding: '.5rem 1rem',
                borderRadius: '0.5rem',     // Evaluated from theme('borderRadius.lg')
                '&:hover': {
                    backgroundColor: '#2563eb',
                },
            },
        });
    });
});