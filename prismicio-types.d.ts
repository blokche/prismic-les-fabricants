// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Author → Social Links*
 */
export interface AuthorDocumentDataSocialLinksItem {
  /**
   * Type field in *Author → Social Links*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: author.social_links[].type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<
    "twitter / x" | "linkedin" | "mastodon" | "personal website"
  >;

  /**
   * Link field in *Author → Social Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: author.social_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Author documents
 */
interface AuthorDocumentData {
  /**
   * Firstname field in *Author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.firstname
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  firstname: prismic.KeyTextField;

  /**
   * Lastname field in *Author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.lastname
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  lastname: prismic.KeyTextField;

  /**
   * Biography field in *Author*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.biography
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  biography: prismic.RichTextField;

  /**
   * Avatar field in *Author*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: author.avatar
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;

  /**
   * Social Links field in *Author*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: author.social_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_links: prismic.GroupField<Simplify<AuthorDocumentDataSocialLinksItem>>;
}

/**
 * Author document from Prismic
 *
 * - **API ID**: `author`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AuthorDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AuthorDocumentData>, "author", Lang>;

/**
 * Content for Blog Categories documents
 */
interface BlogCategoriesDocumentData {
  /**
   * label field in *Blog Categories*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_categories.label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * description field in *Blog Categories*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A short description for the category
   * - **API ID Path**: blog_categories.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Blog Categories document from Prismic
 *
 * - **API ID**: `blog_categories`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogCategoriesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogCategoriesDocumentData>,
    "blog_categories",
    Lang
  >;

/**
 * Item in *Blog Post → Categories*
 */
export interface BlogPostDocumentDataCategoriesItem {
  /**
   * Category field in *Blog Post → Categories*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.categories[].category
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"blog_categories">;
}

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Author field in *Blog Post*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  author: prismic.ContentRelationshipField<"author">;

  /**
   * Categories field in *Blog Post*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.categories[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  categories: prismic.GroupField<Simplify<BlogPostDocumentDataCategoriesItem>>;

  /**
   * Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Hero Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.hero_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;

  /**
   * Content field in *Blog Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField /**
   * Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Social image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.social_image
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  social_image: prismic.ImageField<never>;

  /**
   * Keywords field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Comma separated keywords
   * - **API ID Path**: blog_post.keywords
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  keywords: prismic.KeyTextField;
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
  | HighlightedBenefitsSlice
  | ImagesSequenceSlice
  | ProjectsListSlice
  | PartnersLogoAreaSlice
  | TestimonialsSlice
  | DuetContentSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Titre field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Main title
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Emphase field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.highlighted_term
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  highlighted_term: prismic.KeyTextField;

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

export type AllDocumentTypes =
  | AuthorDocument
  | BlogCategoriesDocument
  | BlogPostDocument
  | HomeDocument
  | ShowcaseDocument;

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
   * - **Placeholder**: Be careful in the order of your title for accessibility purpose.
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
   * - **Placeholder**: A text value you want to highlight in the title
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
   * - **Placeholder**: Be careful and provide coherent title order for accessibility purpose!
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
 * Primary content in *HighlightedBenefits → Primary*
 */
export interface HighlightedBenefitsSliceDefaultPrimary {
  /**
   * Title field in *HighlightedBenefits → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlighted_benefits.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Sous-titre field in *HighlightedBenefits → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlighted_benefits.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;
}

/**
 * Primary content in *HighlightedBenefits → Items*
 */
export interface HighlightedBenefitsSliceDefaultItem {
  /**
   * Label field in *HighlightedBenefits → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Le label du panneau
   * - **API ID Path**: highlighted_benefits.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Contenu field in *HighlightedBenefits → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Le contenu du panneau
   * - **API ID Path**: highlighted_benefits.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for HighlightedBenefits Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HighlightedBenefitsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HighlightedBenefitsSliceDefaultPrimary>,
  Simplify<HighlightedBenefitsSliceDefaultItem>
>;

/**
 * Slice variation for *HighlightedBenefits*
 */
type HighlightedBenefitsSliceVariation = HighlightedBenefitsSliceDefault;

/**
 * HighlightedBenefits Shared Slice
 *
 * - **API ID**: `highlighted_benefits`
 * - **Description**: HighlightedBenefits
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HighlightedBenefitsSlice = prismic.SharedSlice<
  "highlighted_benefits",
  HighlightedBenefitsSliceVariation
>;

/**
 * Primary content in *ImagesSequence → Items*
 */
export interface ImagesSequenceSliceDefaultItem {
  /**
   * image field in *ImagesSequence → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images_sequence.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImagesSequence Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImagesSequenceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ImagesSequenceSliceDefaultItem>
>;

/**
 * Slice variation for *ImagesSequence*
 */
type ImagesSequenceSliceVariation = ImagesSequenceSliceDefault;

/**
 * ImagesSequence Shared Slice
 *
 * - **API ID**: `images_sequence`
 * - **Description**: ImagesSequence
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImagesSequenceSlice = prismic.SharedSlice<
  "images_sequence",
  ImagesSequenceSliceVariation
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

  /**
   * Niveau de titre field in *ProjectsList → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Niveau de titre
   * - **Default Value**: 2
   * - **API ID Path**: projects_list.primary.niveau_de_titre
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  niveau_de_titre: prismic.SelectField<"2" | "3" | "4" | "5", "filled">;
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
   * Highlight Terms (in Title field) field in *ProjectsList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Comma separated terms you want to highlight in the title field
   * - **API ID Path**: projects_list.primary.highlight_terms
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  highlight_terms: prismic.KeyTextField;

  /**
   * Niveau de titre field in *ProjectsList → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Niveau de titre
   * - **Default Value**: 2
   * - **API ID Path**: projects_list.primary.niveau_de_titre
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  niveau_de_titre: prismic.SelectField<"2" | "3" | "4" | "5", "filled">;
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
      AuthorDocument,
      AuthorDocumentData,
      AuthorDocumentDataSocialLinksItem,
      BlogCategoriesDocument,
      BlogCategoriesDocumentData,
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataCategoriesItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      ShowcaseDocument,
      ShowcaseDocumentData,
      ShowcaseDocumentDataSlicesSlice,
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
      HeroShowcaseSlice,
      HeroShowcaseSliceDefaultPrimary,
      HeroShowcaseSliceDefaultItem,
      HeroShowcaseSliceVariation,
      HeroShowcaseSliceDefault,
      HighlightedBenefitsSlice,
      HighlightedBenefitsSliceDefaultPrimary,
      HighlightedBenefitsSliceDefaultItem,
      HighlightedBenefitsSliceVariation,
      HighlightedBenefitsSliceDefault,
      ImagesSequenceSlice,
      ImagesSequenceSliceDefaultItem,
      ImagesSequenceSliceVariation,
      ImagesSequenceSliceDefault,
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
