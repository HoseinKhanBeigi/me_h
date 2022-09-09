export interface ImageComponentProps {
  dataSort: string;
  url: string;
}

export interface DomProviderProps {
  children: React.ReactNode;
}

export interface slide {
  DOM: {
    el: any;
    content: any;
    innerTitle: any;
    backFromContentCtrl: any;
    title: any;
    text: any;
  };
  figures: any;
  contentcolor: any;
  innerTitleMainLetters: any[];
  innerTitleTotal: any;
  titleLettersTotal: number;
}

export interface DomContextType {
  slide: (el: HTMLDivElement | any) => slide;
}
export interface mainImageComponentProps {
  dataSort: string;
  url: string;
  // getChildren: (value: any) => void;
}
export interface layouts {
  FigureMainImg: smallImageComponentProps;
  imageBoxes: smallImageComponentProps[];
  textMeta: string;
  textDescription: string;
  slideTitle: string;
  numberOfLayout: string;
  content: any;
}

export interface RegularListProps {
  items: Array<any>;
  Component: any;
}

export interface ListOfFigureBoxProps {
  imageBox: ImageComponentProps[];
  // getChildren: (value: any) => void;
}

export interface smallImageComponentProps {
  dataSort: string;
  url: string;
  shape: string;
}
export interface computeIndex {
  currentIndex: number;
}

export interface slides {
  DOM: "";
}

export interface SlideTitleProps {
  slideTitle: string;
  textMeta: string;
  textDescription: string;
  showContent: (val: string) => void;
}
export interface FigurBoxProps {
  imageBoxes: smallImageComponentProps[];
  loading: string;
}

export interface FigureMainProps {
  dataSort: any;
  url: any;
}

export interface HeaderInterface {
  navigate: (value: string, index: number) => void;
  isContentOpen: boolean;
}

export interface ContentProps {
  hideContent: (val: string) => void;
  p1: any;
  p2: any;
  p3: any;
}

export interface Times {
  switchtime: number;
  slideFigures: (val: number) => number;
  texts: number;
  textsExtraTitles: number;
  contentExtraTitles: number;
  content: number;
}

export interface photosState {
  entities: any[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: any;
  currentRequestId: any;
  photos: any[];
  clone: any;
}
