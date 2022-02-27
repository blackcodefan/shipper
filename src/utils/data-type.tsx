// tag - home filter tag
export interface TTag {
  id?: string | number;
  title?: string;
  images?: TImage[];
  icon?: any | string;
  color?: TColor;
  options?: TOptions;
}

// category - restaurant category and food category
export interface TCategory {
  id?: string | number;
  title?: string;
  image?: string;
}

// restaurant
export interface TRestaurant {
  id?: string;
  name?: string;
  logo?: string;
  banner?: string;
  review?: {
    average?: number;
    total?: number;
    items?: TReview[];
  };
  categories?: TCategory[];
  price?: string;
  badge?: string[];
  location?: {
    distance?: number;
  };
}

// food
export interface TFood {
  category?: TCategory[];
  restaurant?: number | string;
  image?: TImage;
  title?: string;
  shortDescription?: string;
  rate?: TRate;
  tags?: string[];
  price?: number | string;
  quantity?: number;
}

// tracking
export interface TTracking {
  id?: string;
  deliveryType?: string;
  startPosition?: {
    lat?: string;
    lon?: string;
    nearby?: string;
    restaurant?: TRestaurant;
  };
  endPosition?: {
    lat?: string;
    lon?: string;
    nearby?: string;
    address?: TAddress;
  };
  stats?: {
    position?: {
      lat?: string;
      lon?: string;
      nearby?: string;
    };
    todo?: string;
  };
}

// order food item
export interface TOrderFood {
  food?: TFood;
  quantity?: number;
  subTotal?: number;
}

// order
export interface TOrder {
  id?: string | number;
  title?: string;
  stats?: string;
  foods?: TOrderFood[];
  restaurant?: TRestaurant;
  tracking?: TTracking;
  histories?: {
    action?: string;
    time?: string;
  }[];
  payment?: {
    subTotal?: number;
    countDown?: number;
    delivery?: number;
    tax?: number;
    total?: number;
  };
}

// options
export interface TOptions {
  total?: number;
}

// address
export interface TAddress {
  country?: string;
  province?: string;
  city?: string;
  street?: string;
  code?: string;
  position?: {
    lat?: string;
    lon?: string;
  };
  addressLines: string[];
}

// review
export interface TReview {}

// image
export interface TImage {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
}

// color
export interface TColor {
  type?: "hex" | "theme" | string;
  value?: string;
}

// rate
export interface TRate {
  total?: number;
  average?: number;
}

//brand
export interface TBrand {
  id?: string | number;
  name?: string;
  logo?: string;
}
