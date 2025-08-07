import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    image_text: Schema.Attribute.Component<'image-text.image-text', true>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CountriesHiglightCountriesHiglight
  extends Struct.ComponentSchema {
  collectionName: 'components_countries_higlight_countries_higlights';
  info: {
    displayName: 'countries_higlight';
  };
  attributes: {
    countries: Schema.Attribute.Relation<'oneToMany', 'api::country.country'>;
    label_btn_packs: Schema.Attribute.String;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EsimCompatibilityEsimCompatibility
  extends Struct.ComponentSchema {
  collectionName: 'components_esim_compatibility_esim_compatibilities';
  info: {
    displayName: 'esim_compatibility';
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
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ImageTextImageText extends Struct.ComponentSchema {
  collectionName: 'components_image_text_image_texts';
  info: {
    displayName: 'image_text';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_title: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface TitleTextTitleText extends Struct.ComponentSchema {
  collectionName: 'components_title_text_title_texts';
  info: {
    displayName: 'title_text';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'countries-higlight.countries-higlight': CountriesHiglightCountriesHiglight;
      'esim-compatibility.esim-compatibility': EsimCompatibilityEsimCompatibility;
      'esim-installation-tuto.esim-installation-tuto': EsimInstallationTutoEsimInstallationTuto;
      'faq.faq': FaqFaq;
      'image-text.image-text': ImageTextImageText;
      'title-text.title-text': TitleTextTitleText;
    }
  }
}
