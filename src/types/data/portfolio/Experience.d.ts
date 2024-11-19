export interface ExperienceData {
    name: string,
    label?: string,
    who?: string,
    tags: { name: "development" | "design" | "other" | "education" | string, url?: string | null, show?: boolean }[]
    images: { url: string, name: string, format: "svg" | "img" | string, blurDataURL?: string }[],
    url?: string,
    glow?: string,
    customization?: {
        navigateButtons?: {
            type?: "left-right" | string | null 
            previous?: "previous" | "up" | string | null,
            next?: "next" | "down" | "see-more" | string,
        },
        imageType?: "images" | "ideas" | "mockups" | "collection" | string,
    }
}