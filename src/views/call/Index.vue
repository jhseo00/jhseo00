<template>
  <div id="wrap">
    <header id="header">
      hader
    </header>
    <nav id="nav">
      nav
    </nav>
    <div id="content">
      <!-- 실제 사용 될 마크업 -->
      <div class="callCon">
        <!-- Left -->
        <div class="userBox box">
          <dl class="user">
            <dt class="img"><img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE" alt="상담사이미지"></dt>
            <dd><span>이지혜 상담사</span><strong>대기중</strong></dd>
            <dd>twccg@thewc.co.kr</dd>
          </dl>
          <div class="stateBtn">
          <ul>
            <li class="on"><a>대기</a></li>
            <li><a>식사</a></li>
            <li><a>휴식</a></li>
            <li><a>기타</a>
              <ol>
                <li><a>기타</a></li>
                <li><a>기타</a></li>
                <li><a>기타</a></li>
                <li><a>기타</a></li>
              </ol>
            </li>
          </ul>
          </div>
          <div class="txtBtn">
            <span>전화하기</span>
            <span>예약하기</span>
            <span>문자발송</span>
          </div>
          <div class="reset"></div>
        </div>
        <div class="memberBox box">
          <div class="uxTabBox">
            <ul>
              <li class="on"><a>대기상담사<strong>6</strong></a></li>
              <li><a>전체상담사<strong>11</strong></a></li>
            </ul>
          </div>
          <div class="scrollBox">
            <ul class="list">
              <li class="on"><a>쫑아 상담원</a></li>
              <li><a>쫑아 상담원</a></li>
              <li class="on"><a>쫑아 상담원</a></li>
              <li class="on"><a>쫑아 상담원</a></li>
              <li><a>쫑아 상담원</a></li>
              <li><a>쫑아 상담원</a></li>
            </ul>
          </div>
          <div class="reset"></div>
        </div>
        <div class="statusBox box">
          <div class="uxTabBox">
            <ul>
              <li><a>예약현황<strong>6</strong></a></li>
              <li><a>상담현황<strong>6</strong></a></li>
            </ul>
          </div>
          <div>
            <div class="statusNum">
              <span>직접<strong>20</strong></span>
              <span>대량<strong>11</strong></span>
              <span>콜백<strong>7</strong></span>
            </div>
          </div>
          <div class="listBox">
            <div class="item">
              <dl>
                <dt><span>직접예약</span><span>07-22 09:00예약</span></dt>
                <dd><span>이름</span><span>차은우</span></dd>
                <dd><span>전화</span><span>010-1234-5978</span></dd>
                <dd><span>메모</span><span>주문한지 10일 지났으니 배송지연으로...</span></dd>
              </dl>
            </div>
            <div class="item">
              <dl>
                <dt><span>직접예약</span><span>07-22 09:00예약</span></dt>
                <dd><span>이름</span><span>차은우</span></dd>
                <dd><span>전화</span><span>010-1234-5978</span></dd>
                <dd><span>메모</span><span>주문한지 10일 지났으니 배송지연으로...</span></dd>
              </dl>
            </div>
            <div class="item">
              <dl>
                <dt><span>직접예약</span><span>07-22 09:00예약</span></dt>
                <dd><span>이름</span><span>차은우</span></dd>
                <dd><span>전화</span><span>010-1234-5978</span></dd>
                <dd><span>메모</span><span>주문한지 10일 지났으니 배송지연으로...</span></dd>
              </dl>
            </div>
          </div>
          <div class="reset"></div>
        </div>
        <!-- //Left -->

        <!-- Center -->
        <center></center>
        <!-- //Center -->

        <!-- Right -->
        <right></right>
        <!-- //Right -->

      </div>
      <!-- // 실제 사용 될 마크업 -->
    </div>
  </div>
</template>

<script>
import Left from './components/Left'
import Right from './components/Right'
import Center from './components/Center'
export default {
  name: 'Call',
  components: {
    Left,
    Center,
    Right
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  @import './src/assets/scss/call/common.scss';
</style>
