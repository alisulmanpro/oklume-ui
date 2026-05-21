import { PluginAPI } from 'tailwindcss/types/config';

global {
    interface PluginAPI {
        addUtilities(
            utilities: Record<string, Record<string, string | string[]>> | Record<string, Record<string, string | string[]>>[],
            options?: { respectPrefix?: boolean; respectImportant?: boolean }
        ): void;
        addComponents(
            components: Record<string, Record<string, any>> | Record<string, Record<string, any>>[],
            options?: { respectPrefix?: boolean; respectImportant?: boolean }
        ): void;
        theme<T = any>(path?: string, defaultValue?: T): T;
    }
}


export { };