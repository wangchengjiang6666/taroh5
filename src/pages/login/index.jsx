import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import { check_phone } from "../../utils/common";

import API from "../../service/api";
import "./index.scss";
import {
  AtTabs,
  AtTabsPane,
  AtInput,
  AtForm,
  AtButton,
  AtToast,
} from "taro-ui";
class Index extends Component {
  config = {
    navigationBarTitleText: "登录",
  };
  state = {
    current: 0,
    phone: "",
    password: "",
    email: "",

    showToast: false, //轻提示
    text: "", //提示内容
    selector: ["美国", "中国", "巴西", "日本"],
    selectorChecked: "中国",
  };
  handleClick(value) {
    this.setState({
      current: value,
      password: "",
    });
  }
  handleChangePhone = (value) => {
    this.setState({
      phone: value,
    });
  };
  handleChangePassword = (value) => {
    this.setState({
      password: value,
    });
  };
  handelLogin = async () => {
    let isAbled = check_phone(this.state.phone);
    if (this.state.phone) {
      /*  if (isAbled) { */
      let result = await API.post(
        "/reset/login",
        {
          username: this.state.phone,
          password: this.state.password,
        },
        "application/x-www-form-urlencoded"
      );
      console.log("888", result);
      if (result.code == 1) {
        Taro.setStorageSync("token", result.data[0].token);
        Taro.navigateTo({
          url: "/pages/index/index",
        });
      }

      /*  } else {//输入格式不正确的情况
        this.setState({
          showToast: true,
          text: "手机格式不正确"
        });
      } */
    } else {
      //输入为空的情况
      this.setState({
        showToast: true,
        text: "请输入手机号码",
      });
    }
  };
  closeToast = () => {
    this.setState({
      showToast: false, //轻提示
      text: "", //提示内容
    });
  };
  //选择地区
  onChangeArea = (e) => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value],
    });
  };
  //触发弹窗
  showPicker = () => {
    let ref = document.getElementById("phoneStart");
    ref.children[0].children[0].click();
  };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}
  componentDidMount() {}
  componentDidHide() {}

  render() {
    const tabList = [{ title: "手机" }, { title: "邮箱" }];
    return (
      <View className="loginContent">
        <View className="loginLogo">
          <img src={require("../../assets/images/logo.png")} alt="" />
        </View>
        <View className="loginMian">
          <AtTabs
            current={this.state.current}
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
            animated={false}
          >
            <AtTabsPane current={this.state.current} index={0}>
              <View>
                <View className="phoneInput">
                  <View>
                    <View className="phoneTitle" onClick={this.showPicker}>
                      86+
                    </View>
                  </View>
                  <AtInput
                    name="value6"
                    border={false}
                    type="phone"
                    placeholder="请输入手机号码"
                    value={this.state.phone}
                    onChange={this.handleChangePhone}
                  />
                </View>
                <View className="passwordInput">
                  <AtInput
                    name="value3"
                    type="password"
                    placeholder="请输入密码"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                  />
                </View>
                <AtButton className="login" onClick={this.handelLogin}>
                  登录
                </AtButton>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View>
                <View className="phoneInput">
                  <AtInput
                    name="value6"
                    border={false}
                    type="phone"
                    placeholder="请输入邮箱"
                    value={this.state.email}
                    onChange={this.handleChangePhone}
                  />
                </View>
                <View className="passwordInput">
                  <AtInput
                    name="value3"
                    type="password"
                    placeholder="请输入密码"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                  />
                </View>
                <AtButton className="login">登录</AtButton>
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
        <View id="phoneStart">
          <Picker
            mode="selector"
            range={this.state.selector}
            onChange={this.onChangeArea}
            value={1}
          ></Picker>
        </View>
        <AtToast
          isOpened={this.state.showToast}
          text={this.state.text}
          duration={1000}
          onClose={this.closeToast}
        ></AtToast>
      </View>
    );
  }
}

export default Index;
