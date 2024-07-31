import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicRepeatablesDifferentialDiagnosis
  extends Schema.Component {
  collectionName: 'components_basic_repeatables_differential_diagnosis';
  info: {
    displayName: 'Differential Diagnosis';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    distinguishing_features: Attribute.Component<
      'basic-repeatables.text',
      true
    >;
  };
}

export interface BasicRepeatablesImages extends Schema.Component {
  collectionName: 'components_basic_repeatables_images';
  info: {
    displayName: 'images';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    media_file: Attribute.Media;
  };
}

export interface BasicRepeatablesImmunohistochemistry extends Schema.Component {
  collectionName: 'components_basic_repeatables_immunohistochemistries';
  info: {
    displayName: 'immunohistochemistry';
  };
  attributes: {
    stain: Attribute.String;
    result: Attribute.String;
  };
}

export interface BasicRepeatablesMolecularFinding extends Schema.Component {
  collectionName: 'components_basic_repeatables_molecular_findings';
  info: {
    displayName: 'Molecular Finding';
  };
  attributes: {
    test: Attribute.String;
    result: Attribute.String;
  };
}

export interface BasicRepeatablesSpecialStains extends Schema.Component {
  collectionName: 'components_basic_repeatables_special_stains';
  info: {
    displayName: 'specialStains';
  };
  attributes: {
    stain: Attribute.String;
    result: Attribute.String;
  };
}

export interface BasicRepeatablesTextWithHighYieldPoints
  extends Schema.Component {
  collectionName: 'components_basic_repeatables_text_with_high_yield_points';
  info: {
    displayName: 'Text With High Yield Points';
  };
  attributes: {
    feature: Attribute.String;
    highYield: Attribute.Boolean;
  };
}

export interface BasicRepeatablesText extends Schema.Component {
  collectionName: 'components_basic_repeatables_texts';
  info: {
    displayName: 'text';
    description: '';
  };
  attributes: {
    txt: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basic-repeatables.differential_diagnosis': BasicRepeatablesDifferentialDiagnosis;
      'basic-repeatables.images': BasicRepeatablesImages;
      'basic-repeatables.immunohistochemistry': BasicRepeatablesImmunohistochemistry;
      'basic-repeatables.molecular-finding': BasicRepeatablesMolecularFinding;
      'basic-repeatables.special-stains': BasicRepeatablesSpecialStains;
      'basic-repeatables.text-with-high-yield-points': BasicRepeatablesTextWithHighYieldPoints;
      'basic-repeatables.text': BasicRepeatablesText;
    }
  }
}
