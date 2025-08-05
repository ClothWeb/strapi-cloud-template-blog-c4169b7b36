import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    image_text: Schema.Attribute.Component<'image-text.image-text', true>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EsimCompatibilityEsimCompatibility
  extends Struct.ComponentSchema {
  collectionName: 'components_esim_compatibility_esim_compatibilities';
  info: {
    displayName: 'Esim Compatibility';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    placeholder_search: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ImageTextImageText extends Struct.ComponentSchema {
  collectionName: 'components_image_text_image_texts';
  info: {
    description: '';
    displayName: 'Image / Text';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProductsHiglightProductsHiglight
  extends Struct.ComponentSchema {
  collectionName: 'components_products_higlight_products_higlights';
  info: {
    displayName: 'products higlight';
  };
  attributes: {
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'esim-compatibility.esim-compatibility': EsimCompatibilityEsimCompatibility;
      'image-text.image-text': ImageTextImageText;
      'products-higlight.products-higlight': ProductsHiglightProductsHiglight;
    }
  }
}
