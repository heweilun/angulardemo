/*
 * @Descripttion: 
 * @Author: heweilun weilun@ssc-hn.com
 * @Date: 2023-01-28
 * @LastEditors: heweilun weilun@ssc-hn.com
 * @LastEditTime: 2023-01-28
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export interface TopMenu {
  title: string
  link?: string
}
@Component({
  selector: 'app-scroll-lable-tab',
  templateUrl: './scroll-lable-tab.component.html',
  styleUrls: ['./scroll-lable-tab.component.scss']
})
export class ScrollLableTabComponent {
  activeIndex: number = 0
  activeColor: string = 'yellow'
  titleColor: string = 'bule'
  @Input() tabs:TopMenu[] = []
  
  ngOnInit() {}
  
  @Output() tabSelected = new EventEmitter()
  handleSelection(i: number) {
    this.activeIndex = i
    this.tabSelected.emit(this.tabs[i])
  }
}
