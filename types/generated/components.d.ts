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

export interface FormForm extends Struct.ComponentSchema {
  collectionName: 'components_form_forms';
  info: {
    description: '';
    displayName: 'field';
  };
  attributes: {
    group: Schema.Attribute.String;
    group_target: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    name_id: Schema.Attribute.String & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean;
    select_options: Schema.Attribute.Component<'form.options', true>;
    select_options_source_collection: Schema.Attribute.Enumeration<
      ['countries']
    >;
    type: Schema.Attribute.Enumeration<
      [
        'text',
        'password',
        'phone',
        'email',
        'hidden',
        'checkbox',
        'textarea',
        'select',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface FormOptions extends Struct.ComponentSchema {
  collectionName: 'components_form_options';
  info: {
    description: '';
    displayName: 'options';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
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

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    items: Schema.Attribute.Component<'menu.menu-itens', true>;
    menu_position: Schema.Attribute.Enumeration<['header', 'footer']> &
      Schema.Attribute.Required;
    relation: Schema.Attribute.Component<'menu.relation', false>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MenuMenuItens extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_itens';
  info: {
    description: '';
    displayName: 'menu items';
  };
  attributes: {
    label: Schema.Attribute.String;
    picto: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slug: Schema.Attribute.String;
  };
}

export interface MenuRelation extends Struct.ComponentSchema {
  collectionName: 'components_menu_relations';
  info: {
    description: '';
    displayName: 'menu relation';
  };
  attributes: {
    countries: Schema.Attribute.Relation<'oneToMany', 'api::country.country'>;
    faq_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-category.faq-category'
    >;
    title: Schema.Attribute.String;
  };
}

export interface NavigationMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    description: '';
    displayName: 'menu_items';
  };
  attributes: {
    label: Schema.Attribute.String;
    picto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    slug: Schema.Attribute.String;
  };
}

export interface NavigationMenus extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menus';
  info: {
    description: '';
    displayName: 'menus';
    icon: '';
  };
  attributes: {
    menu_items: Schema.Attribute.Component<'navigation.menu-items', true>;
    relation: Schema.Attribute.Component<'navigation.relation', false>;
    title: Schema.Attribute.String;
  };
}

export interface NavigationNavigation extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigations';
  info: {
    description: '';
    displayName: 'navigation';
  };
  attributes: {
    navigation_menu: Schema.Attribute.Component<
      'navigation.navigation-menu',
      true
    >;
  };
}

export interface NavigationNavigationMenu extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_menus';
  info: {
    description: '';
    displayName: 'navigation_menu';
  };
  attributes: {
    menus: Schema.Attribute.Component<'navigation.menus', true>;
    position: Schema.Attribute.Enumeration<['hearder', 'footer']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationRelation extends Struct.ComponentSchema {
  collectionName: 'components_navigation_relations';
  info: {
    description: '';
    displayName: 'relation';
  };
  attributes: {
    countries: Schema.Attribute.Relation<'oneToMany', 'api::country.country'>;
    faq_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-category.faq-category'
    >;
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
      'esim-compatibility.esim-compatibility': EsimCompatibilityEsimCompatibility;
      'esim-installation-tuto.esim-installation-tuto': EsimInstallationTutoEsimInstallationTuto;
      'faq.faq': FaqFaq;
      'form.form': FormForm;
      'form.options': FormOptions;
      'image-text.image-text': ImageTextImageText;
      'menu.menu': MenuMenu;
      'menu.menu-itens': MenuMenuItens;
      'menu.relation': MenuRelation;
      'navigation.menu-items': NavigationMenuItems;
      'navigation.menus': NavigationMenus;
      'navigation.navigation': NavigationNavigation;
      'navigation.navigation-menu': NavigationNavigationMenu;
      'navigation.relation': NavigationRelation;
      'pack-info.pack-infos': PackInfoPackInfos;
      'products-higlight.products-higlight': ProductsHiglightProductsHiglight;
    }
  }
}
