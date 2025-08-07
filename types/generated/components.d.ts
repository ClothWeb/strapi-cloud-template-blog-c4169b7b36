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

export interface AboutAboutPack extends Struct.ComponentSchema {
  collectionName: 'components_about_about_packs';
  info: {
    displayName: 'about_pack';
  };
  attributes: {};
}

export interface EsimCompatibilityEsimCompatibility
  extends Struct.ComponentSchema {
  collectionName: 'components_esim_compatibility_esim_compatibilities';
  info: {
    description: '';
    displayName: 'Esim Compatibility';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    placeholder_search: Schema.Attribute.String;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EsimInstallationTutoEsimInstallationTuto
  extends Struct.ComponentSchema {
  collectionName: 'components_esim_installation_tuto_esim_installation_tutos';
  info: {
    displayName: 'esim_installation_tuto';
  };
  attributes: {
    image_text: Schema.Attribute.Component<'image-text.image-text', true>;
    title: Schema.Attribute.String;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FormularFormular extends Struct.ComponentSchema {
  collectionName: 'components_formular_formulars';
  info: {
    displayName: 'formular';
  };
  attributes: {
    group: Schema.Attribute.String;
    group_target: Schema.Attribute.String;
    label: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    slug: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['text', 'select', 'hidden', 'password', 'email', 'checkbox']
    >;
  };
}

export interface FormularFromular extends Struct.ComponentSchema {
  collectionName: 'components_formular_fromulars';
  info: {
    displayName: 'fromular';
  };
  attributes: {
    label: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    type: Schema.Attribute.Enumeration<
      ['checkbox', 'text', 'hidden', 'select', 'textarea']
    >;
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
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface PackInfoPackInfos extends Struct.ComponentSchema {
  collectionName: 'components_pack_info_pack_infos';
  info: {
    displayName: 'pack_infos';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ProductsHiglightProductsHiglight
  extends Struct.ComponentSchema {
  collectionName: 'components_products_higlight_products_higlights';
  info: {
    description: '';
    displayName: 'countries higlight';
    icon: '';
  };
  attributes: {
    btn_label: Schema.Attribute.String;
    countries: Schema.Attribute.Relation<'oneToMany', 'api::country.country'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'about.about-pack': AboutAboutPack;
      'esim-compatibility.esim-compatibility': EsimCompatibilityEsimCompatibility;
      'esim-installation-tuto.esim-installation-tuto': EsimInstallationTutoEsimInstallationTuto;
      'faq.faq': FaqFaq;
      'formular.formular': FormularFormular;
      'formular.fromular': FormularFromular;
      'image-text.image-text': ImageTextImageText;
      'pack-info.pack-infos': PackInfoPackInfos;
      'products-higlight.products-higlight': ProductsHiglightProductsHiglight;
    }
  }
}
