export interface ImageInfo {
  src?: string;
  alt?: string;
}

export interface HeroInfo {
  title: string;
  image: ImageInfo;
}

export interface LinkInfo {
  href: string;
  content?: ImageInfo | string;
}

export interface BlockInfo {
  heading?: string;
  title?: string;
  content?: string;
  image?: ImageInfo;
  link?: LinkInfo;
}

export interface Content {
  hero?: HeroInfo;
  alternatingBlocks?: BlockInfo[];
  cellBlocks: BlockInfo[];
}
