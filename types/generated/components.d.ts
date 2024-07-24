import type { Schema, Attribute } from '@strapi/strapi';

export interface WidgetCarousel extends Schema.Component {
  collectionName: 'components_widget_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    code: Attribute.String;
  };
}

export interface WidgetPredictionCard extends Schema.Component {
  collectionName: 'components_widget_prediction_cards';
  info: {
    displayName: 'PredictionCard';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'widget.carousel': WidgetCarousel;
      'widget.prediction-card': WidgetPredictionCard;
    }
  }
}
