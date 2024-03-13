// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogPostDocumentDataSlicesSlice = never;

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice> /**
   * Meta Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

type HomeDocumentDataSlicesSlice =
  | PartnersLogoAreaSlice
  | TestimonialsSlice
  | DuetContentSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type ShowcaseDocumentDataSlicesSlice = HeroShowcaseSlice;

/**
 * Content for Showcase documents
 */
interface ShowcaseDocumentData {
  /**
   * Slice Zone field in *Showcase*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ShowcaseDocumentDataSlicesSlice> /**
   * Meta Description field in *Showcase*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: showcase.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Showcase*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Showcase*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: showcase.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Showcase document from Prismic
 *
 * - **API ID**: `showcase`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ShowcaseDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ShowcaseDocumentData>,
    "showcase",
    Lang
  >;

/**
 * Content for title documents
 */
interface TitleDocumentData {
  /**
   * title field in *title*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Le titre
   * - **API ID Path**: title.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * TitleLevel field in *title*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Le niveau de titre
   * - **Default Value**: 2
   * - **API ID Path**: title.titlelevel
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  titlelevel: prismic.SelectField<"2" | "3" | "4" | "5" | "6", "filled">;
}

/**
 * title document from Prismic
 *
 * - **API ID**: `title`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TitleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TitleDocumentData>, "title", Lang>;

export type AllDocumentTypes =
  | BlogPostDocument
  | HomeDocument
  | ShowcaseDocument
  | TitleDocument;

/**
 * Primary content in *DuetContent → Primary*
 */
export interface DuetContentSliceDefaultPrimary {
  /**
   * Image field in *DuetContent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *DuetContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Title Level field in *DuetContent → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 2
   * - **API ID Path**: duet_content.primary.title_level
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  title_level: prismic.SelectField<"2" | "3" | "4" | "5" | "6", "filled">;

  /**
   * Content field in *DuetContent → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Image First field in *DuetContent → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: duet_content.primary.image_first
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  image_first: prismic.BooleanField;
}

/**
 * Primary content in *DuetContent → Items*
 */
export interface DuetContentSliceDefaultItem {
  /**
   * Highlight Term field in *DuetContent → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.items[].highlight_term
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  highlight_term: prismic.KeyTextField;
}

/**
 * Default variation for DuetContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DuetContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DuetContentSliceDefaultPrimary>,
  Simplify<DuetContentSliceDefaultItem>
>;

/**
 * Primary content in *DuetContent → Primary*
 */
export interface DuetContentSliceWIthCallToActionPrimary {
  /**
   * Image field in *DuetContent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *DuetContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Title Level field in *DuetContent → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 2
   * - **API ID Path**: duet_content.primary.title_level
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  title_level: prismic.SelectField<"2" | "3" | "4" | "5" | "6", "filled">;

  /**
   * Content field in *DuetContent → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Call To Action Destination field in *DuetContent → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.call_to_action_destination
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  call_to_action_destination: prismic.LinkField;

  /**
   * Call To Action Label field in *DuetContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.call_to_action_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  call_to_action_label: prismic.KeyTextField;
}

/**
 * WIth Call To Action variation for DuetContent Slice
 *
 * - **API ID**: `wIthCallToAction`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DuetContentSliceWIthCallToAction = prismic.SharedSliceVariation<
  "wIthCallToAction",
  Simplify<DuetContentSliceWIthCallToActionPrimary>,
  never
>;

/**
 * Primary content in *DuetContent → Primary*
 */
export interface DuetContentSliceTextOnlyPrimary {
  /**
   * Sub Title field in *DuetContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.sub_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_title: prismic.KeyTextField;

  /**
   * Title field in *DuetContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Title Level field in *DuetContent → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 2
   * - **API ID Path**: duet_content.primary.title_level
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  title_level: prismic.SelectField<"2" | "3" | "4" | "5" | "6", "filled">;

  /**
   * Content field in *DuetContent → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: duet_content.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Text Only variation for DuetContent Slice
 *
 * - **API ID**: `textOnly`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DuetContentSliceTextOnly = prismic.SharedSliceVariation<
  "textOnly",
  Simplify<DuetContentSliceTextOnlyPrimary>,
  never
>;

/**
 * Slice variation for *DuetContent*
 */
type DuetContentSliceVariation =
  | DuetContentSliceDefault
  | DuetContentSliceWIthCallToAction
  | DuetContentSliceTextOnly;

/**
 * DuetContent Shared Slice
 *
 * - **API ID**: `duet_content`
 * - **Description**: DuetContent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DuetContentSlice = prismic.SharedSlice<
  "duet_content",
  DuetContentSliceVariation
>;

/**
 * Primary content in *HeroBanner → Primary*
 */
export interface HeroBannerSliceDefaultPrimary {
  /**
   * Image field in *HeroBanner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *HeroBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Default variation for HeroBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroBannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroBannerSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *HeroBanner → Primary*
 */
export interface HeroBannerSliceWithCallToActionPrimary {
  /**
   * Image field in *HeroBanner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *HeroBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Call To Action Text field in *HeroBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.primary.call_to_action_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  call_to_action_text: prismic.KeyTextField;

  /**
   * Call To Action Link field in *HeroBanner → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.primary.call_to_action_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  call_to_action_link: prismic.LinkField;
}

/**
 * With Call To Action variation for HeroBanner Slice
 *
 * - **API ID**: `withCallToAction`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroBannerSliceWithCallToAction = prismic.SharedSliceVariation<
  "withCallToAction",
  Simplify<HeroBannerSliceWithCallToActionPrimary>,
  never
>;

/**
 * Slice variation for *HeroBanner*
 */
type HeroBannerSliceVariation =
  | HeroBannerSliceDefault
  | HeroBannerSliceWithCallToAction;

/**
 * HeroBanner Shared Slice
 *
 * - **API ID**: `hero_banner`
 * - **Description**: HeroBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroBannerSlice = prismic.SharedSlice<
  "hero_banner",
  HeroBannerSliceVariation
>;

/**
 * Primary content in *HeroShowcase → Primary*
 */
export interface HeroShowcaseSliceDefaultPrimary {
  /**
   * Titre du projet field in *HeroShowcase → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_showcase.primary.showcasetitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  showcasetitle: prismic.KeyTextField;

  /**
   * Baseline du projet field in *HeroShowcase → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_showcase.primary.showcaseBaseline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  showcaseBaseline: prismic.KeyTextField;

  /**
   * Image liée au projet field in *HeroShowcase → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_showcase.primary.showcasepicture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  showcasepicture: prismic.ImageField<"mobile">;

  /**
   * Description du projet field in *HeroShowcase → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_showcase.primary.showcaseDescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  showcaseDescription: prismic.KeyTextField;

  /**
   * Lien vers le site du projet field in *HeroShowcase → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_showcase.primary.showcaseLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  showcaseLink: prismic.LinkField;
}

/**
 * Primary content in *HeroShowcase → Items*
 */
export interface HeroShowcaseSliceDefaultItem {
  /**
   * Tags du projet field in *HeroShowcase → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_showcase.items[].showcasetags
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  showcasetags: prismic.KeyTextField;
}

/**
 * Default variation for HeroShowcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroShowcaseSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroShowcaseSliceDefaultPrimary>,
  Simplify<HeroShowcaseSliceDefaultItem>
>;

/**
 * Slice variation for *HeroShowcase*
 */
type HeroShowcaseSliceVariation = HeroShowcaseSliceDefault;

/**
 * HeroShowcase Shared Slice
 *
 * - **API ID**: `hero_showcase`
 * - **Description**: HeroShowcase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroShowcaseSlice = prismic.SharedSlice<
  "hero_showcase",
  HeroShowcaseSliceVariation
>;

/**
 * Primary content in *PartnersLogoArea → Items*
 */
export interface PartnersLogoAreaSliceDefaultItem {
  /**
   * Partner Logo field in *PartnersLogoArea → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: partners_logo_area.items[].partner_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  partner_logo: prismic.ImageField<never>;
}

/**
 * Default variation for PartnersLogoArea Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnersLogoAreaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<PartnersLogoAreaSliceDefaultItem>
>;

/**
 * Slice variation for *PartnersLogoArea*
 */
type PartnersLogoAreaSliceVariation = PartnersLogoAreaSliceDefault;

/**
 * PartnersLogoArea Shared Slice
 *
 * - **API ID**: `partners_logo_area`
 * - **Description**: PartnersLogoArea
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnersLogoAreaSlice = prismic.SharedSlice<
  "partners_logo_area",
  PartnersLogoAreaSliceVariation
>;

/**
 * Primary content in *ProjectsList → Primary*
 */
export interface ProjectsListSliceDefaultPrimary {
  /**
   * Title field in *ProjectsList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_list.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Highlight Terms field in *ProjectsList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Comma separated terms you want to highlight
   * - **API ID Path**: projects_list.primary.highlight_terms
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  highlight_terms: prismic.KeyTextField;
}

/**
 * Primary content in *ProjectsList → Items*
 */
export interface ProjectsListSliceDefaultItem {
  /**
   * Title field in *ProjectsList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_list.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Short Description field in *ProjectsList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_list.items[].short_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  short_description: prismic.KeyTextField;

  /**
   * Image field in *ProjectsList → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_list.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ProjectsList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectsListSliceDefaultPrimary>,
  Simplify<ProjectsListSliceDefaultItem>
>;

/**
 * Primary content in *ProjectsList → Primary*
 */
export interface ProjectsListSliceWithLinksPrimary {
  /**
   * Title field in *ProjectsList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_list.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Highlight Terms field in *ProjectsList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Comma separated terms you want to highlight
   * - **API ID Path**: projects_list.primary.highlight_terms
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  highlight_terms: prismic.KeyTextField;
}

/**
 * Primary content in *ProjectsList → Items*
 */
export interface ProjectsListSliceWithLinksItem {
  /**
   * Title field in *ProjectsList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_list.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Short Description field in *ProjectsList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_list.items[].short_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  short_description: prismic.KeyTextField;

  /**
   * Image field in *ProjectsList → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_list.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *ProjectsList → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Lien vers une ressource / un projet
   * - **API ID Path**: projects_list.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * With Links variation for ProjectsList Slice
 *
 * - **API ID**: `withLinks`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsListSliceWithLinks = prismic.SharedSliceVariation<
  "withLinks",
  Simplify<ProjectsListSliceWithLinksPrimary>,
  Simplify<ProjectsListSliceWithLinksItem>
>;

/**
 * Slice variation for *ProjectsList*
 */
type ProjectsListSliceVariation =
  | ProjectsListSliceDefault
  | ProjectsListSliceWithLinks;

/**
 * ProjectsList Shared Slice
 *
 * - **API ID**: `projects_list`
 * - **Description**: ProjectsList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsListSlice = prismic.SharedSlice<
  "projects_list",
  ProjectsListSliceVariation
>;

/**
 * Primary content in *Testimonials → Items*
 */
export interface TestimonialsSliceDefaultItem {
  /**
   * Author image field in *Testimonials → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].author_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  author_image: prismic.ImageField<never>;

  /**
   * Author Name field in *Testimonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].author_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author_name: prismic.KeyTextField;

  /**
   * Author Role field in *Testimonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].author_role
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author_role: prismic.KeyTextField;

  /**
   * Author Company field in *Testimonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].author_company
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author_company: prismic.KeyTextField;

  /**
   * Content field in *Testimonials → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<TestimonialsSliceDefaultItem>
>;

/**
 * Primary content in *Testimonials → Primary*
 */
export interface TestimonialsSliceWithTitlePrimary {
  /**
   * Title field in *Testimonials → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Level field in *Testimonials → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 2
   * - **API ID Path**: testimonials.primary.level
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  level: prismic.SelectField<"2" | "3" | "4" | "5" | "6", "filled">;
}

/**
 * Primary content in *Testimonials → Items*
 */
export interface TestimonialsSliceWithTitleItem {
  /**
   * Author image field in *Testimonials → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].author_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  author_image: prismic.ImageField<never>;

  /**
   * Author Name field in *Testimonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].author_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author_name: prismic.KeyTextField;

  /**
   * Author Role field in *Testimonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].author_role
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author_role: prismic.KeyTextField;

  /**
   * Author Company field in *Testimonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].author_company
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author_company: prismic.KeyTextField;

  /**
   * Content field in *Testimonials → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * with title variation for Testimonials Slice
 *
 * - **API ID**: `withTitle`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceWithTitle = prismic.SharedSliceVariation<
  "withTitle",
  Simplify<TestimonialsSliceWithTitlePrimary>,
  Simplify<TestimonialsSliceWithTitleItem>
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation =
  | TestimonialsSliceDefault
  | TestimonialsSliceWithTitle;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<
  "testimonials",
  TestimonialsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      ShowcaseDocument,
      ShowcaseDocumentData,
      ShowcaseDocumentDataSlicesSlice,
      TitleDocument,
      TitleDocumentData,
      AllDocumentTypes,
      DuetContentSlice,
      DuetContentSliceDefaultPrimary,
      DuetContentSliceDefaultItem,
      DuetContentSliceWIthCallToActionPrimary,
      DuetContentSliceTextOnlyPrimary,
      DuetContentSliceVariation,
      DuetContentSliceDefault,
      DuetContentSliceWIthCallToAction,
      DuetContentSliceTextOnly,
      HeroBannerSlice,
      HeroBannerSliceDefaultPrimary,
      HeroBannerSliceWithCallToActionPrimary,
      HeroBannerSliceVariation,
      HeroBannerSliceDefault,
      HeroBannerSliceWithCallToAction,
      HeroShowcaseSlice,
      HeroShowcaseSliceDefaultPrimary,
      HeroShowcaseSliceDefaultItem,
      HeroShowcaseSliceVariation,
      HeroShowcaseSliceDefault,
      PartnersLogoAreaSlice,
      PartnersLogoAreaSliceDefaultItem,
      PartnersLogoAreaSliceVariation,
      PartnersLogoAreaSliceDefault,
      ProjectsListSlice,
      ProjectsListSliceDefaultPrimary,
      ProjectsListSliceDefaultItem,
      ProjectsListSliceWithLinksPrimary,
      ProjectsListSliceWithLinksItem,
      ProjectsListSliceVariation,
      ProjectsListSliceDefault,
      ProjectsListSliceWithLinks,
      TestimonialsSlice,
      TestimonialsSliceDefaultItem,
      TestimonialsSliceWithTitlePrimary,
      TestimonialsSliceWithTitleItem,
      TestimonialsSliceVariation,
      TestimonialsSliceDefault,
      TestimonialsSliceWithTitle,
    };
  }
}
