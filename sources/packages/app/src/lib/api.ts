import { getItem, parseDescriptor } from '@craftercms/content';
import { Item } from '@craftercms/models';
import { map } from 'rxjs';

export function getModel(path = '/site/website/index.xml') {
  return getItem(path, { flatten: true }).pipe(
    map((item: Item) => {
      const instance = parseDescriptor(item.descriptorDom);
      instance.craftercms.path = path;
      return instance;
    })
  );
}
