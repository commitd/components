/**
 * 
 * Gets the portalled state from the  story context and parsed as boolean form string.
 * See .storybook/preview.js for globals setup and https://storybook.js.org/docs/react/essentials/toolbars-and-globals for documentation.
 */
export const usePortalled = (context: { globals: any}) => {
    return JSON.parse(context.globals?.portalled) as boolean
}