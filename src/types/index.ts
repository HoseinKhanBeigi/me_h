export interface ImageComponentProps {
  dataSort: string;
  url: string;
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
  previousIndex: number;
  currentIndex: number;
}
