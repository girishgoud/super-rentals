import Component from '@glimmer/component';

export default class MapComponent extends Component {
    get token() {
      return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
    }
  }

