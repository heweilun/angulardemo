/*
 * @Descripttion: 
 * @Author: heweilun weilun@ssc-hn.com
 * @Date: 2023-01-03
 * @LastEditors: heweilun weilun@ssc-hn.com
 * @LastEditTime: 2023-01-28
 */
import { Component } from '@angular/core';
import { TopMenu } from './components/scroll-lable-tab/scroll-lable-tab.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardemo';
  tabs:TopMenu[] = [{title: '手机'}, {title: '男装'}, {title: '妆化'}, {title: '妆化'}, {title: '妆化'}, {title: '妆化'}, {title: '妆化'}, {title: '妆化'}, {title: '妆化'}, {title: '妆化'}, {title: '妆化'}]
  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu)
  }
}
