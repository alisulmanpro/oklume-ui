import plugin, { type PluginCreator, type PluginAPI } from "tailwindcss/plugin";

const tailwind_plugin: PluginCreator = ({ addUtilities, addComponents, theme }: PluginAPI) => {
    // 1. Add custom utility classes
    addUtilities({
        '.skew-15deg': {
            transform: 'skewY(-15deg)',
        },
    });

    // 2. Add custom component classes using theme values
    addComponents({
        '.btn-custom': {
            backgroundColor: theme('colors.blue.500'),
            cursor: 'pointer',
            padding: '.5rem 1rem',
            borderRadius: theme('borderRadius.lg'),
            '&:hover': {
                backgroundColor: theme('colors.blue.600'),
            },
        },
    });
};

const tailwindPlugin = plugin(tailwind_plugin, {
    theme: {
        extend: {
            colors: {
                'primary-color': '#2563eb'
            }
        }
    }
});

// Use ES Module export. tsup will handle the rest!
export default tailwindPlugin;