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
    description: '';
    displayName: 'Esim Compatibility';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    description: '';
    displayName: 'form';
  };
  attributes: {
    group: Schema.Attribute.String;
    group_target: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name_id: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    select_options: Schema.Attribute.Component<
      'select-options.select-options',
      true
    >;
    select_options_source_collection: Schema.Attribute.Enumeration<
      ['countries']
    > &
      Schema.Attribute.DefaultTo<'countries'>;
    type: Schema.Attribute.Enumeration<
      ['text', 'select', 'hidden', 'password', 'email', 'checkbox', 'textarea']
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
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_title: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
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

export interface SelectOptionsSelectOptions extends Struct.ComponentSchema {
  collectionName: 'components_select_options_select_options';
  info: {
    description: '';
    displayName: 'select-options';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'esim-compatibility.esim-compatibility': EsimCompatibilityEsimCompatibility;
      'esim-installation-tuto.esim-installation-tuto': EsimInstallationTutoEsimInstallationTuto;
      'faq.faq': FaqFaq;
      'formular.formular': FormularFormular;
      'image-text.image-text': ImageTextImageText;
      'pack-info.pack-infos': PackInfoPackInfos;
      'products-higlight.products-higlight': ProductsHiglightProductsHiglight;
      'select-options.select-options': SelectOptionsSelectOptions;
    }
  }
}
