import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";

import configStore from "./store";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  config = {
    pages: [
      "pages/index/index",
      "pages/price/index",
      "pages/login/index",
      "pages/price/index",
      /*  "pages/market/index", */
      /*  "pages/home/index", */
      "pages/found/index",
      "pages/mine/index",
      "pages/detail/index",
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
    },
    tabBar: {
      color: "#a6a6a6",
      selectedColor: "#78a4fa",
      backgroundColor: "#ffffff",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./assets/tab_home.png",
          selectedIconPath: "./assets/tab_home_f.png",
        },
        {
          pagePath: "pages/price/index",
          text: "行情",
          iconPath: "./assets/tab_me.png",
          selectedIconPath: "./assets/tab_me_f.png",
        },

        {
          pagePath: "pages/found/index",
          text: "发现",
          iconPath: "./assets/tab_me.png",
          selectedIconPath: "./assets/tab_me_f.png",
        },
        {
          pagePath: "pages/mine/index",
          text: "我的",
          iconPath: "./assets/tab_me.png",
          selectedIconPath: "./assets/tab_me_f.png",
        },
      ],
    },
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
