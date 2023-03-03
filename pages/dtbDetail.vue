<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'DtbPage',
  mixins: [aosMixin],
}
</script>

<template>
  <div>
    <!-- 顶部 -->
    <div class="head pb-16">
      <div class="main-container">
        <div class="dtb-character-box">
          <div class="dtb-character-item">
            <span class="circle" />
            <span class="text">自动获取用户手机号</span>
          </div>
          <div class="dtb-character-item">
            <span class="circle" />
            <span class="text">线索录入自动加密</span>
          </div>
          <div class="dtb-character-item">
            <span class="circle" />
            <span class="text">线索归属清晰</span>
          </div>
          <div class="dtb-character-item">
            <span class="circle" />
            <span class="text">人员权限管理明确</span>
          </div>
        </div>
        <div class="l-info-box">
          <h3>新一代地推神器</h3>
          <p>线上收集  高效管理  无需下载  即开即用</p>
          <div class="scan-code-box">
            <img src="https://www.sc-edu.com/images/dtb/head/dtb_scancode.png" alt="地推宝二维码">
          </div>
          <div class="experience-btn">
            扫一扫立即体验
          </div>
        </div>
        <div class="r-img-box">
          <img src="https://www.sc-edu.com/images/dtb/head/dt_champion.png" alt="地推冠军">
        </div>
      </div>
    </div>
    <!-- 功能介绍部分 -->
    <div class="article w-full">
      <!-- 亮点功能 -->
      <div class="star-functions-block w-full">
        <div class="main-container">
          <span class="title">亮点功能</span>
          <div class="intro-img-block">
            <img src="https://www.sc-edu.com/images/dtb/star_functions/side_new.png" class="side-img">
          </div>
          <div class="right-info" data-aos="fade-up">
            <h3>自动获取用户手机号码</h3>
            <h3>& 线索自动加密</h3>
            <p>线索获取精准高效</p>
            <p>信息查看严格严密</p>
            <p>快速提高地推效率</p>
            <p>提高机构成单率</p>
          </div>
        </div>
      </div>
      <!-- 使用渠道 -->
      <div class="use-channels-block w-full">
        <div class="main-container">
          <div class="l-img-box" />
          <div class="right-usemethod-info">
            <h3 class="title">
              从地推宝开始 提高地推效率
            </h3>
            <div class="character-desc-container">
              <div class="character-desc-item">
                无需下载
              </div>
              <div class="character-desc-item">
                即开即用
              </div>
              <div class="character-desc-item">
                多元入口
              </div>
            </div>
            <div class="use-methods-container" data-aos="fade-up">
              <div class="use-methods-item">
                <img class="use-icon" src="https://www.sc-edu.com/images/dtb/use-methods/smjy1.png" alt="扫码即用">
                <div class="use-text">
                  扫码即用
                </div>
              </div>
              <div class="use-methods-item">
                <img class="use-icon" src="	https://www.sc-edu.com/images/dtb/use-methods/search3.png" alt="搜索地推宝微信小程序">
                <div class="use-text">
                  搜索地推宝微信小程序
                </div>
              </div>
              <div class="use-methods-item">
                <img class="use-icon" src="	https://www.sc-edu.com/images/dtb/use-methods/gzh2.png" alt="赛诚智慧公众号">
                <div class="use-text">
                  赛诚智慧公众号
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 产品特点介绍 -->
      <div class="characters-intro-block w-full">
        <div class="main-container">
          <h4>获取线索精准高效 线索保护安全无忧</h4>
          <p class="intro-text">
            自动获取用户手机号 短信实时验证 线索自动加密 信息查看严格限制
          </p>
        </div>
        <div class="line-progress-block" data-aos="fade-up" />
      </div>
      <!-- 同步校务通 -->
      <div class="sync-xwt-block w-full">
        <div class="main-container">
          <div class="left-img-box">
            <img src="https://www.sc-edu.com/images/dtb/sync_xwt/pc.png" alt="">
          </div>
          <div class="center-info-block" data-aos="fade-up">
            <h4>线索一键导出</h4>
            <h4>自动同步校务通</h4>
            <div class="experien-xwt-btn" onclick="window.open('http://crm.yunyuer.com/sc_web/creat_branch/?from=1','_blank')">
              试用校务通
            </div>
            <p class="intro">
              线索实时备份更加安心,自动同步至校务通系统直接跟进管理
            </p>
          </div>
          <div class="right-img-box">
            <img src="https://www.sc-edu.com/images/dtb/sync_xwt/phone.png" alt="">
          </div>
        </div>
      </div>
      <!-- 增值功能 -->
      <div class="add-value-block w-full">
        <div class="main-container">
          <div class="l-info-block" data-aos="fade-up">
            <span class="title">增值功能</span>
            <h4>地推宝营销版</h4>
            <h4>助力机构公众号增粉</h4>
            <p>扫描二维码同时推送机构公众号</p>
            <p>引导家长关注</p>
            <p>机构品牌高频曝光</p>
            <p>大幅提升潜客转化率</p>
          </div>
          <div class="r-img-block">
            <img src="https://www.sc-edu.com/images/dtb/add_value/dt_datas.png" alt="机构宝数据">
          </div>
        </div>
      </div>
      <!-- 底部二维码 -->
      <div class="scan-code-block w-full">
        <img class="dtb-scan-code" src="https://www.sc-edu.com/images/dtb/head/dtb_scancode.png" alt="地推宝二维码">
        <div class="text">
          微信扫一扫  立即试用
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/dtbStyle.scss";
</style>
