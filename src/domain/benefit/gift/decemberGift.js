import MENU_DATA from '../../../constant/menuData.js';
import Gift from './gift.js';

class DecemberGift extends Gift {
  get() {
    const gift = MENU_DATA.find((data) => data.name === '샴페인');
    return this.getTotalAmount() >= 120000 ? gift : null;
  }
}

export default DecemberGift;