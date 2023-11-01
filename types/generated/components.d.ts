import type { Schema, Attribute } from '@strapi/strapi';

export interface TagWorkType extends Schema.Component {
  collectionName: 'components_tag_work_types';
  info: {
    displayName: 'Work type';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    Type: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tag.work-type': TagWorkType;
    }
  }
}
