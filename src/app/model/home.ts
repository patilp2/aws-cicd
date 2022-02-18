export interface Home {
    meta:  HomeMeta;
    items: Item[];
}

export interface Item {
    id:                number;
    meta:              ItemMeta;
    title:             string;
    spotlight_project: SpotlightProject[];
    slider_images:     SliderImage[];
    featured_colleges: FeaturedCollege[];
    recent_projects:   Project[];
}

export interface FeaturedCollege {
    id:    number;
    meta:  FeaturedCollegeMeta;
    image: FeaturedCollegeImage;
    title: string;
}

export interface FeaturedCollegeImage {
    id:    number;
    meta:  ImageMeta;
    title: string;
}

export interface ImageMeta {
    type:         string;
    detail_url:   string;
    download_url: string;
}

export interface FeaturedCollegeMeta {
    type: string;
}

export interface ItemMeta {
    type:               string;
    detail_url:         string;
    html_url:           string;
    slug:               string;
    show_in_menus:      boolean;
    seo_title:          string;
    search_description: string;
    first_published_at: string;
    locale:             string;
}

export interface Project {
    id:           number;
    title:        string;
    user_handle:  string;
    like_count:   number;
    project_tags: ProjectTag[];
    images:       ImageElement[];
    detail_url:   string;
}

export interface ImageElement {
    image_title:  string;
    id:           number;
    download_url: string;
}

export interface ProjectTag {
    name: string;
    id:   number;
}

export interface SliderImage {
    id:      number;
    meta:    FeaturedCollegeMeta;
    image:   FeaturedCollegeImage;
    caption: null;
}

export interface SpotlightProject {
    id:      number;
    meta:    FeaturedCollegeMeta;
    project: Project;
    caption: null;
}

export interface HomeMeta {
    total_count: number;
}
