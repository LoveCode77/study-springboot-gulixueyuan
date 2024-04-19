<template>
  <div>
    <!-- 阿里云视频播放器样式 -->
    <link
      rel="stylesheet"
      href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css"
    />
    <!-- 阿里云视频播放器脚本 -->
    <script
      charset="utf-8"
      type="text/javascript"
      src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js"
    />
    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player" />
  </div>
</template>
<script>
import vodApi from "@/api/vod";
export default {
  layout: "video", //应用video布局
    // created() {
    //   this.vid = this.$route.params.vid;
    //   this.getPlayAuth();
    // },
    // methods: {
    //   getPlayAuth() {
    //     // vodApi.getPlayAuthById(this.videoSourceId).then((resp) => {
    //        vodApi.getPlayAuthById(this.vid).then((resp) => {
    //          console.log(resp);
    //       this.playAuth = resp.data.data.playAuth;
    //     });
    //   },
    // },
    // data() {
    //   return {
    //     playAuth: "",
    //     vid: "",
    //   };
    // },
  asyncData({ params, error }) {
    return vodApi.getPlayAuthById(params.vid).then((response) => {
      console.log("Auth success!!!!");
      return {
        playAuth: response.data.data.playAuth,
        //playAuth:"eyJTZWN1cml0eVRva2VuIjoiQ0FJU2h3TjFxNkZ0NUIyeWZTaklyNWZmRTg3ZHFyVjB4NkRkTm5ERmxHb2ZlY01adC9EcGx6ejJJSGhKZVhOdkJPMGV0ZjQrbVdCWTdQY1lsck1xR3M4VkdCMlZOSmNwdHM4TG9GdjlKcExGc3QySjZyOEpqc1Y1L0pVR2lWbXBzdlhKYXNEVkVmbDJFNVhFTWlJUi8wMGU2TC8rY2lyWXBUWEhWYlNDbFo5Z2FQa09Rd0M4ZGtBb0xkeEtKd3hrMnQxNFVtWFdPYVNDUHdMU2htUEJMVXhtdldnR2wyUnp1NHV5M3ZPZDVoZlpwMXI4eE80YXhlTDBQb1AyVjgxbExacGxlc3FwM0k0U2M3YmFnaFpVNGdscjhxbHg3c3BCNVN5Vmt0eVdHVWhKL3phTElvaXQ3TnBqZmlCMGVvUUFQb3BGcC9YNmp2QWF3UExVbTliWXhncGhCOFIrWGo3RFpZYXV4N0d6ZW9XVE84MCthS3p3TmxuVXo5bUxMZU9WaVE0L1ptOEJQdzQ0RUxoSWFGMElVRUJ6RUc2Q2QvWDRvZ21hT2xmeUZaTG9pdjltamNCSHFIeno1c2VQS2xTMVJMR1U3RDBWSUpkVWJUbHpiME5MaHpPOEwvZGRLVjBSSXdNOVZ1eVBNYXgzYlFGRHI1M3ZzVGJiWHpaYjBtcHR1UG56ZHp0ZlB4elo3Q09WR29BQkYzMVpobWVPeWNDSU5zd1hjRUtEN3pMTTVHdUZudUpGQnh5NStuM09SU2ZxQ1Y3ek1kVXIwOVhua2FQa044c2pwdVhPWWRaWFZaNDhISTE0Q09wSXRuaDB2MWVxdURVYkNXa2c0Qkt4UWFqTUNzYUF3WlVWVHl5TnlGbFBqY25WblVyd2laQ1FlaEVWbEVURjF2aVIrMXJBZVlXVkhELzJ5ODgyQ3RGTGxBaz0iLCJBdXRoSW5mbyI6IntcIkNJXCI6XCJtU1BDSEJJYm5BczIrbHFBM1B1bWY4Qi9LOXJ1SmZhcjZIZ2VDWHEzdUR2U25idlAvOEJLQS84ZUhselNESkRsXCIsXCJDYWxsZXJcIjpcIlUvQmtFWTJ0Nm1KMGJNNUVCSEV2SFloVGdRd3J1cVhDQ0dBZFJZSHd4dk09XCIsXCJFeHBpcmVUaW1lXCI6XCIyMDIyLTAxLTMxVDA5OjIzOjU4WlwiLFwiTWVkaWFJZFwiOlwiMzMwOWJkZGUwNTQ5NGMzMThhOWE5NzYzMzgyZmRjNzdcIixcIlNpZ25hdHVyZVwiOlwiYkpTMFpsWk4rc1BWTHpFWDltK3NnenhRM2lnPVwifSIsIlZpZGVvTWV0YSI6eyJTdGF0dXMiOiJOb3JtYWwiLCJWaWRlb0lkIjoiMzMwOWJkZGUwNTQ5NGMzMThhOWE5NzYzMzgyZmRjNzciLCJUaXRsZSI6Inh5eSIsIkNvdmVyVVJMIjoiaHR0cDovL291dGluLTFjMzlkZWVhNzZiNzExZWNhMzQxMDAxNjNlMWM5MjU2Lm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vMzMwOWJkZGUwNTQ5NGMzMThhOWE5NzYzMzgyZmRjNzcvc25hcHNob3RzLzNiYmQ3NTk0OWM3NjRlMGI5MGU2MzZjZWJkNTQwMTM4LTAwMDAxLmpwZz9FeHBpcmVzPTE2NDM2MjQ1MzgmT1NTQWNjZXNzS2V5SWQ9TFRBSXhTYU9mRXpDbkJPaiZTaWduYXR1cmU9QWRQeFhZeWlpY05ZTnNrQTNKVEtHN1ZhZ2I0JTNEIiwiRHVyYXRpb24iOjE2LjI3Njd9LCJBY2Nlc3NLZXlJZCI6IlNUUy5OVGpYdGlHalVwYjY0VnRwakp1TDVYNUJ1IiwiQWNjZXNzS2V5U2VjcmV0IjoiN2p2amZmanNjOUtTSEc1eUdZUDVxRzRlek5OYUhlenA0RUtUbmtqVVpkRkwiLCJSZWdpb24iOiJjbi1zaGFuZ2hhaSIsIkN1c3RvbWVySWQiOjE5ODg1OTkxNDEwMzQ5MDR9",
        vid: params.vid,
      };
    });
  },
  mounted() {
    //页面渲染之后  created
    new Aliplayer(
      {
        id: "J_prismPlayer",
        vid: this.vid, // 视频id
        playauth: this.playAuth, // 播放凭证
        encryptType: "1", // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
        width: "100%",
        height: "500px",
        // 以下可选设置
        cover: "http://guli.shop/photo/banner/1525939573202.jpg", // 封面
        qualitySort: "asc", // 清晰度排序

        mediaType: "video", // 返回音频还是视频
        autoplay: false, // 自动播放
        isLive: false, // 直播
        rePlay: false, // 循环播放
        preload: true,
        controlBarVisibility: "hover", // 控制条的显示方式：鼠标悬停
        useH5Prism: true, // 播放器类型：html5
      },
      function (player) {
        console.log("播放器创建成功");
      }
    );
  },
};
</script>
