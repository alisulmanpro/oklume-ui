import plugin, { type PluginCreator } from "tailwindcss/plugin";


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
            padding: '.5rem 1rem',
            borderRadius: theme('borderRadius.lg'),
            '&:hover': {
                backgroundColor: theme('colors.blue.600'),
            },
        },
    });
};


export default plugin(tailwind_plugin, {
    theme: {
        extend: {
            colors: {
                'primary-color': '#2563eb'
            }
        }
    }
});
