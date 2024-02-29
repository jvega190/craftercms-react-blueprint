import {getItem, parseDescriptor} from '@craftercms/content';
import {map} from 'rxjs';

export function getModel(path = '/site/website/index.xml') {
  return getItem(path).pipe(
    map((item) => parseDescriptor(item.descriptorDom))
  );
}
